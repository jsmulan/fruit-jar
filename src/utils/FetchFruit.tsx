const baseURL: string = 'https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws/';

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
    const url = `${baseURL}api/fruit/all`;
    try {
      const response = await fetch(url,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json as Fruit[];
    } catch (error) {
    }
    return [];
}