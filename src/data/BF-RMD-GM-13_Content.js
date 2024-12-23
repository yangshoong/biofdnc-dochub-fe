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

function BF_RMD_GM_13_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>
          <Typography>문서번호: BF-RMD-GM-13</Typography>
        </Box>
        <Box>
          <Typography>개정번호: 00</Typography>
          <Typography>제·개정일: 2024.07.01</Typography>
        </Box>
      </Box>
      <Typography variant="h6" gutterBottom>
        비즈니스 연속성 관리 규정
      </Typography>
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
              <TableCell>장성주</TableCell>
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
        본 규정은 (주)바이오에프디엔씨(이하 "당사")의 공급 차질을 야기할 수 있는 위기 상황 발생 시, 신속한 대응과 재개를 통해 비즈니스 연속성을 유지하고 고객에게 안정적인 제품 및 서비스를 제공하는 데 목적이 있다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>2. 적용범위</SectionTitle>
      <Paragraph>
        본 규정은 당사 모든 사업장, 생산시설, 관리부서를 포함하여, 업무 연속성을 위한 위기관리 체계 수립 및 운영에 적용한다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>3. 책임과 권한</SectionTitle>
      <SubsectionTitle>3.1 품질경영최고책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.1.1 비즈니스 연속성 관리 총괄 책임</StyledListItem>
      </StyledList>

      <SubsectionTitle>3.2 품질보증책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.2.1 비즈니스 연속성 계획(BCP) 수립 및 관리</StyledListItem>
        <StyledListItem>3.2.2 위기 상황 발생 시 대응 절차 총괄</StyledListItem>
      </StyledList>

      <SubsectionTitle>3.3 제조생산책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.3.1 생산 관련 비상 대응 계획 수립 및 실행</StyledListItem>
      </StyledList>

      <SubsectionTitle>3.4 업무담당자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.4.1 비상 대응 절차 숙지 및 준수</StyledListItem>
        <StyledListItem>3.4.2 담당 업무별 위기 상황 보고</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>4. 용어 정의</SectionTitle>
      <StyledList>
        <StyledListItem>4.1 비즈니스 연속성(BC, Business Continuity): 사업 운영의 중단을 최소화하고 신속히 회복하여 안정적으로 지속하는 능력</StyledListItem>
        <StyledListItem>4.2 BCP (Business Continuity Plan): 위기 또는 재난 상황에서 핵심 기능을 유지 및 복구하기 위한 문서화된 절차와 지침</StyledListItem>
        <StyledListItem>4.3 BCM (Business Continuity Management): 예상치 못한 위험 및 비상사태에 대한 즉각적인 대응과 피해 최소화 활동</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>5. 비즈니스 연속성 관리 절차</SectionTitle>
      <SubsectionTitle>5.1 위험 식별 및 영향분석</SubsectionTitle>
      <StyledList>
        <StyledListItem>5.1.1 정기적으로 잠재적 위협(천재지변, 설비고장, 인력부족, 공급망 단절 등)을 식별한다.</StyledListItem>
        <StyledListItem>5.1.2 영향분석(BIA)을 통해 핵심 업무 중단 시 발생 가능한 영향도를 평가한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>5.2 비즈니스 연속성 전략 수립</SubsectionTitle>
      <StyledList>
        <StyledListItem>5.2.1 핵심 업무 기능(제품 생산, 품질관리, 물류, 고객서비스 등)의 우선순위를 정하고, 비상 대응 전략을 마련한다.</StyledListItem>
        <StyledListItem>5.2.2 대체 자원(대체 설비, 예비 인력, 예비 공급업체) 확보 전략을 수립한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>5.3 BCP 개발 및 유지관리</SubsectionTitle>
      <StyledList>
        <StyledListItem>5.3.1 BCM 책임자는 식별된 위험과 전략을 반영하여 BCP를 작성한다.</StyledListItem>
        <StyledListItem>5.3.2 BCP는 조직 변화, 신규 위협 등장 시 검토 및 개정한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>5.4 사고 발생 시 대응</SubsectionTitle>
      <StyledList>
        <StyledListItem>5.4.1 위기 발생 시 BCM 책임자 주도 하에 BCP를 실행하여 핵심 기능 지속 및 신속한 복구를 지원한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>7. 첨부양식</SectionTitle>
      <StyledList>
        <StyledListItem>7.1 비즈니스 영향분석서(BIA) 양식</StyledListItem>
        <StyledListItem>7.2 비즈니스 연속성 계획(BCP) 표준 양식</StyledListItem>
        <StyledListItem>7.3 비상 대응 체크리스트</StyledListItem>
      </StyledList>
    </Box>
  );
}

export default BF_RMD_GM_13_Content;
