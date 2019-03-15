Search.setIndex({docnames:["code_doc","constellations","examples","filters","getting_started","helpers","index","installation","links","modulators","normalization","qualityassessment","videos"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["code_doc.rst","constellations.rst","examples.rst","filters.rst","getting_started.rst","helpers.rst","index.rst","installation.rst","links.rst","modulators.rst","normalization.rst","qualityassessment.rst","videos.rst"],objects:{"":{Helpers:[5,3,0,"-"]},"Constellations.BaseConstellation":{alphabet:[1,1,1,""],bit_matrix:[1,1,1,""],gray_code:[1,2,1,""],idx2bits:[1,2,1,""],idx2symbol:[1,2,1,""],name:[1,1,1,""],show:[1,2,1,""],size:[1,2,1,""],symbol2idx:[1,2,1,""]},"Constellations.MPSKConstellation":{__init__:[1,2,1,""]},"Constellations.QAMConstellation":{__init__:[1,2,1,""]},"Constellations.ReshapedQAMConstellation":{__init__:[1,2,1,""]},"Examples.BaseExample":{constellation:[2,1,1,""],evaluate_results:[2,2,1,""],link:[2,1,1,""],modulator:[2,1,1,""],normalization:[2,1,1,""],prepare_fiber_input:[2,2,1,""],reconfigure:[2,2,1,""],run:[2,2,1,""],rx_filter:[2,1,1,""],transceive_fiber_input:[2,2,1,""],tx_filter:[2,1,1,""]},"Examples.BuelowArefIdler2016":{Tscale:[2,1,1,""],alpha:[2,1,1,""],beta2:[2,1,1,""],constellation_level:[2,1,1,""],eigenvalues:[2,1,1,""],fiber_span_length:[2,1,1,""],gamma:[2,1,1,""],n_spans:[2,1,1,""],n_steps_per_span:[2,1,1,""],noise:[2,1,1,""],noise_figure:[2,1,1,""],path_average:[2,1,1,""],post_boost:[2,1,1,""],reconfigure:[2,2,1,""],residues_amplitude:[2,1,1,""],rx_bandwidth:[2,1,1,""],tx_bandwidth:[2,1,1,""]},"Examples.GuiEtAl2018":{Ed:[2,1,1,""],Tscale:[2,1,1,""],alpha:[2,1,1,""],beta2:[2,1,1,""],constellation_level:[2,1,1,""],fiber_span_length:[2,1,1,""],gamma:[2,1,1,""],n_spans:[2,1,1,""],n_steps_per_span:[2,1,1,""],n_symbols_per_block:[2,1,1,""],noise:[2,1,1,""],noise_figure:[2,1,1,""],path_average:[2,1,1,""],post_boost:[2,1,1,""],reconfigure:[2,2,1,""],rx_bandwidth:[2,1,1,""],tx_bandwidth:[2,1,1,""]},"Examples.LeArefBuelow2017":{T0:[2,1,1,""],Tscale:[2,1,1,""],alpha:[2,1,1,""],beta2:[2,1,1,""],block_duration:[2,1,1,""],center_frequency:[2,1,1,""],constellation_level:[2,1,1,""],constellation_type:[2,1,1,""],fiber_span_length:[2,1,1,""],gamma:[2,1,1,""],n_samples:[2,1,1,""],n_spans:[2,1,1,""],n_steps_per_span:[2,1,1,""],n_symbols_per_block:[2,1,1,""],noise:[2,1,1,""],noise_figure:[2,1,1,""],path_average:[2,1,1,""],percent_precompensation:[2,1,1,""],post_boost:[2,1,1,""],power_control_factor:[2,1,1,""],reconfigure:[2,2,1,""],roll_off_factor:[2,1,1,""],rx_bandwidth:[2,1,1,""],time_shift:[2,1,1,""],tx_bandwidth:[2,1,1,""],use_power_normalization_map:[2,1,1,""]},"Filters.BaseFilter":{filter:[3,2,1,""]},"Filters.FFTLowPass":{__init__:[3,2,1,""],filter:[3,2,1,""]},"Filters.PassThrough":{filter:[3,2,1,""]},"Helpers.NFSpectrum":{__init__:[5,2,1,""],__weakref__:[5,1,1,""],cont_type:[5,1,1,""],disc_type:[5,1,1,""],show:[5,2,1,""],show_contspec_angle:[5,2,1,""],show_contspec_mag:[5,2,1,""],show_discspec:[5,2,1,""]},"Links.BaseLink":{n_spans:[8,1,1,""],span_length:[8,1,1,""],transmit:[8,2,1,""]},"Links.SMFSplitStep":{__init__:[8,2,1,""],transmit:[8,2,1,""]},"Modulators.BaseModulator":{demodulate:[9,2,1,""],modulate:[9,2,1,""],n_samples:[9,1,1,""],n_symbols_per_block:[9,1,1,""],normalized_dt:[9,1,1,""]},"Modulators.CarrierWaveforms":{flat_top:[9,4,1,""]},"Modulators.ContSpecModulator":{__init__:[9,2,1,""],demodulate:[9,2,1,""],modulate:[9,2,1,""]},"Modulators.DiscSpecModulator":{__init__:[9,2,1,""],demodulate:[9,2,1,""],modulate:[9,2,1,""]},"Normalization.BaseNormalization":{denorm_alpha:[10,2,1,""],denorm_dist:[10,2,1,""],denorm_field:[10,2,1,""],denorm_time:[10,2,1,""],norm_alpha:[10,2,1,""],norm_dist:[10,2,1,""],norm_field:[10,2,1,""],norm_time:[10,2,1,""]},"Normalization.Lossless":{__init__:[10,2,1,""],__repr__:[10,2,1,""],denorm_alpha:[10,2,1,""],denorm_dist:[10,2,1,""],denorm_field:[10,2,1,""],denorm_time:[10,2,1,""],norm_alpha:[10,2,1,""],norm_dist:[10,2,1,""],norm_field:[10,2,1,""],norm_time:[10,2,1,""]},"Normalization.Lumped":{__init__:[10,2,1,""],__repr__:[10,2,1,""]},"QualityAssessment.BitErrorRatio":{compute:[11,2,1,""]},"QualityAssessment.ConstellationDiagram":{plot:[11,2,1,""]},"QualityAssessment.ErrorVectorMagnitude":{in_dB:[11,2,1,""]},"QualityAssessment.ModulationEfficiency":{compute:[11,2,1,""]},Constellations:{BaseConstellation:[1,0,1,""],MPSKConstellation:[1,0,1,""],QAMConstellation:[1,0,1,""],ReshapedQAMConstellation:[1,0,1,""]},Examples:{BaseExample:[2,0,1,""],BuelowArefIdler2016:[2,0,1,""],GuiEtAl2018:[2,0,1,""],LeArefBuelow2017:[2,0,1,""]},Filters:{BaseFilter:[3,0,1,""],FFTLowPass:[3,0,1,""],PassThrough:[3,0,1,""]},Helpers:{NFSpectrum:[5,0,1,""],plot:[5,3,0,"-"],widgets:[5,3,0,"-"]},Links:{BaseLink:[8,0,1,""],SMFSplitStep:[8,0,1,""]},Modulators:{BaseModulator:[9,0,1,""],CarrierWaveforms:[9,3,0,"-"],ContSpecModulator:[9,0,1,""],DiscSpecModulator:[9,0,1,""]},Normalization:{BaseNormalization:[10,0,1,""],Lossless:[10,0,1,""],Lumped:[10,0,1,""]},QualityAssessment:{BitErrorRatio:[11,0,1,""],ConstellationDiagram:[11,0,1,""],ErrorVectorMagnitude:[11,0,1,""],ModulationEfficiency:[11,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","module","Python module"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method","3":"py:module","4":"py:function"},terms:{"10e3":10,"20e":10,"2db":10,"2pi":1,"32ghz":2,"42nd":2,"43rd":2,"6ns":2,"abstract":[8,9],"boolean":1,"case":[5,10],"class":[1,2,3,4,5,8,9,10,11],"default":5,"final":9,"float":[1,2,3,5,8,9,11],"function":[1,2,9],"import":[4,7],"int":[1,2,8,9,11],"new":[1,4,5,6,11],"public":[2,4,6],"return":[1,2,3,5,8,9,10,11],"short":2,"switch":10,"true":[1,2,5,8,9,11],"try":7,ASE:[2,8],Axes:5,For:[1,2,4,7],Has:5,Not:2,The:[0,1,2,3,4,5,6,9,10,11],Then:7,These:2,Use:2,Used:2,__init__:[1,3,5,8,9,10],__repr__:10,__weakref__:5,_alphabet:1,_bit_matrix:1,_constel:2,_link:2,_modul:2,_n_sampl:9,_n_span:8,_n_symbols_per_block:9,_norm_dt:9,_normal:2,_rx_filter:2,_span_length:8,_str:1,_tx_filter:2,abl:2,about:4,abov:[2,4,5],access:[2,8,9],accompani:6,accumul:8,accur:10,activ:2,adapt:2,add:[2,8],added:5,addit:2,after:[2,7,11],again:2,agreement:6,alexand:6,align:2,all:[2,3,5,7,8,9,10],allow:[1,10],alpha:[2,8,10],alphabet:[1,11],alreadi:[2,9],also:1,alwai:1,amplfic:10,amplif:[2,8,10],amplifi:[8,10],amplitud:[1,2,10],analys:4,analysi:4,analyz:4,angl:5,ani:[1,2,4,6,8,9],appli:[9,10],approach:9,approxim:9,architectur:[0,6],aref:2,argument:10,around:[4,9],arrai:[1,2,3,5,8,9,11],ask:2,assess:[0,4,6],assign:9,assum:10,attentu:10,attenu:10,attribut:[2,4,5,8,9],automat:6,avail:7,averag:[1,2],axes:5,b0_fun:1,back:10,bandlimit:9,bandwidth:[2,9,11],barrier:2,base:[1,2,3,8,9,10],baseconstel:[1,2],baseexampl:[2,4],basefilt:[2,3],baselink:[2,8],basemodul:[2,9],basenorm:10,bash:7,bashrc:7,basic:0,becom:2,been:3,befor:[2,7,9],below:[0,2,7,8,9],ber:[4,11],ber_valu:4,beta2:[2,8],between:[2,9,10,11],bisect:1,bit:[1,4,11],bit_matrix:1,biterrorr:4,biterrorratio:[4,11],block:[2,9],block_dur:2,bnd:1,bool:[1,5,8,9,11],boost:2,both:[2,9,11],bottom:9,bound:[1,5],bound_stat:5,bound_state_plot_rang:5,brehler:6,broaden:2,buelow:2,buelowarefidler2016:[2,4,7],bundl:4,burst:4,call:[2,4,5],can:[0,2,4,5,7,8,9,10],carrier:[1,2,9],carrier_spac:9,carrier_waveform_fun:9,carrierwaveform:9,ceil:1,center:[2,8],center_frequ:[2,8],chang:[2,3,6,7,9],channel:9,check:6,chimmalgi:6,choos:[2,9],classic:9,code:[1,6],coeffici:[2,5,8,9,10],column:1,com:7,command:7,commun:[2,6],compar:10,compens:[2,8,9,10],complet:[2,9],complex:[1,2,3,5,8,9,11],compon:[0,3,6,7],comput:[4,7,11],concaten:2,confer:[2,6],configur:2,connect:8,consecut:9,consequt:9,consol:2,constant:5,constel:[0,2,4,6,9,11],constellation_level:[2,4],constellation_typ:2,constellationdiagram:11,construct:[2,5,8,9,11],constructor:[1,2,3,5,8,9],cont:5,cont_typ:5,contain:[1,2,3,4,5,7,9,11],content:0,contin:5,continu:[5,9],contribut:8,contructor:1,contspec_typ:9,contspecmodul:9,correct:11,correct_symbol:11,correspond:[2,9,11],cosin:2,could:4,council:6,creat:[1,4,5,11],current:9,custom:4,cutoff_frequency_hz:3,data:[2,4,6,9],decibel:11,defin:[4,5,8,9],demo:6,demodul:[2,9],denorm:2,denorm_alpha:10,denorm_dist:10,denorm_field:10,denorm_tim:10,depend:7,deriv:[1,2,3,4,8,9,10],describ:[1,4,6,9],descrip:2,descript:[2,4],desir:[1,2],desktop:6,detail:[1,2,4,7],determin:[2,8],develop:7,diagnost:8,diagram:11,dictionari:[2,4],differ:9,directori:7,disc_typ:5,discret:5,discspecmodul:9,discuss:4,dispers:[2,8,10],distanc:[1,10],distant:3,divis:2,document:[2,4,6,7],doe:[2,3,9],domain:[2,3,4,8,9],download:7,draw:2,drawn:[2,9,11],durat:[2,11],dure:[2,5,8,9,11],each:[2,4,5,8,9],earlier:3,ecoc:2,edfa:8,effect:[2,9],effici:11,eigenvalu:[2,5,9],element:[1,2],email:6,emb:9,embed:9,emiss:8,empti:5,encod:9,encourag:2,end:[2,8],energi:[1,2,11],entri:[1,2,5],environ:6,equal:9,equat:10,equi:3,equispac:8,erc:6,error:[2,4,11],errorvectormagnitud:11,estim:[2,11],eucledian:1,european:[2,6],evalu:[2,6],evaluate_result:[2,4,7],even:2,everi:4,exampl:[0,6,7,9,10],exce:9,except:5,execut:7,exhibit:6,exist:[1,6],expect:2,experi:[2,7],expr:10,express:[1,2],extract:[7,9],factor:[2,9],fals:[1,2,5,8,9,11],fastnft:7,featur:8,fft:3,fftlowpass:3,fiber:[2,4,6,8,9,10,11],fiber_span_length:2,field:[2,10],figur:[1,2,5,8,11],figut:5,file:7,filter:[0,2,6,9],first:2,fit:1,fiter:3,fix:[6,9],flat:9,flat_top:9,fnft:7,fnftpy:7,folder:7,follow:[2,5,6,7],form:[5,10],found:0,four:5,fourier:[2,5,6,9],free:8,frequenc:[1,2,3,4,5,8,9,11],from:[1,2,3,4,6,8,9,10,11],fund:6,gain:[6,8],gamma1:10,gamma:[2,8,10],gbp:2,geisler:6,gener:[1,2,4,6,9],get:2,git:7,github:7,given:[2,9],gnu:6,goal:[1,6],grai:1,grant:6,gray_cod:1,grid:5,gross:11,gui:[1,2],guietal2018:2,gvd:10,h_sec:3,hand:2,handl:1,has:[1,6,9],have:[3,7,9],help:10,helper:[0,6,9],here:[2,9,10],high:[2,3],horizon:6,how:[4,7],http:7,ideal:2,identifc:1,idler:2,idx2bit:1,idx2symbol:1,idx:1,ignor:6,im_max:5,im_min:5,imaginari:5,impact:9,implement:[1,2,3,4,8,9],impress:6,improv:6,in_db:11,includ:[6,8,9],index:6,indic:1,individu:[2,8],induc:9,inform:4,inherit:4,initi:[1,2,5,10],innov:6,input:[1,2,3,4,8,9,11],inspect:9,instal:6,instanc:4,instruct:6,integ:[1,11],interact:7,interv:[3,9,11],invers:[9,10],ipynb:7,issu:6,its:4,itself:2,journal:2,jupyt:7,kei:[1,2],larger:9,later:6,lau:2,lead:[0,2],learefbuelow2017:2,learn:4,legend:5,length:[1,2,5,8,9,10,11],let:[2,10],level:2,lightwav:2,like:6,linear:9,link:[0,2,6,9,10],linux:7,list:[4,5,8],load:[6,7],log10:11,log2:1,longer:2,loos:2,loss:[2,8,10],lossless:10,low:[2,3],lump:[2,10],m3z:6,magnitud:[5,11],mahnk:6,mai:7,make:7,manual:[2,6],map:[1,2,9],mar:6,master:7,matplotlib:[1,5,7,11],matrix:1,mean:9,measur:2,mention:5,method:[2,4,8,9],might:6,minim:1,mode:8,modifi:[4,6],modul:[0,1,2,6,11],modulationeffici:11,more:[2,4],mpskconstel:1,multi:9,multiplex:2,multipli:[2,9],n_bit:[4,11],n_block:2,n_blocks_per_symbol:9,n_err:[4,11],n_sampl:[2,9],n_span:[2,8],n_steps_per_span:2,n_symbols_per_block:[2,9],name:1,nbit:11,need:[1,2,9],nerr:11,network:6,new_fig:[1,5,11],nfdm:2,nfdmlab:[0,4,7],nfspec:2,nfspec_rx:9,nfspec_tx:9,nfspectrum:[2,5,9],nft:9,nois:[2,8],noise_figur:[2,8],none:[2,5,11],nonlinear:[1,2,4,5,8,9,10],norm:5,norm_alpha:10,norm_dist:10,norm_dt:9,norm_field:10,norm_tim:10,normal:[0,1,2,6,9],normalizationlump:10,normalized_dist:9,normalized_dt:9,normconst:5,normobj:10,note:[1,9],notebook:7,now:4,number:[1,2,4,8,9,11],numer:2,numpi:[1,2,3,7,8,9,11],object:[2,5,10,11],observ:11,obtain:[2,9],ofc:[2,6,9],off:2,onc:7,one:[1,2,7,8],onli:[1,2,5,7,8,9,11],open:[6,7],oper:7,opt:[1,10],optic:[2,4,6,8,10],option:7,order:[2,4,8],organ:4,origin:11,other:[1,7,8],ouput:8,our:0,out:6,output:[1,2,4,8,9,11],outsid:3,overview:0,own:6,p_error:11,p_refer:11,packag:7,page:[4,6],paper:[0,2,6],paramet:[1,2,3,5,8,9,10,11],part:5,partial:2,pass:[2,3,8,9],passthrough:3,path:2,path_averag:2,pattern:[1,2,9,11],per:[1,2,9],percent:11,percent_precompens:[2,9],percentag:11,perform:[2,4],phase:[1,2,5,9],pleas:[4,6,7],plot:[2,4,5,11],point:[1,2,9,11],polar:8,port:6,posit:[1,9],possibl:[2,7,8],post_boost:[2,8],power:[1,2,9],power_control_factor:[2,9],pre:2,precompens:2,prepare_fiber_input:2,present:2,print:[2,4],privat:2,problem:6,proc:[2,9],proce:7,procedur:1,process:2,produdur:1,profil:6,programm:6,project:6,propag:[2,9],properti:[1,2,3,5,8,9],provid:[2,3,4,6,9],psk:[1,2,4],publish:2,puls:[1,2],python3:7,python:7,q_rx:[2,9,11],q_tx:[2,9,11],qam:[1,2],qamconstel:1,quadratur:1,qualiti:[0,4,6],qualityassess:[4,11],quick:4,rais:2,raman:[6,8],random:2,rang:5,rate:11,ratio:[4,11],raw:7,re_max:5,re_min:5,read:[2,4,5,8,9],real:[2,5,9],receiv:[2,4,6,9,11],received_symbol:11,recent:7,reconfigur:[2,4],recovered_symbol:11,recreat:2,reduc:10,refer:5,reflect:[5,9],releas:7,remov:[3,9],repeatedli:5,repr:10,repres:[1,2,3,8],requir:[7,8],required_dxi:9,required_normalized_dt:9,rerun:4,research:6,reshap:[1,2],reshapedqamconstel:1,residu:[5,9],residues_amplitud:[2,9],respect:[1,2],result:[2,6],reus:1,revert:9,roll:2,roll_off_factor:2,rotat:1,rotate_by_delta_half:1,routin:5,row:1,run:[2,6,7],rx_bandwidth:2,rx_data:[2,4,7],rx_filter:2,same:[1,3,5,11],sampl:[2,3,8,9],scalar:8,scale:[2,9,10],scipi:7,script:7,search:6,sec:2,section:7,see:[1,2,4,5,6,7,9,10],seed:2,seem:2,segment:8,self:[1,2,9,10],seri:8,set:[2,5,8,9],setup:7,sever:[2,5,8],shift:[1,2],should:[1,2,3,4,7,8,9,10],show:[1,2,5],show_bit:11,show_contspec_angl:5,show_contspec_mag:5,show_discspec:5,shown:[5,11],signal:[2,3,9,11],signatur:10,simpl:6,simul:[2,8,10],sinc:2,singl:8,size:1,slightli:6,small:10,smfsplitstep:8,softwar:[0,6],soliton:9,some:[2,4,7],sourc:[1,2,3,5,6,7,8,9,10,11],space:[9,10],span:[2,8],span_length:8,spatial:[2,8,10],specfici:5,specif:9,specifi:[1,2,5,8,9,11],spectra:[2,5],spectral:2,spectrum:[5,9],speed:2,spefici:5,split:[2,8],spontan:8,ssprop:[6,8],start:[6,7],state:5,step:[2,8,9],store:[4,5],str:[1,5,9,11],string:1,support:2,sure:7,symbol2idx:1,symbol:[1,2,4,9,11],symbols_rx:9,synthesi:10,system:[2,7],task:9,tau:10,techniqu:10,technolog:2,term:6,termin:7,test:6,than:9,thei:[1,2],them:[2,7,8],thi:[1,2,4,5,6,7,8,9,10],through:[2,6,8],time:[2,3,4,8,9,10,11],time_shift:2,titl:[5,11],togeth:[1,4,11],top:9,topic:6,total:11,touch:6,tracker:6,transceive_fiber_input:2,transceiver_fiber_input:2,transform:6,translat:1,transmiss:[2,4,6,8,10,11],transmit:[2,4,8,11],transmitt:[2,9],trivial:3,truncat:2,tscal:10,tscale:2,tune:2,two:[1,5,9,11],tx_bandwidth:2,tx_data:[2,4,7],tx_filter:2,type:[1,2,3,5,8,9,10,11],ubuntu:6,ubuntu_1804_instal:7,under:[4,6],union:6,unit:[1,2,9,10],updat:2,use:[2,6,7],use_power_normalization_map:[2,9],used:[1,2,4,5,7,9],user:[2,4,5,7,8,9],uses:2,using:[2,3,4,5,6,8,9,10],valu:[1,2,3,5,9,11],variabl:10,variou:0,vector:[1,2,3,5,8,9,11],verbos:8,veri:2,version:[3,6,7],via:[8,9],video:6,visibl:9,visual:9,wahl:[2,6],want:6,waveform:[1,2,9],weak:5,well:2,wget:7,what:4,when:[5,10],where:[1,3,9,11],which:[1,2,3,4,5,9],whose:1,width:[9,11],work:[2,6],world:2,would:6,write:6,written:7,wrote:6,xi_plot_rang:5,xivec:9,yangzhang:[2,9],you:[4,6,7],your:[4,7],zamp:10,zero:1,zhou:2},titles:["Code documentation","Constellations","Examples","Filters","Getting Started","Helpers","NFDMLAB: Simulating Nonlinear Frequency Division Multiplexing in Python","Installation","Links","Modulators","Normalization","Quality Assessment","Videos"],titleterms:{acknowledg:6,assess:11,automat:7,bug:6,chang:4,code:0,constel:1,contribut:6,demo:12,desktop:12,divis:6,document:0,evalu:4,exampl:[2,4],exist:4,filter:3,first:6,frequenc:6,further:6,get:[4,6],help:6,helper:5,indic:6,instal:[7,12],licens:6,link:8,load:4,manual:7,modul:9,multiplex:6,nfdmlab:[6,12],nonlinear:6,normal:10,own:4,python:6,qualiti:11,read:6,report:6,result:4,run:4,simpl:12,simul:[4,6],start:4,step:6,tabl:6,test:7,ubuntu:[7,12],under:7,video:12,write:4}})