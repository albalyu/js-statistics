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
var statistics = require('js-statistics');

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// get mean value

var mean = statistics.mean(data);

// get median value

var median = statistics.median(data);

// get mode value

var mode = statistics.mode(data);

// get variance value

var variance = statistics.variance(data);

// get standard deviation value

var standardDeviation = statistics.standardDeviation(data);

// get skewness value

var skewness = statistics.skewness(data);

// get kurtosis value

var kurtosis = statistics.kurtosis(data);

// get covariance value

var covariance = statistics.covariance(data, data);

// get correlation coefficient value

var correlationCoefficient = statistics.correlationCoefficient(data, data);

// get z-score value

var zScore = statistics.zScore(data, data);

// get percentile value

var percentile = statistics.percentile(data, 0.5);

// get percentile rank value

var percentileRank = statistics.percentileRank(data, 5);

// get quartile value

var quartile = statistics.quartile(data, 0.5);

// get interquartile range value

var interquartileRange = statistics.interquartileRange(data);

// get sum of squares value

var sumOfSquares = statistics.sumOfSquares(data);

// get sum of squares deviation value

var sumOfSquaresDeviation = statistics.sumOfSquaresDeviation(data);

// get t-score value

var tScore = statistics.tScore(data);

// get t-score two sample value

var tScoreTwoSample = statistics.tScoreTwoSample(data, data);

// get z-score value

var zScore = statistics.zScore(data);

// get covariance value

var covariance = statistics.covariance(data, data);

// get correlation coefficient value

var correlationCoefficient = statistics.correlation(data, data);

// get spearman correlation coefficient value

var spearmanCorrelationCoefficient = statistics.spearmanCorrelation(data, data);

// array percentile

var percentile = statistics.percentile(data, 0.5);

// array percentile rank

var percentileRank = statistics.percentileRank(data, 5);

// array quartile

var quartile = statistics.quartile(data, 0.5);

// array math expectation

var mathExpectation = statistics.mathExpectation(data, fn);
```

## License

MIT

## Author

Balyunov Aleksandr
