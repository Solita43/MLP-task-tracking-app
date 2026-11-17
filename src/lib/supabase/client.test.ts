import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "./client";

vi.mock("@supabase/ssr", () => ({
  createBrowserClient: vi.fn(),
}));

const createBrowserClientMock = vi.mocked(createBrowserClient);
const supabaseUrl = "https://example.supabase.co";
const supabaseKey = "test-publishable-key";
const client = {} as ReturnType<typeof createBrowserClient>;

describe("createClient", () => {
  beforeEach(() => {
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", supabaseUrl);
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY", supabaseKey);
    createBrowserClientMock.mockReturnValue(client);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.clearAllMocks();
  });

  it("returns a Supabase browser client", () => {
    expect(createClient()).toBe(client);
    expect(createBrowserClientMock).toHaveBeenCalledWith(supabaseUrl, supabaseKey);
  });

  it.each([
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
  ])("throws a clear error when %s is missing", (envName) => {
    vi.stubEnv(envName, undefined);

    expect(() => createClient()).toThrow(
      `Missing required environment variable: ${envName}`,
    );
    expect(createBrowserClientMock).not.toHaveBeenCalled();
  });
});
