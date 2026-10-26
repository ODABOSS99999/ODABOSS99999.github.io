// AI review of the 50-post local archive, 2026-10-16: captions and contact-sheet covers.
// Reasons describe evidence, not paid sponsorship or formal Instagram co-authorship.
export type PartnershipReview={kind:'partnership'|'personal'|'unreviewed';reason:string};
const groups:[PartnershipReview['kind'],string,string[]][]=[
 ['partnership','Brand creative project or product campaign explicitly described in the owner caption (reviewed 2026-10-26)',['18080101235545181','17969970030071338','18357006946246629','18058473749520532']],
 ['partnership','Gifted product creative content: owner caption identifies the supplied product and sending brand (reviewed 2026-10-26)',['18076301384694654','18119334575486795','17986985147858491','18121442216476205']],
 ['partnership','Mercury editorial photography or interview collaboration explicitly described in the owner caption (reviewed 2026-10-26)',['18123260671830712','17940239082091999']],
 ['partnership','Glaive concert coverage: artist named in caption and performer shown on stage in the reviewed cover (2026-10-26)',['18167362216421122']],
 ['partnership','Artist / concert coverage, supported by caption and stage photograph',['18284501827289818','18111604349466809','18117687656072162','18639790621020652','18579922954075231','18128184998508590','18024203922094277','18076426544405835','17947498050315720','18203166592372084','18090877790378171','18187454746414867','18144415966568719','17879838834535093','18103445810262996']],
 ['partnership','Commercial product photography, identified in caption and cover',['17994026724028663','17883850254502684']],
 ['partnership','Editorial photojournalism concerning UT Dallas surveillance, explained in caption',['18339773350248090']],
 ['personal','Wildlife / flower / nature photograph; no external subject partnership indicated',['18087524315314655','18059604950798636','18088761113264867','18151133245558753','18110342234221337','18097719812550566','18596618494070583','17872242045638906','18109325317883755','17948663019273239']],
 ['personal','Travel / architecture / street photograph; no assignment or external collaboration indicated',['18138943510723812','18025173884873788','18111002200890117','18221320804356544','18030687119900111','18489426460111705','18146531794493409','18095778734442063','18038095988647236','17998684238814421','18132410971676706']],
 ['personal','Personal life / friends photo collection',['18119889931954458','18129911281707563']],
 ['personal','Casual car photograph in shopping area; excluded by owner definition',['17961220425214030']],
 ['personal','Personal camera challenge / friend photo walk; not external partnership',['18109144475267988','18094154435393589','18079083833364389','18133367926647764','18106679438219863','18133907425644178']],
 ['unreviewed','Behind-the-scenes reel: cover and caption do not establish a client or external subject',['18105631976166091']],
 ['unreviewed','Mixed showcase combines nature and concert material; no single partnership attribution',['18018536483739364']],
];
export const partnershipReviews:Record<string,PartnershipReview>=Object.fromEntries(groups.flatMap(([kind,reason,ids])=>ids.map(id=>[id,{kind,reason}])));
