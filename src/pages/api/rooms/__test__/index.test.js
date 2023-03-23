import path from "path";
import handler from "../index";
import { promises as fs } from "fs";

describe("handler", () => {
  it("should return the contents of the data file in JSON format", async () => {
    const jsonDirectory = path.join(process.cwd(), "json");
    const fileRoomsData = await fs.readFile(
      `${jsonDirectory}/roomsdata.json`,
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
    expect(mockRes.json).toHaveBeenCalledWith(JSON.parse(fileRoomsData));
  });
});
