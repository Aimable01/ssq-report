import { familyData } from "../data/data";

export const calculateChurchTotals = (data: familyData[]): familyData[] => {
  return data.map((weekData) => {
    const churchTotals = {
      abanditswe: 0,
      abaje: 0,
      abizeKarindwi: 0,
      abatangiyeIsabato: 0,
      abasuye: 0,
      abasuwe: 0,
      abafashijwe: 0,
      abafashije: 0,
      abarwayi: 0,
      abasibye: 0,
      abafiteImpamvu: 0,
      abashyitsi: 0,
    };

    // Calculate totals from all families
    Object.values(weekData).forEach((familyStats) => {
      Object.keys(churchTotals).forEach((key) => {
        churchTotals[key as keyof typeof churchTotals] +=
          familyStats[key as keyof typeof familyStats];
      });
    });

    // Return the original data with church totals added
    return {
      ...weekData,
      church: churchTotals,
    };
  });
};
