import { renderHook, waitFor } from "@testing-library/react";
import useFetchGetData from "../useSimpleFetchHook";

describe("useFetchGetData", () => {
  const mockResource = jest.fn();
  const mockSuccessResponse = { data: "mock data" };
  const mockErrorResponse = { message: "mock error" };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should update state on successful request", async () => {
    mockResource.mockResolvedValue(mockSuccessResponse);
    const { result } = renderHook(() =>
      useFetchGetData(mockResource, "mock param")
    );

    expect(result.current).toEqual({ loading: true, data: null, error: null });

    await waitFor(() => {
      expect(result.current).toEqual({
        loading: false,
        data: mockSuccessResponse,
        error: null,
      });
    });
  });

  it("should update state on failed request", async () => {
    mockResource.mockRejectedValue(mockErrorResponse);
    const { result, rerender } = renderHook(() =>
      useFetchGetData(mockResource, "mock param")
    );

    expect(result.current).toEqual({ loading: true, data: null, error: null });
    rerender();
    await waitFor(() =>
      expect(result.current).toEqual({
        loading: false,
        data: null,
        error: mockErrorResponse,
      })
    );
  });
});
