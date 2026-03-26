import { render, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { MapView } from "./Map";

describe("MapView", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    delete (window as Window & { google?: unknown }).google;
    document.head.innerHTML = "";
  });

  it("loads the maps script, initializes the map, and notifies when ready", async () => {
    const center = { lat: 12.34, lng: 56.78 };
    const mapInstance = { id: "map-instance" };
    const mapConstructor = vi.fn(function (
      _container: HTMLDivElement,
      _options: object
    ) {
      return mapInstance;
    });
    const onMapReady = vi.fn();
    const originalAppendChild = document.head.appendChild.bind(document.head);
    let injectedScript: HTMLScriptElement | null = null;

    window.google = {
      maps: {
        Map: mapConstructor as unknown as typeof google.maps.Map,
      },
    } as typeof google;

    vi.spyOn(document.head, "appendChild").mockImplementation((node: Node) => {
      const appendedNode = originalAppendChild(node);

      if (node instanceof HTMLScriptElement) {
        injectedScript = node;
        setTimeout(() => {
          node.onload?.(new Event("load"));
        }, 0);
      }

      return appendedNode;
    });

    const { container } = render(
      <MapView
        className="custom-map"
        initialCenter={center}
        initialZoom={8}
        onMapReady={onMapReady}
      />
    );

    const mapContainer = container.firstElementChild as HTMLDivElement;

    expect(mapContainer).toHaveClass("custom-map");

    await waitFor(() => {
      expect(mapConstructor).toHaveBeenCalledTimes(1);
    });

    expect(injectedScript).not.toBeNull();
    expect(injectedScript?.src).toContain("/v1/maps/proxy/maps/api/js");
    expect(injectedScript?.src).toContain(
      "libraries=marker,places,geocoding,geometry"
    );
    expect(injectedScript?.crossOrigin).toBe("anonymous");
    expect(injectedScript?.async).toBe(true);
    expect(mapConstructor).toHaveBeenCalledWith(
      mapContainer,
      expect.objectContaining({
        zoom: 8,
        center,
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true,
        streetViewControl: true,
        mapId: "DEMO_MAP_ID",
      })
    );
    expect(onMapReady).toHaveBeenCalledWith(mapInstance);
  });

  it("logs a loading error when the maps script fails", async () => {
    const originalAppendChild = document.head.appendChild.bind(document.head);
    const mapConstructor = vi.fn();
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    window.google = {
      maps: {
        Map: mapConstructor as unknown as typeof google.maps.Map,
      },
    } as typeof google;

    vi.spyOn(document.head, "appendChild").mockImplementation((node: Node) => {
      const appendedNode = originalAppendChild(node);

      if (node instanceof HTMLScriptElement) {
        node.onerror?.(new Event("error"));
      }

      return appendedNode;
    });

    render(<MapView />);

    await waitFor(() => {
      expect(consoleError).toHaveBeenCalledWith(
        "Failed to load Google Maps script"
      );
    });

    expect(mapConstructor).not.toHaveBeenCalled();
  });
});
