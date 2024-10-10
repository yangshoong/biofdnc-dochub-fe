import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemText, ListItemIcon, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/system';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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

function BF_RMD_GM_05_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>
          <Typography>문서번호: BF-RMD-GM-05</Typography>
          <Typography>개정번호: 00</Typography>
        </Box>
        <Box>
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
      <SectionTitle>1. 목적</SectionTitle>
      <Paragraph>
        본 규정은 (주)바이오에프디엔씨(이하 "당사" 라 함)의 화장품 원료 제조에 사용되는 원료, 자재 및 제품의 제조번호 부여에 관한 절차를 수립함으로써 제조와 유통의 추적관리가 가능하도록 하는데 그 목적이 있다.
      </Paragraph>

      <SectionTitle>2. 적용범위</SectionTitle>
      <Paragraph>
        본 규정은 화장품 원료 제조에 사용하는 원료, 자재, 반제품, 제품에 적용한다.
      </Paragraph>

      <SectionTitle>3. 용어의 정의</SectionTitle>
      <SubsectionTitle>3.1 제조번호(Batch No.)</SubsectionTitle>
      <Paragraph>
        동일한 제조공정으로 제조되어 균질한 품질을 갖는 원자재, 반제품, 제품의 일정한 제조단위에 부여되는 고유한 제조번호를 말한다.
      </Paragraph>

      <SectionTitle>4. 책임과 권한</SectionTitle>
      <SubsectionTitle>4.1 품질보증책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.1.1 제품 식별 및 추적성 관리에 대한 총괄 책임을 담당한다.</StyledListItem>
        <StyledListItem>4.1.2 제품 식별 및 추적성 관리 업무를 총괄 주관한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>4.2 제조생산책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.2.1 화장품 원료 제조에 사용되는 원료, 자재, 반제품 및 제품의 제조번호 부여방법을 검토하고 승인한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>4.3 품질보증담당자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.3.1 제품의 식별 및 추적성 관리 업무를 실행하고 감독한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>4.4 제조담당자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.4.1 제품 식별 및 추적성 관리 업무를 실행한다.</StyledListItem>
        <StyledListItem>4.4.2 제조번호 부여 및 관리 업무를 수행한다.</StyledListItem>
      </StyledList>
      <SectionTitle>5. 업무절차</SectionTitle>
      <SubsectionTitle>5.1 원칙</SubsectionTitle>
      <Paragraph>
        제조 및 품질관리에 사용되는 제품관련 제조 및 품질관리 문서에는 원자재 및 제품에 대한 코드번호 및(또는) 제조번호를 기입하여 제품의 전주기에 대해 추적이 가능하도록 한다.
      </Paragraph>

      <SubsectionTitle>5.2 제조번호 부여방법</SubsectionTitle>
      <SubsectionTitle sx={{ paddingLeft: '20px' }}>5.2.1 제품 제조번호 부여방법</SubsectionTitle>
      <StyledList>
        <StyledListItem>5.2.1.1 반제품, 제품의 경우 ERP 시스템에서 자동으로 생성되는 제조번호를 사용한다.</StyledListItem>
        <StyledListItem>5.2.1.2 ERP 시스템은 다음과 같은 형식으로 제조번호를 생성한다:
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>구분</TableCell>
                  <TableCell>설명</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>형식</TableCell>
                  <TableCell>DDDDYYYYMMDDNNN</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>DDDD</TableCell>
                  <TableCell>부서코드 4자리 영문자</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>YYYY</TableCell>
                  <TableCell>제조년도 4자리</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>MM</TableCell>
                  <TableCell>제조월 2자리</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>DD</TableCell>
                  <TableCell>제조일 2자리</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>NNN</TableCell>
                  <TableCell>일련번호 3자리 (당일 생산 순서에 따라 001부터 순차적으로 부여)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </StyledListItem>
          <StyledListItem sx={{ paddingLeft: '40px' }}>예) PROD20230601001 : 생산부서(PROD)에서 2023년 6월 1일에 제조한 첫 번째 제조번호</StyledListItem>
        <StyledListItem>5.2.1.3 부서코드는 필요에 따라 추가하거나 변경할 수 있으며, 변경 시 품질보증책임자의 승인을 받아야 한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle sx={{ paddingLeft: '20px' }}>5.2.2 제조번호 관리</SubsectionTitle>
      <StyledList>
        <StyledListItem>5.2.2.1 제조번호는 중복되지 않도록 관리되며, 제조 시작 시점에 ERP 시스템에서 자동으로 부여된다.</StyledListItem>
      </StyledList>

      <SubsectionTitle sx={{ paddingLeft: '20px' }}>5.2.3 원자재 및 포장재 관리</SubsectionTitle>
      <StyledList>
        <StyledListItem>5.2.3.1 원자재의 경우 제조업체(공급업체)의 제조번호를 ERP 시스템에 등록하여 사용한다.</StyledListItem>
        <StyledListItem>5.2.3.2 제조번호가 없는 원자재의 경우, 입고일자를 해당 원자재의 제조번호로 사용한다. (예: 20230601)</StyledListItem>
        <StyledListItem>5.2.3.3 포장재에 날인되는 제조번호는 ERP 시스템에서 생성된 번호를 사용하되, 고객사의 요구가 있을 경우 별도의 형식을 사용할 수 있다.</StyledListItem>
      </StyledList>

      <SectionTitle>6. 적합 및 부적합품 식별</SectionTitle>
      <StyledList>
        <StyledListItem>6.1 원료, 자재, 반제품 및 제품에 시험중 라벨을 부착 후 "적합" 또는 "부적합"을 표시하여 식별</StyledListItem>
      </StyledList>

      <SectionTitle>7. 기록 및 문서 보관</SectionTitle>
      <StyledList>
        <StyledListItem>7.1 각종 식별번호는 각 제품 및 해당 서류에 기록하여 식별 및 추적성이 보장되도록 관리한다.</StyledListItem>
        <StyledListItem>7.2 부적합품이 발생하였을 경우 "부적합품 관리 규정"에 준하여 부적합품에 관련된 해당 식별번호를 기록 관리한다.</StyledListItem>
        <StyledListItem>7.3 소비자 불만 제품이 발생하였을 경우 "불만처리 규정"에 준하여 해당 식별번호를 기록 관리한다.</StyledListItem>
        <StyledListItem>7.4 모든 기록은 "기록 관리 규정"에 따라 보관한다.</StyledListItem>
      </StyledList>

      <SectionTitle>8. 관련 문서</SectionTitle>
      <StyledList>
        <StyledListItem>8.1 부적합품 관리 규정</StyledListItem>
        <StyledListItem>8.2 불만처리 규정</StyledListItem>
        <StyledListItem>8.3 기록 관리 규정</StyledListItem>
      </StyledList>
    </Box>
  );
}

export default BF_RMD_GM_05_Content;