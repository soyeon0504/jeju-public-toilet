'use client';
import React from 'react';
import useSWR from 'swr';
import { NaverMap } from '../../\btypes/map';
import { Info } from '../../app/page';
import { CITY_KEY } from '../../hooks/useInfo';
import { Map_KEY } from '../../hooks/useMap';
import Marker from './Marker';

const Markers = () => {
  // 보관하고 있는 SWR 을 활용
  // useSWR 에 TS 적용시 useSWR<타입>
  const { data: map } = useSWR<NaverMap>(Map_KEY);
  const { data: infos } = useSWR<Info[]>(CITY_KEY);
  // 예외 처리
  if (!map || !infos) {
    return null;
  }

  return (
    <>
      {infos.map((item, index) => {
        return <Marker map={map} coordinates={item.coordinates} key={index} />;
      })}
    </>
  );
};

export default Markers;