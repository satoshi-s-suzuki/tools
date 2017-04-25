var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "Incom S.A.",
        hw_model: "ADAX NetOfficePro X5530R500",
        base_copies: "16",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "175",
        peakmean: "184",
        htmllink: "https://www.spec.org/cpu2006/results/res2010q1/cpu2006-20100301-09737.html"
      },
      {
        test_sponsor: "Incom S.A.",
        hw_model: "ADAX NetOfficePro X5504R500",
        base_copies: "8",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "119",
        peakmean: "127",
        htmllink: "https://www.spec.org/cpu2006/results/res2010q1/cpu2006-20100315-09965.html"
      },
      {
        test_sponsor: "Incom S.A.",
        hw_model: "ADAX NetOfficePro X5630R500",
        base_copies: "16",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "160",
        peakmean: "171",
        htmllink: "https://www.spec.org/cpu2006/results/res2010q2/cpu2006-20100322-10109.html"
      },
    ]
  }
});
