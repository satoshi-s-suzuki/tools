var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "ZTE",
        hw_model: "R5300 G3 (Intel Xeon E5-2660 v3)",
        base_copies: "40",
        hw_ncores: "20",
        hw_nchips: "2",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "900",
        peakmean: "933",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q2/cpu2006-20150419-35858.html"
      },
      {
        test_sponsor: "ZTE",
        hw_model: "ATCA SBCR (Intel Xeon E5-2628L v2)",
        base_copies: "32",
        hw_ncores: "16",
        hw_nchips: "2",
        hw_ncoresperchip: "8",
        hw_nthreadspercore: "2",
        basemean: "470",
        peakmean: "493",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150816-37403.html"
      },
    ]
  }
});
