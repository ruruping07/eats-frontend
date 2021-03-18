import { render } from "@testing-library/react";
import React from "react";
import { Button } from "../button";

describe("<Button />", () => {
  it("should render OK with props", () => {
    const { getByText } = render(
      <Button canClick={true} loading={false} actionText={"test"} />
    );
    getByText("test");
  });
  it("should display loading", () => {
    const { getByText, container, debug, rerender } = render(
      <Button canClick={false} loading={true} actionText={"test"} />      
    );
    debug();
    getByText("Loading...");
    expect(container.firstChild).toHaveClass("pointer-events-none");
  });
});