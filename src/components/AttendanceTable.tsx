import { familyData } from "../data/data";
import { calculatePercentage } from "../util/calculations";

export default function AttendanceTable({ data }: { data: familyData }) {
  if (!data) return null;

  // Calculate church totals by summing up values from all families
  const churchTotals: familyData[string] = {
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
  if (data["ebenezer"]) {
    Object.keys(churchTotals).forEach((key) => {
      churchTotals[key as keyof typeof churchTotals] +=
        data["ebenezer"][key as keyof typeof churchTotals];
    });
  }
  if (data["salvSibs"]) {
    Object.keys(churchTotals).forEach((key) => {
      churchTotals[key as keyof typeof churchTotals] +=
        data["salvSibs"][key as keyof typeof churchTotals];
    });
  }
  if (data["jehovahNissi"]) {
    Object.keys(churchTotals).forEach((key) => {
      churchTotals[key as keyof typeof churchTotals] +=
        data["jehovahNissi"][key as keyof typeof churchTotals];
    });
  }

  // Type-safe access to family data
  const families: Record<string, familyData[string]> = {
    ebenezer: data["ebenezer"] || {
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
    },
    salvSibs: data["salvSibs"] || {
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
    },
    jehovahNissi: data["jehovahNissi"] || {
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
    },
    church: churchTotals || {
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
    },
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black bg-black text-white p-2">
              FEATURES
            </th>
            <th className="border border-black bg-black text-white p-2">
              EBENEZER
            </th>
            <th className="border border-black bg-black text-white p-2">
              SALV SIBS
            </th>
            <th className="border border-black bg-black text-white p-2">
              JEHOVAH-NISSI
            </th>
            <th className="border border-black bg-black text-white p-2">
              CHURCH
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(families.ebenezer).map(([key]) => (
            <tr key={key}>
              <td className="border border-black p-2 uppercase">{key}</td>
              <td className="border border-black p-2 text-center">
                {families.ebenezer[key as keyof typeof families.ebenezer]}
              </td>
              <td className="border border-black p-2 text-center">
                {families.salvSibs[key as keyof typeof families.salvSibs]}
              </td>
              <td className="border border-black p-2 text-center">
                {
                  families.jehovahNissi[
                    key as keyof typeof families.jehovahNissi
                  ]
                }
              </td>
              <td className="border border-black p-2 text-center">
                {families.church[key as keyof typeof families.church]}
              </td>
            </tr>
          ))}
          <tr>
            <td className="border border-black p-2 uppercase">
              TOTAL PERCENT (%)
            </td>
            <td className="border border-black p-2 text-center">
              {calculatePercentage(families.ebenezer).toFixed(2)}%
            </td>
            <td className="border border-black p-2 text-center">
              {calculatePercentage(families.salvSibs).toFixed(2)}%
            </td>
            <td className="border border-black p-2 text-center">
              {calculatePercentage(families.jehovahNissi).toFixed(2)}%
            </td>
            <td className="border border-black p-2 text-center">
              {calculatePercentage(families.church).toFixed(2)}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
