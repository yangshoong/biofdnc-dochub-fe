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
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>5. 비즈니스 연속성 관리 절차</SectionTitle>
      <SubsectionTitle>5.1 위험 식별 및 영향분석</SubsectionTitle>
      <StyledList>
        <StyledListItem>5.1.1 정기적으로 잠재적 위협(천재지변, 설비고장, 인력부족, 공급망 단절 등)을 식별한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>5.2 비즈니스 연속성 전략 수립</SubsectionTitle>
      <StyledList>
        <StyledListItem>5.2.1 비상 대응 전략을 마련한다.</StyledListItem>
        <StyledListItem>5.2.2 대체 자원(대체 설비, 예비 인력, 예비 공급업체) 확보 전략을 수립한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>5.3 BCP 개발 및 유지관리</SubsectionTitle>
      <StyledList>
        <StyledListItem>5.3.1 조직 변화, 신규 위협 등장 시 검토 및 개정한다.</StyledListItem>
      </StyledList>

      <SubsectionTitle>5.4 사고 발생 시 대응</SubsectionTitle>
      <StyledList>
        <StyledListItem>5.4.1 위기 발생 시 BCP를 실행하여 핵심 기능 지속 및 신속한 복구를 지원한다.</StyledListItem>
      </StyledList>

      <Divider sx={{ marginY: '50px' }} />

      <SectionTitle>7. 첨부</SectionTitle>
      <SubsectionTitle>7.1 비즈니스 연속성 계획(BCP)</SubsectionTitle>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>구분</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>세부 내용</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 1. 천재지변 */}
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>1. 천재지변</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>위험 요인</TableCell>
              <TableCell>태풍, 홍수, 지진, 폭우, 폭설 등 자연재해로 인한 생산시설 및 물류 환경 피해</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>영향 분석</TableCell>
              <TableCell>
                • 건물 및 생산 설비 파손<br/>
                • 인력 출근 불가 및 업무 중단<br/>
                • 물류/운송 지연으로 인한 제품 공급 차질
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>대응 전략</TableCell>
              <TableCell>
                <strong>사전 예방:</strong><br/>
                • 주요 설비(전기, 통신 등) 및 방재 시설은 시설 관리 사무소에서 관리<br/>
                • 재난 발생 시 대체 근무지(지점 사업장, 재택 등) 확보<br/><br/>
                
                <strong>위기 발생 시:</strong><br/>
                • 위기관리팀(CMT*) 소집 및 신속 연락망 가동<br/>
                • 피해 상황 파악 후, 필수 인력 중심으로 생산 및 업무 유지<br/>
                • 협력사(물류, 공급사 등)와의 긴밀한 정보 공유<br/>
                • 시설 관리 사무소와 협력하여 비상 발전기, 방수 자재 등 예비자원 활용<br/><br/>
                
                <strong>사후 복구:</strong><br/>
                • 복구 우선순위 설정: 핵심 설비 및 IT 인프라 복원 → 생산시설 점검 → 일반 시설 점검<br/>
                • 외부 전문기관 협조(필요 시)
              </TableCell>
            </TableRow>

            {/* 2. 설비 고장 */}
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>2. 설비 고장</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>위험 요인</TableCell>
              <TableCell>노후 설비, 전기·통신 장애, 핵심 장비(반응기, 멸균기 등) 고장 발생</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>영향 분석</TableCell>
              <TableCell>
                • 생산 일정 지연 또는 중단<br/>
                • 품질 저하 위험(생산 프로세스 미완료 시)<br/>
                • 고객 납기 불이행으로 인한 신뢰도 하락
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>대응 전략</TableCell>
              <TableCell>
                <strong>사전 예방:</strong><br/>
                • 주기적 설비 점검(PM: Preventive Maintenance)<br/>
                • 설비 업체 담당자 연락처 확보<br/>
                • 설비 이중화(가능한 경우) 또는 지점 사업장 또는 외주 협력사 네트워크 확보<br/><br/>
                
                <strong>위기 발생 시:</strong><br/>
                • 설비 고장 발생 시, 즉시 제조생산책임자에게 보고 및 엔지니어 긴급 투입<br/>
                • 생산 일정 재조정 및 고객사 지연 안내(필요 시)<br/>
                • 대체설비(이중화 장치) 또는 지점 사업장 또는 외부 협력사 활용<br/><br/>
                
                <strong>사후 복구:</strong><br/>
                • 고장 원인 분석 및 재발 방지대책<br/>
                • 점검·수리 이력 문서화 및 공유
              </TableCell>
            </TableRow>

            {/* 3. 인력 부족 */}
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>3. 인력 부족</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>위험 요인</TableCell>
              <TableCell>대규모 확진(감염병), 파업, 출퇴근 불가(교통 마비), 핵심 인력 이탈 등으로 인력 운용 어려움</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>영향 분석</TableCell>
              <TableCell>
                • 필수 공정 또는 주요 업무 공백 발생<br/>
                • 주문 처리 및 고객 대응 지연<br/>
                • 생산 라인 가동률 하락
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>대응 전략</TableCell>
              <TableCell>
                <strong>사전 예방:</strong><br/>
                • 재택근무 인프라(IT 시스템, 화상회의 등)<br/>
                • 핵심 인력 백업(Backup) 체계 수립(서로 대체 가능한 인력 확보)<br/>
                • 업무 매뉴얼화 및 다기능 인력 육성<br/><br/>
                
                <strong>위기 발생 시:</strong><br/>
                • 결원 규모 및 직무 분석 → 우선순위가 높은 공정/업무에 인력 집중 배치<br/>
                • 타 부서 또는 협력사 파견 근무(가능한 경우)<br/>
                • 비대면 업무(재택근무) 확대 시행<br/><br/>
                
                <strong>사후 복구:</strong><br/>
                • 인력 충원 계획 수립(채용, 아웃소싱 등)<br/>
                • 건강관리·감염병 모니터링 시스템 강화
              </TableCell>
            </TableRow>

            {/* 4. 공급망 단절 */}
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>4. 공급망 단절</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>위험 요인</TableCell>
              <TableCell>
                • 원자재 공급 지연, 협력사(공급업체) 이슈, 재해 등<br/>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>영향 분석</TableCell>
              <TableCell>
                • 주요 원료 수급 불안 → 생산 차질<br/>
                • 납기 준수 실패 → 고객 이탈 및 신뢰도 하락<br/>
                • 비용 상승(긴급 운송, 대체 수입 등)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>대응 전략</TableCell>
              <TableCell>
                <strong>사전 예방:</strong><br/>
                • 핵심 원자재 및 부품 다변화(복수 공급처 확보)<br/>
                • 안전 재고량 설정 및 모니터링(필수 원자재)<br/><br/>
                
                <strong>위기 발생 시:</strong><br/>
                • 우선순위 물자 파악 후, 대체 공급업체/물류업체 협의<br/>
                • 내부 재고 현황 신속 파악 및 재고 이동(지점 사업장 간)<br/>
                • 고객사와 소통(지연 가능성 안내, 변경 납기 협의)<br/><br/>
                
                <strong>사후 복구:</strong><br/>
                • 공급망 취약점 재평가(협력사 관리 프로세스 보완)<br/>
                • 장기적 파트너십 재정비(안정성 높은 업체 선정)
              </TableCell>
            </TableRow>

            {/* 5. IT 시스템 장애 */}
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>5. IT 시스템 장애</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>위험 요인</TableCell>
              <TableCell>서버 다운, 네트워크 장애, 랜섬웨어·악성코드 공격, 전산 시스템 오류</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>영향 분석</TableCell>
              <TableCell>
                • 주문/납품 관리 시스템 사용 불가 → 실시간 생산·납품 정보 파악 지연<br/>
                • 고객정보 유출 → 회사 신뢰도 하락 및 법적 분쟁 가능성<br/>
                • 내부·외부 커뮤니케이션 채널 차단 → 대응 지연
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>대응 전략</TableCell>
              <TableCell>
                <strong>사전 예방:</strong><br/>
                • 외주업체와 협력하여 ERP 시스템 정기 백업 및 유지보수 계획 수립<br/>
                • 외주업체를 통한 보안 시스템 관리(방화벽, 백신, 침입 방지 시스템 등)<br/><br/>
                
                <strong>위기 발생 시:</strong><br/>
                • 외주업체 긴급 연락 및 신속 대응 요청<br/>
                • 대체 커뮤니케이션 채널(휴대전화, 메신저 등) 활용<br/>
                • 문서화된 수기 작업(매뉴얼 방식)으로 임시 전환<br/><br/>
                
                <strong>사후 복구:</strong><br/>
                • 외주업체와 협력하여 장애 원인 분석 및 시스템 취약점 보완<br/>
                • 장애 대응 과정 기록 및 외주업체와 함께 재발 방지 대책 수립
              </TableCell>
            </TableRow>

            {/* 6. 공통 이행·관리 사항 */}
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>6. 공통 이행·관리 사항</TableCell>
              <TableCell>
                <strong>연락망 관리:</strong><br/>
                • 비상 연락망(내부: 경영진, 담당자 / 외부: 공급사, 물류사 등)을 최신화<br/>
                • 연 1회 이상 비상연락망 점검 및 업데이트<br/><br/>
                
                <strong>문서화 및 보고:</strong><br/>
                • 각 위험 사건 발생 시, 발생 보고서 및 조치 결과 작성<br/>
                • BCP 실행 후, 경영진에게 보고하고 재발 방지계획 수립<br/><br/>
                
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default BF_RMD_GM_13_Content;
