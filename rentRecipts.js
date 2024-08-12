function calculateRent({
    tenantName,
    month,
    rentPerMonth,
    previousMeterReading,
    previousReadingDate,
    currentMeterReading,
    currentReadingDate,
    ratesPerUnit = 6,
    waterCharges = 0,
    previousBalance = 0
}) {
    let maidAmount = 100;

    // Calculate units consumed
    const unitsConsumed = currentMeterReading - previousMeterReading;

    // Calculate amount for consumed units
    const amountForConsumedUnits = unitsConsumed * ratesPerUnit;


    // Calculate total rent amount
    const totalRentAmount = rentPerMonth + maidAmount + waterCharges + previousBalance + amountForConsumedUnits;
    console.log('------------------------------------------------------------\n');
    console.log('Tenant Name ', tenantName);
    console.log('Month ', month);
    console.log('Rent ', rentPerMonth);
    console.log('Meter Reading start date ',  previousReadingDate );
    console.log('Meter Reading as on start date ',  previousMeterReading );
    console.log('Meter Reading end date ', currentReadingDate  );
    console.log('Meter Reading as on end date ',  currentMeterReading );
    console.log('Total Reading ',  unitsConsumed );
    console.log(`Electricity Amount ${unitsConsumed} * ${ratesPerUnit} = `, amountForConsumedUnits   );
    console.log('Water ',  waterCharges );
    console.log('Maid  ',  maidAmount );
    console.log('Total Amount  ',   totalRentAmount);

    return totalRentAmount;
}

const rajeshRent = calculateRent({
    tenantName : 'Rajesh Ji',
    month : 'MAY',
    rentPerMonth: 9000, // Rent per month of tenant
    previousMeterReading: 6863, // Previous meter reading
    previousReadingDate: '27-04-2024', // Previous reading date
    currentMeterReading: 7000, // Current meter reading
    currentReadingDate: '**-05-2024', // Current reading date
    ratesPerUnit: 5, // Rates per unit consumed
    waterCharges: 50, // Water charges
    previousBalance: 0 // Previous balance
});


const ajeetRent = calculateRent({
    tenantName : 'Ajeet Ji',
    month : 'MAY',
    rentPerMonth: 7500, // Rent per month of tenant
    previousMeterReading: 4423, // Previous meter reading
    previousReadingDate: '27-04-2024', // Previous reading date
    currentMeterReading: 600, // Current meter reading
    currentReadingDate: '**-05-2024', // Current reading date
    ratesPerUnit: 6, // Rates per unit consumed
    waterCharges: 50, // Water charges
    previousBalance: 0 // Previous balance
});

// Example usage:
const tarunRent = calculateRent({
    tenantName : 'Tarun Ji',
    month : 'MAY',
    rentPerMonth: 6000, // Rent per month of tenant
    previousMeterReading: 22422, // Previous meter reading
    previousReadingDate: '27-04-2024', // Previous reading date
    currentMeterReading: 600, // Current meter reading
    currentReadingDate: '**-05-2024', // Current reading date
    waterCharges: 50, // Water charges
    previousBalance: 0 // Previous balance
});



const mukeshRent = calculateRent({
    tenantName : 'Mukesh Ji',
    month : 'MAY',
    rentPerMonth: 7500, // Rent per month of tenant
    previousMeterReading: 19274, // Previous meter reading
    previousReadingDate: '27-04-2024', // Previous reading date
    currentMeterReading: 600, // Current meter reading
    currentReadingDate: '**-05-2024', // Current reading date
    ratesPerUnit: 6, // Rates per unit consumed
    waterCharges: 50, // Water charges
    previousBalance: 0 // Previous balance
});


const sandeepJi = calculateRent({
    tenantName : 'Sandeep Ji',
    month : 'MAY',
    rentPerMonth: 3000, // Rent per month of tenant
    previousMeterReading: 121, // Previous meter reading
    previousReadingDate: '27-04-2024', // Previous reading date
    currentMeterReading: 600, // Current meter reading
    currentReadingDate: '**-05-2024', // Current reading date
    ratesPerUnit: 6, // Rates per unit consumed
    waterCharges: 50, // Water charges
    previousBalance: 0 // Previous balance
});

const vacantJi = calculateRent({
    tenantName : 'vacant Ji',
    month : 'MAY',
    rentPerMonth: 6000, // Rent per month of tenant
    previousMeterReading: 500, // Previous meter reading
    previousReadingDate: '27-04-2024', // Previous reading date
    currentMeterReading: 600, // Current meter reading
    currentReadingDate: '**-05-2024', // Current reading date
    ratesPerUnit: 6, // Rates per unit consumed
    waterCharges: 50, // Water charges
    previousBalance: 0 // Previous balance
});