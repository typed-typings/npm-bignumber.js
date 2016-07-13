
import BigNumber = require('bignumber.js');

new BigNumber('5032485723458348569331745.33434346346912144534543');
new BigNumber('4.321e+4');
new BigNumber('-735.0918e-430');
new BigNumber(Infinity);
new BigNumber(NaN);
new BigNumber('.5');
new BigNumber('+2');
new BigNumber(-10110100.1, 2);
new BigNumber('123412421.234324', 5);
new BigNumber('ff.8', 16);
new BigNumber('0xff.8');

{
    const BN = BigNumber.another({ DECIMAL_PLACES: 9 })

    const x = new BigNumber(1)
    const y = new BN(1)

    x.div(3)                        // 0.33333
    y.div(3)                        // 0.333333333
}
{
    // BN = BigNumber.another({ DECIMAL_PLACES: 9 }) is equivalent to:
    const BN = BigNumber.another()
    BN.config({ DECIMAL_PLACES: 9 })
}
BigNumber.config({ DECIMAL_PLACES: 5 })

BigNumber.config({ DECIMAL_PLACES: 5 })
BigNumber.config(5)    // equivalent

BigNumber.config({ ROUNDING_MODE: 0 })
BigNumber.config(null, BigNumber.ROUND_UP)    // equivalent

BigNumber.config({ EXPONENTIAL_AT: 2 })
new BigNumber(12.3)         // '12.3'        e is only 1
new BigNumber(123)          // '1.23e+2'
new BigNumber(0.123)        // '0.123'       e is only -1
new BigNumber(0.0123)       // '1.23e-2'

BigNumber.config({ EXPONENTIAL_AT: [-7, 20] })
new BigNumber(123456789)    // '123456789'   e is only 8
new BigNumber(0.000000123)  // '1.23e-7'

// Almost never return exponential notation:
BigNumber.config({ EXPONENTIAL_AT: 1e+9 })

// Always return exponential notation:
BigNumber.config({ EXPONENTIAL_AT: 0 })

BigNumber.config({ RANGE: 500 })
BigNumber.config().RANGE     // [ -500, 500 ]
new BigNumber('9.999e499')   // '9.999e+499'
new BigNumber('1e500')       // 'Infinity'
new BigNumber('1e-499')      // '1e-499'
new BigNumber('1e-500')      // '0'

BigNumber.config({ RANGE: [-3, 4] })
new BigNumber(99999)         // '99999'      e is only 4
new BigNumber(100000)        // 'Infinity'   e is 5
new BigNumber(0.001)         // '0.01'       e is only -3
new BigNumber(0.0001)        // '0'          e is -4

BigNumber.config({ ERRORS: false })

BigNumber.config({ CRYPTO: true })
BigNumber.config().CRYPTO       // true
BigNumber.random()              // 0.54340758610486147524

BigNumber.config({ MODULO_MODE: BigNumber.EUCLID })
BigNumber.config({ MODULO_MODE: 9 })          // equivalent

BigNumber.config({ POW_PRECISION: 100 })

BigNumber.config({
    FORMAT: {
        // the decimal separator
        decimalSeparator: '.',
        // the grouping separator of the integer part
        groupSeparator: ',',
        // the primary grouping size of the integer part
        groupSize: 3,
        // the secondary grouping size of the integer part
        secondaryGroupSize: 0,
        // the grouping separator of the fraction part
        fractionGroupSeparator: ' ',
        // the grouping size of the fraction part
        fractionGroupSize: 0
    }
});

BigNumber.config({
    DECIMAL_PLACES: 40,
    ROUNDING_MODE: BigNumber.ROUND_HALF_CEIL,
    EXPONENTIAL_AT: [-10, 20],
    RANGE: [-500, 500],
    ERRORS: true,
    CRYPTO: true,
    MODULO_MODE: BigNumber.ROUND_FLOOR,
    POW_PRECISION: 80,
    FORMAT: {
        groupSize: 3,
        groupSeparator: ' ',
        decimalSeparator: ','
    }
});

// Alternatively but equivalently (excluding FORMAT):
BigNumber.config(40, 7, [-10, 20], 500, 1, 1, 3, 80)

const obj = BigNumber.config();
obj.ERRORS       // true
obj.RANGE        // [-500, 500]

