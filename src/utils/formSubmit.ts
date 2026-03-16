export async function submitToGoogleSheets(data: any) {
  const url = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

  if (!url) {
    console.error("Apps Script URL is not defined in environment variables.");
    return { success: false, error: "Configuration error" };
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors", // Apps Script requires no-cors for simple POST from browser
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Since mode is 'no-cors', we won't get a proper response body, 
    // but we can assume success if no error was thrown.
    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "Network error" };
  }
}
