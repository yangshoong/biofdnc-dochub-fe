// src/data/BF-RMD-GM-01-content.js

import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';

// 스타일링을 위한 커스텀 컴포넌트
const SectionTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  margin: '20px 0 10px 0',
});

const SubsectionTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1rem',
  margin: '10px 0',
});

const StyledList = styled('ul')({
  paddingLeft: '20px',
});

const StyledListItem = styled('li')({
  marginBottom: '8px',
});

const Paragraph = styled(Typography)({
  marginBottom: '10px',
});

function BF_RMD_GM_01_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <SectionTitle>목차</SectionTitle>
      <StyledList>
        <StyledListItem>1. 총칙</StyledListItem>
        <StyledListItem>2. 조직 및 인적 자원 관리</StyledListItem>
        <StyledListItem>3. 시설 및 설비 관리</StyledListItem>
        <StyledListItem>4. 원부자재 및 제조 관리</StyledListItem>
        <StyledListItem>5. 품질관리</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '20px' }} />

      <SectionTitle>1. 총칙</SectionTitle>
      <SubsectionTitle>1.1. 목적</SubsectionTitle>
      <Paragraph>
        본 매뉴얼은 (주)바이오에프디엔씨(이하 '당사')의 제품 제조 및 품질관리에 관한 기준을
        규정하여, 우수한 품질의 제품을 일관되게 생산하고 관리하는 것을 목적으로 한다.
      </Paragraph>

      <SubsectionTitle>1.2. 용어의 정의</SubsectionTitle>
      <StyledList>
        <StyledListItem>
          <strong>1.2.1 "제조":</strong> 원료 칭량부터 포장 및 표시까지의 일련의 작업
        </StyledListItem>
        <StyledListItem>
          <strong>1.2.2 "원료":</strong> 제품 제조에 사용되는 물질
        </StyledListItem>
        <StyledListItem>
          <strong>1.2.3 "자재":</strong> 제품의 용기, 포장재 등 제조에 사용되는 물품
        </StyledListItem>
        <StyledListItem>
          <strong>1.2.4 "원부자재":</strong> 화장품 원료 및 부자재
        </StyledListItem>
        {/* 추가적인 정의 항목들 */}
      </StyledList>

      <Divider sx={{ marginY: '20px' }} />

      <SectionTitle>2. 조직 및 인적 자원 관리</SectionTitle>
      <SubsectionTitle>2.1. 조직의 구성</SubsectionTitle>
      <StyledList>
        <StyledListItem>2.1.1. 대표이사</StyledListItem>
        <StyledListItem>2.1.2. 품질보증부</StyledListItem>
        <StyledListItem>2.1.3. 제조생산부</StyledListItem>
        {/* 추가 조직 구성 */}
      </StyledList>

      <SubsectionTitle>2.2. 직원의 책임</SubsectionTitle>
      <Paragraph>모든 직원의 상세한 책임은 "업무분장 규정"에 따른다.</Paragraph>
      <StyledList>
        <StyledListItem>2.2.1. 대표이사</StyledListItem>
        <StyledListItem>2.2.2. 품질보증책임자</StyledListItem>
        <StyledListItem>2.2.3. 제조생산책임자</StyledListItem>
        {/* 추가 항목 */}
      </StyledList>

      <Divider sx={{ marginY: '20px' }} />

      <SectionTitle>3. 시설 및 설비 관리</SectionTitle>
      <SubsectionTitle>3.1. 시설 기준</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.1.1. 건물</StyledListItem>
        <StyledListItem>3.1.2. 시설</StyledListItem>
        <StyledListItem>3.1.3. 작업소의 위생</StyledListItem>
        {/* 추가 항목 */}
      </StyledList>

      <SubsectionTitle>3.2. 설비 및 기구의 위생관리</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.2.1. 설비기구 세척 및 소독관리 규정에 따라 관리</StyledListItem>
        <StyledListItem>3.2.2. 설비 및 기구의 세척, 소독 기록 유지</StyledListItem>
        {/* 추가 항목 */}
      </StyledList>
    </Box>
  );
}

export default BF_RMD_GM_01_Content;
