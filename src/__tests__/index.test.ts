import { spellcheckDemoAsync } from "../index";

test("spellcheckDemoAsync", async () => {
  await expect(spellcheckDemoAsync("paRNAssus")).resolves.toBe("Parnassus");
  await expect(spellcheckDemoAsync("pariss")).resolves.toBe("Paris");
});
