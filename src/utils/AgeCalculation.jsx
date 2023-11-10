function ageCalculation(birthdate) {
  try {
    const birthDate = new Date(birthdate);

    // Calculate the age
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Consider leap years
    return ageInYears;
  } catch (error) {
    return "Error fetching location";
  }
}

export default ageCalculation;
