import { render, screen } from "@testing-library/react";
import OverviewSignalQuality from "./OverviewSignalQuality";

describe("OverviewSignalQuality", () => {
  test("When lowSignal is false the signal quality is rendered as good", () => {
    render(<OverviewSignalQuality lowSignal={false} />);

    const linkElement = screen.getByText("Good");

    expect(linkElement).toBeInTheDocument();
  });

  test("When lowSignal is true the signal quality is rendered as low", () => {
    render(<OverviewSignalQuality lowSignal={true} />);

    const linkElement = screen.getByText("Low");

    expect(linkElement).toBeInTheDocument();
  });
});