{
    const x = new BigNumber('3257869345.0378653')
    BigNumber.max(4e9, x, '123456789.9')          // '4000000000'

    const arr = [12, '13', new BigNumber(14)]
    BigNumber.max(arr)                            // '14'
}

{
    const x = new BigNumber('3257869345.0378653')
    BigNumber.min(4e9, x, '123456789.9')          // '123456789.9'

    const arr = [2, new BigNumber(-14), '-15.9999', -12]
    BigNumber.min(arr)                            // '-15.9999'
}

BigNumber.config({ DECIMAL_PLACES: 10 })
BigNumber.random()              // '0.4117936847'
BigNumber.random(20)            // '0.78193327636914089009'

BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_CEIL })
BigNumber.config({ ROUNDING_MODE: 2 })     // equivalent

{
    const x = new BigNumber(-0.8)
    const y = x.absoluteValue()           // '0.8'
    const z = y.abs()                     // '0.8'
}

{
    const x = new BigNumber(1.3)
    x.ceil()                        // '2'
    const y = new BigNumber(-1.8)
    y.ceil()                        // '-1'
}

{
    const x = new BigNumber(Infinity)
    const y = new BigNumber(5)
    x.comparedTo(y)                 // 1
    x.comparedTo(x.minus(1))        // 0
    y.cmp(NaN)                      // null
    y.cmp('110', 2)                 // -1
}

{
    const x = new BigNumber(123.45)
    x.decimalPlaces()               // 2
    const y = new BigNumber('9.9e-101')
    y.dp()                          // 102
}

{
    const x = new BigNumber(355)
    const y = new BigNumber(113)
    x.dividedBy(y)                  // '3.14159292035398230088'
    x.div(5)                        // '71'
    x.div(47, 16)                   // '5'
}

{
    const x = new BigNumber(5)
    const y = new BigNumber(3)
    x.dividedToIntegerBy(y)         // '1'
    x.divToInt(0.7)                 // '7'
    x.divToInt('0.f', 16)           // '5'
}

{
    0 === 1e-324                    // true
    const x = new BigNumber(0)
    x.equals('1e-324')              // false
    new BigNumber(-0).eq(x)             // true  ( -0 === 0 )
    new BigNumber(255).eq('ff', 16)     // true

    const y = new BigNumber(NaN)
    y.equals(NaN)                   // false
}

{
    const x = new BigNumber(1.8)
    x.floor()                       // '1'
    const y = new BigNumber(-1.3)
    y.floor()                       // '-2'
}

{
    0.1 > (0.3 - 0.2)                           // true
    const x = new BigNumber(0.1)
    x.greaterThan(new BigNumber(0.3).minus(0.2))    // false
    new BigNumber(0).gt(x)                          // false
    new BigNumber(11, 3).gt(11.1, 2);                // true
}

{
    (0.3 - 0.2) >= 0.1                   // false
    const x = new BigNumber(0.3).minus(0.2)
    x.greaterThanOrEqualTo(0.1)          // true
    new BigNumber(1).gte(x)                  // true
    new BigNumber(10, 18).gte('i', 36)       // true
}

{
    const x = new BigNumber(1)
    x.isFinite()                    // true
    const y = new BigNumber(Infinity)
    y.isFinite()                    // false
}

{
    const x = new BigNumber(1)
    x.isInteger()                   // true
    const y = new BigNumber(123.456)
    y.isInt()                       // false
}

{
    const x = new BigNumber(NaN)
    x.isNaN()                       // true
    const y = new BigNumber('Infinity')
    y.isNaN()                       // false
}

{
    const x = new BigNumber(-0)
    x.isNegative()                  // true
    const y = new BigNumber(2)
    y.isNeg()                       // false
}

{
    const x = new BigNumber(-0)
    x.isZero() && x.isNeg()         // true
    const y = new BigNumber(Infinity)
    y.isZero();                      // false
}

{
    (0.3 - 0.2) < 0.1                     // true
    const x = new BigNumber(0.3).minus(0.2)
    x.lessThan(0.1)                       // false
    new BigNumber(0).lt(x)                    // true
    new BigNumber(11.1, 2).lt(11, 3)          // true
}

