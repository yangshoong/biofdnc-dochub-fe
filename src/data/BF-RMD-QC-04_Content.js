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

function BF_RMD_QC_04_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>{/* 제조용수 시험관리 규정*/}
          <Typography>문서번호: BF-RMD-QC-04</Typography>
          
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
        본 규정은 (주)바이오에프디엔씨(이하 '당사'라 함.) 제조소 내에서 제품 제조시 사용되는 물(정제수)의 수질관리를 위한 제반 사항을 규정함으로써 완제품의 품질보증 및 안전성을 확보하는데 그 목적이 있다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>2. 적용범위</SectionTitle>
      <Paragraph>
        본 규정은 당사 제조소 내에서 제품 제조 시 사용되는 물(정제수) 관리 업무 전반에 적용한다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>3. 정제수의 정의</SectionTitle>
      <SubsectionTitle>3.1 정제수</SubsectionTitle>
      <Paragraph>
        정제수라 함은 상수를 여과, 이온교환 등에 의하여 정제된 물로 제품 제조 및 세척의 용도로 사용되며 정제수 기준에 적합하여야 한다. 
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>4. 책임과 권한</SectionTitle>
      <SubsectionTitle>4.1 대표이사</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.1.1 본 규정에 대한 최종 승인 권한을 갖는다.</StyledListItem>
      </StyledList>
      <SubsectionTitle>4.2 품질보증책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.2.1 정제수 시험관리 업무를 주관하며 시험결과 판정에 대한 책임과 권한을 갖는다.</StyledListItem>
        <StyledListItem>4.2.2 정제수 품질 기준 설정 및 변경을 검토하고 승인한다.</StyledListItem>
        <StyledListItem>4.2.3 정제수 시험 관련 문서 및 기록 관리를 총괄한다.</StyledListItem>
      </StyledList>
      <SubsectionTitle>4.3 제조생산책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.3.1 정제수 제조관리 및 제조장치의 유지보수 관리를 총괄한다.</StyledListItem>
        <StyledListItem>4.3.2 이상 발생 시 조치를 취한다.</StyledListItem>
      </StyledList>
      <SubsectionTitle>4.4 품질관리담당자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.4.1 정제수 시험을 실시하고 결과를 기록한다.</StyledListItem>
        <StyledListItem>4.4.2 정제수 시험 결과를 품질보증책임자에게 보고한다.</StyledListItem>
        <StyledListItem>4.4.3 시험 기기 및 시약의 관리를 담당한다.</StyledListItem>
      </StyledList>
      <SubsectionTitle>4.5 제조담당자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.5.1 정제수 제조관리 및 제조장치의 유지보수 관리를 실시한다.</StyledListItem>
        <StyledListItem>4.5.2 정제수 사용시설의 위생관리를 실시한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>5. 정제수의 품질 관리</SectionTitle>
      <StyledList>
        <StyledListItem>5.1 당사의 제품 제조 및 세척용 정제수가 하기 7.1항 정제수 품질기준에 적합하도록 정기적으로 검사 시험한다.</StyledListItem>
        <StyledListItem>5.2 정제수 공급 설비는 다음 각 호의 기준을 충족하도록 관리한다.</StyledListItem>
        <StyledList>
          <StyledListItem>5.2.1 물의 정체와 오염을 피할 수 있도록 설치될 것</StyledListItem>
          <StyledListItem>5.2.2 물의 품질에 영향이 없을 것</StyledListItem>
          <StyledListItem>5.2.3 살균처리 또는 위생처리가 가능할 것</StyledListItem>
        </StyledList>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>6. 정제수 시설 관리</SectionTitle>
      <StyledList>
        <StyledListItem>6.1 정제수 설비를 매주 1회 이상 점검하여, 정제수 공급에 지장을 초래하지 않도록 관리하고 그 결과를 "정제수 제조장치 점검기록서"에 기록한다.</StyledListItem>
        <StyledListItem>6.2 탱크, 배관의 재질은 스테인레스 스틸 또는 그에 준하는 재질을 사용하여 수질에 영향이 없도록 한다.</StyledListItem>
        <StyledListItem>6.3 품질관리 담당자는 하기 7.1항에 따라 정제수 검체를 채취하여 검사시험 한 후 주간 정제수 시험 일지 및 월간 정제수 시험 일지에 기록한다.</StyledListItem>
        <StyledListItem>6.4 만일 정제수 검사시험 결과 기준을 벗어날 경우 품질보증책임자는 그 결과를 제조생산책임자에게 통보한다.</StyledListItem>
        <StyledListItem>6.5 제조생산책임자는 즉시 정제수 생산을 멈추고 통보 받은 부적합 원인을 조사하여 적절한 조치를 취한 후, 그 결과를 품질보증책임자에게 보고한다.</StyledListItem>
        <StyledListItem>6.6 시험이 부적합인 경우 품질관리 담당자는 정제수 검체를 채취하여 하기 7.1항을 재검사한다. 재검사 결과 당사 정제수 품질 기준에 부합할 경우 사용을 허용한다. 만일 당사 정제수 품질 기준에 부합하지 않을 경우 위생처리를 다시 하도록 제조생산부에 요청한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>7. 정제수 품질관리 기준</SectionTitle>
      <SubsectionTitle>7.1 정제수는 다음의 기준에 따라 관리한다:</SubsectionTitle>
      <StyledList>
        <StyledListItem>- 주간 검사: 성상(무색, 무취), PW(4이하), RO(15이상), pH(5.0~7.0)</StyledListItem>
        <StyledListItem>- 월간 검사: 성상, pH, 순도, 미생물(100 cfu/ml 이하)</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>8. 상수 품질관리 기준</SectionTitle>
      <SubsectionTitle>8.1 상수관리</SubsectionTitle>
      <StyledList>
        <StyledListItem>8.1.1 매월 지역상수도사업본부에서 수질검사결과를 확인하고 관리한다.</StyledListItem>
      </StyledList>
      <SubsectionTitle>8.2 불합격시 조치사항</SubsectionTitle>
      <StyledList>
        <StyledListItem>8.2.1 관련 부서에 통보하여 해당 기계 및 배관을 점검 보완한 후 재시험을 실시하고, 규정에 적합할 때 사용한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>9. 기록 및 문서 관리</SectionTitle>
      <Paragraph>
        본 규정에 의해 작성된 기록은 "기록관리 규정"에 따라 관리한다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>10. 첨부</SectionTitle>
      <StyledList>
        <StyledListItem>첨부1) 주간 정제수 시험일지</StyledListItem>
        <StyledListItem>첨부2) 월간 정제수 시험일지</StyledListItem>
        <StyledListItem>첨부3) 정제수 제조장치 점검 기록서</StyledListItem>
        <StyledListItem>첨부4) 월간 정제수 시험성적서</StyledListItem>
      </StyledList>
    </Box>
  );
}

export default BF_RMD_QC_04_Content;