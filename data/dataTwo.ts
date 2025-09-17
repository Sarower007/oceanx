// app/data/cardData.ts
export interface CardItem {
  id: string;
  title: string;
  description: string;
}

export const cardData: CardItem[] = [
  {
    id: "01",
    title: "OceanSwimming Open Water Swimming",
    description: `Route:
Butterworth → Esplanade
10K, 7.5K, 5K, 3K, 2K
1.5K Relay, 1K Multi-Lap
500M Multi-Lap, 400M, 300M, 200M, 100M`,
  },
  {
    id: "02",
    title: "OceanParaSwimming Open Water Para Swimming",
    description: `Route: <br />
Butterworth → Esplanade
1K Multi-Lap, 500M Multi-Lap
400M, 300M, 200M, 100M`,
  },
  {
    id: "03",
    title: "OceanSwimming Open Water FinSwimming",
    description: `Route:
Butterworth → Esplanade
5K, 3K, 1K Multi-Lap, 500M Multi-Lap
400M, 300M, 200M, 100M`,
  },
  {
    id: "04",
    title: "Canoeing Singles / Tandem",
    description: `Route:
Esplanade → Butterworth → Esplanade
(Across Channel)`,
  },
  {
    id: "05",
    title: "Supa Stand-Up Paddleboarding",
    description: `Route:
Butterworth → Esplanade`,
  },
  {
    id: "06",
    title: "Dragon Boat Races",
    description: `Test Of Endurance
And Determination Challenge`,
  },
  {
    id: "07",
    title: "Trishaw Race",
    description: `Route:
Butterworth → Esplanade
1.5K Relay, 1K Multi-Lap
500M Multi-Lap, 400M, 300M, 200M, 100M`,
  },
  {
    id: "08",
    title: "Rickshaw Race",
    description: `Route:
Butterworth → Esplanade
1.5K Relay, 1K Multi-Lap
400M, 300M, 200M, 100M`,
  },
  {
    id: "09",
    title: "Inclusive Fun Walk",
    description: `A community friendly family
event for ages 7 and under`,
  },
];