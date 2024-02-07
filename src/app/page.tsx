"use client";
import Banner from "@/components/banner"
import Cards from "@/components/cards";

import { register } from 'swiper/element-bundle'
register()
import 'swiper/css';
import 'swiper/css/effect-cards';

import './globals.css';

import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { MenuBar } from "@/components/menu";
import NavBar from "@/components/navbar";




const Mobilecards = [
  { id: '1', image: 'http://theonesalon.com.br/wp-content/uploads/2023/08/hair-style.jpg' },
  { id: '2', image: 'http://theonesalon.com.br/wp-content/uploads/2023/08/sobrancelhas.jpg' },
  { id: '3', image: 'http://theonesalon.com.br/wp-content/uploads/2023/08/barbearia.jpg' },
]



const Cabeleireiro = [
  { id: '1', image: 'http://theonesalon.com.br/wp-content/uploads/2023/08/hair-style.jpg' },
  { id: '2', image: 'http://theonesalon.com.br/wp-content/uploads/2023/08/hair-style.jpg' },
  { id: '3', image: 'http://theonesalon.com.br/wp-content/uploads/2023/08/hair-style.jpg' },

]

const sombrancelhas = [
  { id: '1', image: 'http://theonesalon.com.br/wp-content/uploads/2023/08/sobrancelhas.jpg' },
  { id: '2', image: 'http://theonesalon.com.br/wp-content/uploads/2023/08/sobrancelhas.jpg' },
  { id: '3', image: 'http://theonesalon.com.br/wp-content/uploads/2023/08/sobrancelhas.jpg' },

]

const Barbearia = [
  { id: '1', image: 'http://theonesalon.com.br/wp-content/uploads/2023/08/barbearia.jpg' },
  { id: '2', image: 'http://theonesalon.com.br/wp-content/uploads/2023/08/barbearia.jpg' },
  { id: '3', image: 'http://theonesalon.com.br/wp-content/uploads/2023/08/barbearia.jpg' },
]






