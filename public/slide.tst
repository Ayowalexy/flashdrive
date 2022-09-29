<Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return "";
                },
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {({ isActive }) => {
                  setActive((prev) => (isActive ? 1 : prev));
                  return (
                    <div className={styles.images}>
                      <img
                        src="/images/corrola.png"
                        width={matches ? "65%" : "100%"}
                        height={matches ? "100%" : "50%"}
                      />
                      <div className={styles.side}>
                        <div className={styles.side_header}>
                          <div className={styles.side_header_text_one}>
                            Need a car you can <br /> pay{" "}
                            <span>subsequently?</span>
                          </div>
                          <div className={styles.side_header_text_two}>
                            Come to flashdrive at Lydia street, Odii road or
                            call
                            <a href="tel:07089973142"> 07089973142</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }}
              </SwiperSlide>

              <SwiperSlide>
                {({ isActive }) => {
                  setActive((prev) => (isActive ? 2 : prev));
                  return (
                    <div className={styles.images}>
                      <img
                        src="/images/img_2.png"
                        width={matches ? "65%" : "100%"}
                        height={matches ? "100%" : "50%"}
                      />
                      <div className={styles.side}>
                        <div className={styles.side_header}>
                          {matches ? (
                            <div className={styles.side_header_text_one}>
                              Do you know that at
                              <br /> <span> FLASHDRIVENG</span> you can get a
                              car on hire purchase?
                            </div>
                          ) : (
                            <div className={styles.side_header_text_one}>
                              Do you know that at
                              <br /> <span> FLASHDRIVENG</span> you can <br />{" "}
                              get a car on hire purchase?
                            </div>
                          )}
                          <div className={styles.side_header_text_two}>
                            Come to flashdrive at Lydia street, Odii road or
                            call
                            <a href="tel:07089973142"> 07089973142</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }}
              </SwiperSlide>

              <SwiperSlide>
                {({ isActive }) => {
                  setActive((prev) => (isActive ? 3 : prev));
                  return (
                    <div className={styles.images}>
                      <img
                        src="/images/img_3.png"
                        width={matches ? "65%" : "100%"}
                        height={matches ? "100%" : "50%"}
                      />
                      <div className={styles.side}>
                        <div className={styles.side_header}>
                          <div className={styles.side_header_text_one}>
                            Get a car on hire purchase
                            <br /> with <span>FLASHDRIVENG?</span>
                          </div>
                          <div className={styles.side_header_text_two}>
                            Come to flashdrive at Lydia street, Odii road or
                            call
                            <a href="tel:07089973142"> 07089973142</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }}
              </SwiperSlide>
              <div className={styles.indicators}>
                {[1, 2, 3].map((element, idx) => (
                  <div
                    key={idx}
                    className={
                      element === active ? styles.active : styles.indicator
                    }
                  />
                ))}
              </div>
            </Swiper>