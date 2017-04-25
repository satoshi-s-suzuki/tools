var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "Quanta Computer Inc.",
        hw_model: "Quanta Q71L-4U(Intel Xeon E7-4890 v2)",
        base_copies: "120",
        hw_ncores: "60",
        hw_nchips: "4",
        hw_ncoresperchip: "15",
        hw_nthreadspercore: "2",
        basemean: "2320",
        peakmean: "2390",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q3/cpu2006-20140623-29996.html"
      },
      {
        test_sponsor: "Quanta Computer Inc.",
        hw_model: "Quanta S51G-1UL(Intel Xeon E5-2660 v2)",
        base_copies: "20",
        hw_ncores: "10",
        hw_nchips: "1",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "368",
        peakmean: "381",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q3/cpu2006-20140629-30081.html"
      },
    ]
  }
});