{
    0.1 <= (0.3 - 0.2)                                // false
    const x = new BigNumber(0.1)
    x.lessThanOrEqualTo(new BigNumber(0.3).minus(0.2))    // true
    new BigNumber(-1).lte(x)                              // true
    new BigNumber(10, 18).lte('i', 36)                    // true
}

{
    0.3 - 0.1                       // 0.19999999999999998
    const x = new BigNumber(0.3)
    x.minus(0.1)                    // '0.2'
    x.minus(0.6, 20)                // '0'
}

{
    1 % 0.9                         // 0.09999999999999998
    const x = new BigNumber(1)
    x.modulo(0.9)                   // '0.1'
    const y = new BigNumber(33)
    y.mod('a', 33)                  // '3'
}

{
    const x = new BigNumber(1.8)
    x.negated()                     // '-1.8'
    const y = new BigNumber(-1.3)
    y.neg()                         // '1.3'
}

{
    0.1 + 0.2                       // 0.30000000000000004
    const x = new BigNumber(0.1)
    const y = x.plus(0.2)                 // '0.3'
    new BigNumber(0.7).plus(x).plus(y)  // '1'
    x.plus('0.1', 8)                // '0.225'
}

{
    const x = new BigNumber(1.234)
    x.precision()                   // 4
    const y = new BigNumber(987000)
    y.sd()                          // 3
    y.sd(true)                      // 6
}

{
    const x = 1234.56
    Math.round(x)                             // 1235

    const y = new BigNumber(x)
    y.round()                                 // '1235'
    y.round(1)                                // '1234.6'
    y.round(2)                                // '1234.56'
    y.round(10)                               // '1234.56'
    y.round(0, 1)                             // '1234'
    y.round(0, 6)                             // '1235'
    y.round(1, 1)                             // '1234.5'
    y.round(1, BigNumber.ROUND_HALF_EVEN)     // '1234.6'
    y                                         // '1234.56'
}

{
    const x = new BigNumber(1.23)
    x.shift(3)                      // '1230'
    x.shift(-3)                     // '0.00123'
}

{
    const x = new BigNumber(16)
    x.squareRoot()                  // '4'
    const y = new BigNumber(3)
    y.sqrt()                        // '1.73205080756887729353'
}

{
    0.6 * 3                           // 1.7999999999999998
    const x = new BigNumber(0.6)
    const y = x.times(3)              // '1.8'
    new BigNumber('7e+500').times(y)  // '1.26e+501'
    x.times('-a', 16)                 // '-6'
}

{
    const x = new BigNumber(9876.54321)

    x.toDigits()                          // '9876.5'
    x.toDigits(6)                         // '9876.54'
    x.toDigits(6, BigNumber.ROUND_UP)     // '9876.55'
    x.toDigits(2)                         // '9900'
    x.toDigits(2, 1)                      // '9800'
    x                                     // '9876.54321'
}

{
    const x = 45.6
    const y = new BigNumber(x)
    x.toExponential()               // '4.56e+1'
    y.toExponential()               // '4.56e+1'
    x.toExponential(0)              // '5e+1'
    y.toExponential(0)              // '5e+1'
    x.toExponential(1)              // '4.6e+1'
    y.toExponential(1)              // '4.6e+1'
    y.toExponential(1, 1)           // '4.5e+1'  (ROUND_DOWN)
    x.toExponential(3)              // '4.560e+1'
    y.toExponential(3)              // '4.560e+1'
}

{
    const x = 3.456
    const y = new BigNumber(x)
    x.toFixed()                     // '3'
    y.toFixed()                     // '3.456'
    y.toFixed(0)                    // '3'
    x.toFixed(2)                    // '3.46'
    y.toFixed(2)                    // '3.46'
    y.toFixed(2, 1)                 // '3.45'  (ROUND_DOWN)
    x.toFixed(5)                    // '3.45600'
    y.toFixed(5)                    // '3.45600'
}

{
    const format = {
        decimalSeparator: '.',
        groupSeparator: ',',
        groupSize: 3,
        secondaryGroupSize: 0,
        fractionGroupSeparator: ' ',
        fractionGroupSize: 0
    }
    BigNumber.config({ FORMAT: format })
}

