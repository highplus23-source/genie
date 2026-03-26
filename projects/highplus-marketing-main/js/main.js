      // ─── FAQ (accessible) ───
      function toggleFaq(btn) {
        const item = btn.closest(".faq-item"),
          isOpen = item.classList.contains("open");
        document
          .querySelectorAll(".faq-item.open")
          .forEach((el) => el.classList.remove("open"));
        document
          .querySelectorAll(".faq-q")
          .forEach((b) => b.setAttribute("aria-expanded", "false"));
        if (!isOpen) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
        }
      }
      document
        .querySelectorAll(".faq-q")
        .forEach((b) => b.setAttribute("aria-expanded", "false"));

      // ─── 3D TILT ───
      function proc3d(el, on) {
        const step = el.querySelector(".proc-step");
        if (on) {
          step.style.transform = "scale(1.22) rotateY(22deg) rotateX(-10deg)";
          step.style.boxShadow =
            "0 0 0 5px rgba(124,58,237,0.25), 0 16px 50px rgba(124,58,237,0.6), 10px 10px 0 rgba(124,58,237,0.12)";
        } else {
          step.style.transform = "";
          step.style.boxShadow = "";
        }
      }

      // ─── MOBILE MENU ───
      var hamburgerBtn = document.getElementById("hamburgerBtn"),
        mobileMenu = document.getElementById("mobileMenu"),
        mobileOverlay = document.getElementById("mobileOverlay");
      function openMobileMenu() {
        hamburgerBtn.classList.add("active");
        mobileMenu.classList.add("active");
        mobileOverlay.classList.add("active");
        hamburgerBtn.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      }
      function closeMobileMenu() {
        hamburgerBtn.classList.remove("active");
        mobileMenu.classList.remove("active");
        mobileOverlay.classList.remove("active");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
      if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", function () {
          hamburgerBtn.classList.contains("active")
            ? closeMobileMenu()
            : openMobileMenu();
        });
      }
      if (mobileOverlay) {
        mobileOverlay.addEventListener("click", closeMobileMenu);
      }
      document.addEventListener("keydown", function (e) {
        if (
          e.key === "Escape" &&
          mobileMenu &&
          mobileMenu.classList.contains("active")
        )
          closeMobileMenu();
      });

      // ─── SCROLL TO TOP ───
      var scrollTopBtn = document.getElementById("scrollTopBtn");
      window.addEventListener(
        "scroll",
        function () {
          if (scrollTopBtn)
            scrollTopBtn.classList.toggle("visible", window.scrollY > 600);
        },
        { passive: true },
      );
      if (scrollTopBtn)
        scrollTopBtn.addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });

      // ─── INTERSECTION OBSERVER REVEAL ───
      var revealObs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              e.target.classList.remove("hidden");
              revealObs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("hidden");
        revealObs.observe(el);
      });

      // ─── SCROLL SPY (Navigation Highlight) ───
      const spySections = document.querySelectorAll("section[id]");
      const spyLinks = document.querySelectorAll(".nav-links a:not(.nav-cta)");
      const spyObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              spyLinks.forEach((link) => {
                link.classList.toggle(
                  "active",
                  link.getAttribute("href") === "#" + id,
                );
              });
            }
          });
        },
        { threshold: 0.5, rootMargin: "-20% 0px -60% 0px" },
      );
      spySections.forEach((section) => spyObserver.observe(section));

      // ─── FORM VALIDATION ───
      var contactForm = document.getElementById("contactForm");
      if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
          var name = document.getElementById("inp-name"),
            tel = document.getElementById("inp-tel"),
            valid = true;
          [name, tel].forEach(function (inp) {
            if (!inp.value.trim()) {
              inp.style.borderColor = "#ef4444";
              inp.style.boxShadow = "0 0 0 3px rgba(239,68,68,0.15)";
              valid = false;
            } else {
              inp.style.borderColor = "";
              inp.style.boxShadow = "";
            }
          });
          if (valid) {
            var nameVal = name.value.trim();
            var telVal = tel.value.trim();
            var company = document.getElementById("inp-company").value.trim();
            var concern = document.getElementById("inp-concern").value.trim();
            var submitBtn = contactForm.querySelector(".form-submit");
            var origText = submitBtn.textContent;
            submitBtn.textContent = "전송 중...";
            submitBtn.disabled = true;

            fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                access_key: "231adf68-dd19-4943-9415-a481c8086a85",
                subject: "[HighPlus 컨설팅 신청] " + nameVal + " - " + (company || "미입력"),
                from_name: "HighPlus 웹사이트",
                "성함/직책": nameVal,
                "연락처": telVal,
                "업체명": company || "미입력",
                "고민 내용": concern || "미입력"
              })
            })
            .then(function(res) { return res.json(); })
            .then(function(data) {
              if (data.success) {
                alert("신청이 완료되었습니다! 빠르게 연락드리겠습니다.");
                contactForm.reset();
              } else {
                alert("전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
              }
            })
            .catch(function() {
              alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
            })
            .finally(function() {
              submitBtn.textContent = origText;
              submitBtn.disabled = false;
            });
          }
        });
      }

      // ─── BAR CHART ───
      const hpData = [18, 24, 30, 35, 42, 52, 65, 80, 100, 125, 148, 170];
      const otData = [160, 148, 150, 135, 120, 108, 95, 88, 78, 68, 55, 45];
      function buildChart(id, data, isUp) {
        const c = document.getElementById(id);
        if (!c) return;
        c.innerHTML = "";
        const mx = Math.max(...data);
        data.forEach((v, i) => {
          const b = document.createElement("div");
          b.dataset.h = ((v / mx) * 100).toFixed(1);
          b.style.cssText =
            "flex:1;border-radius:4px 4px 0 0;height:0%;min-width:0;transition:height 1.3s cubic-bezier(.4,0,.2,1) " +
            i * 0.07 +
            "s;" +
            (isUp
              ? "background:linear-gradient(to top,#4f6ef7,#3b82f6 60%,#06b6d4);"
              : "background:rgba(100,116,139," +
                (0.18 + (i / data.length) * 0.35) +
                ");");
          c.appendChild(b);
        });
      }
      buildChart("chart-hp", hpData, true);
      buildChart("chart-other", otData, false);
      let charted = false;
      function checkChart() {
        if (charted) return;
        const el = document.getElementById("chart-hp");
        if (!el) return;
        if (el.getBoundingClientRect().top < window.innerHeight * 0.93) {
          charted = true;
          setTimeout(() => {
            ["chart-hp", "chart-other"].forEach((id) => {
              const c = document.getElementById(id);
              if (c)
                Array.from(c.children).forEach(
                  (b) => (b.style.height = b.dataset.h + "%"),
                );
            });
          }, 120);
        }
      }
      window.addEventListener("scroll", checkChart, { passive: true });
      setTimeout(checkChart, 350);

      // ─── COUNTERS (easeOut cubic) ───
      function easeOut(t) {
        return 1 - Math.pow(1 - t, 3);
      }
      function animNum(el, to, sfx, dur) {
        const t0 = performance.now();
        (function step(now) {
          const p = Math.min((now - t0) / dur, 1);
          el.textContent = Math.round(to * easeOut(p)) + sfx;
          if (p < 1) requestAnimationFrame(step);
        })(performance.now());
      }
      let counted = false;
      function checkCounters() {
        if (counted) return;
        const el = document.getElementById("cnt1");
        if (!el) return;
        if (el.getBoundingClientRect().top < window.innerHeight * 0.93) {
          counted = true;
          setTimeout(() => {
            animNum(document.getElementById("cnt1"), 300, "%", 2200);
            animNum(document.getElementById("cnt2"), 95, "%", 1900);
            animNum(document.getElementById("cnt3"), 40, "+", 1600);
            document.querySelectorAll(".stat-num").forEach((el) => {
              const t = el.textContent,
                n = parseInt(t),
                s = t.replace(/[0-9]/g, "");
              if (n) animNum(el, n, s, 1800);
            });
          }, 150);
        }
      }
      window.addEventListener("scroll", checkCounters, { passive: true });
      setTimeout(checkCounters, 450);

      // ─── AUTO SLIDER ───
      const track = document.getElementById("slider-track");
      const dotsEl = document.getElementById("slider-dots");
      const cards = track ? Array.from(track.children) : [];
      let cur = 0,
        timer;
      if (dotsEl) {
        cards.forEach((_, i) => {
          const d = document.createElement("button");
          d.className = "dot" + (i === 0 ? " active" : "");
          d.onclick = () => goTo(i);
          dotsEl.appendChild(d);
        });
      }
      function syncDots() {
        document
          .querySelectorAll(".dot")
          .forEach((d, i) => d.classList.toggle("active", i === cur));
      }
      function syncCards() {
        cards.forEach((c, i) => c.classList.toggle("active-slide", i === cur));
      }
      function goTo(n) {
        cur = (n + cards.length) % cards.length;
        const w = cards[0] ? cards[0].offsetWidth + 20 : 380;
        track.scrollLeft = cur * w;
        syncDots();
        syncCards();
        clearInterval(timer);
        timer = setInterval(() => goTo(cur + 1), 3800);
      }
      function slideMove(d) {
        goTo(cur + d);
      }
      timer = setInterval(() => goTo(cur + 1), 3800);
      // drag
      if (track) {
        let sx,
          sl,
          drag = false;
        track.addEventListener("mousedown", (e) => {
          drag = true;
          sx = e.pageX - track.offsetLeft;
          sl = track.scrollLeft;
          track.style.cursor = "grabbing";
        });
        track.addEventListener("mousemove", (e) => {
          if (!drag) return;
          e.preventDefault();
          track.scrollLeft = sl - (e.pageX - track.offsetLeft - sx);
        });
        ["mouseup", "mouseleave"].forEach((ev) =>
          track.addEventListener(ev, () => {
            drag = false;
            track.style.cursor = "grab";
          }),
        );
      }

      // ─── BRANDING GALLERY SLIDER ───
      var brandingTimer;
      function brandingSlide(dir) {
        var track = document.getElementById('branding-slider');
        if (!track) return;
        var item = track.querySelector('.branding-gallery-item');
        var scrollAmt = item ? (item.offsetWidth + 16) : 276;
        if (dir > 0 && track.scrollLeft + track.offsetWidth >= track.scrollWidth - 20) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else if (dir < 0 && track.scrollLeft <= 0) {
          track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: dir * scrollAmt, behavior: 'smooth' });
        }
        clearInterval(brandingTimer);
        brandingTimer = setInterval(function() { brandingSlide(1); }, 3000);
      }
      brandingTimer = setInterval(function() { brandingSlide(1); }, 3000);

      // ─── TESTIMONIAL SLIDER ───
      var testTimer;
      function testimonialSlide(dir) {
        const track = document.querySelector('.testimonial-marquee-track');
        if (!track) return;
        const cardWidth = track.querySelector('.testimonial__card')?.offsetWidth || 240;
        const gap = 20;
        const scrollAmount = dir * (cardWidth + gap);
        // 끝에 도달하면 처음으로
        if (dir > 0 && track.scrollLeft + track.offsetWidth >= track.scrollWidth - 10) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
        clearInterval(testTimer);
        testTimer = setInterval(function() { testimonialSlide(1); }, 4000);
      }
      // 자동 스크롤 시작
      testTimer = setInterval(function() { testimonialSlide(1); }, 4000);
