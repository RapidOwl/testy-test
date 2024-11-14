import deviceName from "./BuildDeviceName";

describe("DeviceName", () => {
  it("When the name is truthy it returns the name", () => {
    const name = "Device 1";

    expect(deviceName(name)).toBe("Device 1");
  });

  const falseyNames = ["", null, undefined];

  test.each(falseyNames)(
    "When the name is %p it returns 'Unnamed device'",
    (name) => {
      expect(deviceName(name)).toBe("Unnamed device");
    }
  );
});
