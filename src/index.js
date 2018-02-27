// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let object={};
    if (currency>10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
        else {
        let H = Math.floor(currency / 50);
        if (H > 0) {
            object['H'] = H;
            currency = currency - 50 * H;
        }
        let Q = Math.floor(currency / 25);
        if (Q > 0) {
            object['Q'] = Q;
            currency = currency - 25 * Q;
        }
        let D = Math.floor(currency / 10);
        if (D > 0) {
            object['D'] = D;
            currency = currency - 10 * D;
        }
        let N = Math.floor(currency / 5);
        if (N > 0) {
            object['N'] = N;
            currency = currency - 5 * N;
        }
        let P = currency;
        if (P > 0)
            object['P'] = P;
    };
        return object;

}
