var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "HPE",
        hw_model: "Integrity Superdome X (144 core, 2.50 GHz, Intel Xeon E7-8890 v3)",
        base_copies: "288",
        hw_ncores: "144",
        hw_nchips: "8",
        hw_ncoresperchip: "18",
        hw_nthreadspercore: "2",
        basemean: "5340",
        peakmean: "5570",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151102-37917.html"
      },
      {
        test_sponsor: "HPE",
        hw_model: "Integrity Superdome X (288 core, 2.50 GHz, Intel Xeon E7-8890 v3)",
        base_copies: "576",
        hw_ncores: "288",
        hw_nchips: "16",
        hw_ncoresperchip: "18",
        hw_nthreadspercore: "2",
        basemean: "10600",
        peakmean: "11100",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151102-37919.html"
      },
      {
        test_sponsor: "HPE",
        hw_model: "ProLiant XL170r Gen9 (3.50 GHz, Intel Xeon E5-2637 v3)",
        base_copies: "16",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "446",
        peakmean: "466",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151102-37920.html"
      },
      {
        test_sponsor: "HPE",
        hw_model: "ProLiant ML30 Gen9 (3.60 GHz, Intel Xeon E3-1270 v5)",
        base_copies: "8",
        hw_ncores: "4",
        hw_nchips: "1",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "256",
        peakmean: "267",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151116-38044.html"
      },
      {
        test_sponsor: "HPE",
        hw_model: "ProLiant ML150 Gen9 (2.40 GHz, Intel Xeon E5-2620 v3)",
        base_copies: "24",
        hw_ncores: "12",
        hw_nchips: "2",
        hw_ncoresperchip: "6",
        hw_nthreadspercore: "2",
        basemean: "502",
        peakmean: "527",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151116-38048.html"
      },
      {
        test_sponsor: "HPE",
        hw_model: "ProLiant ML150 Gen9 (2.40 GHz, Intel Xeon E5-2630 v3)",
        base_copies: "32",
        hw_ncores: "16",
        hw_nchips: "2",
        hw_ncoresperchip: "8",
        hw_nthreadspercore: "2",
        basemean: "662",
        peakmean: "694",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151116-38049.html"
      },
      {
        test_sponsor: "HPE",
        hw_model: "ProLiant XL170r Gen9 (3.50 GHz, Intel Xeon E5-2637 v3)",
        base_copies: "16",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "452",
        peakmean: "472",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151116-38052.html"
      },
      {
        test_sponsor: "HPE",
        hw_model: "ProLiant DL20 Gen9 (3.70 GHz, Intel Xeon E3-1280 v5)",
        base_copies: "8",
        hw_ncores: "4",
        hw_nchips: "1",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "251",
        peakmean: "261",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151116-38055.html"
      },
      {
        test_sponsor: "HPE",
        hw_model: "ProLiant DL20 Gen9 (3.30 GHz, Intel Xeon E3-1225 v5)",
        base_copies: "4",
        hw_ncores: "4",
        hw_nchips: "1",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "203",
        peakmean: "210",
        htmllink: "https://www.spec.org/cpu2006/results/res2016q1/cpu2006-20151222-38480.html"
      },
      {
        test_sponsor: "HPE",
        hw_model: "ProLiant DL20 Gen9 (3.40 GHz, Intel Xeon E3-1230 v5)",
        base_copies: "8",
        hw_ncores: "4",
        hw_nchips: "1",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "246",
        peakmean: "255",
        htmllink: "https://www.spec.org/cpu2006/results/res2016q1/cpu2006-20151224-38525.html"
      },
    ]
  }
});