export default function Home() {
  return (


    <div className="backcolor">

      <div className="ContainerPrimary ">
        <div className="hidden md:block">
          <NavBar/>
        </div>
        <div className="ContainerPrimary md:hidden block h-[64px] w-[100%] ">
          <div className="border border-black w-[50px] bg-[#363636] rounded-e-full h-[64px]">
            <div className="mt-[10px]"><MenuBar /></div>

          </div>
        </div>
        <Banner Link="https://mlabs-wordpress-site.s3.amazonaws.com/wp-content/uploads/2020/06/marketing-digital-para-salao-de-beleza-header.jpg" />
        <h5 className="font-bold text-center text-2xl italic mt-10 underline">VEJA UM POUCO DO NOSSO TRABALHO.</h5>

        <div className="md:grid md:grid-cols-3 md:justify-items-center md:gap-[167px] md:mt-0 mt-10 md:h-[400px] md:justify-center flex justify-center">

          <div className=" w-[200px]   h-[220px]  md:mt-[100px] md:hidden block">  {/* Mobile */}

            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {Mobilecards.map((props) => (
                <SwiperSlide key={props.id}>
                  <img
                    src={props.image}
                    alt="Slider"

                    className="w-[100%] h-[216px] border-[2px]  border-[#D7A339] object-cover"
                  />

                </SwiperSlide>
              ))}
            </Swiper>
            <p className="text-center text-[#363636] text-lg md:block hidden font-semibold">Cabeleireiro</p>
          </div>

          <div className=" w-[200px]   h-[220px]  md:mt-[100px] md:block hidden">  {/* primeiro */}

            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {Cabeleireiro.map((props) => (
                <SwiperSlide key={props.id}>
                  <img
                    src={props.image}
                    alt="Slider"

                    className="w-[100%] h-[216px] border-[2px]  border-[#D7A339] object-cover"
                  />

                </SwiperSlide>
              ))}
            </Swiper>
            <p className="text-center text-[#363636] text-lg md:block hidden font-semibold">Cabeleireiro</p>
          </div>
          <div className=" w-[200px]   h-[220px] md:block hidden md:mt-[100px]"> {/* segundo */}
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {sombrancelhas.map((props) => (
                <SwiperSlide key={props.id}>
                  <img
                    src={props.image}
                    alt="Slider"

                    className="w-[100%] h-[216px] border-[2px]  border-[#D7A339] object-cover"
                  />

                </SwiperSlide>
              ))}
            </Swiper>
            <p className="text-center text-[#363636] text-lg md:block hidden font-semibold">Sobrancelhas</p>
          </div>
          <div className=" w-[200px]   h-[220px] md:block hidden md:mt-[100px] "> {/* terceiro */}
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {Barbearia.map((props) => (
                <SwiperSlide key={props.id}>
                  <img
                    src={props.image}
                    alt="Slider"

                    className="w-[100%] h-[216px] border-[2px]  border-[#D7A339] object-cover"
                  />

                </SwiperSlide>
              ))}
            </Swiper>
            <p className="text-center text-[#363636] text-lg font-semibold">Barbearia</p>
          </div>
        </div>
        <div className="md:mt-0 mt-10">
        <Banner Link="https://mlabs-wordpress-site.s3.amazonaws.com/wp-content/uploads/2020/06/marketing-digital-para-salao-de-beleza-header.jpg" />
        </div>
        <div>
          <h5 className="font-bold text-center text-2xl italic md:mt-[68px] mt-10 underline">Nossos Serviços</h5>
          <div className="md:grid md:grid-flow-row md:grid-cols-3">
            <Cards //01
              link="http://theonesalon.com.br/wp-content/uploads/2023/08/hair-style.jpg"
              disc="Hair Stylists especializados em colorimetria, consultoria de imagem e técnica de visagismo. Corte, mechas, luzes, técnicas de alisamento e coloração: Oferecemos a orientação necessária para resultados surpreendentes para cada perfil."
              name="Cabeleireiro - Hair Stylist"
            />
            <Cards //02
              link="http://theonesalon.com.br/wp-content/uploads/2023/08/sobrancelhas.jpg"
              disc="Sobrancelhas bem feitas fazem toda diferença na harmonia da beleza natural. Nossa equipe é especialista em visagismo e realiza os procedimentos de Coloração e Depilação egípcia (método com linha)."
              name="Sobrancelhas"
            />
            <Cards //03
              link="http://theonesalon.com.br/wp-content/uploads/2023/08/barbearia.jpg"
              disc="Conforto e privacidade para o público masculino em um ambiente estilizado e de bom gosto para a realização de corte, tratamento facial e barba."
              name="Barbearia"
            />

          </div>
          <div className="mt-5">
            <h5 className="font-bold text-center text-2xl italic mt-10 underline">Sobre Nós</h5>

            <Swiper

              speed={600}
              parallax={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Parallax, Pagination, Navigation]}
              className="mySwiper mt-4"
            >
              <div
                slot="container-start"
                className="parallax-bg bg-black"
                data-swiper-parallax="-23%"
              ></div>
              <SwiperSlide>


                <div className="text-justify px-4 indent-4 antialiased text-[#363636] md:h-[100%] md:w-[800px]  text-base/7 leading-7  backcolor " data-swiper-parallax="1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>

                <div className="text-justify px-4 indent-4 antialiased text-[#363636] md:h-[100%] md:w-[800px]  text-base/7 leading-7  backcolor " data-swiper-parallax="1">
                  <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>

                <div className="text-justify px-4 indent-4 antialiased text-[#363636] md:h-[100%] md:w-[800px]  text-base/7 leading-7  backcolor " data-swiper-parallax="1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.

                  </p>
                </div>
              </SwiperSlide>
            </Swiper>


          </div>

        </div>
      </div>
    </div>







  )
}
