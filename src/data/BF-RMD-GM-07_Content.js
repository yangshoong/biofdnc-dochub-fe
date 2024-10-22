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

function BF_RMD_GM_07_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>{/* 문서 및 자료관리 규정*/}
          <Typography>문서번호: BF-RMD-GM-07</Typography>
          
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
      <Paragraph>본 규정은 (주)바이오에프디엔씨(이하 '당사'라 한다.)의 품질경영시스템 관련 문서 및 자료가 올바르게 작성되고 필요한 장소에서 올바르게 사용되어 업무의 효율을 꾀하는데 그 목적이 있다.</Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>2. 적용범위</SectionTitle>
      <Paragraph>이 규정은 품질 관련 업무에 사용되는 문서와 자료의 작성, 접수, 승인, 배포, 변경 및 유지 관리에 대하여 적용한다.</Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>3. 용어의 정의</SectionTitle>
      <StyledList>
        <StyledListItem>3.1 품질경영시스템: 품질에 관하여 조직을 지휘하고 관리하기 위한 경영시스템</StyledListItem>
        <StyledListItem>3.2 문서: 정보와 그 정보의 매체를 포함하는 것</StyledListItem>
        <StyledListItem>3.3 기록: 달성된 결과를 기술하거나 수행된 활동의 증거를 제공하는 문서</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>4. 책임과 권한</SectionTitle>
      <SubsectionTitle>4.1 해당 부서장</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.1.1 해당 조직에서 발행되는 문서의 작성, 검토 및 승인</StyledListItem>
        <StyledListItem>4.1.2 해당 조직에서 발행되는 문서의 개정 관리</StyledListItem>
        <StyledListItem>4.1.3 자료 및 외부 출처 문서 사용 승인</StyledListItem>
      </StyledList>

      <SubsectionTitle>4.2 품질보증책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.2.1 품질경영시스템 관련 대내외 문서의 접수, 관련 팀 배포 및 관리, 발송 및 폐기에 대한 책임을 갖는다.</StyledListItem>
        <StyledListItem>4.2.2 품질경영시스템 관련 대외 수발신 문서를 관리할 책임과 권한이 있다.</StyledListItem>
        <StyledListItem>4.2.3 서명과 직인을 관리할 책임과 권한이 있다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>4.3 품질보증담당자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.3.1 품질 문서 및 기록 관리</StyledListItem>
        <StyledListItem>4.3.2 품질경영 운영계획 및 교육계획 수립 지원</StyledListItem>
        <StyledListItem>4.3.3 품질 정보 관리 및 보고서 작성 지원</StyledListItem>
      </StyledList>

      <SubsectionTitle>4.4 업무담당자</SubsectionTitle>
      <StyledList>
        <StyledListItem>4.4.1 해당부서에서 발행되는 문서의 배포 및 유지 관리</StyledListItem>
        <StyledListItem>4.4.2 다른 부서 발행 문서의 접수 및 유지 관리</StyledListItem>
        <StyledListItem>4.4.3 자료 및 외부 출처 문서의 수집, 접수 및 유지 관리</StyledListItem>
      </StyledList>
      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>5. 문서의 분류 체계</SectionTitle>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>구분</TableCell>
              <TableCell>작성</TableCell>
              <TableCell>검토</TableCell>
              <TableCell>승인</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>매뉴얼</TableCell>
              <TableCell>품질보증담당자</TableCell>
              <TableCell>품질보증책임자</TableCell>
              <TableCell>품질경영최고책임자</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>제품표준서</TableCell>
              <TableCell>품질보증담당자</TableCell>
              <TableCell>제조생산책임자</TableCell>
              <TableCell>품질보증책임자</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>제조관리기준서</TableCell>
              <TableCell>제조담당자</TableCell>
              <TableCell>제조생산책임자</TableCell>
              <TableCell>품질보증책임자</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>제조위생관리기준서</TableCell>
              <TableCell>제조담당자</TableCell>
              <TableCell>제조생산책임자</TableCell>
              <TableCell>품질보증책임자</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>품질관리기준서</TableCell>
              <TableCell>품질관리담당자</TableCell>
              <TableCell>품질보증책임자</TableCell>
              <TableCell>품질경영최고책임자</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>6. 업무 절차</SectionTitle>
      <SubsectionTitle>6.1 문서의 작성</SubsectionTitle>
      <Paragraph>각 업무를 담당하는 자가 본 "문서 및 자료관리 규정"에 따라 작성한다.</Paragraph>

      <SubsectionTitle>6.2 문서의 승인</SubsectionTitle>
      <Paragraph>문서는 상기 4항에 따라 작성자가 작성하여 보고하고, 승인자가 검토 및 승인한다.</Paragraph>

      <SubsectionTitle>6.3 문서의 개정</SubsectionTitle>
      <Paragraph>문서를 개정할 때는 개정사유 및 개정 연월일을 기재하고, 권한을 가진 사람의 승인을 받는다.</Paragraph>

      <SubsectionTitle>6.4 문서의 발행 및 배포</SubsectionTitle>
      <Paragraph>품질보증부서는 승인된 문서를 접수 받아 "문서등록대장"에 등록 후 해당부서에 발행, 배포한다.</Paragraph>

      <SubsectionTitle>6.5 문서의 관리</SubsectionTitle>
      <Paragraph>문서 활용부서는 모든 문서를 본 규정에 정해진 절차에 따라 관리하며 관련 기록을 유지한다.</Paragraph>

      <SubsectionTitle>6.6 문서의 보관·보존 및 폐기</SubsectionTitle>
      <StyledList>
        <StyledListItem>6.6.1 품질경영시스템 문서의 원본 및 목록은 품질보증부에서 보관 및 유지 관리한다.</StyledListItem>
        <StyledListItem>6.6.2 배포문서는 해당 부서에서 보관 및 유지관리한다.</StyledListItem>
        <StyledListItem>6.6.3 원료, 자재 및 제조에 관한 기록 및 문서는 해당 제품의 사용기한 만료 후 1년까지 보관한다.</StyledListItem>
        <StyledListItem>6.6.4 기타 품질 관련 기록은 4년간 보존한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>8. 첨부</SectionTitle>
      <StyledList>
        <StyledListItem>첨부1) 문서배포대장</StyledListItem>
        <StyledListItem>첨부2) 서명등록부</StyledListItem>
      </StyledList>
    </Box>
  );
}

export default BF_RMD_GM_07_Content;