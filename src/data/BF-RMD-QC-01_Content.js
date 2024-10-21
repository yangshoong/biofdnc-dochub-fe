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

function BF_RMD_QC_01_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>{/* 검체의 채취 및 보관 규정*/}
          <Typography>문서번호: BF-RMD-QC-01</Typography>
          
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
        본 규정은 (주)바이오에프디엔씨(이하 '당사'라 함) 제품 제조소 내에서 사용되는 원료 및 자재, 제품의 시험을 하기 위한 검체 채취 및 보관에 관한 제반적인 사항을 규정하여 효율적이고 합리적인 품질관리를 하는데 그 목적이 있다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>2. 적용범위</SectionTitle>
      <Paragraph>
        본 규정은 당사의 제품 제조 관련 모든 업무담당자에 적용한다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>3. 책임과 권한</SectionTitle>
      <SubsectionTitle>3.1 대표이사</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.1.1 본 규정에 대한 최종 승인 권한을 가진다.</StyledListItem>
      </StyledList>
      <SubsectionTitle>3.2 품질보증책임자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.2.1 각종 검사 및 시험관리 업무를 총괄한다.</StyledListItem>
        <StyledListItem>3.2.2 시험 성적서를 발행하여 품질관리담당자에게 시험을 하도록 지시하고 관리, 감독한다.</StyledListItem>
      </StyledList>
      <SubsectionTitle>3.3 품질관리담당자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.3.1 원료, 자재, 제품의 검체 채취, 시험 실시, 보관 관리 업무를 수행한다.</StyledListItem>
      </StyledList>
      <SubsectionTitle>3.4 제조담당자</SubsectionTitle>
      <StyledList>
        <StyledListItem>3.4.1 시험 결과에 따른 적절한 조치를 취한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>4. 검체 채취 및 보관 관리</SectionTitle>
      <StyledList>
        <StyledListItem>4.1 시험용 검체는 오염되거나 변질되지 아니하도록 채취하고, 채취한 후에는 원상태에 준하는 포장을 하며, 검체가 채취되었음을 표시한다.</StyledListItem>
        <StyledListItem>4.2 검체 채취는 승인된 자가 수행한다.</StyledListItem>
        <StyledListItem>4.3 시험용 검체의 용기에는 다음 사항을 기재한다.</StyledListItem>
      </StyledList>
      <StyledList sx={{ paddingLeft: '40px' }}>
        <StyledListItem>① 명칭</StyledListItem>
        <StyledListItem>② 제조번호 또는 시험번호</StyledListItem>
        <StyledListItem>③ 검체 채취 일자</StyledListItem>
        <StyledListItem>④ 기타사항</StyledListItem>
      </StyledList>
      <StyledList>
        <StyledListItem>4.4 원료검체 및 제품의 보관용 검체(관리품)는 적절한 보관조건 하에 지정된 구역 내에서 제품 사용기한 후 1년간 보관한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>5. 검체 채취 지시</SectionTitle>
      <StyledList>
        <StyledListItem>5.1 원료, 자재의 최초 입고 시, 제품 생산 시 품질보증부에 시험을 의뢰한다.</StyledListItem>
        <StyledListItem>5.2 품질보증책임자는 각 부서에서 의뢰 받은 의뢰 품목에 대하여 각 품질관리담당자에게 시험성적서를 발행하여 검체 채취를 지시한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>6. 검체 채취 시기</SectionTitle>
      <SubsectionTitle>6.1 원료, 자재</SubsectionTitle>
      <StyledList>
        <StyledListItem>6.1.1 원료, 자재 최초 입고 시</StyledListItem>
        <StyledListItem>6.1.2 경시변화 등의 이상이 있다고 판단될 때</StyledListItem>
        <StyledListItem>6.1.3 기타 시험이 필요하다고 판단될 때</StyledListItem>
        <StyledListItem>6.1.4 추출원재료의 경우 필요시에만 채취한다.</StyledListItem>
      </StyledList>
      <SubsectionTitle>6.2 제품</SubsectionTitle>
      <StyledList>
        <StyledListItem>6.2.1 생산 후 제품 보관실로 입고 전</StyledListItem>
        <StyledListItem>6.2.2 경시변화 등의 이상이 있다고 판단될 때</StyledListItem>
        <StyledListItem>6.2.3 기타 시험이 필요하다고 판단될 때</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>7. 검체 채취 장소</SectionTitle>
      <StyledList>
        <StyledListItem>1) 원료 : 입고 대기 구역 에서 채취한다.</StyledListItem>
        <StyledListItem>2) 자재 : 자재 시험대기 장소에서 채취한다.</StyledListItem>
        <StyledListItem>3) 제품 : 검사 대기 구역에서 채취한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>8. 검체 채취 용기 및 기구</SectionTitle>
      <StyledList>
        <StyledListItem>8.1 모든 검체 채취용 기구 및 용기는 깨끗이 세척, 건조되어 청결한 것을 사용하여 인위적인 오염을 방지한다.</StyledListItem>
        <StyledListItem>8.2 미생물 시험용 검체의 채취에 필요한 용기와 기구는 멸균된 것으로 한다.</StyledListItem>
        <StyledListItem>8.3 원료 검체 용기는 밀폐 또는 덮개가 가능해야 하며, 멸균된 샘플병, 멸균된 스패츌러, 알콜 스프레이 등을 사용하여 인위적인 오염을 방지한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>9. 검체 채취량</SectionTitle>
      <SubsectionTitle>9.1 원료</SubsectionTitle>
      <StyledList>
        <StyledListItem>9.1.1 분말(고체)상 원료 : 최초 입고시 1 ~ 100g을 채취한다.</StyledListItem>
        <StyledListItem>9.1.2 액상 원료 : 최초 입고시 1 ~ 100g을 채취한다.</StyledListItem>
        <StyledListItem>9.1.3 고가의 원료는 제조사 시험성적서를 참조한다.</StyledListItem>
        <StyledListItem>9.1.4 추출원재료 : 필요시에만 적정량을 채취한다.</StyledListItem>
      </StyledList>
      <SubsectionTitle>9.2 자재</SubsectionTitle>
      <StyledList>
        <StyledListItem>9.2.1 자재 최초 입고시 "자재 관리 규정"에 따라 검체를 채취한다.</StyledListItem>
      </StyledList>
      <SubsectionTitle>9.3 제품</SubsectionTitle>
      <StyledList>
        <StyledListItem>9.3.1 표준품 (초도 포장품 및 교체품) : 1개</StyledListItem>
        <StyledListItem>9.3.2 관리품 : 1개</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>10. 검체 채취 방법</SectionTitle>
      <Paragraph>
        오염되지 않은 기구를 이용하여 롯트 전체의 품질을 대표하도록 무작위로 채취한다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>11. 검체 채취 시 유의사항</SectionTitle>
      <StyledList>
        <StyledListItem>11.1 검체를 채취할 용기 및 부착된 라벨의 내용을 확인하고 채취한다.</StyledListItem>
        <StyledListItem>11.2 각 품질관리담당자는 용기 외관 및 보관 상태를 확인한다.</StyledListItem>
        <StyledListItem>11.3 검체 채취는 반드시 지정된 장소에서 인위적인 오염이 되지 않도록 주의하면서 채취한다.</StyledListItem>
        <StyledListItem>11.4 미생물 실험용은 별도의 멸균된 용기를 사용하며 우선적으로 채취한다.</StyledListItem>
        <StyledListItem>11.5 검체를 개봉하여 채취할 경우 외부로부터의 교차오염이 되지 않도록 주의하며, 검체 채취 후 개봉된 부분을 2차오염이 되지 않도록 밀봉을 철저히 한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>12. 검체의 표시</SectionTitle>
      <StyledList>
        <StyledListItem>12.1 검체를 채취한 용기 또는 포대에 매직으로 "V"를 표시하여 다음 공정에 우선적으로 사용한다.</StyledListItem>
        <StyledListItem>12.2 채취한 검체 용기에 품명, 로트번호, 검체 채취일 등을 기재한다.</StyledListItem>
        <StyledListItem>12.3 관리품은 관리품 식별 라벨을 작성하여 부착한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>13. 검체의 보관 기간</SectionTitle>
      <StyledList>
        <StyledListItem>13.1 원료 및 제품의 검체는 해당 제품의 유효기간까지 보관한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>14. 검체의 폐기</SectionTitle>
      <Paragraph>
        검사시험 후 및 보관기간이 지난 관리품은 "폐기물 관리 규정"에 준하여 폐기한다.
      </Paragraph>

      <Divider sx={{ marginY: '50px' }} />
      
      <SectionTitle>15. 기록 및 문서 관리</SectionTitle>
      <Paragraph>
        본 규정에 의해 처리된 문서는 명확한 기록, 관리, 유지하여야 하며, 기타사항은 "기록 관리 규정"에 준한다.
      </Paragraph>
    </Box>
  );
}

export default BF_RMD_QC_01_Content;