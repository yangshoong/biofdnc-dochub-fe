import BF_RMD_GM_01_Content from './BF-RMD-GM-01_Content';
import BF_RMD_GM_02_Content from './BF-RMD-GM-02_Content';
import BF_RMD_GM_03_Content from './BF-RMD-GM-03_Content';
import BF_RMD_GM_04_Content from './BF-RMD-GM-04_Content';
import BF_RMD_GM_05_Content from './BF-RMD-GM-05_Content';
import BF_RMD_GM_06_Content from './BF-RMD-GM-06_Content';
import BF_RMD_GM_07_Content from './BF-RMD-GM-07_Content';
import BF_RMD_GM_08_Content from './BF-RMD-GM-08_Content';
import BF_RMD_GM_09_Content from './BF-RMD-GM-09_Content';
import BF_RMD_GM_10_Content from './BF-RMD-GM-10_Content';
import BF_RMD_GM_11_Content from './BF-RMD-GM-11_Content';
import BF_RMD_HM_01_Content from './BF-RMD-HM-01_Content';
import BF_RMD_HM_02_Content from './BF-RMD-HM-02_Content';
import BF_RMD_HM_03_Content from './BF-RMD-HM-03_Content';
import BF_RMD_HM_04_Content from './BF-RMD-HM-04_Content';
import BF_RMD_HM_06_Content from './BF-RMD-HM-06_Content';
import BF_RMD_HM_07_Content from './BF-RMD-HM-07_Content';
import BF_RMD_HM_08_Content from './BF-RMD-HM-08_Content';
import BF_RMD_HM_09_Content from './BF-RMD-HM-09_Content';
import BF_RMD_PM_01_Content from './BF-RMD-PM-01_Content';
import BF_RMD_PM_02_Content from './BF-RMD-PM-02_Content';
import BF_RMD_PM_03_Content from './BF-RMD-PM-03_Content';
import BF_RMD_PM_04_Content from './BF-RMD-PM-04_Content';
import BF_RMD_PM_05_Content from './BF-RMD-PM-05_Content';
import BF_RMD_PM_06_Content from './BF-RMD-PM-06_Content';
import BF_RMD_PM_08_Content from './BF-RMD-PM-08_Content';
import BF_RMD_PM_09_Content from './BF-RMD-PM-09_Content';
import BF_RMD_PM_10_Content from './BF-RMD-PM-10_Content';
import BF_RMD_PM_11_Content from './BF-RMD-PM-11_Content';
import BF_RMD_PM_12_Content from './BF-RMD-PM-12_Content';
import BF_RMD_PM_13_Content from './BF-RMD-PM-13_Content';
import BF_RMD_PM_14_Content from './BF-RMD-PM-14_Content';
import BF_RMD_QC_01_Content from './BF-RMD-QC-01_Content';
import BF_RMD_QC_02_Content from './BF-RMD-QC-02_Content';
import BF_RMD_QC_03_Content from './BF-RMD-QC-03_Content';
import BF_RMD_QC_04_Content from './BF-RMD-QC-04_Content';
import BF_RMD_QC_05_Content from './BF-RMD-QC-05_Content';
import BF_RMD_QC_06_Content from './BF-RMD-QC-06_Content';
import BF_RMD_QC_08_Content from './BF-RMD-QC-08_Content';
import BF_RMD_QC_09_Content from './BF-RMD-QC-09_Content';
import BF_RMD_QC_10_Content from './BF-RMD-QC-10_Content';

// Add more imports as needed

const contentModules = {
  'BF-RMD-GM-01': BF_RMD_GM_01_Content,
  'BF-RMD-GM-02': BF_RMD_GM_02_Content,
  'BF-RMD-GM-03': BF_RMD_GM_03_Content,
  'BF-RMD-GM-04': BF_RMD_GM_04_Content,
  'BF-RMD-GM-05': BF_RMD_GM_05_Content,
  'BF-RMD-GM-06': BF_RMD_GM_06_Content,
  'BF-RMD-GM-07': BF_RMD_GM_07_Content,
  'BF-RMD-GM-08': BF_RMD_GM_08_Content,
  'BF-RMD-GM-09': BF_RMD_GM_09_Content,
  'BF-RMD-GM-10': BF_RMD_GM_10_Content,
  'BF-RMD-GM-11': BF_RMD_GM_11_Content,
  'BF-RMD-HM-01': BF_RMD_HM_01_Content,
  'BF-RMD-HM-02': BF_RMD_HM_02_Content,
  'BF-RMD-HM-03': BF_RMD_HM_03_Content,
  'BF-RMD-HM-04': BF_RMD_HM_04_Content,
  'BF-RMD-HM-06': BF_RMD_HM_06_Content,
  'BF-RMD-HM-07': BF_RMD_HM_07_Content,
  'BF-RMD-HM-08': BF_RMD_HM_08_Content,
  'BF-RMD-HM-09': BF_RMD_HM_09_Content,
  'BF-RMD-PM-01': BF_RMD_PM_01_Content,
  'BF-RMD-PM-02': BF_RMD_PM_02_Content,
  'BF-RMD-PM-03': BF_RMD_PM_03_Content,
  'BF-RMD-PM-04': BF_RMD_PM_04_Content,
  'BF-RMD-PM-05': BF_RMD_PM_05_Content,
  'BF-RMD-PM-06': BF_RMD_PM_06_Content,
  'BF-RMD-PM-08': BF_RMD_PM_08_Content,
  'BF-RMD-PM-09': BF_RMD_PM_09_Content,
  'BF-RMD-PM-10': BF_RMD_PM_10_Content,
  'BF-RMD-PM-11': BF_RMD_PM_11_Content,
  'BF-RMD-PM-12': BF_RMD_PM_12_Content,
  'BF-RMD-PM-13': BF_RMD_PM_13_Content,
  'BF-RMD-PM-14': BF_RMD_PM_14_Content,
  'BF-RMD-QC-01': BF_RMD_QC_01_Content,
  'BF-RMD-QC-02': BF_RMD_QC_02_Content,
  'BF-RMD-QC-03': BF_RMD_QC_03_Content,
  'BF-RMD-QC-04': BF_RMD_QC_04_Content,
  'BF-RMD-QC-05': BF_RMD_QC_05_Content,
  'BF-RMD-QC-06': BF_RMD_QC_06_Content,
  'BF-RMD-QC-08': BF_RMD_QC_08_Content,
  'BF-RMD-QC-09': BF_RMD_QC_09_Content,
  'BF-RMD-QC-10': BF_RMD_QC_10_Content,
  // Add more mappings as needed
};

export default contentModules;
