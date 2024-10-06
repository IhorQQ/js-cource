// Not sure if it's really needed in terms of improving the tests, just wanted to make the payload a bit more varied
const objPayloadGenerator = () => {
    const devices = ['iPhone', 'iMac', 'Samsung'];
    const colors = ['red', 'green', 'blue', 'black', 'white'];
    const capacities = ['64GB', '128GB', '256GB', '512GB'];

    return {
        name: `${devices[Math.floor(Math.random() * devices.length)]} Pro Max ${Math.floor(Math.random() * 100)}`,
        data: {
            color: colors[Math.floor(Math.random() * colors.length)],
            capacity: capacities[Math.floor(Math.random() * capacities.length)]
        }
    };
};

export default objPayloadGenerator;