{
    const x = new BigNumber('123456789.123456789')
    x.toFormat()                    // '123,456,789.123456789'
    x.toFormat(1)                   // '123,456,789.1'

    // If a reference to the object assigned to FORMAT has been retained,
    // the format properties can be changed directly
    const format = BigNumber.config().FORMAT;
    format.groupSeparator = ' '
    format.fractionGroupSize = 5
    x.toFormat()                    // '123 456 789.12345 6789'

    BigNumber.config({
        FORMAT: {
            decimalSeparator: ',',
            groupSeparator: '.',
            groupSize: 3,
            secondaryGroupSize: 2
        }
    })

    x.toFormat(6)                   // '12.34.56.789,123'
}

{
    const x = new BigNumber(1.75)
    x.toFraction()                  // '7, 4'
}

{
    const pi = new BigNumber('3.14159265358')
    pi.toFraction()                 // '157079632679,50000000000'
    pi.toFraction(100000)           // '312689, 99532'
    pi.toFraction(10000)            // '355, 113'
    pi.toFraction(100)              // '311, 99'
    pi.toFraction(10)               // '22, 7'
    pi.toFraction(1)                // '3, 1'
}

{
    const x = new BigNumber('177.7e+457')
    const y = new BigNumber(235.4325)
    const z = new BigNumber('0.0098074')

    // Serialize an array of three BigNumbers
    const str = JSON.stringify([x, y, z])
    // "["1.777e+459","235.4325","0.0098074"]"

    // Return an array of three BigNumbers
    JSON.parse(str, function (key, val) {
        return key === '' ? val : new BigNumber(val)
    })
}

{
    const x = new BigNumber(456.789)
    x.toNumber()                    // 456.789

    const y = new BigNumber('45987349857634085409857349856430985')
    y.toNumber()                    // 4.598734985763409e+34

    const z = new BigNumber(-0)
    1 / +z                          // Infinity
    1 / z.toNumber()                // -Infinity
}

{
    Math.pow(0.7, 2)                // 0.48999999999999994
    const x = new BigNumber(0.7)
    x.toPower(2)                    // '0.49'
    new BigNumber(3).pow(-2)        // '0.11111111111111111111'
}

{
    const x = 45.6
    const y = new BigNumber(x)
    x.toPrecision()                 // '45.6'
    y.toPrecision()                 // '45.6'
    x.toPrecision(1)                // '5e+1'
    y.toPrecision(1)                // '5e+1'
    y.toPrecision(2, 0)             // '4.6e+1'  (ROUND_UP)
    y.toPrecision(2, 1)             // '4.5e+1'  (ROUND_DOWN)
    x.toPrecision(5)                // '45.600'
    y.toPrecision(5)                // '45.600'
}

{
    const x = new BigNumber(750000)
    x.toString()                    // '750000'
    BigNumber.config({ EXPONENTIAL_AT: 5 })
    x.toString()                    // '7.5e+5'
}

{
    const y = new BigNumber(362.875)
    y.toString(2)                   // '101101010.111'
    y.toString(9)                   // '442.77777777777777777778'
    y.toString(32)                  // 'ba.s'
}

{
    BigNumber.config({ DECIMAL_PLACES: 4 });
    const z = new BigNumber('1.23456789')
    z.toString()                    // '1.23456789'
    z.toString(10)                  // '1.2346'
}

{
    const x = new BigNumber(123.456)
    x.truncated()                   // '123'
    const y = new BigNumber(-12.3)
    y.trunc()                       // '-12'
}

{
    const x = new BigNumber('-0')
    x.toString()                    // '0'
    x.valueOf()                     // '-0'
    const y = new BigNumber('1.777e+457')
    y.valueOf()                     // '1.777e+457'
}

{
    const x = new BigNumber(0.123)              // '0.123'
    x.toExponential()                     // '1.23e-1'
    x.c                                   // '1,2,3'
    x.e                                   // -1
    x.s                                   // 1

    const y = new Number(-123.4567000e+2)       // '-12345.67'
    y.toExponential()                     // '-1.234567e+4'
    const z = new BigNumber('-123.4567000e+2')  // '-12345.67'
    z.toExponential()                     // '-1.234567e+4'
    z.c                                   // '1,2,3,4,5,6,7'
    z.e                                   // 4
    z.s                                   // -1
}
