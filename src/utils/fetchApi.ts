export const fetchResult = async (api: string, payload: any) => {
  try {
    const fetchApi = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!fetchApi.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await fetchApi.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
