# js-statistics
Math statistics

## Installation

```bash
npm install js-statistics
```

## Note

This package is not yet complete, and wasn't tested.
It is still under development.
Please don't use it in production.

## Usage

```javascript
const statistics = require('js-statistics');

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// get mean value

const mean = statistics.mean(data); // 

// get median value

const median = statistics.median(data);

// get mode value

const mode = statistics.mode(data);

// get variance value

const variance = statistics.variance(data);

// get standard deviation value

const standardDeviation = statistics.standardDeviation(data);

// get skewness value

const skewness = statistics.skewness(data);

// get kurtosis value

const kurtosis = statistics.kurtosis(data);

// get covariance value

const covariance = statistics.covariance(data, data);

// get correlation coefficient value

const correlationCoefficient = statistics.correlationCoefficient(data, data);

// get z-score value

const zScore = statistics.zScore(data, data);

// get percentile value

const percentile = statistics.percentile(data, 0.5);

// get percentile rank value

const percentileRank = statistics.percentileRank(data, 5);

// get quartile value

const quartile = statistics.quartile(data, 0.5);

// get interquartile range value

const interquartileRange = statistics.interquartileRange(data);

// get sum of squares value

const sumOfSquares = statistics.sumOfSquares(data);

// get sum of squares deviation value

const sumOfSquaresDeviation = statistics.sumOfSquaresDeviation(data);

// get t-score value

const tScore = statistics.tScore(data);

// get t-score two sample value

const tScoreTwoSample = statistics.tScoreTwoSample(data, data);

// get z-score value

const zScore = statistics.zScore(data);

// get covariance value

const covariance = statistics.covariance(data, data);

// get correlation coefficient value

const correlationCoefficient = statistics.correlation(data, data);

// get spearman correlation coefficient value

const spearmanCorrelationCoefficient = statistics.spearmanCorrelation(data, data);

// array percentile

const percentile = statistics.percentile(data, 0.5);

// array percentile rank

const percentileRank = statistics.percentileRank(data, 5);

// array quartile

const quartile = statistics.quartile(data, 0.5);

// array math expectation

const mathExpectation = statistics.mathExpectation(data, fn);
```

## License

MIT

## Author

Balyunov Aleksandr
