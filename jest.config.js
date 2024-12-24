export const testEnvironment = "node";
export const moduleFileExtensions = ["ts", "js", "json", "node"];
export const transform = {
    "^.+\\.ts$": "ts-jest",
};
export const testRegex = "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$";
export const collectCoverage = true;
export const coverageDirectory = "coverage";
