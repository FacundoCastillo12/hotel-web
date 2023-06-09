import path from "path";
import { promises as fs } from "fs";
import handler from "@/pages/api/services";

describe("handler", () => {
  it("should return the contents of the data file in JSON format", async () => {
    const jsonDirectory = path.join(process.cwd(), "json");
    const fileServicesData = await fs.readFile(
      `${jsonDirectory}/servicesdata.json`,
      "utf8"
    );
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.mock("fs", () => ({
      promises: {
        readFile: jest.fn().mockResolvedValue(JSON.stringify(mockData)),
      },
    }));

    await handler(null, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(JSON.parse(fileServicesData));
  });
});
