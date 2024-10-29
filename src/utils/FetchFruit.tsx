export type Fruit = {
    "genus": string,
    "name": string,
    "id": number,
    "family": string,
    "order": string,
    "nutritions": {
        "carbohydrates": number,
        "protein": number,
        "fat": number,
        "calories": number,
        "sugar": number
    },
    [key: string]: string | number | object
  };

export async function useFetchFruitData(): Promise<Fruit[]> {
  const baseURL: string = 'https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws/';

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Method", "GET");

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
  };

    try {
      const response = await fetch(baseURL, requestOptions);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json as Fruit[];
    } catch (error) {
    }
    return [];
}