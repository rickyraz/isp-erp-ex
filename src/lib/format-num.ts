const formatNum = Intl.NumberFormat("en", { notation: "compact" });

const n = formatNum.format(1_222_222);

console.log(n);
