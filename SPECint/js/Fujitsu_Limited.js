var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M8000",
        base_copies: "63",
        hw_ncores: "32",
        hw_nchips: "16",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "2",
        basemean: "298",
        peakmean: "352",
        htmllink: "https://www.spec.org/cpu2006/results/res2007q2/cpu2006-20070416-00837.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M9000",
        base_copies: "255",
        hw_ncores: "128",
        hw_nchips: "64",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "2",
        basemean: "1110",
        peakmean: "1290",
        htmllink: "https://www.spec.org/cpu2006/results/res2007q2/cpu2006-20070416-00838.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M9000",
        base_copies: "255",
        hw_ncores: "128",
        hw_nchips: "64",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "2",
        basemean: "1060",
        peakmean: "1220",
        htmllink: "https://www.spec.org/cpu2006/results/res2007q2/cpu2006-20070416-00842.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M8000",
        base_copies: "63",
        hw_ncores: "32",
        hw_nchips: "16",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "2",
        basemean: "285",
        peakmean: "335",
        htmllink: "https://www.spec.org/cpu2006/results/res2007q2/cpu2006-20070416-00843.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M5000",
        base_copies: "32",
        hw_ncores: "16",
        hw_nchips: "8",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "2",
        basemean: "134",
        peakmean: "158",
        htmllink: "https://www.spec.org/cpu2006/results/res2007q2/cpu2006-20070416-00846.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M4000",
        base_copies: "16",
        hw_ncores: "8",
        hw_nchips: "4",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "2",
        basemean: "68.6",
        peakmean: "81.6",
        htmllink: "https://www.spec.org/cpu2006/results/res2007q2/cpu2006-20070416-00848.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M9000",
        base_copies: "127",
        hw_ncores: "64",
        hw_nchips: "32",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "2",
        basemean: "553",
        peakmean: "650",
        htmllink: "https://www.spec.org/cpu2006/results/res2007q2/cpu2006-20070416-00884.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "PRIMEQUEST 580",
        base_copies: "64",
        hw_ncores: "64",
        hw_nchips: "32",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "1",
        basemean: "652",
        peakmean: "715",
        htmllink: "https://www.spec.org/cpu2006/results/res2007q2/cpu2006-20070501-00992.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M9000",
        base_copies: "127",
        hw_ncores: "64",
        hw_nchips: "32",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "2",
        basemean: "523",
        peakmean: "617",
        htmllink: "https://www.spec.org/cpu2006/results/res2007q2/cpu2006-20070514-01053.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "PRIMEQUEST 540",
        base_copies: "32",
        hw_ncores: "32",
        hw_nchips: "16",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "1",
        basemean: "326",
        peakmean: "359",
        htmllink: "https://www.spec.org/cpu2006/results/res2007q2/cpu2006-20070529-01187.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise T5120",
        base_copies: "63",
        hw_ncores: "8",
        hw_nchips: "1",
        hw_ncoresperchip: "8",
        hw_nthreadspercore: "8",
        basemean: "73.0",
        peakmean: "78.5",
        htmllink: "https://www.spec.org/cpu2006/results/res2007q4/cpu2006-20071009-02236.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise T5220",
        base_copies: "63",
        hw_ncores: "8",
        hw_nchips: "1",
        hw_ncoresperchip: "8",
        hw_nthreadspercore: "8",
        basemean: "73.0",
        peakmean: "78.5",
        htmllink: "https://www.spec.org/cpu2006/results/res2007q4/cpu2006-20071009-02239.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise T5120 (gccfss)",
        base_copies: "63",
        hw_ncores: "8",
        hw_nchips: "1",
        hw_ncoresperchip: "8",
        hw_nthreadspercore: "8",
        basemean: "76.2",
        peakmean: "83.9",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q1/cpu2006-20080122-03236.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "SPARC Enterprise T5220 (gccfss)",
        base_copies: "63",
        hw_ncores: "8",
        hw_nchips: "1",
        hw_ncoresperchip: "8",
        hw_nthreadspercore: "8",
        basemean: "75.6",
        peakmean: "83.2",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q1/cpu2006-20080228-03486.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "PRIMEQUEST 580A",
        base_copies: "64",
        hw_ncores: "64",
        hw_nchips: "32",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "1",
        basemean: "727",
        peakmean: "808",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q2/cpu2006-20080318-03799.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "PRIMEQUEST 540A",
        base_copies: "32",
        hw_ncores: "32",
        hw_nchips: "16",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "1",
        basemean: "366",
        peakmean: "407",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q2/cpu2006-20080331-04036.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "PRIMEQUEST 580A",
        base_copies: "64",
        hw_ncores: "64",
        hw_nchips: "32",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "1",
        basemean: "589",
        peakmean: "632",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q2/cpu2006-20080331-04038.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "PRIMEQUEST 540A",
        base_copies: "32",
        hw_ncores: "32",
        hw_nchips: "16",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "1",
        basemean: "297",
        peakmean: "319",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q2/cpu2006-20080331-04041.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise T5240",
        base_copies: "127",
        hw_ncores: "16",
        hw_nchips: "2",
        hw_ncoresperchip: "8",
        hw_nthreadspercore: "8",
        basemean: "142",
        peakmean: "157",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q2/cpu2006-20080407-04063.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M4000",
        base_copies: "32",
        hw_ncores: "16",
        hw_nchips: "4",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "118",
        peakmean: "135",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q3/cpu2006-20080711-04730.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M5000",
        base_copies: "63",
        hw_ncores: "32",
        hw_nchips: "8",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "232",
        peakmean: "264",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q3/cpu2006-20080711-04733.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M8000",
        base_copies: "127",
        hw_ncores: "64",
        hw_nchips: "16",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "565",
        peakmean: "637",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q3/cpu2006-20080711-04736.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M9000",
        base_copies: "511",
        hw_ncores: "256",
        hw_nchips: "64",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "2090",
        peakmean: "2290",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q3/cpu2006-20080711-04737.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M9000",
        base_copies: "255",
        hw_ncores: "128",
        hw_nchips: "32",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "1140",
        peakmean: "1240",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q3/cpu2006-20080711-04740.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise T5440",
        base_copies: "255",
        hw_ncores: "32",
        hw_nchips: "4",
        hw_ncoresperchip: "8",
        hw_nthreadspercore: "8",
        basemean: "270",
        peakmean: "301",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q4/cpu2006-20080929-05412.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M3000",
        base_copies: "8",
        hw_ncores: "4",
        hw_nchips: "1",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "36.9",
        peakmean: "40.8",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q4/cpu2006-20081023-05680.html"
      },
      {
        test_sponsor: "Fujitsu Limited",
        hw_model: "Fujitsu SPARC Enterprise M3000",
        base_copies: "4",
        hw_ncores: "2",
        hw_nchips: "1",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "2",
        basemean: "25.7",
        peakmean: "27.9",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q4/cpu2006-20081203-06155.html"
      },
    ]
  }
});