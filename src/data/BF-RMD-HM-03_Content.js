import React from 'react';
import { Box, Typography, Divider, List, ListItem, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
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

const StyledList = styled(List)({
  paddingLeft: '20px',
});

const StyledListItem = styled(ListItem)({
  paddingLeft: '20px',
  display: 'flex',
  alignItems: 'center',
});

const Paragraph = styled(Typography)({
  marginBottom: '10px',
});

function BF_RMD_HM_03_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>{/* 작업원 수세 및 소독관리 규정*/}
          <Typography>문서번호: BF-RMD-HM-03</Typography>
          
        </Box>
        <Box>
          <Typography>개정번호: 00</Typography>
          <Typography>제·개정일: 2024.07.01</Typography>
        </Box>
      </Box>
      <Typography variant="subtitle1" gutterBottom>
        제(개정) 이력
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>제·개정번호</TableCell>
              <TableCell>제·개정일자</TableCell>
              <TableCell>제·개정내용</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>비고</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>0</TableCell>
              <TableCell>2024.07.01</TableCell>
              <TableCell>신규 제정</TableCell>
              <TableCell>신동선</TableCell>
              <TableCell></TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '20px' }}>
        문서 승인
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '25%' }}>구분</TableCell>
              <TableCell sx={{ width: '25%' }}>작성</TableCell>
              <TableCell sx={{ width: '25%' }}>검토</TableCell>
              <TableCell sx={{ width: '25%' }}>승인</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>서명</TableCell>
              <TableCell>신동선</TableCell>
              <TableCell>문창배</TableCell>
              <TableCell>이정훈</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>날짜</TableCell>
              <TableCell>2024.07.01</TableCell>
              <TableCell>2024.07.01</TableCell>
              <TableCell>2024.07.01</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <SectionTitle sx={{ marginTop: '100px' }}>1. 목적</SectionTitle>
      <Paragraph>
        본 규정은 (주)바이오에프디엔씨(이하 "당사"라 함)의 화장품 원료 제조에 종사하는 업무담당자의 수세 및 소독에 관한 관리방법을 규정하여 이행함으로써 화장품 원료의 오염을 방지하는데 목적이 있다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>2. 적용범위</SectionTitle>
      <Paragraph>
        당사의 제조, 포장공정 및 미생물 실험실에 출입하는 모든 업무담당자와 외부 방문자에 적용한다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>3. 수세 및 소독 방법</SectionTitle>
      <SubsectionTitle>3.1 화장실</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.1.1 화장실 사용 후 수돗물로 손을 충분히 적신다.</StyledListItem>
        <StyledListItem>3.1.2 손에 비누를 칠한다.</StyledListItem>
        <StyledListItem>3.1.3 손바닥과 손등뿐만 아니라 손톱과 손가락 사이를 3회 이상 문지른다.</StyledListItem>
        <StyledListItem>3.1.4 비누를 충분하게 헹구어내고 1회용 종이 타월 또는 공기 건조기로 손을 건조시킨다.</StyledListItem>
        <StyledListItem>3.1.5 소독제 (70% 에탄올)를 사용하여 손을 소독한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>3.2 제조 및 포장 공정, 원료 보관소, 미생물 실험실</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.2.1 제조, 포장 공정 및 원료 보관소, 미생물 실험실 입실 전에 수돗물로 손을 충분히 적신다.</StyledListItem>
        <StyledListItem>3.2.2 손에 물비누를 칠한다.</StyledListItem>
        <StyledListItem>3.2.3 손바닥과 손등뿐만 아니라 손톱과 손가락 사이를 3회 이상 문지른다.</StyledListItem>
        <StyledListItem>3.2.4 물비누를 충분하게 헹구어내고 1회용 종이 타월 또는 공기 건조기로 손을 건조시킨다.</StyledListItem>
        <StyledListItem>3.2.5 소독제(70% 에탄올)를 사용하여 손을 소독한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>3.3 세척제 (물비누) 및 소독제 관리</SubsectionTitle>
      <Paragraph>
        제조 및 포장 위생 관리담당자는 화장실 및 수세실에 비치된 물비누 및 소독제, 종이타월을 매일 점검하여 보충 또는 교체하고 청결하게 관리한다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>4. 책임과 권한</SectionTitle>
      <SubsectionTitle>4.1 대표이사</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.1.1 수세 및 소독관리 규정의 승인</StyledListItem>
      </StyledList>

      <SubsectionTitle>4.2 품질보증책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.2.1 수세 및 소독관리 규정의 수립 및 이행 감독</StyledListItem>
        <StyledListItem>4.2.2 수세 및 소독 상태 점검 및 개선 조치</StyledListItem>
      </StyledList>

      <SubsectionTitle>4.3 제조생산책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.3.1 제조 구역 내 수세 및 소독 관리 실행</StyledListItem>
        <StyledListItem>4.3.2 수세 및 소독 관련 시설물 유지 관리</StyledListItem>
      </StyledList>

      <SubsectionTitle>4.4 업무담당자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.4.1 수세 및 소독관리 규정 준수</StyledListItem>
        <StyledListItem>4.4.2 개인 위생 관리</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>5. 교육 및 훈련</SectionTitle>
      <StyledList>
        <StyledListItem>5.1 품질보증책임자는 모든 업무담당자에게 올바른 수세 및 소독 방법에 대해 연 1회 이상 교육을 실시한다.</StyledListItem>
        <StyledListItem>5.2 신규 입사자에게는 입사 시 수세 및 소독에 대한 교육을 실시한다.</StyledListItem>
        <StyledListItem>5.3 교육 내용 및 결과는 "교육훈련 기록서"에 기록하여 보관한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>6. 점검 및 모니터링</SectionTitle>
      <StyledList>
        <StyledListItem>6.1 품질보증책임자 또는 그가 지정한 자는 주 1회 이상 수세 및 소독 상태를 점검한다.</StyledListItem>
        <StyledListItem>6.2 점검 결과는 "수세 및 소독 점검 기록서"에 기록하고, 미비사항 발견 시 즉시 시정 조치를 취한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>7. 기록관리</SectionTitle>
      <StyledList>
        <StyledListItem>7.1 수세 및 소독 관리 점검 기록서를 작성하고 유지한다.</StyledListItem>
        <StyledListItem>7.2 기타 사항은 기록관리 규정에 준한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>8. 첨부</SectionTitle>
      <Paragraph>
        첨부 1) 수세 및 소독 관리 점검 기록서
      </Paragraph>
    </Box>
  );
}

export default BF_RMD_HM_03_Content;