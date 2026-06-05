const fileWeightFormatter = (weight: number): string => {
  if (weight < 1024) {
    return `${weight} B`;
  }

  if (weight >= 1024 && weight < 1024 * 1024) {
    return `${weightFloorer(weight, 1024 ** 1)} kB`;
  }

  if (weight >= 1024 * 1024 && weight < 1024 * 1024 * 1024) {
    return `${weightFloorer(weight, 1024 ** 2)} MB`;
  }

  if (weight >= 1024 * 1024 * 1024 && weight < 1024 * 1024 * 1024 * 1024) {
    return `${weightFloorer(weight, 1024 ** 3)} GB`;
  }

  if (weight >= 1024 * 1024 * 1024 * 1024) {
    return `${weightFloorer(weight, 1024 ** 4)} TB`;
  }

  return `Calc err`;
};

const weightFloorer = (weight: number, magnitude: number): number => {
  return Math.floor((weight / magnitude) * 10) / 10;
};

export default fileWeightFormatter;
