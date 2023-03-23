import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useValidForm from "../useValidForm";

describe("useValidForm", () => {
  it("should validate name input correctly", () => {
    const { result } = renderHook(() => useValidForm());
    const nameInput = { target: { validity: { valid: true } } };

    act(() => {
      result.current.handleInputNameChange(nameInput);
    });

    expect(result.current.nameIsValid).toBe(true);
  });

  it("should validate subject input correctly", () => {
    const { result } = renderHook(() => useValidForm());
    const subjectInput = { target: { validity: { valid: true } } };

    act(() => {
      result.current.handleInputSubjectChange(subjectInput);
    });

    expect(result.current.subjectIsValid).toBe(true);
  });

  it("should validate email input correctly", () => {
    const { result } = renderHook(() => useValidForm());
    const emailInput = { target: { validity: { valid: true } } };

    act(() => {
      result.current.handleInputEmailChange(emailInput);
    });

    expect(result.current.emailIsValid).toBe(true);
  });

  it("should validate message input correctly", () => {
    const { result } = renderHook(() => useValidForm());
    const messageInput = { target: { value: "This is a valid message." } };

    act(() => {
      result.current.handleInputMessageChange(messageInput);
    });

    expect(result.current.messageIsValid).toBe(true);
  });
});
