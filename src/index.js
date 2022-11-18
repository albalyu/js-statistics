// array mean

function mean(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}

// array median

function median(arr) {
    const mid = Math.floor(arr.length / 2);
    const nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

// array mode

function mode(arr) {
    return arr.reduce((a, b, i, arr) => arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b);
}


// array variance

function variance(arr) {
    const avg = mean(arr);
    return mean(arr.map(n => (n - avg) ** 2));
}

// array standard deviation

function standardDeviation(arr) {
    return Math.sqrt(variance(arr));
}

// array skewness

function skewness(arr) {
    const avg = mean(arr);
    const stdDev = standardDeviation(arr);
    return mean(arr.map(n => ((n - avg) / stdDev) ** 3));
}

// array kurtosis

function kurtosis(arr) {
    const avg = mean(arr);
    const stdDev = standardDeviation(arr);
    return mean(arr.map(n => ((n - avg) / stdDev) ** 4));
}

// array range

function range(arr) {
    return Math.max(...arr) - Math.min(...arr);
}

// array interquartile range

function interquartileRange(arr) {
    const q1 = median(arr.slice(0, Math.floor(arr.length / 2)));
    const q3 = median(arr.slice(Math.ceil(arr.length / 2)));
    return q3 - q1;
}

// array coefficient of variation

function coefficientOfVariation(arr) {
    return standardDeviation(arr) / mean(arr);
}

// array sum of squares

function sumOfSquares(arr) {
    return arr.reduce((a, b) => a + b ** 2);
}

// array sum of squares of deviations

function sumOfSquaresOfDeviations(arr) {
    const avg = mean(arr);
    return arr.reduce((a, b) => a + (b - avg) ** 2);
}

// array sum of squares of residuals

function sumOfSquaresOfResiduals(arr) {
    const avg = mean(arr);
    return arr.reduce((a, b) => a + (b - avg) ** 2);
}

// t-statistic

function tStatistic(arr) {
    const avg = mean(arr);
    const stdDev = standardDeviation(arr);
    return (avg - 0) / (stdDev / Math.sqrt(arr.length));
}

// t-score

function tScore(arr) {
    const avg = mean(arr);
    const stdDev = standardDeviation(arr);
    return (avg - 0) / stdDev;
}

// get t-score two sample values

function tScoreTwoSample(arr1, arr2) {
    const avg1 = mean(arr1);
    const avg2 = mean(arr2);
    const stdDev1 = standardDeviation(arr1);
    const stdDev2 = standardDeviation(arr2);
    const n1 = arr1.length;
    const n2 = arr2.length;
    return (avg1 - avg2) / Math.sqrt(stdDev1 ** 2 / n1 + stdDev2 ** 2 / n2);
}


// z-score

function zScore(arr) {
    const avg = mean(arr);
    const stdDev = standardDeviation(arr);
    return (avg - 0) / stdDev;
}

// array covariance

function covariance(arr1, arr2) {
    const avg1 = mean(arr1);
    const avg2 = mean(arr2);
    return arr1.reduce((a, b, i) => a + (b - avg1) * (arr2[i] - avg2), 0) / (arr1.length - 1);
}

// array correlation

function correlation(arr1, arr2) {
    return covariance(arr1, arr2) / (standardDeviation(arr1) * standardDeviation(arr2));
}

// get spearman correlation coefficient value

function spearmanCorrelation(arr1, arr2) {
    const xRank = arr1.map(el => percentileRank(arr1, el));
    const yRank = arr2.map(el => percentileRank(arr2, el));
    return correlation(xRank, yRank);
}

// array quartile

function quartile(arr, q) {
    const index = (arr.length - 1) * q;
    const lower = arr[Math.floor(index)];
    const upper = arr[Math.ceil(index)];
    return lower + (upper - lower) * (index - Math.floor(index));
}

// array percentile

function percentile(arr, p) {
    const index = (arr.length - 1) * p;
    const lower = arr[Math.floor(index)];
    const upper = arr[Math.ceil(index)];
    return lower + (upper - lower) * (index - Math.floor(index));
}

// array percentile rank

function percentileRank(arr, n) {
    const sorted = arr.slice().sort((a, b) => a - b);
    const index = sorted.findIndex(el => el >= n);
    return index / arr.length;
}

// array math expectation

function mathExpectation(arr, fn) {
    return arr.reduce((a, b) => a + fn(b), 0);
}

// array linear regression

function linearRegression(arr) {
    const x = arr.map(el => el[0]);
    const y = arr.map(el => el[1]);
    const xAvg = mean(x);
    const yAvg = mean(y);
    const a = covariance(x, y) / variance(x);
    const b = yAvg - a * xAvg;
    return [a, b];
}

module.exports = {
    mean,
    median,
    mode,
    variance,
    standardDeviation,
    skewness,
    kurtosis,
    range,
    interquartileRange,
    coefficientOfVariation,
    sumOfSquares,
    sumOfSquaresOfDeviations,
    sumOfSquaresOfResiduals,
    tStatistic,
    tScore,
    tScoreTwoSample,
    zScore,
    covariance,
    correlation,
    spearmanCorrelation,
    quartile,
    percentile,
    percentileRank,
    mathExpectation,
    linearRegression,
}

