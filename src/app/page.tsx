'use client';

import { useState } from 'react';

interface FamilyData {
  name: string;
  abaje: number;
  abizeKarindwi: number;
  abatangiyeIsabato: number;
  abasuye: number;
  abafashije: number;
  abasuwe: number;
  abafashijwe: number;
  abarwayi: number;
  abasibye: number;
  abafiteImpamvu: number;
  abashyitsi: number;
  abanditswe: number;
}

const families = ["Ebenezer", "Salvation Siblings", "Jehova Nissi"];
const basicFields = ["abaje", "abizeKarindwi", "abatangiyeIsabato", "abasuye", "abafashije"];
const additionalFields = ["abasuwe", "abafashijwe", "abarwayi", "abasibye", "abafiteImpamvu", "abashyitsi", "abanditswe"];

export default function Home() {
  const [currentFamily, setCurrentFamily] = useState(0); // index of current family
  const [step, setStep] = useState(1); // 1: basic, 2: additional, 3: done
  const [familyData, setFamilyData] = useState<FamilyData[]>(
    families.map(name => ({
      name,
      abaje: 0,
      abizeKarindwi: 0,
      abatangiyeIsabato: 0,
      abasuye: 0,
      abafashije: 0,
      abasuwe: 0,
      abafashijwe: 0,
      abarwayi: 0,
      abasibye: 0,
      abafiteImpamvu: 0,
      abashyitsi: 0,
      abanditswe: 0,
    }))
  );

  const handleChange = (field: string, value: string) => {
    const newData = [...familyData];
    newData[currentFamily] = {
      ...newData[currentFamily],
      [field]: parseInt(value) || 0,
    };
    setFamilyData(newData);
  };

  const goNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (currentFamily < families.length - 1) {
        setCurrentFamily(currentFamily + 1);
        setStep(1);
      } else {
        setStep(3); // done
      }
    }
  };

  const goPrev = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 1 && currentFamily > 0) {
      setCurrentFamily(currentFamily - 1);
      setStep(2);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">SSQ Report Generator</h1>
        {step < 3 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {families[currentFamily]} - Step {step} of 2
            </h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                goNext();
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {(step === 1 ? basicFields : additionalFields).map(field => (
                  <div key={field} className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type="number"
                      value={familyData[currentFamily][field as keyof FamilyData]}
                      onChange={e => handleChange(field, e.target.value)}
                      className="border rounded-md px-3 py-2"
                      min="0"
                      required
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  className="flex-1 bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition-colors disabled:opacity-50"
                  disabled={step === 1 && currentFamily === 0}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  {step === 2 && currentFamily === families.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 3 && (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold mb-6">All done!</h2>
            <p className="mb-4">You have filled out the form for all families.</p>
            {/* Results format will be added later as per your instructions */}
          </div>
        )}
      </div>
    </div>
  );
}
