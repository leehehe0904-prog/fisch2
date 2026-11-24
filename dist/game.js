(()=>{var ee=(i,t,e)=>()=>{if(e)throw e[0];try{return i&&(t=i(i=0)),t}catch(n){throw e=[n],n}};var Bp=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};function Yn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Fh(i,t){return(i%t+t)%t}function ym(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function vm(i,t,e){return i!==t?(e-i)/(t-i):0}function Ir(i,t,e){return(1-e)*i+e*t}function _m(i,t,e,n){return Ir(i,t,1-Math.exp(-e*n))}function Mm(i,t=1){return t-Math.abs(Fh(i,t*2)-t)}function bm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Em(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function wm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Sm(i,t){return i+Math.random()*(t-i)}function Tm(i){return i*(.5-Math.random())}function Am(i){i!==void 0&&(Yu=i);let t=Yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rm(i){return i*Pr}function Cm(i){return i*Fr}function Pm(i){return(i&i-1)===0&&i!==0}function Im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function yf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Um(){let i=ea("canvas");return i.style.display="block",i}function Rr(i){i in Zu||(Zu[i]=!0,console.warn(i))}function Nm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Fm(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bm(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function vl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Ml(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xi.fromArray(i,r);let a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=t.dot(Xi),c=e.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Ul(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function Zm(i,t,e,n,s,r,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ii,a),l===null)return null;Po.copy(a),Po.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Po);return c<e.near||c>e.far?null:{distance:c,point:Po.clone(),object:i}}function Io(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,To),i.getVertexPosition(l,Ao),i.getVertexPosition(c,Ro);let h=Zm(i,t,e,n,To,Ao,Ro,dd);if(h){let u=new S;Ri.getBarycoord(dd,To,Ao,Ro,u),s&&(h.uv=Ri.getInterpolatedAttribute(s,a,l,c,u,new K)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,a,l,c,u,new K)),o&&(h.normal=Ri.getInterpolatedAttribute(o,a,l,c,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new S,materialIndex:0};Ri.getNormal(To,Ao,Ro,f.normal),h.face=f,h.barycoord=u}return h}function $s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=$s(i[e]);for(let s in n)t[s]=n[s]}return t}function Jm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _f(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}function Mf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function e0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function Fx(i,t,e,n,s,r,o){let a=new ot(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function x(y){let _=!1,v=m(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,_){let v=m(_);v&&(v.isCubeTexture||v.mapping===Ra)?(h===void 0&&(h=new it(new Ot(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:$s(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Yi.copy(_.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(Yi)),h.material.toneMapped=ae.getTransfer(v.colorSpace)!==me,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new it(new Fe(2,2),new Ae({name:"BackgroundMaterial",uniforms:$s(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ae.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Do,_f(i)),n.buffers.color.setClear(Do.r,Do.g,Do.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:g}}function Bx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,L,z,N,H){let Z=!1,V=u(N,z,L);r!==V&&(r=V,c(r.object)),Z=d(M,N,z,H),Z&&m(M,N,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(M,L,z,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,z){let N=z.wireframe===!0,H=n[M.id];H===void 0&&(H={},n[M.id]=H);let Z=H[L.id];Z===void 0&&(Z={},H[L.id]=Z);let V=Z[N];return V===void 0&&(V=f(l()),Z[N]=V),V}function f(M){let L=[],z=[],N=[];for(let H=0;H<e;H++)L[H]=0,z[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:N,object:M,attributes:{},index:null}}function d(M,L,z,N){let H=r.attributes,Z=L.attributes,V=0,at=z.getAttributes();for(let G in at)if(at[G].location>=0){let vt=H[G],Tt=Z[G];if(Tt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Tt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Tt=M.instanceColor)),vt===void 0||vt.attribute!==Tt||Tt&&vt.data!==Tt.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function m(M,L,z,N){let H={},Z=L.attributes,V=0,at=z.getAttributes();for(let G in at)if(at[G].location>=0){let vt=Z[G];vt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor));let Tt={};Tt.attribute=vt,vt&&vt.data&&(Tt.data=vt.data),H[G]=Tt,V++}r.attributes=H,r.attributesNum=V,r.index=N}function x(){let M=r.newAttributes;for(let L=0,z=M.length;L<z;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){let z=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;z[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),H[M]!==L&&(i.vertexAttribDivisor(M,L),H[M]=L)}function y(){let M=r.newAttributes,L=r.enabledAttributes;for(let z=0,N=L.length;z<N;z++)L[z]!==M[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function _(M,L,z,N,H,Z,V){V===!0?i.vertexAttribIPointer(M,L,z,H,Z):i.vertexAttribPointer(M,L,z,N,H,Z)}function v(M,L,z,N){x();let H=N.attributes,Z=z.getAttributes(),V=L.defaultAttributeValues;for(let at in Z){let G=Z[at];if(G.location>=0){let pt=H[at];if(pt===void 0&&(at==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),at==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),pt!==void 0){let vt=pt.normalized,Tt=pt.itemSize,Vt=t.get(pt);if(Vt===void 0)continue;let se=Vt.buffer,X=Vt.type,lt=Vt.bytesPerElement,Rt=X===i.INT||X===i.UNSIGNED_INT||pt.gpuType===Ch;if(pt.isInterleavedBufferAttribute){let J=pt.data,j=J.stride,dt=pt.offset;if(J.isInstancedInterleavedBuffer){for(let mt=0;mt<G.locationSize;mt++)p(G.location+mt,J.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let mt=0;mt<G.locationSize;mt++)g(G.location+mt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let mt=0;mt<G.locationSize;mt++)_(G.location+mt,Tt/G.locationSize,X,vt,j*lt,(dt+Tt/G.locationSize*mt)*lt,Rt)}else{if(pt.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)p(G.location+J,pt.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let J=0;J<G.locationSize;J++)g(G.location+J);i.bindBuffer(i.ARRAY_BUFFER,se);for(let J=0;J<G.locationSize;J++)_(G.location+J,Tt/G.locationSize,X,vt,Tt*lt,Tt/G.locationSize*J*lt,Rt)}}else if(V!==void 0){let vt=V[at];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(G.location,vt);break;case 3:i.vertexAttrib3fv(G.location,vt);break;case 4:i.vertexAttrib4fv(G.location,vt);break;default:i.vertexAttrib1fv(G.location,vt)}}}}y()}function P(){I();for(let M in n){let L=n[M];for(let z in L){let N=L[z];for(let H in N)h(N[H].object),delete N[H];delete L[z]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let z in L){let N=L[z];for(let H in N)h(N[H].object),delete N[H];delete L[z]}delete n[M.id]}function R(M){for(let L in n){let z=n[L];if(z[M.id]===void 0)continue;let N=z[M.id];for(let H in N)h(N[H].object),delete N[H];delete z[M.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function zx(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ox(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ui&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==qn&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:P,maxSamples:A}}function Hx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ai,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,_=y*4,v=p.clippingState||null;l.value=v,v=h(m,f,_,d);for(let P=0;P!==_;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function kx(i){let t=new WeakMap;function e(o,a){return a===oc?o.mapping=Vs:a===ac&&(o.mapping=Gs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===oc||a===ac)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new kc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function Vx(i){let t=[],e=[],n=[],s=i,r=i-Ns+1+md.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ns?l=md[o-i+Ns-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,y=new Float32Array(x*m*d),_=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let A=0;A<d;A++){let R=A%3*2/3-1,I=A>2?0:-1,E=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(E,x*m*A),_.set(f,g*m*A);let M=[A,A,A,A,A,A];v.set(M,p*m*A)}let P=new ge;P.setAttribute("position",new ce(y,x)),P.setAttribute("uv",new ce(_,g)),P.setAttribute("faceIndex",new ce(v,p)),t.push(P),s>Ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yd(i,t,e){let n=new We(i,t,e);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gx(i,t,e){let n=new Float32Array(Qi),s=new S(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function vd(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function _d(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===oc||l===ac,h=l===Vs||l===Gs;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Zs(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Zs(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Xx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qx(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let x=d[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let _=0,v=y.length;_<v;_+=3){let P=y[_+0],A=y[_+1],R=y[_+2];f.push(P,A,A,R,R,P)}}else if(m!==void 0){let y=m.array;x=m.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let P=_+0,A=_+1,R=_+2;f.push(P,A,A,R,R,P)}}else return;let g=new(yf(f)?ra:sa)(f,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function $x(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Yx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zx(i,t,e){let n=new WeakMap,s=new de;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*P*4*u),R=new ia(A,v,P,u);R.type=qn,R.needsUpdate=!0;let I=_*4;for(let M=0;M<u;M++){let L=g[M],z=p[M],N=y[M],H=v*P*4*M;for(let Z=0;Z<L.count;Z++){let V=Z*I;d===!0&&(s.fromBufferAttribute(L,Z),A[H+V+0]=s.x,A[H+V+1]=s.y,A[H+V+2]=s.z,A[H+V+3]=0),m===!0&&(s.fromBufferAttribute(z,Z),A[H+V+4]=s.x,A[H+V+5]=s.y,A[H+V+6]=s.z,A[H+V+7]=0),x===!0&&(s.fromBufferAttribute(N,Z),A[H+V+8]=s.x,A[H+V+9]=s.y,A[H+V+10]=s.z,A[H+V+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new K(v,P)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Jx(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}function ir(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bd[s];if(r===void 0&&(r=new Float32Array(s),bd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pa(i,t){let e=Ed[t];e===void 0&&(e=new Int32Array(t),Ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function ey(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Oe(e,n))return;Td.set(n),i.uniformMatrix2fv(this.addr,!1,Td),He(e,n)}}function ny(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Oe(e,n))return;Sd.set(n),i.uniformMatrix3fv(this.addr,!1,Sd),He(e,n)}}function iy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Oe(e,n))return;wd.set(n),i.uniformMatrix4fv(this.addr,!1,wd),He(e,n)}}function sy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function ly(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function dy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Md.compareFunction=xf,r=Md):r=bf,e.setTexture2D(t||r,s)}function fy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wf,s)}function py(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sf,s)}function my(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ef,s)}function gy(i){switch(i){case 5126:return Kx;case 35664:return Qx;case 35665:return jx;case 35666:return ty;case 35674:return ey;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return oy;case 35669:case 35673:return ay;case 5125:return ly;case 36294:return cy;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}function xy(i,t){i.uniform1fv(this.addr,t)}function yy(i,t){let e=ir(t,this.size,2);i.uniform2fv(this.addr,e)}function vy(i,t){let e=ir(t,this.size,3);i.uniform3fv(this.addr,e)}function _y(i,t){let e=ir(t,this.size,4);i.uniform4fv(this.addr,e)}function My(i,t){let e=ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function by(i,t){let e=ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ey(i,t){let e=ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wy(i,t){i.uniform1iv(this.addr,t)}function Sy(i,t){i.uniform2iv(this.addr,t)}function Ty(i,t){i.uniform3iv(this.addr,t)}function Ay(i,t){i.uniform4iv(this.addr,t)}function Ry(i,t){i.uniform1uiv(this.addr,t)}function Cy(i,t){i.uniform2uiv(this.addr,t)}function Py(i,t){i.uniform3uiv(this.addr,t)}function Iy(i,t){i.uniform4uiv(this.addr,t)}function Ly(i,t,e){let n=this.cache,s=t.length,r=Pa(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||bf,r[o])}function Dy(i,t,e){let n=this.cache,s=t.length,r=Pa(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wf,r[o])}function Uy(i,t,e){let n=this.cache,s=t.length,r=Pa(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sf,r[o])}function Ny(i,t,e){let n=this.cache,s=t.length,r=Pa(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ef,r[o])}function Fy(i){switch(i){case 5126:return xy;case 35664:return yy;case 35665:return vy;case 35666:return _y;case 35674:return My;case 35675:return by;case 35676:return Ey;case 5124:case 35670:return wy;case 35667:case 35671:return Sy;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Ad(i,t){i.seq.push(t),i.map[t.id]=t}function By(i,t,e){let n=i.name,s=n.length;for(Gl.lastIndex=0;;){let r=Gl.exec(n),o=Gl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ad(e,c===void 0?new Vc(a,i,t):new Gc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Wc(a),Ad(e,u)),e=u}}}function Rd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function Hy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ky(i){ae._getMatrix(Cd,ae.workingColorSpace,i);let t=`mat3( ${Cd.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Ca:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Hy(i.getShaderSource(t),o)}else return s}function Vy(i,t){let e=ky(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gy(i,t){let e;switch(t){case wh:e="Linear";break;case Sh:e="Reinhard";break;case Th:e="Cineon";break;case Kr:e="ACESFilmic";break;case Ah:e="AgX";break;case Rh:e="Neutral";break;case om:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Wy(){ae.getLuminanceCoefficients(No);let i=No.x.toFixed(4),t=No.y.toFixed(4),e=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function qy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $y(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Cr(i){return i!==""}function Id(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ld(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Xc(i){return i.replace(Yy,Jy)}function Jy(i,t){let e=te[t];if(e===void 0){let n=Zy.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xc(e)}function Dd(i){return i.replace(Ky,Qy)}function Qy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ud(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function tv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vs:case Gs:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ev(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Gs&&(t="ENVMAP_MODE_REFRACTION"),t}function nv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rf:t="ENVMAP_BLENDING_MULTIPLY";break;case sm:t="ENVMAP_BLENDING_MIX";break;case rm:t="ENVMAP_BLENDING_ADD";break}return t}function iv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function sv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=jy(e),c=tv(e),h=ev(e),u=nv(e),f=iv(e),d=Xy(e),m=qy(r),x=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Cr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(g=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?te.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Gy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Vy("linearToOutputTexel",e.outputColorSpace),Wy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Xc(o),o=Id(o,e),o=Ld(o,e),a=Xc(a),a=Id(a,e),a=Ld(a,e),o=Dd(o),a=Dd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+g+o,v=y+p+a,P=Rd(s,s.VERTEX_SHADER,_),A=Rd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,P),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(A).trim(),Z=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,A);else{let at=Pd(s,P,"vertex"),G=Pd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+at+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||H==="")&&(V=!1);V&&(L.diagnostics={runnable:Z,programLog:z,vertexShader:{log:N,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(P),s.deleteShader(A),I=new Hs(s,x),E=$y(s,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,zy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Oy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}function ov(i,t,e,n,s,r,o){let a=new Br,l=new qc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,L,z,N){let H=z.fog,Z=N.geometry,V=E.isMeshStandardMaterial?z.environment:null,at=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),G=at&&at.mapping===Ra?at.image.height:null,pt=m[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Tt=vt!==void 0?vt.length:0,Vt=0;Z.morphAttributes.position!==void 0&&(Vt=1),Z.morphAttributes.normal!==void 0&&(Vt=2),Z.morphAttributes.color!==void 0&&(Vt=3);let se,X,lt,Rt;if(pt){let ye=Xn[pt];se=ye.vertexShader,X=ye.fragmentShader}else se=E.vertexShader,X=E.fragmentShader,l.update(E),lt=l.getVertexShaderID(E),Rt=l.getFragmentShaderID(E);let J=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),dt=N.isInstancedMesh===!0,mt=N.isBatchedMesh===!0,Gt=!!E.map,$=!!E.matcap,rt=!!at,C=!!E.aoMap,Lt=!!E.lightMap,et=!!E.bumpMap,Et=!!E.normalMap,ht=!!E.displacementMap,Ht=!!E.emissiveMap,wt=!!E.metalnessMap,T=!!E.roughnessMap,b=E.anisotropy>0,B=E.clearcoat>0,q=E.dispersion>0,nt=E.iridescence>0,Y=E.sheen>0,Dt=E.transmission>0,xt=b&&!!E.anisotropyMap,St=B&&!!E.clearcoatMap,re=B&&!!E.clearcoatNormalMap,ct=B&&!!E.clearcoatRoughnessMap,Ct=nt&&!!E.iridescenceMap,Wt=nt&&!!E.iridescenceThicknessMap,Xt=Y&&!!E.sheenColorMap,Pt=Y&&!!E.sheenRoughnessMap,he=!!E.specularMap,jt=!!E.specularColorMap,_e=!!E.specularIntensityMap,D=Dt&&!!E.transmissionMap,yt=Dt&&!!E.thicknessMap,W=!!E.gradientMap,tt=!!E.alphaMap,bt=E.alphaTest>0,_t=!!E.alphaHash,Zt=!!E.extensions,Ie=Ci;E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ie=i.toneMapping);let Ze={shaderID:pt,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:X,defines:E.defines,customVertexShaderID:lt,customFragmentShaderID:Rt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:mt,batchingColor:mt&&N._colorsTexture!==null,instancing:dt,instancingColor:dt&&N.instanceColor!==null,instancingMorph:dt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:nr,alphaToCoverage:!!E.alphaToCoverage,map:Gt,matcap:$,envMap:rt,envMapMode:rt&&at.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:Lt,bumpMap:et,normalMap:Et,displacementMap:f&&ht,emissiveMap:Ht,normalMapObjectSpace:Et&&E.normalMapType===hm,normalMapTangentSpace:Et&&E.normalMapType===gf,metalnessMap:wt,roughnessMap:T,anisotropy:b,anisotropyMap:xt,clearcoat:B,clearcoatMap:St,clearcoatNormalMap:re,clearcoatRoughnessMap:ct,dispersion:q,iridescence:nt,iridescenceMap:Ct,iridescenceThicknessMap:Wt,sheen:Y,sheenColorMap:Xt,sheenRoughnessMap:Pt,specularMap:he,specularColorMap:jt,specularIntensityMap:_e,transmission:Dt,transmissionMap:D,thicknessMap:yt,gradientMap:W,opaque:E.transparent===!1&&E.blending===Bs&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:bt,alphaHash:_t,combine:E.combine,mapUv:Gt&&x(E.map.channel),aoMapUv:C&&x(E.aoMap.channel),lightMapUv:Lt&&x(E.lightMap.channel),bumpMapUv:et&&x(E.bumpMap.channel),normalMapUv:Et&&x(E.normalMap.channel),displacementMapUv:ht&&x(E.displacementMap.channel),emissiveMapUv:Ht&&x(E.emissiveMap.channel),metalnessMapUv:wt&&x(E.metalnessMap.channel),roughnessMapUv:T&&x(E.roughnessMap.channel),anisotropyMapUv:xt&&x(E.anisotropyMap.channel),clearcoatMapUv:St&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(E.sheenRoughnessMap.channel),specularMapUv:he&&x(E.specularMap.channel),specularColorMapUv:jt&&x(E.specularColorMap.channel),specularIntensityMapUv:_e&&x(E.specularIntensityMap.channel),transmissionMapUv:D&&x(E.transmissionMap.channel),thicknessMapUv:yt&&x(E.thicknessMap.channel),alphaMapUv:tt&&x(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Et||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Z.attributes.uv&&(Gt||tt),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:j,skinning:N.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Vt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Gt&&E.map.isVideoTexture===!0&&ae.getTransfer(E.map.colorSpace)===me,decodeVideoTextureEmissive:Ht&&E.emissiveMap.isVideoTexture===!0&&ae.getTransfer(E.emissiveMap.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===be,flipSided:E.side===je,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Zt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&E.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(y(M,E),_(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function _(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){let M=m[E.type],L;if(M){let z=Xn[M];L=Bi.clone(z.uniforms)}else L=E.uniforms;return L}function P(E,M){let L;for(let z=0,N=h.length;z<N;z++){let H=h[z];if(H.cacheKey===M){L=H,++L.usedTimes;break}}return L===void 0&&(L=new sv(i,M,E,r),h.push(L)),L}function A(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:I}}function av(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function lv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Nd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||lv),n.length>1&&n.sort(f||Nd),s.length>1&&s.sort(f||Nd)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function cv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Fd,i.set(n,[o])):s>=r.length?(o=new Fd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function hv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new ot};break;case"SpotLight":e={position:new S,direction:new S,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new S,halfWidth:new S,halfHeight:new S};break}return i[t.id]=e,e}}}function uv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function fv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function pv(i){let t=new hv,e=uv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);let s=new S,r=new le,o=new le;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,y=0,_=0,v=0,P=0,A=0,R=0;c.sort(fv);for(let E=0,M=c.length;E<M;E++){let L=c[E],z=L.color,N=L.intensity,H=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*N,u+=z.g*N,f+=z.b*N;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],N);R++}else if(L.isDirectionalLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let at=L.shadow,G=e.get(L);G.shadowIntensity=at.intensity,G.shadowBias=at.bias,G.shadowNormalBias=at.normalBias,G.shadowRadius=at.radius,G.shadowMapSize=at.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=V,d++}else if(L.isSpotLight){let V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(z).multiplyScalar(N),V.distance=H,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[x]=V;let at=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,at.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=at.matrix,L.castShadow){let G=e.get(L);G.shadowIntensity=at.intensity,G.shadowBias=at.bias,G.shadowNormalBias=at.normalBias,G.shadowRadius=at.radius,G.shadowMapSize=at.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=Z,v++}x++}else if(L.isRectAreaLight){let V=t.get(L);V.color.copy(z).multiplyScalar(N),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=V,g++}else if(L.isPointLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let at=L.shadow,G=e.get(L);G.shadowIntensity=at.intensity,G.shadowBias=at.bias,G.shadowNormalBias=at.normalBias,G.shadowRadius=at.radius,G.shadowMapSize=at.mapSize,G.shadowCameraNear=at.camera.near,G.shadowCameraFar=at.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=L.shadow.matrix,_++}n.point[m]=V,m++}else if(L.isHemisphereLight){let V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(N),V.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==_||I.numSpotShadows!==v||I.numSpotMaps!==P||I.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.directionalLength=d,I.pointLength=m,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=_,I.numSpotShadows=v,I.numSpotMaps=P,I.numLightProbes=R,n.version=dv++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let _=c[p];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(_.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(_.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Bd(i){let t=new pv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Bd(i),t.set(s,[a])):r>=o.length?(a=new Bd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function yv(i,t,e){let n=new zr,s=new K,r=new K,o=new de,a=new Yc({depthPacking:cm}),l=new Zc,c={},h=e.maxTextureSize,u={[Ii]:je,[je]:Ii,[be]:be},f=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:gv,fragmentShader:xv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ge;m.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sf;let p=this.type;this.render=function(A,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending($n),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let N=p!==oi&&this.type===oi,H=p===oi&&this.type!==oi;for(let Z=0,V=A.length;Z<V;Z++){let at=A[Z],G=at.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let pt=G.getFrameExtents();if(s.multiply(pt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,G.mapSize.y=r.y)),G.map===null||N===!0||H===!0){let Tt=this.type!==oi?{minFilter:_n,magFilter:_n}:{};G.map!==null&&G.map.dispose(),G.map=new We(s.x,s.y,Tt),G.map.texture.name=at.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let vt=G.getViewportCount();for(let Tt=0;Tt<vt;Tt++){let Vt=G.getViewport(Tt);o.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),z.viewport(o),G.updateMatrices(at,Tt),n=G.getFrustum(),v(R,I,G.camera,at,this.type)}G.isPointLightShadow!==!0&&this.type===oi&&y(G,I),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,M,L)};function y(A,R){let I=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new We(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,I,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,I,d,x,null)}function _(A,R,I,E){let M=null,L=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let z=M.uuid,N=R.uuid,H=c[z];H===void 0&&(H={},c[z]=H);let Z=H[N];Z===void 0&&(Z=M.clone(),H[N]=Z,R.addEventListener("dispose",P)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,E===oi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=i.properties.get(M);z.light=I}return M}function v(A,R,I,E,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===oi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let N=t.update(A),H=A.material;if(Array.isArray(H)){let Z=N.groups;for(let V=0,at=Z.length;V<at;V++){let G=Z[V],pt=H[G.materialIndex];if(pt&&pt.visible){let vt=_(A,pt,E,M);A.onBeforeShadow(i,A,R,I,N,vt,G),i.renderBufferDirect(I,null,N,vt,A,G),A.onAfterShadow(i,A,R,I,N,vt,G)}}}else if(H.visible){let Z=_(A,H,E,M);A.onBeforeShadow(i,A,R,I,N,Z,null),i.renderBufferDirect(I,null,N,Z,A,null),A.onAfterShadow(i,A,R,I,N,Z,null)}}let z=A.children;for(let N=0,H=z.length;N<H;N++)v(z[N],R,I,E,M)}function P(A){A.target.removeEventListener("dispose",P);for(let I in c){let E=c[I],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function _v(i,t){function e(){let D=!1,yt=new de,W=null,tt=new de(0,0,0,0);return{setMask:function(bt){W!==bt&&!D&&(i.colorMask(bt,bt,bt,bt),W=bt)},setLocked:function(bt){D=bt},setClear:function(bt,_t,Zt,Ie,Ze){Ze===!0&&(bt*=Ie,_t*=Ie,Zt*=Ie),yt.set(bt,_t,Zt,Ie),tt.equals(yt)===!1&&(i.clearColor(bt,_t,Zt,Ie),tt.copy(yt))},reset:function(){D=!1,W=null,tt.set(-1,0,0,0)}}}function n(){let D=!1,yt=!1,W=null,tt=null,bt=null;return{setReversed:function(_t){if(yt!==_t){let Zt=t.get("EXT_clip_control");yt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);let Ie=bt;bt=null,this.setClear(Ie)}yt=_t},getReversed:function(){return yt},setTest:function(_t){_t?J(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(_t){W!==_t&&!D&&(i.depthMask(_t),W=_t)},setFunc:function(_t){if(yt&&(_t=vv[_t]),tt!==_t){switch(_t){case jl:i.depthFunc(i.NEVER);break;case tc:i.depthFunc(i.ALWAYS);break;case ec:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case nc:i.depthFunc(i.EQUAL);break;case ic:i.depthFunc(i.GEQUAL);break;case sc:i.depthFunc(i.GREATER);break;case rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=_t}},setLocked:function(_t){D=_t},setClear:function(_t){bt!==_t&&(yt&&(_t=1-_t),i.clearDepth(_t),bt=_t)},reset:function(){D=!1,W=null,tt=null,bt=null,yt=!1}}}function s(){let D=!1,yt=null,W=null,tt=null,bt=null,_t=null,Zt=null,Ie=null,Ze=null;return{setTest:function(ye){D||(ye?J(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(ye){yt!==ye&&!D&&(i.stencilMask(ye),yt=ye)},setFunc:function(ye,Ln,jn){(W!==ye||tt!==Ln||bt!==jn)&&(i.stencilFunc(ye,Ln,jn),W=ye,tt=Ln,bt=jn)},setOp:function(ye,Ln,jn){(_t!==ye||Zt!==Ln||Ie!==jn)&&(i.stencilOp(ye,Ln,jn),_t=ye,Zt=Ln,Ie=jn)},setLocked:function(ye){D=ye},setClear:function(ye){Ze!==ye&&(i.clearStencil(ye),Ze=ye)},reset:function(){D=!1,yt=null,W=null,tt=null,bt=null,_t=null,Zt=null,Ie=null,Ze=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,y=null,_=null,v=null,P=null,A=null,R=new ot(0,0,0),I=0,E=!1,M=null,L=null,z=null,N=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,at=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=at>=1):G.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=at>=2);let pt=null,vt={},Tt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),se=new de().fromArray(Tt),X=new de().fromArray(Vt);function lt(D,yt,W,tt){let bt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(D,_t),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<W;Zt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(yt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return _t}let Rt={};Rt[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(ks),et(!1),Et(Hu),J(i.CULL_FACE),C($n);function J(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function j(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function dt(D,yt){return u[D]!==yt?(i.bindFramebuffer(D,yt),u[D]=yt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=yt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function mt(D,yt){let W=d,tt=!1;if(D){W=f.get(yt),W===void 0&&(W=[],f.set(yt,W));let bt=D.textures;if(W.length!==bt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Zt=bt.length;_t<Zt;_t++)W[_t]=i.COLOR_ATTACHMENT0+_t;W.length=bt.length,tt=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,tt=!0);tt&&i.drawBuffers(W)}function Gt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let $={[Ki]:i.FUNC_ADD,[kp]:i.FUNC_SUBTRACT,[Vp]:i.FUNC_REVERSE_SUBTRACT};$[Gp]=i.MIN,$[Wp]=i.MAX;let rt={[Xp]:i.ZERO,[qp]:i.ONE,[$p]:i.SRC_COLOR,[Kl]:i.SRC_ALPHA,[jp]:i.SRC_ALPHA_SATURATE,[Kp]:i.DST_COLOR,[Zp]:i.DST_ALPHA,[Yp]:i.ONE_MINUS_SRC_COLOR,[Ql]:i.ONE_MINUS_SRC_ALPHA,[Qp]:i.ONE_MINUS_DST_COLOR,[Jp]:i.ONE_MINUS_DST_ALPHA,[tm]:i.CONSTANT_COLOR,[em]:i.ONE_MINUS_CONSTANT_COLOR,[nm]:i.CONSTANT_ALPHA,[im]:i.ONE_MINUS_CONSTANT_ALPHA};function C(D,yt,W,tt,bt,_t,Zt,Ie,Ze,ye){if(D===$n){x===!0&&(j(i.BLEND),x=!1);return}if(x===!1&&(J(i.BLEND),x=!0),D!==Hp){if(D!==g||ye!==E){if((p!==Ki||v!==Ki)&&(i.blendEquation(i.FUNC_ADD),p=Ki,v=Ki),ye)switch(D){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFunc(i.ONE,i.ONE);break;case ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,_=null,P=null,A=null,R.set(0,0,0),I=0,g=D,E=ye}return}bt=bt||yt,_t=_t||W,Zt=Zt||tt,(yt!==p||bt!==v)&&(i.blendEquationSeparate($[yt],$[bt]),p=yt,v=bt),(W!==y||tt!==_||_t!==P||Zt!==A)&&(i.blendFuncSeparate(rt[W],rt[tt],rt[_t],rt[Zt]),y=W,_=tt,P=_t,A=Zt),(Ie.equals(R)===!1||Ze!==I)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Ze),R.copy(Ie),I=Ze),g=D,E=!1}function Lt(D,yt){D.side===be?j(i.CULL_FACE):J(i.CULL_FACE);let W=D.side===je;yt&&(W=!W),et(W),D.blending===Bs&&D.transparent===!1?C($n):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let tt=D.stencilWrite;a.setTest(tt),tt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ht(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Et(D){D!==zp?(J(i.CULL_FACE),D!==L&&(D===Hu?i.cullFace(i.BACK):D===Op?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),L=D}function ht(D){D!==z&&(V&&i.lineWidth(D),z=D)}function Ht(D,yt,W){D?(J(i.POLYGON_OFFSET_FILL),(N!==yt||H!==W)&&(i.polygonOffset(yt,W),N=yt,H=W)):j(i.POLYGON_OFFSET_FILL)}function wt(D){D?J(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+Z-1),pt!==D&&(i.activeTexture(D),pt=D)}function b(D,yt,W){W===void 0&&(pt===null?W=i.TEXTURE0+Z-1:W=pt);let tt=vt[W];tt===void 0&&(tt={type:void 0,texture:void 0},vt[W]=tt),(tt.type!==D||tt.texture!==yt)&&(pt!==W&&(i.activeTexture(W),pt=W),i.bindTexture(D,yt||Rt[D]),tt.type=D,tt.texture=yt)}function B(){let D=vt[pt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(D){se.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),se.copy(D))}function Pt(D){X.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function he(D,yt){let W=c.get(yt);W===void 0&&(W=new WeakMap,c.set(yt,W));let tt=W.get(D);tt===void 0&&(tt=i.getUniformBlockIndex(yt,D.name),W.set(D,tt))}function jt(D,yt){let tt=c.get(yt).get(D);l.get(yt)!==tt&&(i.uniformBlockBinding(yt,tt,D.__bindingPointIndex),l.set(yt,tt))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pt=null,vt={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,y=null,_=null,v=null,P=null,A=null,R=new ot(0,0,0),I=0,E=!1,M=null,L=null,z=null,N=null,H=null,se.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:j,bindFramebuffer:dt,drawBuffers:mt,useProgram:Gt,setBlending:C,setMaterial:Lt,setFlipSided:et,setCullFace:Et,setLineWidth:ht,setPolygonOffset:Ht,setScissorTest:wt,activeTexture:T,bindTexture:b,unbindTexture:B,compressedTexImage2D:q,compressedTexImage3D:nt,texImage2D:Ct,texImage3D:Wt,updateUBOMapping:he,uniformBlockBinding:jt,texStorage2D:re,texStorage3D:ct,texSubImage2D:Y,texSubImage3D:Dt,compressedTexSubImage2D:xt,compressedTexSubImage3D:St,scissor:Xt,viewport:Pt,reset:_e}}function zd(i,t,e,n){let s=Mv(n);switch(e){case hf:return i*t;case df:return i*t;case ff:return i*t*2;case Lh:return i*t/s.components*s.byteLength;case Dh:return i*t/s.components*s.byteLength;case pf:return i*t*2/s.components*s.byteLength;case Uh:return i*t*2/s.components*s.byteLength;case uf:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Nh:return i*t*4/s.components*s.byteLength;case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:case dc:return Math.max(i,16)*Math.max(t,8)/4;case cc:case uc:return Math.max(i,8)*Math.max(t,8)/2;case fc:case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qo:case Pc:case Ic:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mf:case Lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Dc:case Uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mv(i){switch(i){case ui:case af:return{byteLength:1,components:1};case Nr:case lf:case bn:return{byteLength:2,components:1};case Ph:case Ih:return{byteLength:2,components:4};case es:case Ch:case qn:return{byteLength:4,components:1};case cf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function bv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,b){return d?new OffscreenCanvas(T,b):ea("canvas")}function x(T,b,B){let q=1,nt=wt(T);if((nt.width>B||nt.height>B)&&(q=B/Math.max(nt.width,nt.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Y=Math.floor(q*nt.width),Dt=Math.floor(q*nt.height);u===void 0&&(u=m(Y,Dt));let xt=b?m(Y,Dt):u;return xt.width=Y,xt.height=Dt,xt.getContext("2d").drawImage(T,0,0,Y,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Y+"x"+Dt+")."),xt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function g(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(T,b,B,q,nt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=b;if(b===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),b===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),b===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),b===i.RGBA){let Dt=nt?Ca:ae.getTransfer(q);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Dt===me?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(T,b){let B;return T?b===null||b===es||b===Ws?B=i.DEPTH24_STENCIL8:b===qn?B=i.DEPTH32F_STENCIL8:b===Nr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===es||b===Ws?B=i.DEPTH_COMPONENT24:b===qn?B=i.DEPTH_COMPONENT32F:b===Nr&&(B=i.DEPTH_COMPONENT16),B}function P(T,b){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==_n&&T.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function A(T){let b=T.target;b.removeEventListener("dispose",A),I(b),b.isVideoTexture&&h.delete(b)}function R(T){let b=T.target;b.removeEventListener("dispose",R),M(b)}function I(T){let b=n.get(T);if(b.__webglInit===void 0)return;let B=T.source,q=f.get(B);if(q){let nt=q[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(T),Object.keys(q).length===0&&f.delete(B)}n.remove(T)}function E(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let B=T.source,q=f.get(B);delete q[b.__cacheKey],o.memory.textures--}function M(T){let b=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let nt=0;nt<b.__webglFramebuffer[q].length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[q][nt]);else i.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)i.deleteFramebuffer(b.__webglFramebuffer[q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let B=T.textures;for(let q=0,nt=B.length;q<nt;q++){let Y=n.get(B[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[q])}n.remove(T)}let L=0;function z(){L=0}function N(){let T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function H(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function Z(T,b){let B=n.get(T);if(T.isVideoTexture&&ht(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,T,b);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function V(T,b){let B=n.get(T);if(T.version>0&&B.__version!==T.version){X(B,T,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function at(T,b){let B=n.get(T);if(T.version>0&&B.__version!==T.version){X(B,T,b);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function G(T,b){let B=n.get(T);if(T.version>0&&B.__version!==T.version){lt(B,T,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}let pt={[ts]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[lc]:i.MIRRORED_REPEAT},vt={[_n]:i.NEAREST,[am]:i.NEAREST_MIPMAP_NEAREST,[mo]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[gl]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},Tt={[um]:i.NEVER,[xm]:i.ALWAYS,[dm]:i.LESS,[xf]:i.LEQUAL,[fm]:i.EQUAL,[gm]:i.GEQUAL,[pm]:i.GREATER,[mm]:i.NOTEQUAL};function Vt(T,b){if(b.type===qn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===yn||b.magFilter===gl||b.magFilter===mo||b.magFilter===ji||b.minFilter===yn||b.minFilter===gl||b.minFilter===mo||b.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,pt[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,pt[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,pt[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,vt[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,vt[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_n||b.minFilter!==mo&&b.minFilter!==ji||b.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function se(T,b){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",A));let q=b.source,nt=f.get(q);nt===void 0&&(nt={},f.set(q,nt));let Y=H(b);if(Y!==T.__cacheKey){nt[Y]===void 0&&(nt[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),nt[Y].usedTimes++;let Dt=nt[T.__cacheKey];Dt!==void 0&&(nt[T.__cacheKey].usedTimes--,Dt.usedTimes===0&&E(b)),T.__cacheKey=Y,T.__webglTexture=nt[Y].texture}return B}function X(T,b,B){let q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=i.TEXTURE_3D);let nt=se(T,b),Y=b.source;e.bindTexture(q,T.__webglTexture,i.TEXTURE0+B);let Dt=n.get(Y);if(Y.version!==Dt.__version||nt===!0){e.activeTexture(i.TEXTURE0+B);let xt=ae.getPrimaries(ae.workingColorSpace),St=b.colorSpace===Ai?null:ae.getPrimaries(b.colorSpace),re=b.colorSpace===Ai||xt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ct=x(b.image,!1,s.maxTextureSize);ct=Ht(b,ct);let Ct=r.convert(b.format,b.colorSpace),Wt=r.convert(b.type),Xt=_(b.internalFormat,Ct,Wt,b.colorSpace,b.isVideoTexture);Vt(q,b);let Pt,he=b.mipmaps,jt=b.isVideoTexture!==!0,_e=Dt.__version===void 0||nt===!0,D=Y.dataReady,yt=P(b,ct);if(b.isDepthTexture)Xt=v(b.format===Xs,b.type),_e&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Xt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Xt,ct.width,ct.height,0,Ct,Wt,null));else if(b.isDataTexture)if(he.length>0){jt&&_e&&e.texStorage2D(i.TEXTURE_2D,yt,Xt,he[0].width,he[0].height);for(let W=0,tt=he.length;W<tt;W++)Pt=he[W],jt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Pt.width,Pt.height,Ct,Wt,Pt.data):e.texImage2D(i.TEXTURE_2D,W,Xt,Pt.width,Pt.height,0,Ct,Wt,Pt.data);b.generateMipmaps=!1}else jt?(_e&&e.texStorage2D(i.TEXTURE_2D,yt,Xt,ct.width,ct.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Ct,Wt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,ct.width,ct.height,0,Ct,Wt,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){jt&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Xt,he[0].width,he[0].height,ct.depth);for(let W=0,tt=he.length;W<tt;W++)if(Pt=he[W],b.format!==vn)if(Ct!==null)if(jt){if(D)if(b.layerUpdates.size>0){let bt=zd(Pt.width,Pt.height,b.format,b.type);for(let _t of b.layerUpdates){let Zt=Pt.data.subarray(_t*bt/Pt.data.BYTES_PER_ELEMENT,(_t+1)*bt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,_t,Pt.width,Pt.height,1,Ct,Zt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Pt.width,Pt.height,ct.depth,Ct,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Xt,Pt.width,Pt.height,ct.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Pt.width,Pt.height,ct.depth,Ct,Wt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Xt,Pt.width,Pt.height,ct.depth,0,Ct,Wt,Pt.data)}else{jt&&_e&&e.texStorage2D(i.TEXTURE_2D,yt,Xt,he[0].width,he[0].height);for(let W=0,tt=he.length;W<tt;W++)Pt=he[W],b.format!==vn?Ct!==null?jt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Pt.width,Pt.height,Ct,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Xt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Pt.width,Pt.height,Ct,Wt,Pt.data):e.texImage2D(i.TEXTURE_2D,W,Xt,Pt.width,Pt.height,0,Ct,Wt,Pt.data)}else if(b.isDataArrayTexture)if(jt){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Xt,ct.width,ct.height,ct.depth),D)if(b.layerUpdates.size>0){let W=zd(ct.width,ct.height,b.format,b.type);for(let tt of b.layerUpdates){let bt=ct.data.subarray(tt*W/ct.data.BYTES_PER_ELEMENT,(tt+1)*W/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ct.width,ct.height,1,Ct,Wt,bt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Ct,Wt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,ct.width,ct.height,ct.depth,0,Ct,Wt,ct.data);else if(b.isData3DTexture)jt?(_e&&e.texStorage3D(i.TEXTURE_3D,yt,Xt,ct.width,ct.height,ct.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Ct,Wt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,ct.width,ct.height,ct.depth,0,Ct,Wt,ct.data);else if(b.isFramebufferTexture){if(_e)if(jt)e.texStorage2D(i.TEXTURE_2D,yt,Xt,ct.width,ct.height);else{let W=ct.width,tt=ct.height;for(let bt=0;bt<yt;bt++)e.texImage2D(i.TEXTURE_2D,bt,Xt,W,tt,0,Ct,Wt,null),W>>=1,tt>>=1}}else if(he.length>0){if(jt&&_e){let W=wt(he[0]);e.texStorage2D(i.TEXTURE_2D,yt,Xt,W.width,W.height)}for(let W=0,tt=he.length;W<tt;W++)Pt=he[W],jt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Ct,Wt,Pt):e.texImage2D(i.TEXTURE_2D,W,Xt,Ct,Wt,Pt);b.generateMipmaps=!1}else if(jt){if(_e){let W=wt(ct);e.texStorage2D(i.TEXTURE_2D,yt,Xt,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Wt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Xt,Ct,Wt,ct);g(b)&&p(q),Dt.__version=Y.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function lt(T,b,B){if(b.image.length!==6)return;let q=se(T,b),nt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let Y=n.get(nt);if(nt.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+B);let Dt=ae.getPrimaries(ae.workingColorSpace),xt=b.colorSpace===Ai?null:ae.getPrimaries(b.colorSpace),St=b.colorSpace===Ai||Dt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let re=b.isCompressedTexture||b.image[0].isCompressedTexture,ct=b.image[0]&&b.image[0].isDataTexture,Ct=[];for(let tt=0;tt<6;tt++)!re&&!ct?Ct[tt]=x(b.image[tt],!0,s.maxCubemapSize):Ct[tt]=ct?b.image[tt].image:b.image[tt],Ct[tt]=Ht(b,Ct[tt]);let Wt=Ct[0],Xt=r.convert(b.format,b.colorSpace),Pt=r.convert(b.type),he=_(b.internalFormat,Xt,Pt,b.colorSpace),jt=b.isVideoTexture!==!0,_e=Y.__version===void 0||q===!0,D=nt.dataReady,yt=P(b,Wt);Vt(i.TEXTURE_CUBE_MAP,b);let W;if(re){jt&&_e&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,he,Wt.width,Wt.height);for(let tt=0;tt<6;tt++){W=Ct[tt].mipmaps;for(let bt=0;bt<W.length;bt++){let _t=W[bt];b.format!==vn?Xt!==null?jt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,_t.width,_t.height,Xt,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,he,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,_t.width,_t.height,Xt,Pt,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,he,_t.width,_t.height,0,Xt,Pt,_t.data)}}}else{if(W=b.mipmaps,jt&&_e){W.length>0&&yt++;let tt=wt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,he,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ct){jt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ct[tt].width,Ct[tt].height,Xt,Pt,Ct[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,he,Ct[tt].width,Ct[tt].height,0,Xt,Pt,Ct[tt].data);for(let bt=0;bt<W.length;bt++){let Zt=W[bt].image[tt].image;jt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,Zt.width,Zt.height,Xt,Pt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,he,Zt.width,Zt.height,0,Xt,Pt,Zt.data)}}else{jt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Xt,Pt,Ct[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,he,Xt,Pt,Ct[tt]);for(let bt=0;bt<W.length;bt++){let _t=W[bt];jt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,Xt,Pt,_t.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,he,Xt,Pt,_t.image[tt])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),Y.__version=nt.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Rt(T,b,B,q,nt,Y){let Dt=r.convert(B.format,B.colorSpace),xt=r.convert(B.type),St=_(B.internalFormat,Dt,xt,B.colorSpace),re=n.get(b),ct=n.get(B);if(ct.__renderTarget=b,!re.__hasExternalTextures){let Ct=Math.max(1,b.width>>Y),Wt=Math.max(1,b.height>>Y);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Y,St,Ct,Wt,b.depth,0,Dt,xt,null):e.texImage2D(nt,Y,St,Ct,Wt,0,Dt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,nt,ct.__webglTexture,0,et(b)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,nt,ct.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(T,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){let q=b.depthTexture,nt=q&&q.isDepthTexture?q.type:null,Y=v(b.stencilBuffer,nt),Dt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=et(b);Et(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,Y,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,Y,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Y,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,T)}else{let q=b.textures;for(let nt=0;nt<q.length;nt++){let Y=q[nt],Dt=r.convert(Y.format,Y.colorSpace),xt=r.convert(Y.type),St=_(Y.internalFormat,Dt,xt,Y.colorSpace),re=et(b);B&&Et(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,St,b.width,b.height):Et(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,St,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,St,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function j(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(b.depthTexture);q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);let nt=q.__webglTexture,Y=et(b);if(b.depthTexture.format===zs)Et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(b.depthTexture.format===Xs)Et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function dt(T){let b=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){let nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",nt)};q.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=q}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");j(b.__webglFramebuffer,T)}else if(B){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=i.createRenderbuffer(),J(b.__webglDepthbuffer[q],T,!1);else{let nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),J(b.__webglDepthbuffer,T,!1);else{let q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(T,b,B){let q=n.get(T);b!==void 0&&Rt(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&dt(T)}function Gt(T){let b=T.texture,B=n.get(T),q=n.get(b);T.addEventListener("dispose",R);let nt=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Dt=nt.length>1;if(Dt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=b.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[xt]=[];for(let St=0;St<b.mipmaps.length;St++)B.__webglFramebuffer[xt][St]=i.createFramebuffer()}else B.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)B.__webglFramebuffer[xt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let xt=0,St=nt.length;xt<St;xt++){let re=n.get(nt[xt]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Et(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xt=0;xt<nt.length;xt++){let St=nt[xt];B.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[xt]);let re=r.convert(St.format,St.colorSpace),ct=r.convert(St.type),Ct=_(St.internalFormat,re,ct,St.colorSpace,T.isXRRenderTarget===!0),Wt=et(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Ct,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,B.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),J(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,b);for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)Rt(B.__webglFramebuffer[xt][St],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,St);else Rt(B.__webglFramebuffer[xt],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let xt=0,St=nt.length;xt<St;xt++){let re=nt[xt],ct=n.get(re);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),Vt(i.TEXTURE_2D,re),Rt(B.__webglFramebuffer,T,re,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),g(re)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,q.__webglTexture),Vt(xt,b),b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)Rt(B.__webglFramebuffer[St],T,b,i.COLOR_ATTACHMENT0,xt,St);else Rt(B.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,xt,0);g(b)&&p(xt),e.unbindTexture()}T.depthBuffer&&dt(T)}function $(T){let b=T.textures;for(let B=0,q=b.length;B<q;B++){let nt=b[B];if(g(nt)){let Y=y(T),Dt=n.get(nt).__webglTexture;e.bindTexture(Y,Dt),p(Y),e.unbindTexture()}}}let rt=[],C=[];function Lt(T){if(T.samples>0){if(Et(T)===!1){let b=T.textures,B=T.width,q=T.height,nt=i.COLOR_BUFFER_BIT,Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(T),xt=b.length>1;if(xt)for(let St=0;St<b.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let St=0;St<b.length;St++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[St]);let re=n.get(b[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,nt,i.NEAREST),l===!0&&(rt.length=0,C.length=0,rt.push(i.COLOR_ATTACHMENT0+St),T.depthBuffer&&T.resolveDepthBuffer===!1&&(rt.push(Y),C.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let St=0;St<b.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[St]);let re=n.get(b[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function et(T){return Math.min(s.maxSamples,T.samples)}function Et(T){let b=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ht(T){let b=o.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function Ht(T,b){let B=T.colorSpace,q=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==nr&&B!==Ai&&(ae.getTransfer(B)===me?(q!==vn||nt!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function wt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=at,this.setTextureCube=G,this.rebindTextures=mt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Et}function Ev(i,t){function e(n,s=Ai){let r,o=ae.getTransfer(s);if(n===ui)return i.UNSIGNED_BYTE;if(n===Ph)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ih)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===af)return i.BYTE;if(n===lf)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===Ch)return i.INT;if(n===es)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===hf)return i.ALPHA;if(n===uf)return i.RGB;if(n===vn)return i.RGBA;if(n===df)return i.LUMINANCE;if(n===ff)return i.LUMINANCE_ALPHA;if(n===zs)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===Lh)return i.RED;if(n===Dh)return i.RED_INTEGER;if(n===pf)return i.RG;if(n===Uh)return i.RG_INTEGER;if(n===Nh)return i.RGBA_INTEGER;if(n===Yo||n===Zo||n===Jo||n===Ko)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===hc||n===uc||n===dc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fc||n===pc)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gc||n===xc||n===yc||n===vc||n===_c||n===Mc||n===bc||n===Ec||n===wc||n===Sc||n===Tc||n===Ac||n===Rc||n===Cc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_c)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qo||n===Pc||n===Ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qo)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mf||n===Lc||n===Dc||n===Uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function Rv(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,_f(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),_=y.envMap,v=y.envMapRotation;_&&(g.envMap.value=_,Zi.copy(v),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),g.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(Zi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(m(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",g));let P=_.program;n.updateUBOMapping(y,P);let A=t.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){let _=u();y.__bindingPointIndex=_;let v=i.createBuffer(),P=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let _=s[y.id],v=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,R=v.length;A<R;A++){let I=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,M=I.length;E<M;E++){let L=I[E];if(d(L,A,E,P)===!0){let z=L.__offset,N=Array.isArray(L.value)?L.value:[L.value],H=0;for(let Z=0;Z<N.length;Z++){let V=N[Z],at=x(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,z+H,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,H),H+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,v,P){let A=y.value,R=_+"_"+v;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{let I=P[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return P[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function m(y){let _=y.uniforms,v=0,P=16;for(let R=0,I=_.length;R<I;R++){let E=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,L=E.length;M<L;M++){let z=E[M],N=Array.isArray(z.value)?z.value:[z.value];for(let H=0,Z=N.length;H<Z;H++){let V=N[H],at=x(V),G=v%P,pt=G%at.boundary,vt=G+pt;v+=pt,vt!==0&&P-vt<at.storage&&(v+=P-vt),z.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=at.storage}}}let A=v%P;return A>0&&(v+=P-A),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){let _=y.target;_.removeEventListener("dispose",g);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}function zo(i,t,e,n,s,r){Ds.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(br.x=r*Ds.x-s*Ds.y,br.y=s*Ds.x+r*Ds.y):br.copy(Ds),i.copy(t),i.x+=br.x,i.y+=br.y,i.applyMatrix4(Tf)}function ko(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(da.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),e.distanceSqToSegment(da,fa,Xl,Wd)>n)return;Xl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Xl);if(!(l<t.near||l>t.far))return{distance:l,point:Wd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function qd(i,t,e,n,s,r,o){let a=jc.distanceSqToPoint(i);if(a<e){let l=new S;jc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function Oh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function $d(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Iv(i,t){let e=1-i;return e*e*t}function Lv(i,t){return 2*(1-i)*i*t}function Dv(i,t){return i*i*t}function Dr(i,t,e,n){return Iv(i,t)+Lv(i,e)+Dv(i,n)}function Uv(i,t){let e=1-i;return e*e*e*t}function Nv(i,t){let e=1-i;return 3*e*e*i*t}function Fv(i,t){return 3*(1-i)*i*i*t}function Bv(i,t){return i*i*i*t}function Ur(i,t,e,n,s){return Uv(i,t)+Nv(i,e)+Fv(i,n)+Bv(i,s)}function Af(i,t,e,n,s){let r,o;if(s===t_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Yd(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Yd(r,i[r],i[r+1],o);return o&&Ia(o,o.next)&&(Zr(o),o=o.next),o}function ns(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ia(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $r(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Yv(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Hv(i,n,s,r):Ov(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Zr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=kv(ns(i),t,e),$r(i,t,e,n,s,r,2)):o===2&&Vv(i,t,e,n,s,r):$r(ns(i),t,e,n,s,r,1);break}}}function Ov(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Fs(s,a,r,l,o,c,m.x,m.y)&&Ce(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Hv(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ce(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=lh(d,m,t,e,n),y=lh(x,g,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Fs(a,h,l,u,c,f,_.x,_.y)&&Ce(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Fs(a,h,l,u,c,f,v.x,v.y)&&Ce(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Fs(a,h,l,u,c,f,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Fs(a,h,l,u,c,f,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function kv(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ia(s,r)&&Rf(s,n,n.next,r)&&Yr(s,r)&&Yr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Zr(n),Zr(n.next),n=i=r),n=n.next}while(n!==i);return ns(n)}function Vv(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kv(o,a)){let l=Cf(o,a);o=ns(o,o.next),l=ns(l,l.next),$r(o,t,e,n,s,r,0),$r(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Gv(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Af(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Jv(c));for(s.sort(Wv),r=0;r<s.length;r++)e=Xv(s[r],e);return e}function Wv(i,t){return i.x-t.x}function Xv(i,t){let e=qv(i,t);if(!e)return t;let n=Cf(e,i);return ns(n,n.next),ns(e,e.next)}function qv(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Fs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Yr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&$v(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function $v(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function Yv(i,t,e,n){let s=i;do s.z===0&&(s.z=lh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zv(s)}function Zv(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function lh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Kv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Qv(i,t)&&(Yr(i,t)&&Yr(t,i)&&jv(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||Ia(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ia(i,t){return i.x===t.x&&i.y===t.y}function Rf(i,t,e,n){let s=qo(Ce(i,t,e)),r=qo(Ce(i,t,n)),o=qo(Ce(e,n,i)),a=qo(Ce(e,n,t));return!!(s!==r&&o!==a||s===0&&Xo(i,e,t)||r===0&&Xo(i,n,t)||o===0&&Xo(e,i,n)||a===0&&Xo(e,t,n))}function Xo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qo(i){return i>0?1:i<0?-1:0}function Qv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Yr(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function jv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Cf(i,t){let e=new ch(i.i,i.x,i.y),n=new ch(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yd(i,t,e,n){let s=new ch(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ch(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function t_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Zd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function n_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function i_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function $o(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function s_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tf(){return performance.now()}function nf(i,t){return i.distance-t.distance}function bh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)bh(r[o],t,e,!0)}}var zp,Hu,Op,sf,Eh,oi,Ii,je,be,$n,Bs,Rn,ku,Vu,Hp,Ki,kp,Vp,Gp,Wp,Xp,qp,$p,Yp,Kl,Ql,Zp,Jp,Kp,Qp,jp,tm,em,nm,im,jl,tc,ec,ks,nc,ic,sc,rc,rf,sm,rm,Ci,wh,Sh,Th,Kr,om,Ah,Rh,of,Vs,Gs,oc,ac,Ra,ts,li,lc,_n,am,mo,yn,gl,ji,ui,af,lf,Nr,Ch,es,qn,bn,Ph,Ih,Ws,cf,hf,uf,vn,df,ff,zs,Xs,Lh,Dh,pf,Uh,Nh,Yo,Zo,Jo,Ko,cc,hc,uc,dc,fc,pc,mc,gc,xc,yc,vc,_c,Mc,bc,Ec,wc,Sc,Tc,Ac,Rc,Cc,Qo,Pc,Ic,mf,Lc,Dc,Uc,jo,Nc,xl,Gu,Wu,Xu,lm,cm,gf,hm,Ai,Le,nr,Ca,me,gs,qu,um,dm,fm,xf,pm,mm,gm,xm,Fc,rs,$u,ci,ta,Li,Je,Yu,Pr,Fr,Bh,K,Kt,yl,Zu,ae,Ju,Ku,Qu,ju,td,xs,Bc,zm,na,Om,hn,de,zc,We,ia,Oc,Mn,S,_l,ed,di,ei,Un,go,ys,vs,_s,Mi,bi,Wi,xr,xo,yo,Xi,Hm,yr,bl,fi,ni,El,vo,Ei,wl,_o,Sl,qs,le,Ms,Nn,km,Vm,wi,Mo,gn,nd,id,Cn,Br,Gm,sd,bs,ii,bo,vr,Wm,Xm,rd,od,ad,ld,qm,Es,Tl,Ne,Fn,si,Al,ri,ws,Ss,cd,Rl,Cl,Pl,Il,Ll,Dl,Ri,vf,Si,Eo,ot,Ke,$m,Zn,tn,Ue,wo,ce,sa,ra,Yt,Ym,An,Nl,Ts,xn,_r,Ve,ge,hd,qi,So,ud,To,Ao,Ro,Fl,Co,dd,Po,it,Ot,Bi,Km,Qm,Ae,oa,Ti,fd,pd,Qe,As,Rs,Hc,aa,kc,Bl,jm,t0,ai,$i,Lo,zr,Fe,n0,i0,s0,r0,o0,a0,l0,c0,h0,u0,d0,f0,p0,m0,g0,x0,y0,v0,_0,M0,b0,E0,w0,S0,T0,A0,R0,C0,P0,I0,L0,D0,U0,N0,F0,B0,z0,O0,H0,k0,V0,G0,W0,X0,q0,$0,Y0,Z0,J0,K0,Q0,j0,tg,eg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,xg,yg,vg,_g,Mg,bg,Eg,wg,Sg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ug,Ng,Fg,Bg,zg,Og,Hg,kg,Vg,Gg,Wg,Xg,qg,$g,Yg,Zg,Jg,Kg,Qg,jg,tx,ex,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,xx,yx,vx,_x,Mx,bx,Ex,wx,Sx,Tx,Ax,Rx,Cx,Px,Ix,Lx,Dx,Ux,te,gt,Xn,Do,Yi,Nx,Ys,Ns,md,Qi,zl,gd,Ol,Hl,kl,Vl,Ji,Cs,xd,Zs,la,bf,Md,Ef,wf,Sf,bd,Ed,wd,Sd,Td,Vc,Gc,Wc,Gl,Hs,zy,Oy,Cd,No,Yy,Zy,Ky,rv,qc,$c,dv,Yc,Zc,gv,xv,vv,Jc,At,wv,Lr,Sv,Tv,Kc,Qc,Zi,Av,ca,ha,Js,ua,on,Or,pi,Ps,Mr,Is,Ls,Ds,br,Tf,Fo,Er,Bo,Od,Wl,Hd,Di,Hr,kr,Us,kd,Oo,Vd,Pv,wr,Sr,Ui,Vr,da,fa,Gd,Tr,Ho,Xl,Wd,pa,Gr,Xd,jc,Vo,Go,Ks,zn,Pn,Wr,th,Wo,ql,$l,Yl,eh,ma,nh,ga,ih,xa,sh,ya,rh,oh,Xr,qr,Jn,va,It,De,ah,mi,zv,Pi,Ni,e_,gi,_a,Ma,qt,Fi,ba,Ut,Qs,js,hh,uh,dh,On,is,fh,ph,mh,Ea,ss,gh,xh,r_,yh,Jr,wa,Zl,Kd,Qd,Sa,jd,Ar,Jl,vh,tr,_h,Ta,er,Hh,o_,kh,a_,l_,c_,h_,u_,d_,f_,Mh,Re,W_,ef,Aa,Ee=ee(()=>{zp=0,Hu=1,Op=2,sf=1,Eh=2,oi=3,Ii=0,je=1,be=2,$n=0,Bs=1,Rn=2,ku=3,Vu=4,Hp=5,Ki=100,kp=101,Vp=102,Gp=103,Wp=104,Xp=200,qp=201,$p=202,Yp=203,Kl=204,Ql=205,Zp=206,Jp=207,Kp=208,Qp=209,jp=210,tm=211,em=212,nm=213,im=214,jl=0,tc=1,ec=2,ks=3,nc=4,ic=5,sc=6,rc=7,rf=0,sm=1,rm=2,Ci=0,wh=1,Sh=2,Th=3,Kr=4,om=5,Ah=6,Rh=7,of=300,Vs=301,Gs=302,oc=303,ac=304,Ra=306,ts=1e3,li=1001,lc=1002,_n=1003,am=1004,mo=1005,yn=1006,gl=1007,ji=1008,ui=1009,af=1010,lf=1011,Nr=1012,Ch=1013,es=1014,qn=1015,bn=1016,Ph=1017,Ih=1018,Ws=1020,cf=35902,hf=1021,uf=1022,vn=1023,df=1024,ff=1025,zs=1026,Xs=1027,Lh=1028,Dh=1029,pf=1030,Uh=1031,Nh=1033,Yo=33776,Zo=33777,Jo=33778,Ko=33779,cc=35840,hc=35841,uc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37808,xc=37809,yc=37810,vc=37811,_c=37812,Mc=37813,bc=37814,Ec=37815,wc=37816,Sc=37817,Tc=37818,Ac=37819,Rc=37820,Cc=37821,Qo=36492,Pc=36494,Ic=36495,mf=36283,Lc=36284,Dc=36285,Uc=36286,jo=2300,Nc=2301,xl=2302,Gu=2400,Wu=2401,Xu=2402,lm=3200,cm=3201,gf=0,hm=1,Ai="",Le="srgb",nr="srgb-linear",Ca="linear",me="srgb",gs=7680,qu=519,um=512,dm=513,fm=514,xf=515,pm=516,mm=517,gm=518,xm=519,Fc=35044,rs=35048,$u="300 es",ci=2e3,ta=2001,Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=1234567,Pr=Math.PI/180,Fr=180/Math.PI;Bh={DEG2RAD:Pr,RAD2DEG:Fr,generateUUID:Yn,clamp:ze,euclideanModulo:Fh,mapLinear:ym,inverseLerp:vm,lerp:Ir,damp:_m,pingpong:Mm,smoothstep:bm,smootherstep:Em,randInt:wm,randFloat:Sm,randFloatSpread:Tm,seededRandom:Am,degToRad:Rm,radToDeg:Cm,isPowerOfTwo:Pm,ceilPowerOfTwo:Im,floorPowerOfTwo:Lm,setQuaternionFromProperEuler:Dm,normalize:ve,denormalize:Bn},K=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],_=s[4],v=s[7],P=s[2],A=s[5],R=s[8];return r[0]=o*x+a*y+l*P,r[3]=o*g+a*_+l*A,r[6]=o*p+a*v+l*R,r[1]=c*x+h*y+u*P,r[4]=c*g+h*_+u*A,r[7]=c*p+h*v+u*R,r[2]=f*x+d*y+m*P,r[5]=f*g+d*_+m*A,r[8]=f*p+d*v+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(yl.makeScale(t,e)),this}rotate(t){return this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yl=new Kt;Zu={};ae={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=Os(i.r),i.g=Os(i.g),i.b=Os(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ai?Ca:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};Ju=[.64,.33,.3,.6,.15,.06],Ku=[.2126,.7152,.0722],Qu=[.3127,.329],ju=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[nr]:{primaries:Ju,whitePoint:Qu,transfer:Ca,toXYZ:ju,fromXYZ:td,luminanceCoefficients:Ku,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:Ju,whitePoint:Qu,transfer:me,toXYZ:ju,fromXYZ:td,luminanceCoefficients:Ku,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}});Bc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=ea("canvas")),xs.width=t.width,xs.height=t.height;let n=xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ea("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zm=0,na=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vl(s[o].image)):r.push(vl(s[o]))}else r=vl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};Om=0,hn=class i extends Li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=li,s=li,r=yn,o=ji,a=vn,l=ui,c=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Yn(),this.name="",this.source=new na(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==of)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ts:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ts:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=of;hn.DEFAULT_ANISOTROPY=1;de=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,P=(p+1)/2,A=(h+f)/4,R=(u+x)/4,I=(m+g)/4;return _>v&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=R/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=R/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zc=class extends Li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new hn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new na(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},We=class extends zc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ia=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Oc=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-a,p=l*f+c*d+h*m+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let P=Math.sqrt(_),A=Math.atan2(P,p*y);g=Math.sin(g*A)/P,a=Math.sin(a*A)/P}let v=a*y;if(l=l*g+f*v,c=c*g+d*v,h=h*g+m*v,u=u*g+x*v,g===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ed.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ed.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_l=new S,ed=new Mn,di=class{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(t.matrixWorld),this.union(go)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),xo.subVectors(this.max,xr),ys.subVectors(t.a,xr),vs.subVectors(t.b,xr),_s.subVectors(t.c,xr),Mi.subVectors(vs,ys),bi.subVectors(_s,vs),Wi.subVectors(ys,_s);let e=[0,-Mi.z,Mi.y,0,-bi.z,bi.y,0,-Wi.z,Wi.y,Mi.z,0,-Mi.x,bi.z,0,-bi.x,Wi.z,0,-Wi.x,-Mi.y,Mi.x,0,-bi.y,bi.x,0,-Wi.y,Wi.x,0];return!Ml(e,ys,vs,_s,xo)||(e=[1,0,0,0,1,0,0,0,1],!Ml(e,ys,vs,_s,xo))?!1:(yo.crossVectors(Mi,bi),e=[yo.x,yo.y,yo.z],Ml(e,ys,vs,_s,xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ei=[new S,new S,new S,new S,new S,new S,new S,new S],Un=new S,go=new di,ys=new S,vs=new S,_s=new S,Mi=new S,bi=new S,Wi=new S,xr=new S,xo=new S,yo=new S,Xi=new S;Hm=new di,yr=new S,bl=new S,fi=class{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(bl)),this.expandByPoint(yr.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ni=new S,El=new S,vo=new S,Ei=new S,wl=new S,_o=new S,Sl=new S,qs=class{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){El.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(El);let r=t.distanceTo(e)*.5,o=-this.direction.dot(vo),a=Ei.dot(this.direction),l=-Ei.dot(vo),c=Ei.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(El).addScaledVector(vo,f),d}intersectSphere(t,e){ni.subVectors(t.center,this.origin);let n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){wl.subVectors(e,t),_o.subVectors(n,t),Sl.crossVectors(wl,_o);let o=this.direction.dot(Sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,t);let l=a*this.direction.dot(_o.crossVectors(Ei,_o));if(l<0)return null;let c=a*this.direction.dot(wl.cross(Ei));if(c<0||l+c>o)return null;let h=-a*Ei.dot(Sl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),o=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(km,t,Vm)}lookAt(t,e,n){let s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),wi.crossVectors(n,gn),wi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),wi.crossVectors(n,gn)),wi.normalize(),Mo.crossVectors(gn,wi),s[0]=wi.x,s[4]=Mo.x,s[8]=gn.x,s[1]=wi.y,s[5]=Mo.y,s[9]=gn.y,s[2]=wi.z,s[6]=Mo.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],_=n[7],v=n[11],P=n[15],A=s[0],R=s[4],I=s[8],E=s[12],M=s[1],L=s[5],z=s[9],N=s[13],H=s[2],Z=s[6],V=s[10],at=s[14],G=s[3],pt=s[7],vt=s[11],Tt=s[15];return r[0]=o*A+a*M+l*H+c*G,r[4]=o*R+a*L+l*Z+c*pt,r[8]=o*I+a*z+l*V+c*vt,r[12]=o*E+a*N+l*at+c*Tt,r[1]=h*A+u*M+f*H+d*G,r[5]=h*R+u*L+f*Z+d*pt,r[9]=h*I+u*z+f*V+d*vt,r[13]=h*E+u*N+f*at+d*Tt,r[2]=m*A+x*M+g*H+p*G,r[6]=m*R+x*L+g*Z+p*pt,r[10]=m*I+x*z+g*V+p*vt,r[14]=m*E+x*N+g*at+p*Tt,r[3]=y*A+_*M+v*H+P*G,r[7]=y*R+_*L+v*Z+P*pt,r[11]=y*I+_*z+v*V+P*vt,r[15]=y*E+_*N+v*at+P*Tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=u*g*c-x*f*c+x*l*d-a*g*d-u*l*p+a*f*p,_=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,v=h*x*c-m*u*c+m*a*d-o*x*d-h*a*p+o*u*p,P=m*u*l-h*x*l-m*a*f+o*x*f+h*a*g-o*u*g,A=e*y+n*_+s*v+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=y*R,t[1]=(x*f*r-u*g*r-x*s*d+n*g*d+u*s*p-n*f*p)*R,t[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*R,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*R,t[4]=_*R,t[5]=(h*g*r-m*f*r+m*s*d-e*g*d-h*s*p+e*f*p)*R,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*R,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*R,t[8]=v*R,t[9]=(m*u*r-h*x*r-m*n*d+e*x*d+h*n*p-e*u*p)*R,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*R,t[12]=P*R,t[13]=(h*x*s-m*u*s+m*n*f-e*x*f-h*n*g+e*u*g)*R,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*g-e*a*g)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,y=l*c,_=l*h,v=l*u,P=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*P,s[1]=(d+v)*P,s[2]=(m-_)*P,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(f+p))*A,s[6]=(g+y)*A,s[7]=0,s[8]=(m+_)*R,s[9]=(g-y)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ms.set(s[0],s[1],s[2]).length(),o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);let c=1/r,h=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ci){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,m;if(a===ci)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ta)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ci){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,m,x;if(a===ci)m=(o+r)*u,x=-2*u;else if(a===ta)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ms=new S,Nn=new le,km=new S(0,0,0),Vm=new S(1,1,1),wi=new S,Mo=new S,gn=new S,nd=new le,id=new Mn,Cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return id.setFromEuler(this),this.setFromQuaternion(id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";Br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gm=0,sd=new S,bs=new Mn,ii=new le,bo=new S,vr=new S,Wm=new S,Xm=new Mn,rd=new S(1,0,0),od=new S(0,1,0),ad=new S(0,0,1),ld={type:"added"},qm={type:"removed"},Es={type:"childadded",child:null},Tl={type:"childremoved",child:null},Ne=class i extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new S,e=new Cn,n=new Mn,s=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(rd,t)}rotateY(t){return this.rotateOnAxis(od,t)}rotateZ(t){return this.rotateOnAxis(ad,t)}translateOnAxis(t,e){return sd.copy(t).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rd,t)}translateY(t){return this.translateOnAxis(od,t)}translateZ(t){return this.translateOnAxis(ad,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bo.copy(t):bo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(vr,bo,this.up):ii.lookAt(bo,vr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(ii),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ld),Es.child=t,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qm),Tl.child=t,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ld),Es.child=t,this.dispatchEvent(Es),Es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,Wm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Xm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new S(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Fn=new S,si=new S,Al=new S,ri=new S,ws=new S,Ss=new S,cd=new S,Rl=new S,Cl=new S,Pl=new S,Il=new de,Ll=new de,Dl=new de,Ri=class i{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),si.subVectors(n,e),Al.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(si),l=Fn.dot(Al),c=si.dot(si),h=si.dot(Al),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Il.setScalar(0),Ll.setScalar(0),Dl.setScalar(0),Il.fromBufferAttribute(t,e),Ll.fromBufferAttribute(t,n),Dl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Il,r.x),o.addScaledVector(Ll,r.y),o.addScaledVector(Dl,r.z),o}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),si.subVectors(t,e),Fn.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Fn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ws.subVectors(s,n),Ss.subVectors(r,n),Rl.subVectors(t,n);let l=ws.dot(Rl),c=Ss.dot(Rl);if(l<=0&&c<=0)return e.copy(n);Cl.subVectors(t,s);let h=ws.dot(Cl),u=Ss.dot(Cl);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ws,o);Pl.subVectors(t,r);let d=ws.dot(Pl),m=Ss.dot(Pl);if(m>=0&&d<=m)return e.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Ss,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return cd.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(cd,a);let p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(ws,o).addScaledVector(Ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Eo={h:0,s:0,l:0};ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Fh(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ul(o,r,t+1/3),this.g=Ul(o,r,t),this.b=Ul(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=vf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ae.fromWorkingColorSpace(Ke.copy(this),t),Math.round(ze(Ke.r*255,0,255))*65536+Math.round(ze(Ke.g*255,0,255))*256+Math.round(ze(Ke.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Le){ae.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(Eo);let n=Ir(Si.h,Eo.h,e),s=Ir(Si.s,Eo.s,e),r=Ir(Si.l,Eo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new ot;ot.NAMES=vf;$m=0,Zn=class extends Li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Yn(),this.name="",this.blending=Bs,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kl,this.blendDst=Ql,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ql&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},tn=class extends Zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ue=new S,wo=new K,ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fc,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}},sa=class extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}},ra=class extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Yt=class extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ym=0,An=new le,Nl=new Ne,Ts=new S,xn=new di,_r=new di,Ve=new S,ge=class i extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yf(t)?ra:sa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return Nl.lookAt(t),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(xn.min,_r.min),xn.expandByPoint(Ve),Ve.addVectors(xn.max,_r.max),xn.expandByPoint(Ve)):(xn.expandByPoint(_r.min),xn.expandByPoint(_r.max))}xn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ve.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),Ve.add(Ts)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ce(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new S,l[I]=new S;let c=new S,h=new S,u=new S,f=new K,d=new K,m=new K,x=new S,g=new S;function p(I,E,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),a[I].add(x),a[E].add(x),a[M].add(x),l[I].add(g),l[E].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,E=y.length;I<E;++I){let M=y[I],L=M.start,z=M.count;for(let N=L,H=L+z;N<H;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new S,v=new S,P=new S,A=new S;function R(I){P.fromBufferAttribute(s,I),A.copy(P);let E=a[I];_.copy(E),_.sub(P.multiplyScalar(P.dot(E))).normalize(),v.crossVectors(A,E);let L=v.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,L)}for(let I=0,E=y.length;I<E;++I){let M=y[I],L=M.start,z=M.count;for(let N=L,H=L+z;N<H;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new S,r=new S,o=new S,a=new S,l=new S,c=new S,h=new S,u=new S;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new ce(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hd=new le,qi=new qs,So=new fi,ud=new S,To=new S,Ao=new S,Ro=new S,Fl=new S,Co=new S,dd=new S,Po=new S,it=class extends Ne{constructor(t=new ge,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Fl.fromBufferAttribute(u,t),o?Co.addScaledVector(Fl,h):Co.addScaledVector(Fl.sub(e),h))}e.add(Co)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(So.containsPoint(qi.origin)===!1&&(qi.intersectSphere(So,ud)===null||qi.origin.distanceToSquared(ud)>(t.far-t.near)**2))&&(hd.copy(r).invert(),qi.copy(t.ray).applyMatrix4(hd),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,P=_;v<P;v+=3){let A=a.getX(v),R=a.getX(v+1),I=a.getX(v+2);s=Io(this,p,t,n,c,h,u,A,R,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=Io(this,o,t,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,P=_;v<P;v+=3){let A=v,R=v+1,I=v+2;s=Io(this,p,t,n,c,h,u,A,R,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let y=g,_=g+1,v=g+2;s=Io(this,o,t,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};Ot=class i extends ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function m(x,g,p,y,_,v,P,A,R,I,E){let M=v/R,L=P/I,z=v/2,N=P/2,H=A/2,Z=R+1,V=I+1,at=0,G=0,pt=new S;for(let vt=0;vt<V;vt++){let Tt=vt*L-N;for(let Vt=0;Vt<Z;Vt++){let se=Vt*M-z;pt[x]=se*y,pt[g]=Tt*_,pt[p]=H,c.push(pt.x,pt.y,pt.z),pt[x]=0,pt[g]=0,pt[p]=A>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(Vt/R),u.push(1-vt/I),at+=1}}for(let vt=0;vt<I;vt++)for(let Tt=0;Tt<R;Tt++){let Vt=f+Tt+Z*vt,se=f+Tt+Z*(vt+1),X=f+(Tt+1)+Z*(vt+1),lt=f+(Tt+1)+Z*vt;l.push(Vt,se,lt),l.push(se,X,lt),G+=6}a.addGroup(d,G,E),d+=G,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};Bi={clone:$s,merge:an},Km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends Zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Km,this.fragmentShader=Qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=Jm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},oa=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new S,fd=new K,pd=new K,Qe=class extends oa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,fd,pd),e.subVectors(pd,fd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},As=-90,Rs=1,Hc=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(As,Rs,t,e);s.layers=this.layers,this.add(s);let r=new Qe(As,Rs,t,e);r.layers=this.layers,this.add(r);let o=new Qe(As,Rs,t,e);o.layers=this.layers,this.add(o);let a=new Qe(As,Rs,t,e);a.layers=this.layers,this.add(a);let l=new Qe(As,Rs,t,e);l.layers=this.layers,this.add(l);let c=new Qe(As,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},aa=class extends hn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Vs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kc=class extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new aa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ot(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:$n});r.uniforms.tEquirect.value=e;let o=new it(s,r),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=yn),new Hc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Bl=new S,jm=new S,t0=new Kt,ai=class{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Bl.subVectors(n,e).cross(jm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Bl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||t0.getNormalMatrix(t),s=this.coplanarPoint(Bl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$i=new fi,Lo=new S,zr=class{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],x=s[10],g=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,g-d,v-p).normalize(),n[1].setComponents(l+r,f+c,g+d,v+p).normalize(),n[2].setComponents(l+o,f+h,g+m,v+y).normalize(),n[3].setComponents(l-o,f-h,g-m,v-y).normalize(),n[4].setComponents(l-a,f-u,g-x,v-_).normalize(),e===ci)n[5].setComponents(l+a,f+u,g+x,v+_).normalize();else if(e===ta)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Fe=class i extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*f-o;for(let _=0;_<c;_++){let v=_*u-r;m.push(v,-y,0),x.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let _=y+c*p,v=y+c*(p+1),P=y+1+c*(p+1),A=y+1+c*p;d.push(_,v,A),d.push(v,P,A)}this.setIndex(d),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,u0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,m0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,g0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,S0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ug=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ex=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:h0,batching_vertex:u0,begin_vertex:d0,beginnormal_vertex:f0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:_0,color_fragment:M0,color_pars_fragment:b0,color_pars_vertex:E0,color_vertex:w0,common:S0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:A0,displacementmap_pars_vertex:R0,displacementmap_vertex:C0,emissivemap_fragment:P0,emissivemap_pars_fragment:I0,colorspace_fragment:L0,colorspace_pars_fragment:D0,envmap_fragment:U0,envmap_common_pars_fragment:N0,envmap_pars_fragment:F0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:Y0,envmap_vertex:z0,fog_vertex:O0,fog_pars_vertex:H0,fog_fragment:k0,fog_pars_fragment:V0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:$0,lights_toon_fragment:Z0,lights_toon_pars_fragment:J0,lights_phong_fragment:K0,lights_phong_pars_fragment:Q0,lights_physical_fragment:j0,lights_physical_pars_fragment:tg,lights_fragment_begin:eg,lights_fragment_maps:ng,lights_fragment_end:ig,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:ag,map_fragment:lg,map_pars_fragment:cg,map_particle_fragment:hg,map_particle_pars_fragment:ug,metalnessmap_fragment:dg,metalnessmap_pars_fragment:fg,morphinstance_vertex:pg,morphcolor_vertex:mg,morphnormal_vertex:gg,morphtarget_pars_vertex:xg,morphtarget_vertex:yg,normal_fragment_begin:vg,normal_fragment_maps:_g,normal_pars_fragment:Mg,normal_pars_vertex:bg,normal_vertex:Eg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:Ag,iridescence_pars_fragment:Rg,opaque_fragment:Cg,packing:Pg,premultiplied_alpha_fragment:Ig,project_vertex:Lg,dithering_fragment:Dg,dithering_pars_fragment:Ug,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:Og,shadowmask_pars_fragment:Hg,skinbase_vertex:kg,skinning_pars_vertex:Vg,skinning_vertex:Gg,skinnormal_vertex:Wg,specularmap_fragment:Xg,specularmap_pars_fragment:qg,tonemapping_fragment:$g,tonemapping_pars_fragment:Yg,transmission_fragment:Zg,transmission_pars_fragment:Jg,uv_pars_fragment:Kg,uv_pars_vertex:Qg,uv_vertex:jg,worldpos_vertex:tx,background_vert:ex,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:sx,cube_vert:rx,cube_frag:ox,depth_vert:ax,depth_frag:lx,distanceRGBA_vert:cx,distanceRGBA_frag:hx,equirect_vert:ux,equirect_frag:dx,linedashed_vert:fx,linedashed_frag:px,meshbasic_vert:mx,meshbasic_frag:gx,meshlambert_vert:xx,meshlambert_frag:yx,meshmatcap_vert:vx,meshmatcap_frag:_x,meshnormal_vert:Mx,meshnormal_frag:bx,meshphong_vert:Ex,meshphong_frag:wx,meshphysical_vert:Sx,meshphysical_frag:Tx,meshtoon_vert:Ax,meshtoon_frag:Rx,points_vert:Cx,points_frag:Px,shadow_vert:Ix,shadow_frag:Lx,sprite_vert:Dx,sprite_frag:Ux},gt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Xn={basic:{uniforms:an([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:an([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new ot(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:an([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:an([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:an([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new ot(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:an([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:an([gt.points,gt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:an([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:an([gt.common,gt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:an([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:an([gt.sprite,gt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:an([gt.common,gt.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:an([gt.lights,gt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Xn.physical={uniforms:an([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};Do={r:0,b:0,g:0},Yi=new Cn,Nx=new le;Ys=class extends oa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ns=4,md=[.125,.215,.35,.446,.526,.582],Qi=20,zl=new Ys,gd=new ot,Ol=null,Hl=0,kl=0,Vl=!1,Ji=(1+Math.sqrt(5))/2,Cs=1/Ji,xd=[new S(-Ji,Cs,0),new S(Ji,Cs,0),new S(-Cs,0,Ji),new S(Cs,0,Ji),new S(0,Ji,-Cs),new S(0,Ji,Cs),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],Zs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ol=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ol,Hl,kl),this._renderer.xr.enabled=Vl,t.scissorTest=!1,Uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ol=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:bn,format:vn,colorSpace:nr,depthBuffer:!1},s=yd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vx(r)),this._blurMaterial=Gx(r,t,e)}return s}_compileMaterial(t){let e=new it(this._lodPlanes[0],t);this._renderer.compile(e,zl)}_sceneToCubeUV(t,e,n,s){let a=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(gd),h.toneMapping=Ci,h.autoClear=!1;let d=new tn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),m=new it(new Ot,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(gd),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Uo(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Vs||t.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Uo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,zl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xd[(s-r-1)%xd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new it(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Qi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Qi;g>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qi}`);let p=[],y=0;for(let R=0;R<Qi;++R){let I=R/x,E=Math.exp(-I*I/2);p.push(E),R===0?y+=E:R<g&&(y+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;let v=this._sizeLods[s],P=3*v*(s>_-Ns?s-_+Ns:0),A=4*(this._cubeSize-v);Uo(e,P,A,3*v,2*v),l.setRenderTarget(e),l.render(u,zl)}};la=class extends hn{constructor(t,e,n,s,r,o,a,l,c,h=zs){if(h!==zs&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=es),n===void 0&&h===Xs&&(n=Ws),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bf=new hn,Md=new la(1,1),Ef=new ia,wf=new Oc,Sf=new aa,bd=[],Ed=[],wd=new Float32Array(16),Sd=new Float32Array(9),Td=new Float32Array(4);Vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gy(e.type)}},Gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fy(e.type)}},Wc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Gl=/(\w+)(\])?(\[|\.)?/g;Hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);By(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};zy=37297,Oy=0;Cd=new Kt;No=new S;Yy=/^[ \t]*#include +<([\w\d./]+)>/gm;Zy=new Map;Ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;rv=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $c(t),e.set(t,n)),n}},$c=class{constructor(t){this.id=rv++,this.code=t,this.usedTimes=0}};dv=0;Yc=class extends Zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zc=class extends Zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;vv={[jl]:tc,[ec]:sc,[nc]:rc,[ks]:ic,[tc]:jl,[sc]:ec,[rc]:nc,[ic]:ks};Jc=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},At=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},wv={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new At;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new hn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ae({vertexShader:Sv,fragmentShader:Tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Fe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qc=class extends Li{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=new Kc,g=e.getContextAttributes(),p=null,y=null,_=[],v=[],P=new K,A=null,R=new Qe;R.viewport=new de;let I=new Qe;I.viewport=new de;let E=[R,I],M=new Jc,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let lt=_[X];return lt===void 0&&(lt=new Lr,_[X]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(X){let lt=_[X];return lt===void 0&&(lt=new Lr,_[X]=lt),lt.getGripSpace()},this.getHand=function(X){let lt=_[X];return lt===void 0&&(lt=new Lr,_[X]=lt),lt.getHandSpace()};function N(X){let lt=v.indexOf(X.inputSource);if(lt===-1)return;let Rt=_[lt];Rt!==void 0&&(Rt.update(X.inputSource,X.frame,c||o),Rt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<_.length;X++){let lt=v[X];lt!==null&&(v[X]=null,_[X].disconnect(lt))}L=null,z=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,y=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let lt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new We(d.framebufferWidth,d.framebufferHeight,{format:vn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let lt=null,Rt=null,J=null;g.depth&&(J=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=g.stencil?Xs:zs,Rt=g.stencil?Ws:es);let j={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(j),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new We(f.textureWidth,f.textureHeight,{format:vn,type:ui,depthTexture:new la(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(X){for(let lt=0;lt<X.removed.length;lt++){let Rt=X.removed[lt],J=v.indexOf(Rt);J>=0&&(v[J]=null,_[J].disconnect(Rt))}for(let lt=0;lt<X.added.length;lt++){let Rt=X.added[lt],J=v.indexOf(Rt);if(J===-1){for(let dt=0;dt<_.length;dt++)if(dt>=v.length){v.push(Rt),J=dt;break}else if(v[dt]===null){v[dt]=Rt,J=dt;break}if(J===-1)break}let j=_[J];j&&j.connect(Rt)}}let V=new S,at=new S;function G(X,lt,Rt){V.setFromMatrixPosition(lt.matrixWorld),at.setFromMatrixPosition(Rt.matrixWorld);let J=V.distanceTo(at),j=lt.projectionMatrix.elements,dt=Rt.projectionMatrix.elements,mt=j[14]/(j[10]-1),Gt=j[14]/(j[10]+1),$=(j[9]+1)/j[5],rt=(j[9]-1)/j[5],C=(j[8]-1)/j[0],Lt=(dt[8]+1)/dt[0],et=mt*C,Et=mt*Lt,ht=J/(-C+Lt),Ht=ht*-C;if(lt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ht),X.translateZ(ht),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),j[10]===-1)X.projectionMatrix.copy(lt.projectionMatrix),X.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let wt=mt+ht,T=Gt+ht,b=et-Ht,B=Et+(J-Ht),q=$*Gt/T*wt,nt=rt*Gt/T*wt;X.projectionMatrix.makePerspective(b,B,q,nt,wt,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function pt(X,lt){lt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(lt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let lt=X.near,Rt=X.far;x.texture!==null&&(x.depthNear>0&&(lt=x.depthNear),x.depthFar>0&&(Rt=x.depthFar)),M.near=I.near=R.near=lt,M.far=I.far=R.far=Rt,(L!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,z=M.far),R.layers.mask=X.layers.mask|2,I.layers.mask=X.layers.mask|4,M.layers.mask=R.layers.mask|I.layers.mask;let J=X.parent,j=M.cameras;pt(M,J);for(let dt=0;dt<j.length;dt++)pt(j[dt],J);j.length===2?G(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),vt(X,M,J)};function vt(X,lt,Rt){Rt===null?X.matrix.copy(lt.matrixWorld):(X.matrix.copy(Rt.matrixWorld),X.matrix.invert(),X.matrix.multiply(lt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(lt.projectionMatrix),X.projectionMatrixInverse.copy(lt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Tt=null;function Vt(X,lt){if(h=lt.getViewerPose(c||o),m=lt,h!==null){let Rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let J=!1;Rt.length!==M.cameras.length&&(M.cameras.length=0,J=!0);for(let dt=0;dt<Rt.length;dt++){let mt=Rt[dt],Gt=null;if(d!==null)Gt=d.getViewport(mt);else{let rt=u.getViewSubImage(f,mt);Gt=rt.viewport,dt===0&&(t.setRenderTargetTextures(y,rt.colorTexture,f.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(y))}let $=E[dt];$===void 0&&($=new Qe,$.layers.enable(dt),$.viewport=new de,E[dt]=$),$.matrix.fromArray(mt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(mt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),dt===0&&(M.matrix.copy($.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),J===!0&&M.cameras.push($)}let j=s.enabledFeatures;if(j&&j.includes("depth-sensing")){let dt=u.getDepthInformation(Rt[0]);dt&&dt.isValid&&dt.texture&&x.init(t,dt,s.renderState)}}for(let Rt=0;Rt<_.length;Rt++){let J=v[Rt],j=_[Rt];J!==null&&j!==void 0&&j.update(J,lt,c||o)}Tt&&Tt(X,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),m=null}let se=new Mf;se.setAnimationLoop(Vt),this.setAnimationLoop=function(X){Tt=X},this.dispose=function(){}}},Zi=new Cn,Av=new le;ca=class{constructor(t={}){let{canvas:e=Um(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=Ci,this.toneMappingExposure=1;let v=this,P=!1,A=0,R=0,I=null,E=-1,M=null,L=new de,z=new de,N=null,H=new ot(0),Z=0,V=e.width,at=e.height,G=1,pt=null,vt=null,Tt=new de(0,0,V,at),Vt=new de(0,0,V,at),se=!1,X=new zr,lt=!1,Rt=!1,J=new le,j=new le,dt=new S,mt=new de,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function rt(){return I===null?G:1}let C=n;function Lt(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),C===null){let U="webgl2";if(C=Lt(U,w),C===null)throw Lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let et,Et,ht,Ht,wt,T,b,B,q,nt,Y,Dt,xt,St,re,ct,Ct,Wt,Xt,Pt,he,jt,_e,D;function yt(){et=new Xx(C),et.init(),jt=new Ev(C,et),Et=new Ox(C,et,t,jt),ht=new _v(C,et),Et.reverseDepthBuffer&&f&&ht.buffers.depth.setReversed(!0),Ht=new Yx(C),wt=new av,T=new bv(C,et,ht,wt,Et,jt,Ht),b=new kx(v),B=new Wx(v),q=new e0(C),_e=new Bx(C,q),nt=new qx(C,q,Ht,_e),Y=new Jx(C,nt,q,Ht),Xt=new Zx(C,Et,T),ct=new Hx(wt),Dt=new ov(v,b,B,et,Et,_e,ct),xt=new Rv(v,wt),St=new cv,re=new mv(et),Wt=new Fx(v,b,B,ht,Y,d,l),Ct=new yv(v,Y,Et),D=new Cv(C,Ht,Et,ht),Pt=new zx(C,et,Ht),he=new $x(C,et,Ht),Ht.programs=Dt.programs,v.capabilities=Et,v.extensions=et,v.properties=wt,v.renderLists=St,v.shadowMap=Ct,v.state=ht,v.info=Ht}yt();let W=new Qc(v,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(V,at,!1))},this.getSize=function(w){return w.set(V,at)},this.setSize=function(w,U,O=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,at=U,e.width=Math.floor(w*G),e.height=Math.floor(U*G),O===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(V*G,at*G).floor()},this.setDrawingBufferSize=function(w,U,O){V=w,at=U,G=O,e.width=Math.floor(w*O),e.height=Math.floor(U*O),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Tt)},this.setViewport=function(w,U,O,k){w.isVector4?Tt.set(w.x,w.y,w.z,w.w):Tt.set(w,U,O,k),ht.viewport(L.copy(Tt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Vt)},this.setScissor=function(w,U,O,k){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,U,O,k),ht.scissor(z.copy(Vt).multiplyScalar(G).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){ht.setScissorTest(se=w)},this.setOpaqueSort=function(w){pt=w},this.setTransparentSort=function(w){vt=w},this.getClearColor=function(w){return w.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(w=!0,U=!0,O=!0){let k=0;if(w){let F=!1;if(I!==null){let ut=I.texture.format;F=ut===Nh||ut===Uh||ut===Dh}if(F){let ut=I.texture.type,Mt=ut===ui||ut===es||ut===Nr||ut===Ws||ut===Ph||ut===Ih,Nt=Wt.getClearColor(),Ft=Wt.getClearAlpha(),$t=Nt.r,Jt=Nt.g,Bt=Nt.b;Mt?(m[0]=$t,m[1]=Jt,m[2]=Bt,m[3]=Ft,C.clearBufferuiv(C.COLOR,0,m)):(x[0]=$t,x[1]=Jt,x[2]=Bt,x[3]=Ft,C.clearBufferiv(C.COLOR,0,x))}else k|=C.COLOR_BUFFER_BIT}U&&(k|=C.DEPTH_BUFFER_BIT),O&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),St.dispose(),re.dispose(),wt.dispose(),b.dispose(),B.dispose(),Y.dispose(),_e.dispose(),D.dispose(),Dt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Lu),W.removeEventListener("sessionend",Du),Gi.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let w=Ht.autoReset,U=Ct.enabled,O=Ct.autoUpdate,k=Ct.needsUpdate,F=Ct.type;yt(),Ht.autoReset=w,Ct.enabled=U,Ct.autoUpdate=O,Ct.needsUpdate=k,Ct.type=F}function _t(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Zt(w){let U=w.target;U.removeEventListener("dispose",Zt),Ie(U)}function Ie(w){Ze(w),wt.remove(w)}function Ze(w){let U=wt.get(w).programs;U!==void 0&&(U.forEach(function(O){Dt.releaseProgram(O)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,O,k,F,ut){U===null&&(U=Gt);let Mt=F.isMesh&&F.matrixWorld.determinant()<0,Nt=Up(w,U,O,k,F);ht.setMaterial(k,Mt);let Ft=O.index,$t=1;if(k.wireframe===!0){if(Ft=nt.getWireframeAttribute(O),Ft===void 0)return;$t=2}let Jt=O.drawRange,Bt=O.attributes.position,ue=Jt.start*$t,Me=(Jt.start+Jt.count)*$t;ut!==null&&(ue=Math.max(ue,ut.start*$t),Me=Math.min(Me,(ut.start+ut.count)*$t)),Ft!==null?(ue=Math.max(ue,0),Me=Math.min(Me,Ft.count)):Bt!=null&&(ue=Math.max(ue,0),Me=Math.min(Me,Bt.count));let Se=Me-ue;if(Se<0||Se===1/0)return;_e.setup(F,k,Nt,O,Ft);let cn,fe=Pt;if(Ft!==null&&(cn=q.get(Ft),fe=he,fe.setIndex(cn)),F.isMesh)k.wireframe===!0?(ht.setLineWidth(k.wireframeLinewidth*rt()),fe.setMode(C.LINES)):fe.setMode(C.TRIANGLES);else if(F.isLine){let zt=k.linewidth;zt===void 0&&(zt=1),ht.setLineWidth(zt*rt()),F.isLineSegments?fe.setMode(C.LINES):F.isLineLoop?fe.setMode(C.LINE_LOOP):fe.setMode(C.LINE_STRIP)}else F.isPoints?fe.setMode(C.POINTS):F.isSprite&&fe.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)fe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))fe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let zt=F._multiDrawStarts,ti=F._multiDrawCounts,pe=F._multiDrawCount,Dn=Ft?q.get(Ft).bytesPerElement:1,ms=wt.get(k).currentProgram.getUniforms();for(let mn=0;mn<pe;mn++)ms.setValue(C,"_gl_DrawID",mn),fe.render(zt[mn]/Dn,ti[mn])}else if(F.isInstancedMesh)fe.renderInstances(ue,Se,F.count);else if(O.isInstancedBufferGeometry){let zt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ti=Math.min(O.instanceCount,zt);fe.renderInstances(ue,Se,ti)}else fe.render(ue,Se)};function ye(w,U,O){w.transparent===!0&&w.side===be&&w.forceSinglePass===!1?(w.side=je,w.needsUpdate=!0,po(w,U,O),w.side=Ii,w.needsUpdate=!0,po(w,U,O),w.side=be):po(w,U,O)}this.compile=function(w,U,O=null){O===null&&(O=w),p=re.get(O),p.init(U),_.push(p),O.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==O&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let k=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ut=F.material;if(ut)if(Array.isArray(ut))for(let Mt=0;Mt<ut.length;Mt++){let Nt=ut[Mt];ye(Nt,O,F),k.add(Nt)}else ye(ut,O,F),k.add(ut)}),_.pop(),p=null,k},this.compileAsync=function(w,U,O=null){let k=this.compile(w,U,O);return new Promise(F=>{function ut(){if(k.forEach(function(Mt){wt.get(Mt).currentProgram.isReady()&&k.delete(Mt)}),k.size===0){F(w);return}setTimeout(ut,10)}et.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Ln=null;function jn(w){Ln&&Ln(w)}function Lu(){Gi.stop()}function Du(){Gi.start()}let Gi=new Mf;Gi.setAnimationLoop(jn),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(w){Ln=w,W.setAnimationLoop(w),w===null?Gi.stop():Gi.start()},W.addEventListener("sessionstart",Lu),W.addEventListener("sessionend",Du),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,I),p=re.get(w,_.length),p.init(U),_.push(p),j.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(j),Rt=this.localClippingEnabled,lt=ct.init(this.clippingPlanes,Rt),g=St.get(w,y.length),g.init(),y.push(g),W.enabled===!0&&W.isPresenting===!0){let ut=v.xr.getDepthSensingMesh();ut!==null&&ml(ut,U,-1/0,v.sortObjects)}ml(w,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(pt,vt),$=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,$&&Wt.addToRenderList(g,w),this.info.render.frame++,lt===!0&&ct.beginShadows();let O=p.state.shadowsArray;Ct.render(O,w,U),lt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=g.opaque,F=g.transmissive;if(p.setupLights(),U.isArrayCamera){let ut=U.cameras;if(F.length>0)for(let Mt=0,Nt=ut.length;Mt<Nt;Mt++){let Ft=ut[Mt];Nu(k,F,w,Ft)}$&&Wt.render(w);for(let Mt=0,Nt=ut.length;Mt<Nt;Mt++){let Ft=ut[Mt];Uu(g,w,Ft,Ft.viewport)}}else F.length>0&&Nu(k,F,w,U),$&&Wt.render(w),Uu(g,w,U);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(v,w,U),_e.resetDefaultState(),E=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],lt===!0&&ct.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function ml(w,U,O,k){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)O=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){k&&mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(j);let Mt=Y.update(w),Nt=w.material;Nt.visible&&g.push(w,Mt,Nt,O,mt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){let Mt=Y.update(w),Nt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),mt.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),mt.copy(Mt.boundingSphere.center)),mt.applyMatrix4(w.matrixWorld).applyMatrix4(j)),Array.isArray(Nt)){let Ft=Mt.groups;for(let $t=0,Jt=Ft.length;$t<Jt;$t++){let Bt=Ft[$t],ue=Nt[Bt.materialIndex];ue&&ue.visible&&g.push(w,Mt,ue,O,mt.z,Bt)}}else Nt.visible&&g.push(w,Mt,Nt,O,mt.z,null)}}let ut=w.children;for(let Mt=0,Nt=ut.length;Mt<Nt;Mt++)ml(ut[Mt],U,O,k)}function Uu(w,U,O,k){let F=w.opaque,ut=w.transmissive,Mt=w.transparent;p.setupLightsView(O),lt===!0&&ct.setGlobalState(v.clippingPlanes,O),k&&ht.viewport(L.copy(k)),F.length>0&&fo(F,U,O),ut.length>0&&fo(ut,U,O),Mt.length>0&&fo(Mt,U,O),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Nu(w,U,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new We(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?bn:ui,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let ut=p.state.transmissionRenderTarget[k.id],Mt=k.viewport||L;ut.setSize(Mt.z,Mt.w);let Nt=v.getRenderTarget();v.setRenderTarget(ut),v.getClearColor(H),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),$&&Wt.render(O);let Ft=v.toneMapping;v.toneMapping=Ci;let $t=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),lt===!0&&ct.setGlobalState(v.clippingPlanes,k),fo(w,O,k),T.updateMultisampleRenderTarget(ut),T.updateRenderTargetMipmap(ut),et.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Bt=0,ue=U.length;Bt<ue;Bt++){let Me=U[Bt],Se=Me.object,cn=Me.geometry,fe=Me.material,zt=Me.group;if(fe.side===be&&Se.layers.test(k.layers)){let ti=fe.side;fe.side=je,fe.needsUpdate=!0,Fu(Se,O,k,cn,fe,zt),fe.side=ti,fe.needsUpdate=!0,Jt=!0}}Jt===!0&&(T.updateMultisampleRenderTarget(ut),T.updateRenderTargetMipmap(ut))}v.setRenderTarget(Nt),v.setClearColor(H,Z),$t!==void 0&&(k.viewport=$t),v.toneMapping=Ft}function fo(w,U,O){let k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ut=w.length;F<ut;F++){let Mt=w[F],Nt=Mt.object,Ft=Mt.geometry,$t=k===null?Mt.material:k,Jt=Mt.group;Nt.layers.test(O.layers)&&Fu(Nt,U,O,Ft,$t,Jt)}}function Fu(w,U,O,k,F,ut){w.onBeforeRender(v,U,O,k,F,ut),w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,U,O,k,w,ut),F.transparent===!0&&F.side===be&&F.forceSinglePass===!1?(F.side=je,F.needsUpdate=!0,v.renderBufferDirect(O,U,k,F,w,ut),F.side=Ii,F.needsUpdate=!0,v.renderBufferDirect(O,U,k,F,w,ut),F.side=be):v.renderBufferDirect(O,U,k,F,w,ut),w.onAfterRender(v,U,O,k,F,ut)}function po(w,U,O){U.isScene!==!0&&(U=Gt);let k=wt.get(w),F=p.state.lights,ut=p.state.shadowsArray,Mt=F.state.version,Nt=Dt.getParameters(w,F.state,ut,U,O),Ft=Dt.getProgramCacheKey(Nt),$t=k.programs;k.environment=w.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(w.isMeshStandardMaterial?B:b).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,$t===void 0&&(w.addEventListener("dispose",Zt),$t=new Map,k.programs=$t);let Jt=$t.get(Ft);if(Jt!==void 0){if(k.currentProgram===Jt&&k.lightsStateVersion===Mt)return zu(w,Nt),Jt}else Nt.uniforms=Dt.getUniforms(w),w.onBeforeCompile(Nt,v),Jt=Dt.acquireProgram(Nt,Ft),$t.set(Ft,Jt),k.uniforms=Nt.uniforms;let Bt=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=ct.uniform),zu(w,Nt),k.needsLights=Fp(w),k.lightsStateVersion=Mt,k.needsLights&&(Bt.ambientLightColor.value=F.state.ambient,Bt.lightProbe.value=F.state.probe,Bt.directionalLights.value=F.state.directional,Bt.directionalLightShadows.value=F.state.directionalShadow,Bt.spotLights.value=F.state.spot,Bt.spotLightShadows.value=F.state.spotShadow,Bt.rectAreaLights.value=F.state.rectArea,Bt.ltc_1.value=F.state.rectAreaLTC1,Bt.ltc_2.value=F.state.rectAreaLTC2,Bt.pointLights.value=F.state.point,Bt.pointLightShadows.value=F.state.pointShadow,Bt.hemisphereLights.value=F.state.hemi,Bt.directionalShadowMap.value=F.state.directionalShadowMap,Bt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Bt.spotShadowMap.value=F.state.spotShadowMap,Bt.spotLightMatrix.value=F.state.spotLightMatrix,Bt.spotLightMap.value=F.state.spotLightMap,Bt.pointShadowMap.value=F.state.pointShadowMap,Bt.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Jt,k.uniformsList=null,Jt}function Bu(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Hs.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function zu(w,U){let O=wt.get(w);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Up(w,U,O,k,F){U.isScene!==!0&&(U=Gt),T.resetTextureUnits();let ut=U.fog,Mt=k.isMeshStandardMaterial?U.environment:null,Nt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:nr,Ft=(k.isMeshStandardMaterial?B:b).get(k.envMap||Mt),$t=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Jt=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Bt=!!O.morphAttributes.position,ue=!!O.morphAttributes.normal,Me=!!O.morphAttributes.color,Se=Ci;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Se=v.toneMapping);let cn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,fe=cn!==void 0?cn.length:0,zt=wt.get(k),ti=p.state.lights;if(lt===!0&&(Rt===!0||w!==M)){let Tn=w===M&&k.id===E;ct.setState(k,w,Tn)}let pe=!1;k.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ti.state.version||zt.outputColorSpace!==Nt||F.isBatchedMesh&&zt.batching===!1||!F.isBatchedMesh&&zt.batching===!0||F.isBatchedMesh&&zt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&zt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&zt.instancing===!1||!F.isInstancedMesh&&zt.instancing===!0||F.isSkinnedMesh&&zt.skinning===!1||!F.isSkinnedMesh&&zt.skinning===!0||F.isInstancedMesh&&zt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&zt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&zt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&zt.instancingMorph===!1&&F.morphTexture!==null||zt.envMap!==Ft||k.fog===!0&&zt.fog!==ut||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ct.numPlanes||zt.numIntersection!==ct.numIntersection)||zt.vertexAlphas!==$t||zt.vertexTangents!==Jt||zt.morphTargets!==Bt||zt.morphNormals!==ue||zt.morphColors!==Me||zt.toneMapping!==Se||zt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,zt.__version=k.version);let Dn=zt.currentProgram;pe===!0&&(Dn=po(k,U,F));let ms=!1,mn=!1,mr=!1,Te=Dn.getUniforms(),Wn=zt.uniforms;if(ht.useProgram(Dn.program)&&(ms=!0,mn=!0,mr=!0),k.id!==E&&(E=k.id,mn=!0),ms||M!==w){ht.buffers.depth.getReversed()?(J.copy(w.projectionMatrix),Fm(J),Bm(J),Te.setValue(C,"projectionMatrix",J)):Te.setValue(C,"projectionMatrix",w.projectionMatrix),Te.setValue(C,"viewMatrix",w.matrixWorldInverse);let vi=Te.map.cameraPosition;vi!==void 0&&vi.setValue(C,dt.setFromMatrixPosition(w.matrixWorld)),Et.logarithmicDepthBuffer&&Te.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Te.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,mn=!0,mr=!0)}if(F.isSkinnedMesh){Te.setOptional(C,F,"bindMatrix"),Te.setOptional(C,F,"bindMatrixInverse");let Tn=F.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Te.setValue(C,"boneTexture",Tn.boneTexture,T))}F.isBatchedMesh&&(Te.setOptional(C,F,"batchingTexture"),Te.setValue(C,"batchingTexture",F._matricesTexture,T),Te.setOptional(C,F,"batchingIdTexture"),Te.setValue(C,"batchingIdTexture",F._indirectTexture,T),Te.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&Te.setValue(C,"batchingColorTexture",F._colorsTexture,T));let gr=O.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&Xt.update(F,O,Dn),(mn||zt.receiveShadow!==F.receiveShadow)&&(zt.receiveShadow=F.receiveShadow,Te.setValue(C,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Wn.envMap.value=Ft,Wn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Wn.envMapIntensity.value=U.environmentIntensity),mn&&(Te.setValue(C,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&Np(Wn,mr),ut&&k.fog===!0&&xt.refreshFogUniforms(Wn,ut),xt.refreshMaterialUniforms(Wn,k,G,at,p.state.transmissionRenderTarget[w.id]),Hs.upload(C,Bu(zt),Wn,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Hs.upload(C,Bu(zt),Wn,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Te.setValue(C,"center",F.center),Te.setValue(C,"modelViewMatrix",F.modelViewMatrix),Te.setValue(C,"normalMatrix",F.normalMatrix),Te.setValue(C,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Tn=k.uniformsGroups;for(let vi=0,_i=Tn.length;vi<_i;vi++){let Ou=Tn[vi];D.update(Ou,Dn),D.bind(Ou,Dn)}}return Dn}function Np(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Fp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,U,O){wt.get(w.texture).__webglTexture=U,wt.get(w.depthTexture).__webglTexture=O;let k=wt.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let O=wt.get(w);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,O=0){I=w,A=U,R=O;let k=!0,F=null,ut=!1,Mt=!1;if(w){let Ft=wt.get(w);if(Ft.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(Ft.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Ft.__hasExternalTextures)T.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Bt=w.depthTexture;if(Ft.__boundDepthTexture!==Bt){if(Bt!==null&&wt.has(Bt)&&(w.width!==Bt.image.width||w.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Mt=!0);let Jt=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Jt[U])?F=Jt[U][O]:F=Jt[U],ut=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?F=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(Jt)?F=Jt[O]:F=Jt,L.copy(w.viewport),z.copy(w.scissor),N=w.scissorTest}else L.copy(Tt).multiplyScalar(G).floor(),z.copy(Vt).multiplyScalar(G).floor(),N=se;if(ht.bindFramebuffer(C.FRAMEBUFFER,F)&&k&&ht.drawBuffers(w,F),ht.viewport(L),ht.scissor(z),ht.setScissorTest(N),ut){let Ft=wt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ft.__webglTexture,O)}else if(Mt){let Ft=wt.get(w.texture),$t=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,O||0,$t)}E=-1},this.readRenderTargetPixels=function(w,U,O,k,F,ut,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Nt=Nt[Mt]),Nt){ht.bindFramebuffer(C.FRAMEBUFFER,Nt);try{let Ft=w.texture,$t=Ft.format,Jt=Ft.type;if(!Et.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-k&&O>=0&&O<=w.height-F&&C.readPixels(U,O,k,F,jt.convert($t),jt.convert(Jt),ut)}finally{let Ft=I!==null?wt.get(I).__webglFramebuffer:null;ht.bindFramebuffer(C.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(w,U,O,k,F,ut,Mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Nt=Nt[Mt]),Nt){let Ft=w.texture,$t=Ft.format,Jt=Ft.type;if(!Et.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-k&&O>=0&&O<=w.height-F){ht.bindFramebuffer(C.FRAMEBUFFER,Nt);let Bt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Bt),C.bufferData(C.PIXEL_PACK_BUFFER,ut.byteLength,C.STREAM_READ),C.readPixels(U,O,k,F,jt.convert($t),jt.convert(Jt),0);let ue=I!==null?wt.get(I).__webglFramebuffer:null;ht.bindFramebuffer(C.FRAMEBUFFER,ue);let Me=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Nm(C,Me,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Bt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ut),C.deleteBuffer(Bt),C.deleteSync(Me),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,O=0){w.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let k=Math.pow(2,-O),F=Math.floor(w.image.width*k),ut=Math.floor(w.image.height*k),Mt=U!==null?U.x:0,Nt=U!==null?U.y:0;T.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,O,0,0,Mt,Nt,F,ut),ht.unbindTexture()},this.copyTextureToTexture=function(w,U,O=null,k=null,F=0){w.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1],U=arguments[2],F=arguments[3]||0,O=null);let ut,Mt,Nt,Ft,$t,Jt,Bt,ue,Me,Se=w.isCompressedTexture?w.mipmaps[F]:w.image;O!==null?(ut=O.max.x-O.min.x,Mt=O.max.y-O.min.y,Nt=O.isBox3?O.max.z-O.min.z:1,Ft=O.min.x,$t=O.min.y,Jt=O.isBox3?O.min.z:0):(ut=Se.width,Mt=Se.height,Nt=Se.depth||1,Ft=0,$t=0,Jt=0),k!==null?(Bt=k.x,ue=k.y,Me=k.z):(Bt=0,ue=0,Me=0);let cn=jt.convert(U.format),fe=jt.convert(U.type),zt;U.isData3DTexture?(T.setTexture3D(U,0),zt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),zt=C.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),zt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let ti=C.getParameter(C.UNPACK_ROW_LENGTH),pe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Dn=C.getParameter(C.UNPACK_SKIP_PIXELS),ms=C.getParameter(C.UNPACK_SKIP_ROWS),mn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Se.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Se.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,$t),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Jt);let mr=w.isDataArrayTexture||w.isData3DTexture,Te=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Wn=wt.get(w),gr=wt.get(U),Tn=wt.get(Wn.__renderTarget),vi=wt.get(gr.__renderTarget);ht.bindFramebuffer(C.READ_FRAMEBUFFER,Tn.__webglFramebuffer),ht.bindFramebuffer(C.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let _i=0;_i<Nt;_i++)mr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,F,Jt+_i),w.isDepthTexture?(Te&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,wt.get(U).__webglTexture,F,Me+_i),C.blitFramebuffer(Ft,$t,ut,Mt,Bt,ue,ut,Mt,C.DEPTH_BUFFER_BIT,C.NEAREST)):Te?C.copyTexSubImage3D(zt,F,Bt,ue,Me+_i,Ft,$t,ut,Mt):C.copyTexSubImage2D(zt,F,Bt,ue,Me+_i,Ft,$t,ut,Mt);ht.bindFramebuffer(C.READ_FRAMEBUFFER,null),ht.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Te?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(zt,F,Bt,ue,Me,ut,Mt,Nt,cn,fe,Se.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(zt,F,Bt,ue,Me,ut,Mt,Nt,cn,Se.data):C.texSubImage3D(zt,F,Bt,ue,Me,ut,Mt,Nt,cn,fe,Se):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,Bt,ue,ut,Mt,cn,fe,Se.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,Bt,ue,Se.width,Se.height,cn,Se.data):C.texSubImage2D(C.TEXTURE_2D,F,Bt,ue,ut,Mt,cn,fe,Se);C.pixelStorei(C.UNPACK_ROW_LENGTH,ti),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Dn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ms),C.pixelStorei(C.UNPACK_SKIP_IMAGES,mn),F===0&&U.generateMipmaps&&C.generateMipmap(zt),ht.unbindTexture()},this.copyTextureToTexture3D=function(w,U,O=null,k=null,F=0){return w.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,w=arguments[2],U=arguments[3],F=arguments[4]||0),Rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,O,k,F)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),ht.unbindTexture()},this.resetState=function(){A=0,R=0,I=null,ht.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}},ha=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Js=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ua=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fc,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new S,Or=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pi=class extends Zn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mr=new S,Is=new S,Ls=new S,Ds=new K,br=new K,Tf=new le,Fo=new S,Er=new S,Bo=new S,Od=new K,Wl=new K,Hd=new K,Di=class extends Ne{constructor(t=new pi){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ua(e,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new Or(n,3,0,!1)),Ps.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=Ps,this.material=t,this.center=new K(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),Tf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Ls.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;zo(Fo.set(-.5,-.5,0),Ls,o,Is,s,r),zo(Er.set(.5,-.5,0),Ls,o,Is,s,r),zo(Bo.set(.5,.5,0),Ls,o,Is,s,r),Od.set(0,0),Wl.set(1,0),Hd.set(1,1);let a=t.ray.intersectTriangle(Fo,Er,Bo,!1,Mr);if(a===null&&(zo(Er.set(-.5,.5,0),Ls,o,Is,s,r),Wl.set(0,1),a=t.ray.intersectTriangle(Fo,Bo,Er,!1,Mr),a===null))return;let l=t.ray.origin.distanceTo(Mr);l<t.near||l>t.far||e.push({distance:l,point:Mr.clone(),uv:Ri.getInterpolation(Mr,Fo,Er,Bo,Od,Wl,Hd,new K),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Hr=class extends hn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=_n,h=_n,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kr=class extends ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Us=new le,kd=new le,Oo=[],Vd=new di,Pv=new le,wr=new it,Sr=new fi,Ui=class extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),Vd.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(Vd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),Sr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(n),t.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),kd.multiplyMatrices(n,Us),wr.matrixWorld=kd,wr.raycast(t,Oo);for(let o=0,a=Oo.length;o<a;o++){let l=Oo[o];l.instanceId=r,l.object=this,e.push(l)}Oo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hr(new Float32Array(s*this.count),s,this.count,Lh,qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Vr=class extends Zn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},da=new S,fa=new S,Gd=new le,Tr=new qs,Ho=new fi,Xl=new S,Wd=new S,pa=class extends Ne{constructor(t=new ge,e=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)da.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=da.distanceTo(fa);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,t.ray.intersectsSphere(Ho)===!1)return;Gd.copy(s).invert(),Tr.copy(t.ray).applyMatrix4(Gd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),y=h.getX(x+1),_=ko(this,t,Tr,l,p,y);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=ko(this,t,Tr,l,x,g);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=ko(this,t,Tr,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=ko(this,t,Tr,l,m-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Gr=class extends Zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xd=new le,jc=new qs,Vo=new fi,Go=new S,Ks=class extends Ne{constructor(t=new ge,e=new Gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,t.ray.intersectsSphere(Vo)===!1)return;Xd.copy(s).invert(),jc.copy(t.ray).applyMatrix4(Xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);Go.fromBufferAttribute(u,g),qd(Go,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Go.fromBufferAttribute(u,m),qd(Go,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};zn=class extends hn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new K:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new S,s=[],r=[],o=[],a=new S,l=new le;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ze(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ze(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Wr=class extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new K){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},th=class extends Wr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Wo=new S,ql=new Oh,$l=new Oh,Yl=new Oh,eh=class extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new S){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Wo.subVectors(s[0],s[1]).add(s[0]),c=Wo);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),ql.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),$l.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),Yl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(ql.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),$l.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Yl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ql.calc(l),$l.calc(l),Yl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new S().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};ma=class extends Pn{constructor(t=new K,e=new K,n=new K,s=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new K){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(t,s.x,r.x,o.x,a.x),Ur(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nh=class extends Pn{constructor(t=new S,e=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new S){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(t,s.x,r.x,o.x,a.x),Ur(t,s.y,r.y,o.y,a.y),Ur(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ga=class extends Pn{constructor(t=new K,e=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new K){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ih=class extends Pn{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xa=class extends Pn{constructor(t=new K,e=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new K){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Dr(t,s.x,r.x,o.x),Dr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sh=class extends Pn{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Dr(t,s.x,r.x,o.x),Dr(t,s.y,r.y,o.y),Dr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new K){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set($d(a,l.x,c.x,h.x,u.x),$d(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new K().fromArray(s))}return this}},rh=Object.freeze({__proto__:null,ArcCurve:th,CatmullRomCurve3:eh,CubicBezierCurve:ma,CubicBezierCurve3:nh,EllipseCurve:Wr,LineCurve:ga,LineCurve3:ih,QuadraticBezierCurve:xa,QuadraticBezierCurve3:sh,SplineCurve:ya}),oh=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new rh[s.type]().fromJSON(s))}return this}},Xr=class extends oh{constructor(t){super(),this.type="Path",this.currentPoint=new K,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ga(this.currentPoint.clone(),new K(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new xa(this.currentPoint.clone(),new K(t,e),new K(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ma(this.currentPoint.clone(),new K(t,e),new K(n,s),new K(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ya(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Wr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},qr=class i extends ge{constructor(t=[new K(0,-.5),new K(.5,0),new K(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new S,f=new K,d=new S,m=new S,x=new S,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let y=0;y<=e;y++){let _=n+y*h*s,v=Math.sin(_),P=Math.cos(_);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*v,u.y=t[A].y,u.z=t[A].x*P,o.push(u.x,u.y,u.z),f.x=y/e,f.y=A/(t.length-1),a.push(f.x,f.y);let R=l[3*A+0]*v,I=l[3*A+1],E=l[3*A+0]*P;c.push(R,I,E)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,P=v,A=v+t.length,R=v+t.length+1,I=v+1;r.push(P,A,I),r.push(R,I,A)}this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Jn=class i extends qr{constructor(t=1,e=1,n=4,s=8){let r=new Xr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},va=class i extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new S,h=new K;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},It=class i extends ge{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=n/2,p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function y(){let v=new S,P=new S,A=0,R=(e-t)/n;for(let I=0;I<=r;I++){let E=[],M=I/r,L=M*(e-t)+t;for(let z=0;z<=s;z++){let N=z/s,H=N*l+a,Z=Math.sin(H),V=Math.cos(H);P.x=L*Z,P.y=-M*n+g,P.z=L*V,u.push(P.x,P.y,P.z),v.set(Z,R,V).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-M),E.push(m++)}x.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){let M=x[E][I],L=x[E+1][I],z=x[E+1][I+1],N=x[E][I+1];(t>0||E!==0)&&(h.push(M,L,N),A+=3),(e>0||E!==r-1)&&(h.push(L,z,N),A+=3)}c.addGroup(p,A,0),p+=A}function _(v){let P=m,A=new K,R=new S,I=0,E=v===!0?t:e,M=v===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),m++;let L=m;for(let z=0;z<=s;z++){let H=z/s*l+a,Z=Math.cos(H),V=Math.sin(H);R.x=E*V,R.y=g*M,R.z=E*Z,u.push(R.x,R.y,R.z),f.push(0,M,0),A.x=Z*.5+.5,A.y=V*.5*M+.5,d.push(A.x,A.y),m++}for(let z=0;z<s;z++){let N=P+z,H=L+z;v===!0?h.push(H,H+1,N):h.push(H+1,H,N),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},De=class i extends It{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ah=class i extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new S,v=new S,P=new S;for(let A=0;A<e.length;A+=3)d(e[A+0],_),d(e[A+1],v),d(e[A+2],P),l(_,v,P,y)}function l(y,_,v,P){let A=P+1,R=[];for(let I=0;I<=A;I++){R[I]=[];let E=y.clone().lerp(v,I/A),M=_.clone().lerp(v,I/A),L=A-I;for(let z=0;z<=L;z++)z===0&&I===A?R[I][z]=E:R[I][z]=E.clone().lerp(M,z/L)}for(let I=0;I<A;I++)for(let E=0;E<2*(A-I)-1;E++){let M=Math.floor(E/2);E%2===0?(f(R[I][M+1]),f(R[I+1][M]),f(R[I][M])):(f(R[I][M+1]),f(R[I+1][M+1]),f(R[I+1][M]))}}function c(y){let _=new S;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(y),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let y=new S;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let v=g(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;o.push(v,1-P)}m(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],v=o[y+2],P=o[y+4],A=Math.max(_,v,P),R=Math.min(_,v,P);A>.9&&R<.1&&(_<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,_){let v=y*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function m(){let y=new S,_=new S,v=new S,P=new S,A=new K,R=new K,I=new K;for(let E=0,M=0;E<r.length;E+=9,M+=6){y.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),A.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),P.copy(y).add(_).add(v).divideScalar(3);let L=g(P);x(A,M+0,y,L),x(R,M+2,_,L),x(I,M+4,v,L)}}function x(y,_,v,P){P<0&&y.x===1&&(o[_]=y.x-1),v.x===0&&v.z===0&&(o[_]=P/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},mi=class extends Xr{constructor(t){super(t),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xr().fromJSON(s))}return this}},zv={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Af(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Gv(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],f=i[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return $r(r,o,e,a,l,d,0),o}};Pi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Zd(t),Jd(n,t);let o=t.length;e.forEach(Zd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Jd(n,e[l]);let a=zv.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Ni=class i extends ge{constructor(t=new mi([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:e_,_,v=!1,P,A,R,I;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,P=p.computeFrenetFrames(h,!1),A=new S,R=new S,I=new S),f||(g=0,d=0,m=0,x=0);let E=a.extractPoints(c),M=E.shape,L=E.holes;if(!Pi.isClockWise(M)){M=M.reverse();for(let $=0,rt=L.length;$<rt;$++){let C=L[$];Pi.isClockWise(C)&&(L[$]=C.reverse())}}let N=Pi.triangulateShape(M,L),H=M;for(let $=0,rt=L.length;$<rt;$++){let C=L[$];M=M.concat(C)}function Z($,rt,C){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(rt,C)}let V=M.length,at=N.length;function G($,rt,C){let Lt,et,Et,ht=$.x-rt.x,Ht=$.y-rt.y,wt=C.x-$.x,T=C.y-$.y,b=ht*ht+Ht*Ht,B=ht*T-Ht*wt;if(Math.abs(B)>Number.EPSILON){let q=Math.sqrt(b),nt=Math.sqrt(wt*wt+T*T),Y=rt.x-Ht/q,Dt=rt.y+ht/q,xt=C.x-T/nt,St=C.y+wt/nt,re=((xt-Y)*T-(St-Dt)*wt)/(ht*T-Ht*wt);Lt=Y+ht*re-$.x,et=Dt+Ht*re-$.y;let ct=Lt*Lt+et*et;if(ct<=2)return new K(Lt,et);Et=Math.sqrt(ct/2)}else{let q=!1;ht>Number.EPSILON?wt>Number.EPSILON&&(q=!0):ht<-Number.EPSILON?wt<-Number.EPSILON&&(q=!0):Math.sign(Ht)===Math.sign(T)&&(q=!0),q?(Lt=-Ht,et=ht,Et=Math.sqrt(b)):(Lt=ht,et=Ht,Et=Math.sqrt(b/2))}return new K(Lt/Et,et/Et)}let pt=[];for(let $=0,rt=H.length,C=rt-1,Lt=$+1;$<rt;$++,C++,Lt++)C===rt&&(C=0),Lt===rt&&(Lt=0),pt[$]=G(H[$],H[C],H[Lt]);let vt=[],Tt,Vt=pt.concat();for(let $=0,rt=L.length;$<rt;$++){let C=L[$];Tt=[];for(let Lt=0,et=C.length,Et=et-1,ht=Lt+1;Lt<et;Lt++,Et++,ht++)Et===et&&(Et=0),ht===et&&(ht=0),Tt[Lt]=G(C[Lt],C[Et],C[ht]);vt.push(Tt),Vt=Vt.concat(Tt)}for(let $=0;$<g;$++){let rt=$/g,C=d*Math.cos(rt*Math.PI/2),Lt=m*Math.sin(rt*Math.PI/2)+x;for(let et=0,Et=H.length;et<Et;et++){let ht=Z(H[et],pt[et],Lt);J(ht.x,ht.y,-C)}for(let et=0,Et=L.length;et<Et;et++){let ht=L[et];Tt=vt[et];for(let Ht=0,wt=ht.length;Ht<wt;Ht++){let T=Z(ht[Ht],Tt[Ht],Lt);J(T.x,T.y,-C)}}}let se=m+x;for(let $=0;$<V;$++){let rt=f?Z(M[$],Vt[$],se):M[$];v?(R.copy(P.normals[0]).multiplyScalar(rt.x),A.copy(P.binormals[0]).multiplyScalar(rt.y),I.copy(_[0]).add(R).add(A),J(I.x,I.y,I.z)):J(rt.x,rt.y,0)}for(let $=1;$<=h;$++)for(let rt=0;rt<V;rt++){let C=f?Z(M[rt],Vt[rt],se):M[rt];v?(R.copy(P.normals[$]).multiplyScalar(C.x),A.copy(P.binormals[$]).multiplyScalar(C.y),I.copy(_[$]).add(R).add(A),J(I.x,I.y,I.z)):J(C.x,C.y,u/h*$)}for(let $=g-1;$>=0;$--){let rt=$/g,C=d*Math.cos(rt*Math.PI/2),Lt=m*Math.sin(rt*Math.PI/2)+x;for(let et=0,Et=H.length;et<Et;et++){let ht=Z(H[et],pt[et],Lt);J(ht.x,ht.y,u+C)}for(let et=0,Et=L.length;et<Et;et++){let ht=L[et];Tt=vt[et];for(let Ht=0,wt=ht.length;Ht<wt;Ht++){let T=Z(ht[Ht],Tt[Ht],Lt);v?J(T.x,T.y+_[h-1].y,_[h-1].x+C):J(T.x,T.y,u+C)}}}X(),lt();function X(){let $=s.length/3;if(f){let rt=0,C=V*rt;for(let Lt=0;Lt<at;Lt++){let et=N[Lt];j(et[2]+C,et[1]+C,et[0]+C)}rt=h+g*2,C=V*rt;for(let Lt=0;Lt<at;Lt++){let et=N[Lt];j(et[0]+C,et[1]+C,et[2]+C)}}else{for(let rt=0;rt<at;rt++){let C=N[rt];j(C[2],C[1],C[0])}for(let rt=0;rt<at;rt++){let C=N[rt];j(C[0]+V*h,C[1]+V*h,C[2]+V*h)}}n.addGroup($,s.length/3-$,0)}function lt(){let $=s.length/3,rt=0;Rt(H,rt),rt+=H.length;for(let C=0,Lt=L.length;C<Lt;C++){let et=L[C];Rt(et,rt),rt+=et.length}n.addGroup($,s.length/3-$,1)}function Rt($,rt){let C=$.length;for(;--C>=0;){let Lt=C,et=C-1;et<0&&(et=$.length-1);for(let Et=0,ht=h+g*2;Et<ht;Et++){let Ht=V*Et,wt=V*(Et+1),T=rt+Lt+Ht,b=rt+et+Ht,B=rt+et+wt,q=rt+Lt+wt;dt(T,b,B,q)}}}function J($,rt,C){l.push($),l.push(rt),l.push(C)}function j($,rt,C){mt($),mt(rt),mt(C);let Lt=s.length/3,et=y.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);Gt(et[0]),Gt(et[1]),Gt(et[2])}function dt($,rt,C,Lt){mt($),mt(rt),mt(Lt),mt(rt),mt(C),mt(Lt);let et=s.length/3,Et=y.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);Gt(Et[0]),Gt(Et[1]),Gt(Et[3]),Gt(Et[1]),Gt(Et[2]),Gt(Et[3])}function mt($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function Gt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return n_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rh[s.type]().fromJSON(s)),new i(n,t.options)}},e_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new K(r,o),new K(a,l),new K(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new K(o,1-l),new K(c,1-u),new K(f,1-m),new K(x,1-p)]:[new K(a,1-l),new K(h,1-u),new K(d,1-m),new K(g,1-p)]}};gi=class i extends ah{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},_a=class i extends ge{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new S,m=new K;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,_=y,v=y+n+1,P=y+n+2,A=y+1;a.push(_,v,A),a.push(v,P,A)}}this.setIndex(a),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ma=class i extends ge{constructor(t=new mi([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,m=f.holes;Pi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];Pi.isClockWise(y)===!0&&(m[g]=y.reverse())}let x=Pi.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];d=d.concat(y)}for(let g=0,p=d.length;g<p;g++){let y=d[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=x.length;g<p;g++){let y=x[g],_=y[0]+u,v=y[1]+u,P=y[2]+u;n.push(_,v,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return i_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};qt=class i extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new S,f=new S,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let A=P/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(A+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],v=h[p][y],P=h[p+1][y],A=h[p+1][y+1];(p!==0||o>0)&&d.push(_,v,A),(p!==n-1||l<Math.PI)&&d.push(v,P,A)}this.setIndex(d),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Fi=class i extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new S,u=new S,f=new S;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let x=m/s*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,y=(s+1)*d+m;o.push(x,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},ba=class extends Ae{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Ut=class extends Zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Qs=class extends Ut{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};js=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hh=class extends js{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gu,endingEnd:Gu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wu:r=t,a=2*e-n;break;case Xu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wu:o=t,l=2*n-e;break;case Xu:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,_=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+y*o[c+P]+_*o[l+P]+v*o[u+P];return r}},uh=class extends js{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},dh=class extends js{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},On=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$o(e,this.TimeBufferType),this.values=$o(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$o(t.times,Array),values:$o(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case jo:e=this.InterpolantFactoryMethodDiscrete;break;case Nc:e=this.InterpolantFactoryMethodLinear;break;case xl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jo;case this.InterpolantFactoryMethodLinear:return Nc;case this.InterpolantFactoryMethodSmooth:return xl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&s_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Nc;is=class extends On{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=jo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;fh=class extends On{};fh.prototype.ValueTypeName="color";ph=class extends On{};ph.prototype.ValueTypeName="number";mh=class extends js{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ea=class extends On{InterpolantFactoryMethodLinear(t){return new mh(this.times,this.values,this.getValueSize(),t)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.InterpolantFactoryMethodSmooth=void 0;ss=class extends On{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=jo;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;gh=class extends On{};gh.prototype.ValueTypeName="vector";xh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},r_=new xh,yh=class{constructor(t){this.manager=t!==void 0?t:r_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};yh.DEFAULT_MATERIAL_NAME="__DEFAULT";Jr=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},wa=class extends Jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Zl=new le,Kd=new S,Qd=new S,Sa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Kd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kd),Qd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qd),e.updateMatrixWorld(),Zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},jd=new le,Ar=new S,Jl=new S,vh=class extends Sa{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ar),Jl.copy(n.position),Jl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Jl),n.updateMatrixWorld(),s.makeTranslation(-Ar.x,-Ar.y,-Ar.z),jd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd)}},tr=class extends Jr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},_h=class extends Sa{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends Jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new _h}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},er=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=tf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};Hh="\\[\\]\\.:\\/",o_=new RegExp("["+Hh+"]","g"),kh="[^"+Hh+"]",a_="[^"+Hh.replace("\\.","")+"]",l_=/((?:WC+[\/:])*)/.source.replace("WC",kh),c_=/(WCOD+)?/.source.replace("WCOD",a_),h_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),u_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),d_=new RegExp("^"+l_+c_+h_+u_+"$"),f_=["material","materials","bones","map"],Mh=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o_,"")}static parseTrackName(t){let e=d_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);f_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Mh;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];W_=new Float32Array(1),ef=new le,Aa=class{constructor(t,e,n=0,s=1/0){this.ray=new qs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ef.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(t,e=!0,n=[]){return bh(t,this,n,e),n.sort(nf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bh(t[s],this,n,e);return n.sort(nf),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170")});function Gh(i){let t=String(i||"").replace(/[\u0000-\u001f\u007f<>]/g,"").replace(/\s+/g," ").trim(),e=[...t].length;return e===0?{ok:!1,name:t,error:"\u540D\u5B57\u4E0D\u80FD\u662F\u7A7A\u767D\u7684\u5594\uFF01"}:e>12?{ok:!1,name:t,error:`\u540D\u5B57\u592A\u9577\u4E86\uFF08${e}/12 \u500B\u5B57\uFF09`}:{ok:!0,name:t,error:""}}function Pf(){try{let i=localStorage.getItem(Vh);return i?(Object.assign(st,JSON.parse(i)),!0):!1}catch{return!1}}function ln(){try{localStorage.setItem(Vh,JSON.stringify(st))}catch{}}function If(){try{localStorage.removeItem(Vh)}catch{}}function Lf(i,t,e,n){let s={uid:st.nextUid++,id:i,weight:t,mutation:e?e.id:null,value:n};st.inventory.unshift(s);let r=st.dex[i]||(st.dex[i]={count:0,best:0}),o=r.count===0;return r.count++,r.best=Math.max(r.best,t),st.totalCaught++,{item:s,isNew:o}}function Wh(i){let t=st.inventory.findIndex(e=>e.uid===i);return t>=0?st.inventory.splice(t,1)[0]:null}var Vh,st,zi=ee(()=>{Vh="fisch2-save-v1",st={money:0,rod:"starter",inventory:[],dex:{},quests:{},time:.3,pos:null,nextUid:1,totalCaught:0,tutorialSeen:!1,playerName:null,baitCrates:0,baits:{},equippedBait:null}});function xi(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}function Xh(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=xi(e,n),c=xi(e+1,n),h=xi(e,n+1),u=xi(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+u)*o*a}function sr(i,t,e=4){let n=0,s=.5,r=1,o=0;for(let a=0;a<e;a++)n+=s*Xh(i*r+a*17.3,t*r-a*9.1),o+=s,s*=.5,r*=2.03;return n/o}function Df(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Pe(i,t,e){let n=Ge((e-i)/(t-i),0,1);return n*n*(3-2*n)}function xe(i,t,e,n){return Hn(i,t,1-Math.exp(-e*n))}function p_(i,t){let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}function Qr(i,t,e,n){return i+p_(i,t)*(1-Math.exp(-e*n))}var Ge,Hn,ie,In=ee(()=>{Ge=(i,t,e)=>i<t?t:i>e?e:i,Hn=(i,t,e)=>i+(t-i)*e;ie=(i,t)=>i+Math.random()*(t-i)});function Uf(i,t,e){let n=t-i.cx,s=e-i.cz,r=Math.hypot(n,s);if(r>i.radius*2)return rr;let o=1+(sr(t*.018+i.seed*7.1,e*.018-i.seed*3.3,3)-.5)*2*i.warp,a=r/(i.radius*o),l=rr+(1.2-rr)*Pe(1.75,.95,a),c=Pe(.93,.62,a),h=Math.hypot(n-i.hill.x,s-i.hill.z)/(i.radius*.85);return l+=(i.peak-2.2)*Math.pow(Pe(1,0,h),1.4)*c,l+=1*c,l+=(sr(t*.06,e*.06,3)-.5)*3*c,l+=(sr(t*.25,e*.25,2)-.5)*.3,l}function Yh(i,t,e){let n=Uf(i,t,e);if(n<=rr+.01)return n;for(let r of i.flats){let o=Math.hypot(t-i.cx-r.x,e-i.cz-r.z);o<r.r+9&&(n=Hn(n,r.h,Pe(r.r+9,r.r,o)))}let s=i.pond;if(s){let r=Math.hypot(t-i.cx-s.x,e-i.cz-s.z);if(r<s.r+12&&(n=Hn(n,s.level+.7,Pe(s.r+12,s.r+3,r)),r<s.r+3)){let o=r/s.r,a=s.level-.3-3.2*(1-o*o);n=Hn(n,a,Pe(s.r+3,s.r-1,r))}}return n}function qe(i,t){let e=rr+(Xh(i*.02,t*.02)-.5)*2;for(let n of dn){let s=i-n.cx,r=t-n.cz;if(s*s+r*r>(n.radius*2)**2)continue;let o=Yh(n,i,t);o>e&&(e=o)}return e}function Zh(i){return dn.find(t=>t.id===i)}function Jh(i,t){for(let e of dn)if(Math.hypot(i-e.cx,t-e.cz)<e.zoneRadius)return e;return null}function yi(i,t){let e=qe(i,t);for(let n of dn){let s=n.pond;if(s&&Math.hypot(i-s.wx,t-s.wz)<s.r+4)return e<s.level-.05?{level:s.level,pond:!0,island:n,depth:s.level-e}:null}return e<qh-.05?{level:qh,pond:!1,island:Jh(i,t),depth:qh-e}:null}function m_(){if($h)return $h;let i=512,t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d");e.fillStyle="rgb(232,232,232)",e.fillRect(0,0,i,i);for(let s=0;s<60;s++){let r=200+Math.random()*55;e.fillStyle=`rgba(${r},${r},${r},0.25)`,e.beginPath(),e.arc(Math.random()*i,Math.random()*i,20+Math.random()*60,0,7),e.fill()}for(let s=0;s<26e3;s++){let r=150+Math.random()*105;e.fillStyle=`rgba(${r},${r},${r},0.5)`,e.fillRect(Math.random()*i,Math.random()*i,1+Math.random()*1.5,1+Math.random()*1.5)}for(let s=0;s<260;s++){let r=120+Math.random()*80;e.fillStyle=`rgba(${r},${r},${r},0.45)`,e.beginPath(),e.ellipse(Math.random()*i,Math.random()*i,1.5+Math.random()*3,1+Math.random()*2,Math.random()*3,0,7),e.fill()}let n=new zn(t);return n.wrapS=n.wrapT=ts,n.colorSpace=Le,n.anisotropy=8,$h=n,n}function Nf(i){let t=i.radius*2*1.95,e=Math.round(t/1.15),n=new Fe(t,t,e,e);n.rotateX(-Math.PI/2);let s=n.attributes.position,r=s.count;for(let d=0;d<r;d++){let m=s.getX(d)+i.cx,x=s.getZ(d)+i.cz;s.setY(d,Yh(i,m,x))}n.computeVertexNormals();let o=n.attributes.normal,a=new Float32Array(r*3),l=new ot,c=new ot;for(let d=0;d<r;d++){let m=s.getX(d)+i.cx,x=s.getZ(d)+i.cz,g=s.getY(d),p=o.getY(d),y=sr(m*.15,x*.15,2);if(g<-.2)l.copy(un.sandWet).lerp(un.sandDeep,Pe(-.2,-4,g)).lerp(un.seabed,Pe(-4,-13,g));else if(g<.7)l.copy(un.sandWet).lerp(un.sandDry,Pe(-.2,.7,g));else{l.copy(un.grassA).lerp(un.grassB,y);let P=Pe(2,1.3,g);c.copy(un.sandDry).lerp(un.grassDry,.25*y),l.lerp(c,P);let A=Pe(.86,.68,p);l.lerp(y>.5?un.rock:un.rockDark,A),g>i.peak*.82&&l.lerp(un.rock,Pe(i.peak*.82,i.peak,g)*.7);for(let R of i.flats){let I=Math.hypot(m-i.cx-R.x,x-i.cz-R.z),E=Pe(R.r*.8,R.r*.45,I+(y-.5)*6);E>0&&l.lerp(un.dirt,E*.85)}}let _=i.pond;if(_){let P=Math.hypot(m-_.wx,x-_.wz);P<_.r+1.5&&l.lerp(un.mud,Pe(_.r+1.5,_.r-2,P)*.85)}let v=.92+.16*sr(m*.03,x*.03,2);a[d*3]=l.r*v,a[d*3+1]=l.g*v,a[d*3+2]=l.b*v}n.setAttribute("color",new ce(a,3));let h=m_().clone();h.needsUpdate=!0,h.repeat.set(t/3.5,t/3.5);let u=new Ut({vertexColors:!0,roughness:.95,metalness:0,map:h,bumpMap:h,bumpScale:1.4}),f=new it(n,u);return f.position.set(i.cx,0,i.cz),f.receiveShadow=!0,f.castShadow=!1,f}function Ff(){let i=new Fe(4e3,4e3,1,1);i.rotateX(-Math.PI/2);let t=new it(i,new Ut({color:4085072,roughness:1}));return t.position.y=rr-1.2,t}function Bf(i=512){let t=new Uint8Array(i*i*4),{minX:e,minZ:n,size:s}=Kh;for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=e+a/(i-1)*s,c=n+o/(i-1)*s,h=qe(l,c),u=Ge((h+20)/50,0,1)*255,f=(o*i+a)*4;t[f]=u,t[f+1]=u,t[f+2]=u,t[f+3]=255}let r=new Hr(t,i,i,vn);return r.magFilter=yn,r.minFilter=yn,r.wrapS=r.wrapT=li,r.needsUpdate=!0,r}var qh,rr,dn,kn,un,$h,Kh,Kn=ee(()=>{Ee();In();qh=0,rr=-16,dn=[{id:"noob",name:"noob Island",subtitle:"\u65B0\u624B\u7684\u51FA\u767C\u9EDE",cx:0,cz:0,radius:58,peak:11,hill:{x:-22,z:-20},warp:.07,seed:3,flats:[{x:12,z:10,r:18},{x:-36,z:-30,r:6}],pond:null,zoneRadius:125},{id:"normal",name:"normal Island",subtitle:"\u71B1\u9B27\u7684\u6D77\u6E2F\u6F01\u6751",cx:360,cz:-230,radius:86,peak:19,hill:{x:30,z:-32},warp:.09,seed:11,flats:[{x:-40,z:8,r:23},{x:-6,z:40,r:7},{x:6,z:-4,r:16}],pond:{x:6,z:-4,r:11},zoneRadius:165}];for(let i of dn){for(let t of i.flats)t.h=Math.max(1.6,Uf(i,i.cx+t.x,i.cz+t.z));if(i.pond){let t=i.pond;t.level=0;let e=i.pond;i.pond=null,t.level=Yh(i,i.cx+t.x,i.cz+t.z)-.6,i.pond=e,t.wx=i.cx+t.x,t.wz=i.cz+t.z}}kn=i=>new ot(i),un={sandDry:kn(15391142),sandWet:kn(13151866),sandDeep:kn(10259558),seabed:kn(5203552),grassA:kn(6003255),grassB:kn(8238666),grassDry:kn(11121514),rock:kn(9143675),rockDark:kn(7104351),dirt:kn(11111006),mud:kn(6116416)},$h=null;Kh={minX:-170,minZ:-430,size:700}});function as(i,t,e,n,s,r=0,o={}){let a=-r,l={type:"box",cx:i,cz:t,hw:e/2,hd:n/2,top:s,bottom:o.bottom??-100,cos:Math.cos(a),sin:Math.sin(a),walkable:o.walkable??!1,boatBlock:o.boatBlock??!0};return os.push(l),l}function ke(i,t,e,n,s={}){let r={type:"circle",x:i,z:t,r:e,top:n,bottom:s.bottom??-100,walkable:!1,boatBlock:s.boatBlock??!0};return os.push(r),r}function zf(i,t,e){let n=t-i.cx,s=e-i.cz;return[n*i.cos+s*i.sin,-n*i.sin+s*i.cos]}function La(i,t,e,n=0){if(i.type==="circle"){let o=t-i.x,a=e-i.z;return o*o+a*a<(i.r+n)**2}let[s,r]=zf(i,t,e);return Math.abs(s)<i.hw+n&&Math.abs(r)<i.hd+n}function Oi(i,t,e=999){let n=qe(i,t);for(let s of os)s.top>n&&s.top<=e+Qh&&La(s,i,t,.05)&&(n=s.top);return n}function Of(i,t,e=999){let n=-1/0;for(let s of os)s.walkable&&s.top<=e+Qh&&La(s,i,t,.05)&&(n=Math.max(n,s.top));return n}function Da(i,t,e,n,s=!1){for(let r of os)if(!(s&&!r.boatBlock)&&!(r.top<=e+Qh)&&!(r.bottom>n))if(r.type==="circle"){let o=i.x-r.x,a=i.z-r.z,l=Math.hypot(o,a),c=r.r+t;l<c&&l>1e-5&&(i.x=r.x+o/l*c,i.z=r.z+a/l*c)}else{let[o,a]=zf(r,i.x,i.z),l=r.hw+t-Math.abs(o),c=r.hd+t-Math.abs(a);if(l>0&&c>0){let h=o,u=a;l<c?h=Math.sign(o||1)*(r.hw+t):u=Math.sign(a||1)*(r.hd+t),i.x=r.cx+h*r.cos-u*r.sin,i.z=r.cz+h*r.sin+u*r.cos}}return i}var Qh,os,ls=ee(()=>{Kn();Qh=.6,os=[]});function g_(i){kf=i}function x_(i,t,e=0,n=1){let s=e-qe(i,t),r=(.15+.85*Pe(0,6,s))*n,o=0;for(let a of Hf)o+=a.a*Math.sin(a.k*(a.dx*i+a.dz*t)+kf*a.s);return o*r}function fn(i,t,e=0,n=!1){return e+x_(i,t,e,n?.12:1)}var Hf,kf,y_,v_,__,Ua,or=ee(()=>{Ee();Kn();In();Hf=[{dx:.96,dz:.28,k:.075,a:.34,s:.9},{dx:.6,dz:-.8,k:.13,a:.19,s:1.25},{dx:-.42,dz:.91,k:.21,a:.09,s:1.7},{dx:.88,dz:.47,k:.37,a:.05,s:2.4}],kf=0;y_=Hf.map(i=>`
    ph = ${i.k.toFixed(4)} * dot(vec2(${i.dx.toFixed(3)}, ${i.dz.toFixed(3)}), p) + uTime * ${i.s.toFixed(3)};
    h += ${i.a.toFixed(4)} * sin(ph);
    g += ${(i.a*i.k).toFixed(5)} * cos(ph) * vec2(${i.dx.toFixed(3)}, ${i.dz.toFixed(3)});`).join(""),v_=`
uniform float uTime;
uniform float uLevel;
uniform float uAmp;
uniform sampler2D uHeightTex;
uniform vec4 uBounds;
varying vec3 vWorld;
varying vec3 vNormalW;
varying float vH;
varying float vDepth;

float terrainH(vec2 p){
  vec2 uv = (p - uBounds.xy) / uBounds.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return -18.0;
  return texture2D(uHeightTex, uv).r * 50.0 - 20.0;
}

void main(){
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec2 p = wp.xz;
  float depth = uLevel - terrainH(p);
  float damp = (0.15 + 0.85 * smoothstep(0.0, 6.0, depth)) * uAmp;
  float h = 0.0; vec2 g = vec2(0.0); float ph;
  ${y_}
  wp.y = uLevel + h * damp;
  vH = h * damp;
  vDepth = depth;
  vNormalW = normalize(vec3(-g.x * damp, 1.0, -g.y * damp));
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,__=`
uniform float uTime;
uniform float uLevel;
uniform float uAmp;
uniform sampler2D uHeightTex;
uniform vec4 uBounds;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uMoonDir;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform float uDayLight;
uniform float uNight;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec4 uRipples[10];
varying vec3 vWorld;
varying vec3 vNormalW;
varying float vH;
varying float vDepth;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
}
float terrainH(vec2 p){
  vec2 uv = (p - uBounds.xy) / uBounds.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return -18.0;
  return texture2D(uHeightTex, uv).r * 50.0 - 20.0;
}

vec2 detailGrad(vec2 p, float t){
  vec2 g = vec2(0.0);
  vec2 d; float k; float ph;
  d = normalize(vec2(0.8, 0.6));   k = 1.3; ph = dot(d,p)*k + t*2.1; g += d * cos(ph) * 0.08;
  d = normalize(vec2(-0.5, 0.86)); k = 1.9; ph = dot(d,p)*k + t*2.7; g += d * cos(ph) * 0.06;
  d = normalize(vec2(0.2, -0.98)); k = 2.7; ph = dot(d,p)*k + t*3.3; g += d * cos(ph) * 0.045;
  d = normalize(vec2(-0.9, -0.3)); k = 3.9; ph = dot(d,p)*k + t*3.9; g += d * cos(ph) * 0.035;
  d = normalize(vec2(0.65, -0.4)); k = 5.7; ph = dot(d,p)*k + t*4.6; g += d * cos(ph) * 0.025;
  d = normalize(vec2(-0.3, -0.7)); k = 8.3; ph = dot(d,p)*k + t*5.5; g += d * cos(ph) * 0.018;
  // noise based small scale breakup
  float n1 = vnoise(p * 0.9 + vec2(t * 0.35, t * 0.2));
  float n2 = vnoise(p * 0.9 + vec2(t * 0.35 + 0.05, t * 0.2));
  float n3 = vnoise(p * 0.9 + vec2(t * 0.35, t * 0.2 + 0.05));
  g += vec2(n2 - n1, n3 - n1) * 3.0;
  return g;
}

void main(){
  float dist = length(cameraPosition - vWorld);
  float detailFade = 1.0 - smoothstep(40.0, 260.0, dist);
  vec2 g = detailGrad(vWorld.xz, uTime) * detailFade * mix(0.35, 1.0, uAmp);

  // interactive ripples (bobber, splashes)
  for (int i = 0; i < 10; i++) {
    vec4 r = uRipples[i];
    if (r.w <= 0.0) continue;
    vec2 dd = vWorld.xz - r.xy;
    float rr = length(dd) + 1e-4;
    float age = uTime - r.z;
    if (age < 0.0 || age > 5.0) continue;
    float front = age * 2.4;
    float x = rr - front;
    float env = exp(-x * x * 0.9) * exp(-age * 0.9) * r.w * smoothstep(0.0, 0.15, age);
    g += (dd / rr) * cos(x * 7.0) * env * 0.9;
  }

  vec3 N = normalize(vNormalW + vec3(-g.x, 0.0, -g.y) * 0.6);
  vec3 V = normalize(cameraPosition - vWorld);
  float NdV = max(dot(N, V), 0.0);
  float fres = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);
  vec3 R = reflect(-V, N);
  R.y = abs(R.y);
  vec3 sky = mix(uHorizon, uZenith, pow(clamp(R.y, 0.0, 1.0), 0.55));

  float sunUp = smoothstep(-0.06, 0.08, uSunDir.y);
  float sd = max(dot(R, uSunDir), 0.0);
  vec3 spec = uSunColor * (pow(sd, 1200.0) * 9.0 + pow(sd, 90.0) * 0.35) * sunUp;
  float md = max(dot(R, uMoonDir), 0.0);
  spec += vec3(0.65, 0.75, 1.0) * (pow(md, 900.0) * 3.0 + pow(md, 60.0) * 0.08) * uNight;

  float depth = uLevel - terrainH(vWorld.xz);
  float sh = exp(-max(depth, 0.0) * 0.32);
  vec3 water = mix(uDeep, uShallow, sh);
  // light scattered in wave crests
  water += vec3(0.0, 0.12, 0.10) * clamp(vH * 1.6 + 0.2, 0.0, 1.0) * uDayLight;
  float diff = clamp(dot(N, uSunDir) * 0.5 + 0.5, 0.0, 1.0);
  water *= (0.25 + 0.75 * uDayLight) * (0.75 + 0.25 * diff);

  vec3 col = mix(water, sky, fres);
  col += spec;

  // shoreline foam + crest foam
  float fn = vnoise(vWorld.xz * 1.7 + vec2(uTime * 0.4, -uTime * 0.3));
  float fn2 = vnoise(vWorld.xz * 4.3 - vec2(uTime * 0.6, uTime * 0.2));
  float shoreBand = smoothstep(1.4, 0.0, depth);
  float waveLines = 0.5 + 0.5 * sin(depth * 6.0 - uTime * 1.8 + fn * 4.0);
  float foam = shoreBand * smoothstep(0.35, 0.9, waveLines * 0.7 + fn2 * 0.6);
  foam = max(foam, smoothstep(0.05, 0.0, depth) * 0.9);
  foam = max(foam, smoothstep(0.42, 0.6, vH + fn2 * 0.12) * 0.5 * uAmp);
  vec3 foamCol = vec3(0.95, 0.98, 1.0) * (0.15 + 0.85 * uDayLight);
  col = mix(col, foamCol, clamp(foam, 0.0, 1.0) * 0.85);

  float alpha = mix(0.45, 0.97, smoothstep(0.0, 5.0, depth));
  alpha = max(alpha, fres * 0.9);
  alpha = max(alpha, foam * 0.9);

  float fog = 1.0 - exp(-uFogDensity * uFogDensity * dist * dist);
  col = mix(col, uFogColor, fog);
  alpha = mix(alpha, 1.0, fog);

  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Ua=class{constructor(t,e){this.ripples=[];for(let r=0;r<10;r++)this.ripples.push(new de(0,0,-100,0));this.rippleIdx=0;let n=Kh;this.uniforms={uTime:{value:0},uLevel:{value:0},uAmp:{value:1},uHeightTex:{value:e},uBounds:{value:new de(n.minX,n.minZ,n.size,n.size)},uSunDir:{value:new S(0,1,0)},uSunColor:{value:new ot(1,1,1)},uMoonDir:{value:new S(0,-1,0)},uZenith:{value:new ot},uHorizon:{value:new ot},uFogColor:{value:new ot},uFogDensity:{value:.003},uDayLight:{value:1},uNight:{value:0},uDeep:{value:new ot(140602)},uShallow:{value:new ot(2078128)},uRipples:{value:this.ripples}},this.material=new Ae({uniforms:this.uniforms,vertexShader:v_,fragmentShader:__,transparent:!0,depthWrite:!0});let s=new Fe(1400,1400,280,280);s.rotateX(-Math.PI/2),this.sea=new it(s,this.material),this.sea.frustumCulled=!1,this.sea.renderOrder=2,t.add(this.sea),this.ponds=[];for(let r of dn){if(!r.pond)continue;let o=r.pond,a=this.material.clone();a.uniforms={...this.uniforms,uLevel:{value:o.level},uAmp:{value:.12},uDeep:{value:new ot(866860)},uShallow:{value:new ot(4037752)}};let l=new va(o.r+4,64,0,Math.PI*2);l.rotateX(-Math.PI/2);let c=new it(l,a);c.position.set(o.wx,0,o.wz),c.renderOrder=2,t.add(c),this.ponds.push(c)}}addRipple(t,e,n=1){this.ripples[this.rippleIdx].set(t,e,this.uniforms.uTime.value,n),this.rippleIdx=(this.rippleIdx+1)%this.ripples.length}update(t,e,n){g_(t);let s=this.uniforms;s.uTime.value=t;let r=1400/280;this.sea.position.set(Math.round(e.position.x/r)*r,0,Math.round(e.position.z/r)*r),n&&(s.uSunDir.value.copy(n.sunDir),s.uMoonDir.value.copy(n.moonDir),s.uSunColor.value.copy(n.sunColor),s.uZenith.value.copy(n.zenith),s.uHorizon.value.copy(n.horizon),s.uFogColor.value.copy(n.fogColor),s.uFogDensity.value=n.fogDensity,s.uDayLight.value=n.dayLight,s.uNight.value=n.night)}}});var jh,Vn,jr,M_,b_,Na,Vf=ee(()=>{Ee();In();jh=600,Vn=(i,t)=>({t:i,...t}),jr=[Vn(0,{zenith:132367,horizon:726320,fog:660006,sun:0,hemiSky:2833766,hemiGround:724760,hemi:.35,day:.12}),Vn(.21,{zenith:396066,horizon:1844038,fog:1317427,sun:0,hemiSky:3358826,hemiGround:921624,hemi:.38,day:.15}),Vn(.25,{zenith:2704766,horizon:15764570,fog:9072250,sun:16747084,hemiSky:9081016,hemiGround:4864560,hemi:.55,day:.45}),Vn(.3,{zenith:3897545,horizon:15976864,fog:12372182,sun:16765600,hemiSky:11060462,hemiGround:7035459,hemi:.75,day:.85}),Vn(.38,{zenith:2914528,horizon:12115199,fog:12377333,sun:16773596,hemiSky:11917055,hemiGround:7759435,hemi:.85,day:1}),Vn(.5,{zenith:206e4,horizon:12903679,fog:12903162,sun:16777215,hemiSky:12442879,hemiGround:8022606,hemi:.9,day:1}),Vn(.64,{zenith:2782424,horizon:12639477,fog:12638960,sun:16773336,hemiSky:11916538,hemiGround:7759435,hemi:.85,day:1}),Vn(.71,{zenith:3433388,horizon:16102010,fog:14005146,sun:16757610,hemiSky:10989264,hemiGround:6967872,hemi:.7,day:.8}),Vn(.75,{zenith:2503531,horizon:15755836,fog:9198178,sun:16738869,hemiSky:8155034,hemiGround:4074538,hemi:.5,day:.42}),Vn(.79,{zenith:791092,horizon:3812693,fog:2301754,sun:0,hemiSky:3817840,hemiGround:1183512,hemi:.4,day:.18}),Vn(1,{zenith:132367,horizon:726320,fog:660006,sun:0,hemiSky:2833766,hemiGround:724760,hemi:.35,day:.12})];for(let i of jr)for(let t of["zenith","horizon","fog","sun","hemiSky","hemiGround"])i[t]=new ot(i[t]);M_=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = vec4(p.xy, p.w * 0.99995, p.w);
}`,b_=`
uniform vec3 uZenith; uniform vec3 uHorizon; uniform vec3 uSunDir; uniform vec3 uMoonDir; uniform vec3 uSunColor;
uniform float uStars; uniform float uTime; uniform float uSunset;
varying vec3 vDir;
float hash3(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
void main(){
  vec3 d = normalize(vDir);
  float y = d.y;
  vec3 col = mix(uHorizon, uZenith, pow(clamp(y, 0.0, 1.0), 0.5));
  col = mix(col, uHorizon * 0.55, smoothstep(0.0, -0.25, y));
  // sun glow / sunset halo
  float sd = max(dot(d, uSunDir), 0.0);
  float sunVis = smoothstep(-0.12, 0.05, uSunDir.y);
  col += uSunColor * pow(sd, 6.0) * (0.25 + uSunset * 0.6) * sunVis;
  col += uSunColor * pow(sd, 64.0) * 0.6 * sunVis;
  col += uSunColor * smoothstep(0.9993, 0.9997, sd) * 12.0 * sunVis;
  // moon
  float md = max(dot(d, uMoonDir), 0.0);
  float moonVis = smoothstep(-0.05, 0.1, uMoonDir.y);
  float disk = smoothstep(0.9989, 0.9992, md);
  float crater = hash3(floor(d * 900.0)) * 0.15;
  col += vec3(0.85, 0.9, 1.0) * disk * (1.4 - crater) * moonVis * uStars;
  col += vec3(0.4, 0.5, 0.8) * pow(md, 200.0) * 0.35 * moonVis * uStars;
  // stars
  if (uStars > 0.01 && y > -0.02) {
    vec3 p = d * 260.0;
    vec3 ip = floor(p);
    float h = hash3(ip);
    if (h > 0.9965) {
      vec3 c = ip + 0.5 + (vec3(hash3(ip + 1.3), hash3(ip + 2.7), hash3(ip + 5.1)) - 0.5) * 0.6;
      float dd = length(p - c);
      float tw = 0.65 + 0.35 * sin(uTime * (1.5 + h * 30.0) + h * 100.0);
      float s = smoothstep(0.35, 0.0, dd) * tw * uStars * smoothstep(-0.02, 0.2, y);
      col += vec3(0.85 + h * 0.15, 0.9, 1.0) * s * 2.2;
    }
    // milky band
    float band = exp(-pow(dot(d, normalize(vec3(0.3, 0.2, 1.0))) * 3.0, 2.0));
    col += vec3(0.12, 0.13, 0.2) * band * uStars * 0.35 * smoothstep(0.0, 0.4, y);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Na=class{constructor(t,e=.3){this.t=e,this.scene=t,this.zenith=new ot,this.horizon=new ot,this.fogColor=new ot,this.sunColor=new ot,this.sunDir=new S,this.moonDir=new S,this.dayLight=1,this.night=0,this.fogDensity=.0032,this.uniforms={uZenith:{value:this.zenith},uHorizon:{value:this.horizon},uSunDir:{value:this.sunDir},uMoonDir:{value:this.moonDir},uSunColor:{value:this.sunColor},uStars:{value:0},uTime:{value:0},uSunset:{value:0}};let n=new it(new qt(3e3,48,24),new Ae({uniforms:this.uniforms,vertexShader:M_,fragmentShader:b_,side:je,depthWrite:!1,fog:!1}));n.frustumCulled=!1,n.renderOrder=-10,this.dome=n,t.add(n),this.envScene=new Js,this.envScene.add(new it(new qt(100,32,16),n.material)),this.envTimer=0,this.envRT=null,t.fog=new ha(12377333,this.fogDensity),this.hemi=new wa(12442879,8022606,.9),t.add(this.hemi),this.light=new Ta(16777215,2.2),this.light.castShadow=!0,this.light.shadow.mapSize.set(2048,2048);let s=this.light.shadow.camera;s.left=-55,s.right=55,s.top=55,s.bottom=-55,s.near=1,s.far=400,this.light.shadow.bias=-6e-4,this.light.shadow.normalBias=.04,t.add(this.light),t.add(this.light.target),this._a={},this._b={}}updateEnv(t,e){if(this.envTimer-=e,this.envTimer>0)return;this.envTimer=3,this.pmrem||(this.pmrem=new Zs(t));let n=this.pmrem.fromScene(this.envScene,0,.1,500);this.envRT&&this.envRT.dispose(),this.envRT=n,this.scene.environment=n.texture,this.scene.environmentIntensity=.55}get hours(){return this.t*24%24}isNight(){let t=this.hours;return t>=18.6||t<5.6}clockString(){let t=this.hours,e=Math.floor(t),n=Math.floor((t-e)*60);return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}sample(t){let e=0;for(;e<jr.length-2&&jr[e+1].t<=t;)e++;let n=jr[e],s=jr[e+1],r=Pe(0,1,(t-n.t)/(s.t-n.t));return{a:n,b:s,f:r}}update(t,e,n){this.t=(this.t+t/jh)%1;let{a:s,b:r,f:o}=this.sample(this.t);this.zenith.copy(s.zenith).lerp(r.zenith,o),this.horizon.copy(s.horizon).lerp(r.horizon,o),this.fogColor.copy(s.fog).lerp(r.fog,o),this.sunColor.copy(s.sun).lerp(r.sun,o);let a=Hn(s.hemi,r.hemi,o);this.dayLight=Hn(s.day,r.day,o);let l=(this.t-.25)*Math.PI*2;this.sunDir.set(Math.cos(l),Math.sin(l),.35).normalize(),this.moonDir.set(-Math.cos(l),-Math.sin(l),-.25).normalize();let c=Pe(-.05,.12,this.sunDir.y),h=Pe(-.05,.15,this.moonDir.y);this.night=1-Pe(-.12,.08,this.sunDir.y),this.uniforms.uStars.value=this.night,this.uniforms.uTime.value=n,this.uniforms.uSunset.value=Pe(.45,0,Math.abs(this.sunDir.y))*c+.3*(1-this.night);let u=this.sunDir.y>-.02,f=u?this.sunDir:this.moonDir;u?(this.light.color.copy(this.sunColor),this.light.intensity=2.6*c):(this.light.color.setRGB(.55,.65,.95),this.light.intensity=.55*h),this.light.position.set(e.x+f.x*150,e.y+Math.max(f.y,.08)*150,e.z+f.z*150),this.light.target.position.copy(e),this.light.target.updateMatrixWorld(),this.hemi.color.copy(s.hemiSky).lerp(r.hemiSky,o),this.hemi.groundColor.copy(s.hemiGround).lerp(r.hemiGround,o),this.hemi.intensity=a*.85,this.scene.fog.color.copy(this.fogColor),this.fogDensity=Hn(.0026,.0042,this.night),this.scene.fog.density=this.fogDensity,this.dome.position.copy(e)}}});function Hi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ge,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Gf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let m=Gf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Gf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ce(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var tu=ee(()=>{Ee()});function ar(i,t,e=1){let n=document.createElement("canvas");n.width=n.height=i,t(n.getContext("2d"),i);let s=new zn(n);return s.wrapS=s.wrapT=ts,s.colorSpace=Le,s.anisotropy=8,s.repeat.set(e,e),s}function su(i,t,e,n){return i.position.set(t,e,n),i}function ft(i,t,e=!0,n=!0){let s=new it(i,t);return s.castShadow=e,s.receiveShadow=n,s}function hs(i,t={}){let{w:e=512,h:n=128,bg:s=null,color:r="#fff",stroke:o="#000",font:a='bold 64px "Microsoft JhengHei", "PingFang TC", sans-serif',border:l=null}=t,c=document.createElement("canvas");c.width=e,c.height=n;let h=c.getContext("2d");s&&(h.fillStyle=s,h.fillRect(0,0,e,n)),l&&(h.strokeStyle=l,h.lineWidth=10,h.strokeRect(5,5,e-10,n-10));let u=Array.isArray(i)?i:[i];h.textAlign="center",h.textBaseline="middle",u.forEach((d,m)=>{let x=typeof d=="string"?{text:d}:d;h.font=x.font||a;let g=n/2+(m-(u.length-1)/2)*(x.lh||n/u.length);o&&(h.lineWidth=x.strokeW||8,h.strokeStyle=o,h.lineJoin="round",h.strokeText(x.text,e/2,g)),h.fillStyle=x.color||r,h.fillText(x.text,e/2,g)});let f=new zn(c);return f.colorSpace=Le,f.anisotropy=4,f}function Ba(i,t,e="#ffffff"){let s=hs(t?[{text:t,font:'bold 34px "Microsoft JhengHei", sans-serif',color:"#ffe08a",strokeW:7,lh:48},{text:i,font:'bold 50px "Microsoft JhengHei", sans-serif',color:e,strokeW:9,lh:56}]:[{text:i,font:'bold 50px "Microsoft JhengHei", sans-serif',color:e}],{w:512,h:128,stroke:"rgba(0,0,0,0.85)"}),r=new Di(new pi({map:s,transparent:!0,depthWrite:!1,fog:!1}));return r.scale.set(4,1,1),r.renderOrder=10,r}function E_(){if(nu)return nu;let i=new Fe(1,3.6,2,6),t=i.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),s=t.getY(e)+1.8,r=s/3.6,o=Math.sin(Math.PI*Math.min(1,r*1.15))*.55+.05;t.setX(e,n*o*2),t.setY(e,s),t.setZ(e,-r*r*1.5+Math.abs(n)*.35)}return i.rotateX(-Math.PI/2+.25),i.computeVertexNormals(),nu=i,i}function ru(i=Math.random){let t=new At,e=6+i()*3.5,n=8,s=(i()-.5)*2.4,r=(i()-.5)*2.4,o=new S(0,0,0),a=[];for(let d=1;d<=n;d++){let m=d/n,x=new S(s*m*m,e*m,r*m*m),g=x.distanceTo(o),p=.3-(d-1)/n*.12,y=.3-d/n*.12,_=new It(y,p*1.08,g*1.04,7,1),v=o.clone().add(x).multiplyScalar(.5),P=new Mn().setFromUnitVectors(new S(0,1,0),x.clone().sub(o).normalize());_.applyMatrix4(new le().compose(v,P,new S(1,1,1))),a.push(_),o=x}let l=ft(Hi(a),Q.palmTrunk);t.add(l);let c=o.clone(),h=7+Math.floor(i()*3),u=new At;u.position.copy(c);for(let d=0;d<h;d++){let m=ft(E_(),Q.palmLeaf,!0,!1);m.rotation.y=d/h*Math.PI*2+i()*.3,m.rotation.x=(i()-.5)*.3,m.scale.setScalar(.85+i()*.35),u.add(m)}t.add(u);for(let d=0;d<3;d++){let m=ft(new qt(.2,7,5),Q.coconut),x=d/3*Math.PI*2;m.position.set(c.x+Math.cos(x)*.3,c.y-.35,c.z+Math.sin(x)*.3),t.add(m)}let f=i()*10;return cs.push((d,m)=>{u.rotation.z=Math.sin(m*.9+f)*.05,u.rotation.x=Math.cos(m*.7+f)*.04}),t}function ou(i,t,e,n=.25,s=1){let r=new gi(i,t),o=r.attributes.position,a=e()*100,l=e()*100,c=new S;for(let h=0;h<o.count;h++){c.fromBufferAttribute(o,h);let u=Math.sin(c.x*3.1/i+a)*Math.sin(c.y*2.7/i+l)*Math.sin(c.z*3.3/i+a*.5),f=Math.sin(c.x*7.3/i+l)*Math.sin(c.z*6.1/i+a)*.5;c.multiplyScalar(1+(u+f)*n),c.y*=s,o.setXYZ(h,c.x,c.y,c.z)}return r.computeVertexNormals(),r}function Xf(i=Math.random,t=1){let e=new At,n=(6+i()*4)*t;e.add(su(ft(new It(.12*t,.32*t,n*.75,10),Q.trunk),0,n*.37,0));let s=6;for(let r=0;r<s;r++){let o=r/s,a=(2.3-o*1.85)*t,l=n*.3,c=new De(a,l,18,3,!0),h=c.attributes.position,u=i()*10;for(let m=0;m<h.count;m++){let x=h.getX(m),g=h.getY(m),p=h.getZ(m),y=Math.atan2(p,x),_=(l/2-g)/l,v=1+(Math.sin(y*9+u)*.12+Math.sin(y*23+u*2)*.06)*_;h.setXYZ(m,x*v,g-_*_*.35*t*(1+Math.sin(y*9+u)*.5),p*v)}c.computeVertexNormals();let f=r%2?Q.pine:Q.pineB,d=ft(c,f);d.position.y=n*.28+o*n*.62,d.rotation.y=i()*3,e.add(d)}return e}function au(i=Math.random){let t=new At,e=3+i()*2;t.add(su(ft(new It(.18,.34,e,10),Q.trunk),0,e/2,0));for(let s=0;s<3;s++){let r=ft(new It(.05,.11,1.6,6),Q.trunk),o=i()*6.28;r.position.set(Math.cos(o)*.45,e*.8,Math.sin(o)*.45),r.rotation.set(Math.sin(o)*.7,0,-Math.cos(o)*.7),t.add(r)}let n=6+Math.floor(i()*3);for(let s=0;s<n;s++){let r=1+i()*.7,o=ft(ou(r,3,i,.16,.85),i()>.5?Q.leaf:Q.leafLight),a=s/n*6.28+i(),l=s===0?0:.9+i()*.6;o.position.set(Math.cos(a)*l,e+.4+i()*1.3-l*.3,Math.sin(a)*l),t.add(o)}return t}function lu(i=Math.random){let t=new At,e=3+Math.floor(i()*3);for(let n=0;n<e;n++){let s=ft(ou(.45+i()*.4,2,i,.18,.8),i()>.4?Q.leaf:Q.leafLight);s.position.set((i()-.5)*1.2,.3+i()*.25,(i()-.5)*1.2),t.add(s)}return t}function za(i=Math.random,t=1,e=Q.rock){let n=ou(1,3,i,.22,.62),s=n.attributes.position;for(let o=0;o<s.count;o++){let a=s.getY(o);a<-.25&&s.setY(o,-.25+(a+.25)*.3);let l=s.getX(o),c=s.getZ(o),h=1+Math.round(Math.sin(l*4+c*3)*2)*.03;s.setXYZ(o,l*h,s.getY(o),c*h)}n.computeVertexNormals();let r=ft(n,e);return r.scale.setScalar(t),r.rotation.y=i()*6,r}function w_(){let i=[];for(let e=0;e<3;e++){let n=new Fe(.07,.6,1,4),s=n.attributes.position,r=new Float32Array(s.count*3);for(let o=0;o<s.count;o++){let a=s.getY(o)+.3,l=a/.6;s.setX(o,s.getX(o)*(1-l*.9)),s.setY(o,a),s.setZ(o,l*l*.12);let c=.45+l*.55;r[o*3]=c,r[o*3+1]=c,r[o*3+2]=c}n.setAttribute("color",new ce(r,3)),n.rotateY(e/3*Math.PI+Math.random()*.3),n.translate((Math.random()-.5)*.08,0,(Math.random()-.5)*.08),i.push(n)}let t=Hi(i);return t.computeVertexNormals(),t}function qf(i,t=5215286,e=9224530){let s=new Ut({roughness:.9,side:be,vertexColors:!0});s.onBeforeCompile=v=>{v.uniforms.uWind=cu,v.vertexShader=`uniform float uWind;
`+v.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        vec4 wp = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float hh = position.y * position.y;
        transformed.x += sin(uWind * 1.7 + wp.x * 0.35 + wp.z * 0.2) * 0.35 * hh;
        transformed.z += cos(uWind * 1.3 + wp.x * 0.25 - wp.z * 0.3) * 0.2 * hh;
      }`)};let r=new Ui(w_(),s,i.length*6),o=new gi(.07,1);o.translate(0,.42,0);let a=new It(.008,.01,.42,4);a.translate(0,.21,0);let l=i.filter((v,P)=>P%4===0),c=new Ui(o,new Ut({roughness:.55}),l.length),h=new Ui(a,new Ut({color:4160042,roughness:.9}),l.length),u=new le,f=new Mn,d=new S,m=new ot,x=new ot(t),g=new ot(e),p=0;for(let v of i)for(let P=0;P<6;P++){f.setFromEuler(new Cn((Math.random()-.5)*.3,Math.random()*6,(Math.random()-.5)*.3));let A=.6+Math.random()*.9;d.set(A,A*(.8+Math.random()*.6),A),u.compose(new S(v.x+(Math.random()-.5)*1.1,v.y,v.z+(Math.random()-.5)*1.1),f,d),r.setMatrixAt(p,u),r.setColorAt(p,m.copy(x).lerp(g,Math.random())),p++}let y=[16739210,16766282,16777215,11893759,16747069];l.forEach((v,P)=>{u.compose(new S(v.x+.3,v.y,v.z-.2),f.identity(),d.setScalar(.8+Math.random()*.6)),c.setMatrixAt(P,u),h.setMatrixAt(P,u),c.setColorAt(P,m.set(y[P%y.length]))}),r.receiveShadow=!0;let _=new At;return _.add(r,c,h),_}function iu(i,t,e){let n=new mi;n.moveTo(-i/2,0),n.lineTo(i/2,0),n.lineTo(0,t),n.lineTo(-i/2,0);let s=new Ni(n,{depth:e,bevelEnabled:!1});return s.translate(0,0,-e/2),s}function $f(i={}){let{w:t=7,d:e=6,h:n=3.6,wall:s=Q.wallCream,roof:r=Q.roofRed,sign:o=null,chimney:a=!0,porch:l=!0}=i,c=new At;c.add(su(ft(new Ot(t+.4,.5,e+.4),Q.stone),0,0,0));let h=ft(new Ot(t,n,e),s);h.position.y=n/2+.25,c.add(h);for(let y of[-1,1])for(let _ of[-1,1]){let v=ft(new Ot(.3,n,.3),Q.woodDark);v.position.set(y*(t/2),n/2+.25,_*(e/2)),c.add(v)}let u=ft(new Ot(t+.2,.25,e+.2),Q.woodDark);u.position.y=n+.25,c.add(u);let f=t*.45,d=ft(iu(t+1.2,f,e+1),r);d.position.y=n+.3,c.add(d);let m=ft(iu(t,f-.3,e-.05),s);if(m.position.y=n+.3,c.add(m),a){let y=ft(new Ot(.8,2.2,.8),Q.stone);y.position.set(t*.25,n+f*.7,-e*.2),c.add(y)}let x=ft(new Ot(1.2,2.2,.15),Q.woodDark);x.position.set(0,1.35,e/2+.05),c.add(x);let g=ft(new qt(.07,6,4),Q.metal);g.position.set(.4,1.3,e/2+.15),c.add(g);let p=(y,_,v,P)=>{let A=ft(new Ot(1.1,1,.12),Q.window,!1);A.position.set(y,_,v),A.rotation.y=P;let R=ft(new Ot(1.3,1.2,.08),Q.woodLight,!1);R.position.set(y,_,v),R.rotation.y=P,R.translateZ(-.03);let I=ft(new Ot(1.4,.12,.3),Q.woodDark);I.position.set(y,_-.6,v),I.rotation.y=P,c.add(R,A,I)};if(p(-t*.3,n*.55+.3,e/2+.04,0),p(t*.3,n*.55+.3,e/2+.04,0),p(t/2+.04,n*.55+.3,0,Math.PI/2),p(-t/2-.04,n*.55+.3,0,-Math.PI/2),p(0,n*.55+.3,-e/2-.04,Math.PI),l){let y=ft(new Ot(2.2,.3,1.2),Q.plank);y.position.set(0,.15,e/2+.7),c.add(y);let _=ft(new Ot(2.4,.12,1.4),r);_.position.set(0,2.85,e/2+.7),_.rotation.x=.25,c.add(_)}if(o){let y=hs(o,{w:512,h:128,bg:"#6b4423",border:"#3d2510",color:"#ffe9b0",stroke:"#2a1808",font:'bold 70px "Microsoft JhengHei", sans-serif'}),_=ft(new Fe(2.6,.65),new Ut({map:y,roughness:.8}),!1);_.position.set(0,n-.2,e/2+.2),c.add(_)}return c}function io(i=!1,t=16757575){let e=new At,n=ft(new It(.09,.12,2.6,6),Q.woodDark);n.position.y=1.3,e.add(n);let s=ft(new Ot(.6,.08,.08),Q.woodDark);s.position.set(.25,2.5,0),e.add(s);let r=ft(new Ot(.3,.4,.3),Q.lampGlass,!1);r.position.set(.5,2.2,0);let o=ft(new De(.28,.2,4),Q.dark);if(o.position.set(.5,2.5,0),o.rotation.y=Math.PI/4,e.add(r,o),i){let a=new tr(t,0,16,1.6);a.position.set(.5,2.1,0),e.add(a),so.push({light:a,base:9})}return e}function Yf(i=24,t=3.2,e=1.4,n={}){let s=new At,r=[],o=.5;for(let u=0;u<i;u+=o+.05){let f=new Ot(o,.14,t*(.96+Math.random()*.06));f.translate(u+o/2,e-.07+(Math.random()-.5)*.03,(Math.random()-.5)*.08),r.push(f)}let a=ft(Hi(r),Q.plank);s.add(a);let l=[];for(let u=.3;u<=i;u+=3)for(let f of[-1,1]){let d=new It(.16,.18,e+8,7);d.translate(u,(e-8)/2+.25,f*(t/2-.05)),l.push(d)}s.add(ft(Hi(l),Q.woodDark));for(let u of[-1,1]){let f=ft(new Ot(i,.25,.18),Q.woodDark);f.position.set(i/2,e-.25,u*(t/2)),s.add(f)}if(n.rail!==!1){let u=[];for(let d=1.5;d<i-1;d+=3){let m=new It(.07,.07,1,5);m.translate(d,e+.5,t/2-.1),u.push(m)}s.add(ft(Hi(u),Q.woodDark));let f=ft(new It(.035,.035,i-3,4),Q.rope);f.rotation.z=Math.PI/2,f.position.set(i/2,e+.85,t/2-.1),s.add(f)}let c=io(!0);c.position.set(i-.6,e,-t/2+.25),c.rotation.y=Math.PI/2;let h=io(!1);return h.position.set(i*.45,e,-t/2+.25),h.rotation.y=Math.PI/2,s.add(c,h),s}function us(i=.9){let t=new At;t.add(ft(new Ot(i,i,i),Q.woodLight));let e=ft(new Ot(i*1.02,i*.14,i*1.02),Q.woodDark);e.position.y=i*.3,t.add(e);let n=e.clone();return n.position.y=-i*.3,t.add(n),t.children.forEach(s=>s.position.y+=i/2),t}function Oa(){let i=new At,t=ft(new It(.42,.42,1.1,10),Q.wood);t.position.y=.55;let e=ft(new It(.47,.47,.6,10),Q.wood);e.position.y=.55;for(let n of[.2,.9]){let s=ft(new It(.46,.46,.06,10),Q.metal);s.position.y=n,i.add(s)}return i.add(t,e),i}function hu(){let i=new At;for(let n of[-1.5,1.5]){let s=ft(new It(.08,.08,2.2,5),Q.woodDark);s.position.set(n,1.1,0),i.add(s)}let t=ft(new It(.05,.05,3.2,5),Q.woodDark);t.rotation.z=Math.PI/2,t.position.y=2.1,i.add(t);let e=Qt(10528936,{metalness:.3,roughness:.5});for(let n=0;n<5;n++){let s=ft(new De(.16,.8,5),e);s.position.set(-1.1+n*.55,1.65,0),s.rotation.x=Math.PI,i.add(s)}return i}function Ha(){let i=new At,t=ft(new Ot(2.2,.12,.6),Q.woodLight);t.position.y=.55,i.add(t);for(let n of[-.9,.9]){let s=ft(new Ot(.12,.55,.5),Q.woodDark);s.position.set(n,.27,0),i.add(s)}let e=ft(new Ot(2.2,.5,.08),Q.woodLight);return e.position.set(0,.95,-.27),i.add(e),i}function ka(i,t=""){let e=new At,n=ft(new It(.1,.12,2.4,6),Q.woodDark);n.position.y=1.2,e.add(n);let r=hs(t?[{text:i,lh:60},{text:t,font:'bold 36px "Microsoft JhengHei", sans-serif',lh:50}]:[i],{w:512,h:160,bg:"#8a5a2b",border:"#4a2e14",color:"#fff4d6",stroke:"#3b230e"}),o=ft(new Ot(2.2,.7,.1),[Q.wood,Q.wood,Q.wood,Q.wood,new Ut({map:r}),new Ut({map:r})]);return o.position.y=2,e.add(o),e}function uu(i){let t=new At;for(let r of[-2.6,2.6]){let o=ft(new It(.22,.28,4.4,7),Q.woodDark);o.position.set(r,2.2,0),t.add(o)}let e=hs(i,{w:1024,h:192,bg:"#2f6fa3",border:"#f1d27a",color:"#ffffff",stroke:"#0f2a40",font:'bold 110px "Arial Black", "Microsoft JhengHei", sans-serif'}),n=ft(new Ot(6.2,1.15,.2),[Q.wood,Q.wood,Q.wood,Q.wood,new Ut({map:e}),new Ut({map:e})]);n.position.y=4.4,t.add(n);let s=ft(iu(7,.9,.9),Q.roofBlue);return s.position.y=5,t.add(s),t}function du(i="\u9BAE\u9B5A\u6536\u8CFC"){let t=new At,e=ft(new Ot(4.2,1.1,1.3),Q.woodLight);e.position.set(0,.55,.9),t.add(e);let n=ft(new Ot(4.4,.12,1.5),Q.woodDark);n.position.set(0,1.15,.9),t.add(n);for(let g of[-2.1,2.1])for(let p of[-1,1.5]){let y=ft(new It(.09,.09,3.4,6),Q.woodDark);y.position.set(g,1.7,p),t.add(y)}let s=document.createElement("canvas");s.width=256,s.height=64;let r=s.getContext("2d");for(let g=0;g<8;g++)r.fillStyle=g%2?"#f4f1ea":"#d9483b",r.fillRect(g*32,0,32,64);let o=new zn(s);o.colorSpace=Le;let a=new Ut({map:o,side:be,roughness:.9}),l=ft(new Fe(4.8,3,8,1),a);l.rotation.x=-Math.PI/2+.32,l.position.set(0,3.25,.3),t.add(l);for(let g=0;g<8;g++){let p=ft(new De(.3,.35,3),g%2?Q.white:Q.red,!1);p.rotation.x=Math.PI,p.position.set(-2.1+g*.6,2.62,1.75),t.add(p)}let c=ft(new Ot(3.6,.15,1),Q.ice);c.position.set(0,1.27,.9),t.add(c);let h=[Qt(10466240,{metalness:.4,roughness:.35}),Qt(14711391,{roughness:.4}),Qt(7180200,{metalness:.4,roughness:.35})];for(let g=0;g<6;g++){let p=ft(new qt(.18,8,6),h[g%3]);p.scale.set(2.4,.6,.8),p.position.set(-1.4+g*.56,1.42,.75+g%2*.25),p.rotation.y=(Math.random()-.5)*.4,t.add(p);let y=ft(new De(.15,.3,3),h[g%3]);y.rotation.z=Math.PI/2,y.position.set(p.position.x+.5,1.42,p.position.z),t.add(y)}let u=hs(i,{w:512,h:128,bg:"#1e4d6b",border:"#f3d27a",color:"#ffffff",stroke:"#0b2233",font:'bold 76px "Microsoft JhengHei", sans-serif'}),f=ft(new Fe(3,.75),new Ut({map:u}),!1);f.position.set(0,3.55,1.85),f.rotation.x=-.1,t.add(f);let d=Oa();d.position.set(2.8,0,1.2),t.add(d);let m=us();m.position.set(-2.9,0,1),m.rotation.y=.3,t.add(m);let x=io(!0);return x.position.set(2.4,0,2),t.add(x),t}function Zf(){let i=new At,t=ft(new It(3.2,3.6,1.2,12),Q.stone);t.position.y=.6,i.add(t);let e=6,n=14;for(let g=0;g<e;g++){let p=2.4-g/e*.9,y=2.4-(g+1)/e*.9,_=ft(new It(y,p,n/e,16),g%2?Q.red:Q.white);_.position.y=1.2+(g+.5)*(n/e),i.add(_)}let s=1.2+n,r=ft(new It(2,2,.25,16),Q.dark);r.position.y=s,i.add(r);let o=ft(new It(1.1,1.1,1.8,10),Q.lampGlass,!1);o.position.y=s+1,i.add(o);let a=ft(new De(1.5,1.4,10),Q.red);a.position.y=s+2.6,i.add(a);let l=ft(new qt(.2,8,6),Q.metal);l.position.y=s+3.4,i.add(l);let c=ft(new Ot(1.2,2.2,.3),Q.woodDark);c.position.set(0,2.3,2.3),i.add(c);let h=new tn({color:16774080,transparent:!0,opacity:0,blending:Rn,depthWrite:!1,side:be,fog:!1}),u=new De(4,60,16,1,!0);u.translate(0,-30,0),u.rotateZ(Math.PI/2);let f=new At;f.position.y=s+1;let d=new it(u,h),m=new it(u,h);m.rotation.y=Math.PI,f.add(d,m),i.add(f);let x=new tr(16769696,0,40,1.5);return x.position.y=s+1,i.add(x),so.push({light:x,base:30}),cs.push((g,p,y)=>{f.rotation.y+=g*.6,h.opacity=.14*y,f.visible=y>.05}),i}function Jf(){let i=new At,t=ft(new It(1.6,2.6,9,8),Q.wallWhite);t.position.y=4.5,i.add(t);let e=ft(new De(2.2,2.4,8),Q.roofBrown);e.position.y=10.2,i.add(e);let n=ft(new Ot(1.2,2,.3),Q.woodDark);n.position.set(0,1,2.45),i.add(n);let s=new At;s.position.set(0,8.6,2.1);let r=ft(new It(.25,.25,.8,8),Q.woodDark);r.rotation.x=Math.PI/2,s.add(r);for(let o=0;o<4;o++){let a=new At;a.rotation.z=o/4*Math.PI*2;let l=ft(new Ot(.2,6.5,.15),Q.woodDark);l.position.y=3.3,a.add(l);let c=ft(new Fe(1.3,5.2),Q.sail);c.position.set(.75,3.6,.05),a.add(c),s.add(a)}return i.add(s),cs.push(o=>{s.rotation.z-=o*.7}),i}function fu(){let i=new At;for(let r=0;r<9;r++){let o=r/9*Math.PI*2,a=za(Math.random,.32,Q.stone);a.position.set(Math.cos(o)*.9,.12,Math.sin(o)*.9),i.add(a)}for(let r=0;r<4;r++){let o=ft(new It(.1,.12,1.3,6),Q.trunk);o.rotation.z=Math.PI/2-.5,o.rotation.y=r/4*Math.PI*2,o.position.y=.35,i.add(o)}let t=new tn({color:16752688,transparent:!0,opacity:.9,blending:Rn,depthWrite:!1}),e=new tn({color:16769162,transparent:!0,opacity:.9,blending:Rn,depthWrite:!1}),n=[];for(let r=0;r<5;r++){let o=new it(new De(.28-r*.03,1.1-r*.1,6),r%2?e:t);o.position.set((Math.random()-.5)*.3,.75,(Math.random()-.5)*.3),i.add(o),n.push(o)}let s=new tr(16747066,4,14,1.5);return s.position.y=1.3,i.add(s),s.castShadow=!1,so.push({light:s,base:14,flicker:!0}),cs.push((r,o)=>{n.forEach((a,l)=>{let c=.8+.35*Math.sin(o*(8+l*2.3)+l);a.scale.set(1,c,1),a.rotation.y=o*(1+l*.3)})}),i}function ro(i=16053492,t=2845872){let e=new At,n=_=>{let v=new mi;return v.moveTo(-2.4*_,-1.05*_),v.lineTo(1*_,-1.1*_),v.quadraticCurveTo(2.4*_,-.9*_,2.9*_,0),v.quadraticCurveTo(2.4*_,.9*_,1*_,1.1*_),v.lineTo(-2.4*_,1.05*_),v.lineTo(-2.4*_,-1.05*_),v},s=n(1),r=n(.86);s.holes.push(r);let o=new Ni(s,{depth:.95,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:1});o.rotateX(-Math.PI/2);let a=ft(o,Qt(i,{roughness:.5}));a.position.y=-.35,e.add(a);let l=new Ni(n(1.015),{depth:.16,bevelEnabled:!1});l.rotateX(-Math.PI/2);let c=ft(l,Qt(t,{roughness:.5}));c.position.y=.32,e.add(c);let h=new Ni(n(.9),{depth:.12,bevelEnabled:!1});h.rotateX(-Math.PI/2);let u=ft(h,Q.plank);u.position.y=-.2,e.add(u);let f=new Ni(n(.75),{depth:.35,bevelEnabled:!1});f.rotateX(-Math.PI/2);let d=ft(f,Qt(t,{roughness:.6}));d.position.y=-.62,e.add(d);for(let _ of[-1.2,.6]){let v=ft(new Ot(.55,.1,1.8),Q.woodLight);v.position.set(_,.3,0),e.add(v)}let m=new At,x=ft(new Ot(.6,.7,.5),Qt(2237480,{roughness:.4}));x.position.y=.55,m.add(x);let g=ft(new Ot(.62,.15,.52),Qt(14239803,{roughness:.4}));g.position.y=.95,m.add(g);let p=ft(new Ot(.15,1.1,.15),Q.metal);p.position.y=-.2,m.add(p);let y=ft(new Ot(.05,.45,.1),Q.metal);return y.position.set(-.1,-.65,0),m.add(y),m.position.set(-2.6,0,0),e.add(m),e.userData.prop=y,e.userData.motor=m,e}var $e,oe,pn,Qt,to,eo,Fa,eu,no,Wf,Q,cM,so,cs,Qn,nu,cu,ds=ee(()=>{Ee();tu();$e=(i,t=1)=>`rgba(${i},${i},${i},${t})`,oe=Math.random,pn={wood:ar(256,(i,t)=>{i.fillStyle=$e(225),i.fillRect(0,0,t,t);for(let e=0;e<140;e++){let n=oe()*t,s=.5+oe()*2.5;i.strokeStyle=$e(120+oe()*90,.25+oe()*.35),i.lineWidth=s,i.beginPath(),i.moveTo(0,n);for(let r=0;r<=t;r+=16)i.lineTo(r,n+Math.sin(r*.03+e)*2.5);i.stroke()}for(let e=0;e<3;e++)i.fillStyle=$e(110,.45),i.beginPath(),i.ellipse(oe()*t,oe()*t,7,4,0,0,7),i.fill()}),plaster:ar(256,(i,t)=>{i.fillStyle=$e(240),i.fillRect(0,0,t,t);for(let e=0;e<2600;e++)i.fillStyle=$e(190+oe()*60,.35),i.fillRect(oe()*t,oe()*t,1+oe()*3,1+oe()*3);for(let e=0;e<18;e++)i.fillStyle=$e(200,.12),i.beginPath(),i.arc(oe()*t,oe()*t,10+oe()*30,0,7),i.fill()}),roof:ar(256,(i,t)=>{i.fillStyle=$e(230),i.fillRect(0,0,t,t);let e=8,n=t/e;for(let s=0;s<e;s++){let r=s%2*16;for(let o=-32;o<t;o+=32)i.fillStyle=$e(185+oe()*60),i.fillRect(o+r+1,s*n+1,30,n-3),i.fillStyle=$e(120,.5),i.fillRect(o+r+1,s*n+n-5,30,4)}}),stone:ar(256,(i,t)=>{i.fillStyle=$e(215),i.fillRect(0,0,t,t);for(let e=0;e<260;e++)i.fillStyle=$e(140+oe()*110,.25),i.beginPath(),i.arc(oe()*t,oe()*t,2+oe()*16,0,7),i.fill();for(let e=0;e<2500;e++)i.fillStyle=$e(100+oe()*155,.4),i.fillRect(oe()*t,oe()*t,1,1)}),bark:ar(128,(i,t)=>{i.fillStyle=$e(210),i.fillRect(0,0,t,t);for(let e=0;e<90;e++)i.fillStyle=$e(90+oe()*100,.45),i.fillRect(oe()*t,0,1+oe()*3,t);for(let e=0;e<40;e++)i.fillStyle=$e(80,.35),i.fillRect(oe()*t,oe()*t,6+oe()*10,2)}),leaf:ar(256,(i,t)=>{i.fillStyle=$e(215),i.fillRect(0,0,t,t);for(let e=0;e<900;e++)i.fillStyle=$e(oe()<.5?120+oe()*60:235+oe()*20,.55),i.beginPath(),i.ellipse(oe()*t,oe()*t,2+oe()*5,1+oe()*3,oe()*3,0,7),i.fill()},2)};pn.roof.repeat.set(.6,.6);pn.plaster.repeat.set(.35,.35);pn.wood.repeat.set(.8,.8);Qt=(i,t={})=>new Ut({color:i,roughness:.85,metalness:0,...t}),to={map:pn.wood,bumpMap:pn.wood,bumpScale:1.2,roughness:.8},eo={map:pn.plaster,bumpMap:pn.plaster,bumpScale:.6,roughness:.92},Fa={map:pn.roof,bumpMap:pn.roof,bumpScale:2,roughness:.75},eu={map:pn.stone,bumpMap:pn.stone,bumpScale:2,roughness:.95},no={map:pn.leaf,roughness:.75},Wf={map:pn.bark,bumpMap:pn.bark,bumpScale:2,roughness:.95},Q={wood:Qt(9132587,to),woodDark:Qt(5913118,to),woodLight:Qt(11764302,to),plank:Qt(10119998,to),plankOld:Qt(8350293,to),roofRed:Qt(11814191,Fa),roofBlue:Qt(4022156,Fa),roofGreen:Qt(5012028,Fa),roofBrown:Qt(7227950,Fa),wallCream:Qt(15720898,eo),wallWhite:Qt(15855334,eo),wallBlue:Qt(11127256,eo),wallPink:Qt(15254712,eo),wallYellow:Qt(15785114,eo),stone:Qt(9275264,eu),rock:Qt(8222573,eu),rockDark:Qt(6249042,eu),leaf:Qt(4165434,no),leafLight:Qt(5941572,no),palmLeaf:Qt(4889148,{...no,side:be}),pine:Qt(2909495,{...no,side:be}),pineB:Qt(2381102,{...no,side:be}),trunk:Qt(7031342,Wf),palmTrunk:Qt(9400136,Wf),metal:Qt(7106679,{metalness:.6,roughness:.4}),dark:Qt(2236962),red:Qt(12597547),white:Qt(16053492),rope:Qt(13152892),coconut:Qt(5913890),sail:Qt(15985366,{side:be}),window:new Ut({color:2898762,emissive:16761194,emissiveIntensity:0,roughness:.2,metalness:.1}),lampGlass:new Ut({color:16773577,emissive:16758090,emissiveIntensity:.2,roughness:.3}),ice:Qt(14283519,{roughness:.2,transparent:!0,opacity:.85})},cM=[Q.window,Q.lampGlass],so=[],cs=[],Qn=[];nu=null;cu={value:0};cs.push((i,t)=>{cu.value=t});Q.palmLeaf.onBeforeCompile=i=>{i.uniforms.uWind=cu,i.vertexShader=`uniform float uWind;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
    {
      float k = clamp((position.y - 4.0) * 0.12, 0.0, 1.0);
      transformed.x += sin(uWind * 0.9 + position.x * 0.15 + position.z * 0.1) * 0.12 * k;
      transformed.z += cos(uWind * 0.7 + position.z * 0.15) * 0.08 * k;
      transformed.y += sin(uWind * 1.3 + position.x * 0.4) * 0.05 * k;
    }`)}});function T_(i){let t=i/100;return oo.map((e,n)=>n===0?e.weight*Math.max(.15,1-t*.5):n===1?e.weight:e.weight*(1+t*(n-1)*.55))}function Qf(i,t,e){let n=Va.filter(m=>m.pools.includes(i)&&(m.time==="any"||m.time==="night"===e)),s=T_(t),r=oo.map((m,x)=>({r:m,w:n.some(g=>g.rarity===m.id)?s[x]:0})),o=r.reduce((m,x)=>m+x.w,0),a=Math.random()*o,l=r.find(m=>(a-=m.w)<=0)||r[1],c=n.filter(m=>m.rarity===l.r.id),h=c[Math.floor(Math.random()*c.length)],u=Math.random(),f=h.minW+(h.maxW-h.minW)*Math.pow(u,2.3),d=null;if(h.rarity!=="trash"){for(let m of pu)if(Math.random()<m.chance*(1+t/200)){d=m;break}}return d&&(f*=d.weightMul),f=Math.round(f*100)/100,f<.01&&(f=.01),{fish:h,weight:f,mutation:d}}function jf(i,t,e){let n=en[i.rarity],s=(i.minW+i.maxW)/2,r=.6+.8*Math.min(2.5,t/s),o=i.base*r*(e?e.valueMul:1);return n.id==="trash"&&(o=i.base),Math.max(1,Math.round(o))}function tp(i,t){let e=en[i.rarity],n=(i.minW+i.maxW)/2;return Math.min(1,e.diff+i.diff+Math.max(0,Math.min(.15,(t/n-1)*.08)))}function ao(i){return i>=1e3?`${(i/1e3).toFixed(2)} \u516C\u5678`:i<1?`${Math.round(i*1e3)} g`:`${i.toFixed(2)} kg`}var oo,en,ne,Va,ki,Kf,pu,lr=ee(()=>{oo=[{id:"trash",name:"\u5783\u573E",color:"#8a8a8a",weight:14,diff:0,valueMul:.3},{id:"common",name:"\u666E\u901A",color:"#e8e8e8",weight:52,diff:.1,valueMul:1},{id:"rare",name:"\u7A00\u6709",color:"#3f9bff",weight:22,diff:.2,valueMul:1.6},{id:"epic",name:"\u53F2\u8A69",color:"#b45cff",weight:8.5,diff:.32,valueMul:2.6},{id:"legendary",name:"\u50B3\u5947",color:"#ffa31a",weight:3.2,diff:.45,valueMul:4.5},{id:"mythical",name:"\u795E\u8A71",color:"#ff3f6c",weight:.55,diff:.62,valueMul:9},{id:"exotic",name:"\u7570\u570B\u60C5\u8ABF",color:"rainbow",weight:.11,diff:.78,valueMul:18},{id:"secret",name:"\u79D8\u5BC6",color:"#38f2ff",weight:.02,diff:.9,valueMul:40}],en=Object.fromEntries(oo.map((i,t)=>[i.id,{...i,index:t}])),ne=(i,t,e,n,s,r,o,a,l,c={})=>({id:i,name:t,rarity:e,pools:n,minW:s,maxW:r,base:o,shape:a,colors:l,time:"any",diff:0,...c}),Va=[ne("seaweed","\u6D77\u5E36","trash",["noob","normal","ocean"],.1,.8,2,"weed",[4025130,6986298]),ne("boot","\u7834\u820A\u9774\u5B50","trash",["noob","normal","pond"],.4,1.5,3,"boot",[5913122,3088146]),ne("can","\u751F\u93FD\u9435\u7F50","trash",["normal","pond","ocean"],.1,.4,3,"can",[10528429,12597547]),ne("driftwood","\u6F02\u6D41\u6728","trash",["noob","normal","ocean"],.5,3,4,"wood",[9071173,6178352]),ne("anchovy","\u9BF7\u9B5A","common",["noob"],.05,.35,12,"standard",[7311272,14674158],{len:3.2}),ne("sardine","\u6C99\u4E01\u9B5A","common",["noob","ocean"],.08,.5,14,"standard",[5140367,15134450],{len:3}),ne("mackerel","\u9BD6\u9B5A","common",["noob","normal"],.4,2.2,18,"standard",[3107438,14739168],{len:3.4,stripes:!0}),ne("clownfish","\u5C0F\u4E11\u9B5A","rare",["noob"],.05,.4,35,"standard",[16743196,16777215],{len:2.2,bands:!0,time:"day"}),ne("seabream","\u9ED1\u9BDB","rare",["noob","normal"],.6,4,32,"tall",[6055536,13225682]),ne("pufferfish","\u6CB3\u8C5A","epic",["noob"],.3,2.5,55,"round",[14205562,16446424]),ne("glowsquid","\u87A2\u5149\u9B77\u9B5A","epic",["noob","ocean"],.3,3,60,"squid",[6280447,13104383],{time:"night",glow:6280447}),ne("yellowfin","\u9EC3\u9C2D\u9BAA\u9B5A","legendary",["noob","ocean"],15,120,110,"standard",[2112107,14278888],{len:3.6,fin:16765503}),ne("moonray","\u6708\u5149\u9B5F","mythical",["noob"],20,160,260,"flat",[3820154,13623551],{time:"night",glow:10470655}),ne("goldtuna","\u9EC3\u91D1\u9BAA\u9B5A","exotic",["noob"],80,400,700,"standard",[16763955,16773808],{len:3.6,glow:16765503}),ne("cod","\u9C48\u9B5A","common",["normal"],1,9,20,"standard",[8025172,15130822],{len:3.4,spots:!0}),ne("flounder","\u6BD4\u76EE\u9B5A","common",["normal"],.5,5,22,"flat",[9073488,15854038]),ne("herring","\u9BE1\u9B5A","common",["normal","ocean"],.1,.8,15,"standard",[5930394,15265522],{len:3.2}),ne("salmon","\u9BAD\u9B5A","rare",["normal"],2,18,40,"standard",[6254470,15900810],{len:3.5,spots:!0}),ne("redsnapper","\u7D05\u9BDB","rare",["normal"],1,12,42,"tall",[14241855,16238264]),ne("grouper","\u77F3\u6591\u9B5A","epic",["normal"],5,60,70,"tall",[7035450,13218698],{spots:!0}),ne("anglerfish","\u9B9F\u9C47\u9B5A","epic",["normal","ocean"],2,25,75,"round",[3813178,7035755],{time:"night",glow:10354589,lure:!0}),ne("mahimahi","\u9B3C\u982D\u5200","legendary",["normal"],6,40,120,"standard",[3122027,16765503],{len:3.6}),ne("hammerhead","\u96D9\u9AFB\u9BCA","mythical",["normal","ocean"],150,450,320,"shark",[7110543,14673642],{hammer:!0}),ne("oarfish","\u7687\u5E36\u9B5A","exotic",["normal"],100,600,800,"long",[14212582,16727887],{len:9}),ne("tilapia","\u5433\u90ED\u9B5A","common",["pond"],.2,2,14,"tall",[6976614,14277833]),ne("carp","\u9BC9\u9B5A","common",["pond"],1,12,16,"standard",[9075258,15128992],{len:3}),ne("catfish","\u9BF0\u9B5A","rare",["pond"],2,30,38,"standard",[4868676,12105896],{len:3.6,whiskers:!0}),ne("rainbowtrout","\u8679\u9C52","epic",["pond"],.5,8,62,"standard",[7047770,16748464],{len:3.4,spots:!0}),ne("koi","\u9326\u9BC9","legendary",["pond"],1,15,140,"standard",[16777215,16734762],{len:3,koi:!0}),ne("goldenkoi","\u9EC3\u91D1\u9326\u9BC9","mythical",["pond"],3,25,380,"standard",[16763955,16773808],{len:3,glow:16765503}),ne("spiritcarp","\u9748\u9B42\u9BC9","exotic",["pond"],5,40,900,"standard",[10482687,16777215],{len:3.2,glow:10482687,time:"night"}),ne("skipjack","\u6B63\u9C39","common",["ocean"],2,15,22,"standard",[2834283,14278888],{len:3.3,stripes:!0}),ne("flyingfish","\u98DB\u9B5A","rare",["ocean"],.2,1.2,36,"standard",[3895216,15266040],{len:3.2,wings:!0,time:"day"}),ne("barracuda","\u68AD\u9B5A","epic",["ocean"],3,25,68,"long",[8030874,14739178],{len:5}),ne("swordfish","\u528D\u65D7\u9B5A","legendary",["ocean"],50,400,150,"standard",[3100538,13687008],{len:4,sword:!0}),ne("bluemarlin","\u85CD\u69CD\u9B5A","mythical",["ocean"],100,700,340,"standard",[2052e3,14214388],{len:4.2,sword:!0,fin:3898320}),ne("whaleshark","\u9BE8\u9BCA","exotic",["ocean"],2e3,9e3,1200,"whale",[4083558,15265007],{spots:!0}),ne("abyssleviathan","\u6DF1\u6DF5\u5229\u7DAD\u5766","secret",["ocean","normal","noob"],3e3,12e3,3e3,"shark",[1773616,9060351],{glow:11758591,time:"night"}),ne("starlightkoi","\u661F\u8F1D\u9326\u9BC9","secret",["pond"],10,80,2500,"standard",[12166143,16777215],{len:3,glow:16777215})],ki=Object.fromEntries(Va.map(i=>[i.id,i])),Kf={noob:"noob Island \u6D77\u5CB8",normal:"normal Island \u6D77\u5CB8",pond:"normal Island \u6C60\u5858",ocean:"\u5916\u6D77"},pu=[{id:"big",name:"\u5DE8\u5927",chance:.035,weightMul:2.4,valueMul:1.4,color:"#ffd36b"},{id:"shiny",name:"\u9583\u4EAE",chance:.03,weightMul:1,valueMul:1.85,color:"#fff7a8"},{id:"albino",name:"\u767D\u5316",chance:.02,weightMul:1,valueMul:2.2,color:"#ffffff"},{id:"tiny",name:"\u8FF7\u4F60",chance:.03,weightMul:.35,valueMul:1.1,color:"#9fe6ff"}]});var nn,Ga,mu=ee(()=>{zi();lr();nn={tutorial:{title:"\u65B0\u624B\u6559\u5B78",giver:"tutor",reward:100,stages:[{kind:"event",type:"equip",count:1,text:"\u6309 1 \u62FF\u51FA\u65B0\u624B\u91E3\u7AFF"},{kind:"event",type:"catch",count:1,text:"\u6309\u4F4F\u5DE6\u9375\u7529\u7AFF\uFF0C\u91E3\u5230\u7B2C\u4E00\u689D\u9B5A"},{kind:"event",type:"sell",count:1,text:"\u628A\u9B5A\u8CE3\u7D66\u9B5A\u5546\u30FB\u8001\u9673",target:"merchant_noob"},{kind:"turnin",npc:"tutor",text:"\u56DE\u53BB\u627E\u5C0E\u5E2B\u30FB\u963F\u51F1 \u9818\u734E\u52F5",target:"tutor"}]},dock5:{title:"\u78BC\u982D\u8A66\u8EAB\u624B",giver:"hai",reward:150,requires:["tutorial"],stages:[{kind:"event",type:"catch",count:5,text:"\u5728 noob Island \u91E3\u5230 5 \u689D\u9B5A",filter:i=>i.pool==="noob"},{kind:"turnin",npc:"hai",text:"\u56DE\u5831\u78BC\u982D\u6F01\u592B\u30FB\u963F\u6D77",target:"hai"}]},voyage:{title:"\u51FA\u822A\uFF01",giver:"hai",reward:120,requires:["dock5"],stages:[{kind:"event",type:"arrive",count:1,text:"\u627E\u8239\u5320\u30FB\u963F\u6728\u53EB\u8239\uFF0C\u958B\u5230 normal Island",filter:i=>i.island==="normal"},{kind:"turnin",npc:"shipwright_normal",text:"\u8DDF normal Island \u7684\u8239\u5320\u30FB\u5927\u77F3 \u6253\u62DB\u547C",target:"shipwright_normal"}]},night3:{title:"\u591C\u91E3\u9054\u4EBA",giver:"de",reward:300,stages:[{kind:"event",type:"catch",count:3,text:"\u5728\u591C\u665A\u91E3\u5230 3 \u689D\u9B5A\uFF08\u4E0D\u542B\u5783\u573E\uFF09",filter:i=>i.night&&i.fish.rarity!=="trash"},{kind:"turnin",npc:"de",text:"\u56DE\u5831\u8001\u6F01\u592B\u30FB\u5FB7\u53D4",target:"de"}]},salmon:{title:"\u4E3B\u5EDA\u7684\u59D4\u8A17",giver:"anna",reward:250,stages:[{kind:"deliver",npc:"anna",fishId:"salmon",text:"\u5E36\u4E00\u689D\u9BAD\u9B5A\u7D66\u4E3B\u5EDA\u30FB\u5B89\u5A1C\uFF08normal Island \u6D77\u5CB8\uFF09",target:"anna"}]},pond3:{title:"\u6C60\u5858\u7814\u7A76",giver:"lin",reward:200,stages:[{kind:"event",type:"catch",count:3,text:"\u5728 normal Island \u7684\u6C60\u5858\u91E3\u5230 3 \u689D\u9B5A",filter:i=>i.pool==="pond"},{kind:"turnin",npc:"lin",text:"\u56DE\u5831\u7814\u7A76\u54E1\u30FB\u6797\u535A\u58EB",target:"lin"}]},rare1:{title:"\u50B3\u5947\u9B5A\u8ABF\u67E5",giver:"lin",reward:600,requires:["pond3"],stages:[{kind:"event",type:"catch",count:1,text:"\u91E3\u5230\u4E00\u689D\u300C\u50B3\u5947\u300D\u4EE5\u4E0A\u7684\u9B5A",filter:i=>en[i.fish.rarity].index>=en.legendary.index},{kind:"turnin",npc:"lin",text:"\u56DE\u5831\u7814\u7A76\u54E1\u30FB\u6797\u535A\u58EB",target:"lin"}]}},Ga=class{constructor(t){this.g=t}q(t){return st.quests[t]}isDone(t){return!!(st.quests[t]&&st.quests[t].done)}isActive(t){let e=st.quests[t];return!!e&&!e.done}canStart(t){let e=nn[t];return!st.quests[t]&&(e.requires||[]).every(n=>this.isDone(n))}stage(t){let e=st.quests[t];return e?nn[t].stages[e.stage]:null}start(t){this.canStart(t)&&(st.quests[t]={stage:0,progress:0,done:!1},this.g.ui.toast(`\u{1F4DC} \u63A5\u53D7\u4EFB\u52D9\uFF1A${nn[t].title}`,"#ffd75e"),this.g.sound.chime(),t==="tutorial"&&this.g.fishing.equipped&&this.onEvent("equip",{}),ln(),this.render())}advance(t){let e=st.quests[t];if(e.stage++,e.progress=0,e.stage>=nn[t].stages.length){this.finish(t);return}this.g.sound.coin(),ln(),this.render()}finish(t){let e=nn[t],n=st.quests[t];n.done=!0,st.money+=e.reward,this.g.ui.setMoney(st.money,!0),this.g.ui.toast(`\u2705 \u4EFB\u52D9\u5B8C\u6210\uFF1A${e.title}\u3000\u734E\u52F5 $${e.reward}`,"#8dff9a"),this.g.sound.jingle(4),ln(),this.render()}onEvent(t,e={}){for(let[n,s]of Object.entries(st.quests)){if(s.done)continue;let r=nn[n].stages[s.stage];r.kind!=="event"||r.type!==t||r.filter&&!r.filter(e)||(s.progress+=e.count||1,s.progress>=r.count?this.advance(n):(ln(),this.render()))}}turnInReady(t){for(let[e,n]of Object.entries(st.quests)){if(n.done)continue;let s=nn[e].stages[n.stage];if((s.kind==="turnin"||s.kind==="deliver")&&s.npc===t){if(s.kind==="deliver"&&!st.inventory.some(r=>r.id===s.fishId))continue;return e}}return null}markerFor(t){if(this.turnInReady(t))return"?";for(let[e,n]of Object.entries(nn))if(n.giver===t&&this.canStart(e))return"!";return null}activeList(){let t=[];for(let[e,n]of Object.entries(st.quests)){if(n.done)continue;let s=nn[e],r=s.stages.map((o,a)=>{let l=o.text;return a===n.stage&&o.kind==="event"&&o.count>1&&(l+=`\uFF08${n.progress}/${o.count}\uFF09`),a===n.stage&&o.kind==="deliver"&&(l+=st.inventory.some(c=>c.id===o.fishId)?"\uFF08\u2714 \u80CC\u5305\u4E2D\u6709\uFF09":"\uFF08\u80CC\u5305\u4E2D\u6C92\u6709\uFF09"),{text:l,done:a<n.stage,current:a===n.stage}}).filter((o,a)=>a<=n.stage);t.push({id:e,title:s.title,steps:r,reward:`$${s.reward}`})}return t}currentTarget(){for(let[t,e]of Object.entries(st.quests)){if(e.done)continue;let n=nn[t].stages[e.stage];if(n.target)return n.target}return null}render(){this.g.ui.renderQuests(this.activeList())}}});var fs,gu,Wa,Xa=ee(()=>{Ee();fs={starter:{id:"starter",name:"\u65B0\u624B\u91E3\u7AFF",lure:25,luck:50,control:.1,resilience:35,maxWeight:5e3,desc:"\u6BCF\u4F4D\u91E3\u5BA2\u7684\u7B2C\u4E00\u628A\u91E3\u7AFF\u3002\u6728\u88FD\u7AFF\u8EAB\u3001\u7D05\u8272\u7D81\u7DDA\uFF0C\u53EF\u9760\u53C8\u597D\u4E0A\u624B\u3002"}},gu=48,Wa=class{constructor(t){this.group=new At,this.segments=[];let e=new Ut({color:8016432,roughness:.45,metalness:.1}),n=new Ut({color:12597547,roughness:.5}),s=new Ut({color:13214826,roughness:.95}),r=new Ut({color:12106948,roughness:.3,metalness:.8}),o=new Ut({color:2303531,roughness:.4,metalness:.4}),a=new it(new It(.045,.05,.55,10),s);a.rotation.x=Math.PI/2,a.position.z=-.12;let l=new it(new It(.055,.055,.06,10),o);l.rotation.x=Math.PI/2,l.position.z=-.41,this.group.add(a,l);let c=new At;c.position.set(0,-.11,.08);let h=new it(new Ot(.03,.08,.12),r);h.position.y=.05;let u=new it(new It(.075,.075,.06,14),r);u.rotation.z=Math.PI/2;let f=new it(new It(.06,.06,.062,14),new Ut({color:15856113,roughness:.6}));f.rotation.z=Math.PI/2;let d=new At;d.position.x=.05;let m=new it(new Ot(.015,.11,.02),o);m.position.y=.05;let x=new it(new It(.018,.018,.05,8),new Ut({color:12597547}));x.rotation.z=Math.PI/2,x.position.set(.03,.1,0),d.add(m,x),c.add(h,u,f,d),this.group.add(c),this.reelHandle=d;let g=9,y=3/g,_=this.group;for(let M=0;M<g;M++){let L=new At;L.position.z=M===0?.14:y;let z=.032-M/g*.024,N=.032-(M+1)/g*.024,H=new it(new It(N,z,y,7),e);if(H.rotation.x=Math.PI/2,H.position.z=y/2,H.castShadow=!0,L.add(H),M%2===1){let Z=new it(new It(z+.006,z+.006,.05,7),n);Z.rotation.x=Math.PI/2,Z.position.z=.03;let V=new it(new Fi(.025-M*.002,.004,4,10),r);V.position.set(0,-.045,.03),L.add(Z,V)}_.add(L),this.segments.push(L),_=L}this.tip=new Ne,this.tip.position.z=y,_.add(this.tip),this.bobber=new At;let v=new it(new qt(.15,14,8,0,Math.PI*2,0,Math.PI/2),new Ut({color:15217962,roughness:.35})),P=new it(new qt(.15,14,8,0,Math.PI*2,Math.PI/2,Math.PI/2),new Ut({color:16777215,roughness:.35})),A=new it(new It(.152,.152,.025,14),o),R=new it(new It(.012,.012,.3,5),new Ut({color:16769354,emissive:16761856,emissiveIntensity:.4}));R.position.y=.27;let I=new it(new It(.01,.01,.18,4),o);I.position.y=-.22,this.bobber.add(v,P,A,R,I),this.bobber.traverse(M=>{M.isMesh&&(M.castShadow=!0)}),t.add(this.bobber),this.bobberVel=new S;let E=new ge;this.linePos=new Float32Array(gu*3),E.setAttribute("position",new ce(this.linePos,3).setUsage(rs)),this.lineMat=new Vr({color:16185078,transparent:!0,opacity:.85}),this.line=new pa(E,this.lineMat),this.line.frustumCulled=!1,t.add(this.line),this.bend=0,this.side=0,this.targetBend=0,this.targetSide=0,this.bendVel=0,this.spin=0,this.visible=!1,this.setVisible(!1),this._tip=new S}setVisible(t){this.visible=t,this.group.visible=t,this.bobber.visible=t,this.line.visible=t}tipWorld(t=this._tip){return this.tip.updateWorldMatrix(!0,!1),this.tip.getWorldPosition(t)}update(t){let s=(this.targetBend-this.bend)*120-this.bendVel*14;this.bendVel+=s*t,this.bend+=this.bendVel*t,this.side+=(this.targetSide-this.side)*Math.min(1,t*8);let r=this.segments.length;for(let o=0;o<r;o++){let a=Math.pow((o+1)/r,1.6)*.42;this.segments[o].rotation.x=this.bend*a,this.segments[o].rotation.y=this.side*a}this.reelHandle.rotation.x+=this.spin*t}impulse(t){this.bendVel+=t}updateLine(t,e=0,n=0){let s=this.tipWorld(),r=this.bobber.position,o=s.distanceTo(r),a=t*o*.18;for(let l=0;l<gu;l++){let c=l/(gu-1),h=s.x+(r.x-s.x)*c,u=s.z+(r.z-s.z)*c,f=s.y+(r.y-s.y)*c-a*4*c*(1-c),d=e*Math.sin(c*Math.PI)*Math.sin(n*40+c*12)*.05;this.linePos[l*3]=h+d,this.linePos[l*3+1]=f+d,this.linePos[l*3+2]=u}this.line.geometry.attributes.position.needsUpdate=!0}}});function ep(){let i=Math.random();return{baitId:"worm",amount:i<.35?2:i<.7?3:i<.9?4:5}}function cr(){let i=st.equippedBait;return!i||!sn[i]||!(st.baits[i]>0)?null:sn[i]}function xu(i){let t=cr();return t&&t[i]||0}function np(){let i=cr();return i?(st.baits[i.id]--,st.baits[i.id]<=0?(st.baits[i.id]=0,st.equippedBait=null,!0):!1):!1}var sn,rn,lo=ee(()=>{zi();sn={worm:{id:"worm",name:"\u87F2\u990C",icon:"\u{1F41B}",rarity:"common",lure:15,luck:0,desc:"\u6700\u57FA\u672C\u7684\u9B5A\u990C\u3002\u4E0A\u9264\u901F\u5EA6 +15%"}},rn={name:"\u8A98\u990C\u7BB1",icon:"\u{1F4E6}",price:20}});function Gn(i){return()=>i.dialogue.close()}function hr(i,t,e){let n=i.quests,s=n.turnInReady(t.id);if(s){let o=nn[s].stages[st.quests[s].stage],a=e.thanks&&e.thanks[s]||["\u505A\u5F97\u597D\uFF01\u9019\u662F\u4F60\u7684\u734E\u52F5\u3002"];i.dialogue.run(t,[...a.slice(0,-1),{text:a[a.length-1],options:[{label:`\u9818\u53D6\u734E\u52F5 $${nn[s].reward}`,cls:"green",action:()=>{if(o.kind==="deliver"){let l=st.inventory.find(c=>c.id===o.fishId);l&&Wh(l.uid),i.onInventoryChanged()}n.advance(s),i.dialogue.close()}}]}]);return}for(let o of e.quests||[])if(n.canStart(o)){let a=e.offers[o];i.dialogue.run(t,[...a.slice(0,-1),{text:a[a.length-1],options:[{label:`\u63A5\u53D7\u4EFB\u52D9\u300C${nn[o].title}\u300D`,cls:"green",action:()=>{n.start(o),i.dialogue.close()}},{label:"\u4E0B\u6B21\u518D\u8AAA",cls:"gray",action:Gn(i)}]}]);return}for(let o of e.quests||[])if(n.isActive(o)&&e.hints&&e.hints[o]){i.dialogue.run(t,[{text:e.hints[o],options:[...e.extra?e.extra(i,t):[],{label:"\u597D\u7684\uFF01",cls:"gray",action:Gn(i)}]}]);return}let r=Array.isArray(e.idle)?e.idle[Math.floor(Math.random()*e.idle.length)]:e.idle;i.dialogue.run(t,[{text:r,options:[...e.extra?e.extra(i,t):[],{label:"\u518D\u898B",cls:"gray",action:Gn(i)}]}])}function ip(i,t,e){let n=st.playerName,s=e?"\u5C0D\u4E86\uFF01\u4F60\u5DF2\u7D93\u662F\u6B63\u5F0F\u7684\u91E3\u5BA2\u4E86\uFF0C\u53EF\u662F\u6211\u9084\u4E0D\u77E5\u9053\u4F60\u7684\u540D\u5B57\u5462\uFF01\u4F60\u60F3\u53EB\u4EC0\u9EBC\u540D\u5B57\uFF1F":n?`\u4F60\u73FE\u5728\u53EB\u300C${n}\u300D\u3002\u60F3\u63DB\u6210\u4EC0\u9EBC\u540D\u5B57\u5462\uFF1F`:"\u4F60\u9084\u6C92\u6709\u540D\u5B57\u5462\uFF01\u60F3\u53EB\u4EC0\u9EBC\u540D\u5B57\uFF1F",r=()=>{i.dialogue.close(),i.nameModal.open(n||"",o=>{i.setPlayerName(o),i.dialogue.run(t,e||!n?[`\u300C${o}\u300D\uFF01\u597D\u540D\u5B57\uFF01\u4EE5\u5F8C\u5CF6\u4E0A\u7684\u5927\u5BB6\u90FD\u6703\u9019\u6A23\u53EB\u4F60\u3002`,"\u53BB\u627E\u78BC\u982D\u7684\u963F\u6D77\u5427\uFF0C\u4ED6\u4E5F\u8A31\u6709\u4E8B\u60C5\u8981\u62DC\u8A17\u4F60\u3002\u795D\u4F60\u91E3\u5230\u5927\u9B5A\uFF01"]:[`\u300C${o}\u300D\u55CE\uFF1F\u65B0\u540D\u5B57\u5F88\u9069\u5408\u4F60\uFF01`])},()=>i.dialogue.run(t,["\u6C92\u95DC\u4FC2\uFF0C\u60F3\u597D\u4E86\u518D\u4F86\u627E\u6211\u53D6\u540D\u5B57\u5427\uFF01"]))};i.dialogue.run(t,[{text:s,options:[{label:e||!n?"\u53D6\u540D\u5B57":"\u6539\u540D\u5B57",cls:"green",action:r},{label:"\u4EE5\u5F8C\u518D\u8AAA",cls:"gray",action:()=>i.dialogue.run(t,["\u597D\uFF0C\u60F3\u597D\u4E86\u96A8\u6642\u4F86\u627E\u6211\uFF01"])}]}])}function vu(i,t){let e=st.inventory,n=e.reduce((l,c)=>l+c.value,0),s=i.player.heldFish;if(i.quests.turnInReady(t.id))return hr(i,t,{});let r=[];if(s){let l=ki[s.id];r.push({label:`\u8CE3\u6389\u624B\u4E0A\u7684${l.name}\uFF08$${s.value}\uFF09`,cls:"green",action:()=>sp(i,t,[s])})}e.length&&r.push({label:`\u5168\u90E8\u8CE3\u6389\uFF08${e.length} \u689D\u30FB$${n}\uFF09`,cls:"green",action:()=>i.dialogue.run(t,[{text:`\u5168\u90E8 ${e.length} \u689D\u9B5A\uFF0C\u4E00\u5171 $${n.toLocaleString()}\u3002\u78BA\u5B9A\u8981\u5168\u90E8\u8CE3\u6389\u55CE\uFF1F`,options:[{label:"\u78BA\u5B9A\u8CE3\u6389\uFF01",cls:"green",action:()=>sp(i,t,[...e])},{label:"\u518D\u60F3\u60F3",cls:"gray",action:()=>vu(i,t)}]}])}),r.push({label:"\u50F9\u683C\u600E\u9EBC\u7B97\uFF1F",action:()=>i.dialogue.run(t,["\u9B5A\u7684\u50F9\u683C\u770B\u7A2E\u985E\u3001\u7A00\u6709\u5EA6\u8DDF\u91CD\u91CF\u3002\u540C\u4E00\u7A2E\u9B5A\u8D8A\u91CD\u8D8A\u503C\u9322\uFF01","\u5E36\u6709\u300C\u5DE8\u5927\u300D\u3001\u300C\u9583\u4EAE\u300D\u3001\u300C\u767D\u5316\u300D\u9019\u4E9B\u8B8A\u7570\u7684\u9B5A\uFF0C\u6211\u6703\u7528\u66F4\u597D\u7684\u50F9\u9322\u6536\u8CFC\u3002",{text:"\u5B8C\u7F8E\u6536\u7DDA\uFF08\u9B5A\u5F9E\u982D\u5230\u5C3E\u90FD\u6C92\u8DD1\u51FA\u767D\u689D\uFF09\u7684\u9B5A\uFF0C\u50F9\u503C\u9084\u6703\u591A 10%\uFF01",options:[{label:"\u4E86\u89E3",cls:"gray",action:()=>vu(i,t)}]}])}),r.push({label:"\u6C92\u4E8B\uFF0C\u518D\u898B",cls:"gray",action:Gn(i)});let o=e.length?s?`\u5594\uFF01\u624B\u4E0A\u90A3\u689D${ki[s.id].name}\u770B\u8D77\u4F86\u4E0D\u932F\u561B\uFF01\u8981\u8CE3\u55CE\uFF1F`:`\u6B61\u8FCE\uFF01\u4F60\u7684\u80CC\u5305\u88E1\u6709 ${e.length} \u689D\u9B5A\uFF0C\u7E3D\u5171\u503C $${n.toLocaleString()}\u3002\u8981\u8CE3\u9EDE\u4EC0\u9EBC\uFF1F`:"\u563F\uFF01\u6211\u662F\u9B5A\u5546\uFF0C\u4EC0\u9EBC\u9B5A\u90FD\u6536\uFF01\u7B49\u4F60\u91E3\u5230\u9B5A\u518D\u62FF\u4F86\u7D66\u6211\u770B\u770B\u5427\u3002",a=st.playerName?`${st.playerName}\uFF0C`:"";i.dialogue.run(t,[{text:a+o,options:r}])}function sp(i,t,e){let n=0;for(let r of e)Wh(r.uid)&&(n+=r.value);i.player.heldFish&&!st.inventory.includes(i.player.heldFish)&&i.selectSlot(0),st.money+=n,ln(),i.ui.setMoney(st.money,!0),i.sound.coin(),i.onInventoryChanged(),i.quests.onEvent("sell",{count:e.length});let s=["\u6210\u4EA4\uFF01\u8B1D\u8B1D\u60E0\u9867\uFF5E","\u597D\u8CA8\uFF01\u4E0B\u6B21\u518D\u4F86\uFF01","\u9019\u4E9B\u9B5A\u5F88\u65B0\u9BAE\uFF0C\u5408\u4F5C\u6109\u5FEB\uFF01"];i.dialogue.run(t,[{text:`\u4E00\u5171 $${n.toLocaleString()}\uFF0C\u62FF\u597D\uFF01${s[Math.floor(Math.random()*s.length)]}`,options:[{label:"\u8B1D\u5566\uFF01",cls:"gray",action:Gn(i)}]}])}var yu,qa,rp=ee(()=>{zi();mu();lr();Xa();lo();yu=["\u9996\u5148\u6309\u9375\u76E4\u4E0A\u7684\u30101\u3011\u62FF\u51FA\u4F60\u7684\u300C\u65B0\u624B\u91E3\u7AFF\u300D\u3002\u5DE6\u4E0B\u89D2\u6703\u986F\u793A\u91E3\u7AFF\u7684\u5C6C\u6027\u3002","\u9762\u5411\u6C34\u9762\uFF0C\u3010\u6309\u4F4F\u6ED1\u9F20\u5DE6\u9375\u3011\u958B\u59CB\u84C4\u529B\uFF0C\u89D2\u8272\u65C1\u908A\u6703\u51FA\u73FE\u529B\u9053\u689D\u3002\u3010\u653E\u958B\u3011\u5C31\u6703\u628A\u6D6E\u6A19\u7529\u51FA\u53BB\u2014\u2014\u529B\u9053\u8D8A\u5927\u7529\u5F97\u8D8A\u9060\uFF01","\u6D6E\u6A19\u4E00\u5B9A\u8981\u843D\u5728\u6C34\u88E1\u624D\u884C\u3002\u843D\u6C34\u5F8C\u8010\u5FC3\u7B49\u4E00\u4E0B\u2026\u2026\u300C\u4E0A\u9264\u901F\u5EA6\u300D\u8D8A\u9AD8\uFF0C\u9B5A\u5C31\u8D8A\u5FEB\u54AC\u990C\u3002\u7B49\u5F85\u6642\u518D\u9EDE\u4E00\u4E0B\u5DE6\u9375\u53EF\u4EE5\u6536\u56DE\u6D6E\u6A19\u3002","\u6D6E\u6A19\u843D\u6C34\u5F8C\uFF0C\u756B\u9762\u4E0A\u6703\u99AC\u4E0A\u51FA\u73FE\u3010SHAKE\u3011\u6309\u9215\uFF0C\u9EDE\u5F97\u8D8A\u591A\u4E0B\uFF0C\u9B5A\u5C31\u8D8A\u5FEB\u4E0A\u9264\uFF01\u7B49\u4F60\u982D\u4E0A\u5192\u51FA\u5927\u5927\u7684\u3010!\u3011\uFF0C\u5C31\u662F\u9B5A\u54AC\u990C\u4E86\uFF01","\u63A5\u8457\u662F\u6536\u7DDA\u5C0F\u904A\u6232\uFF1A\u3010\u6309\u4F4F\u5DE6\u9375\u6216\u7A7A\u767D\u9375\u3011\u767D\u8272\u63A7\u5236\u689D\u6703\u5F80\u53F3\u79FB\uFF0C\u653E\u958B\u5C31\u6703\u5F80\u5DE6\u6ED1\u3002\u60F3\u8FA6\u6CD5\u8B93\u9B5A\u7684\u5716\u793A\u4E00\u76F4\u5F85\u5728\u767D\u689D\u88E1\u9762\uFF01","\u9B5A\u5F85\u5728\u767D\u689D\u88E1\uFF0C\u4E0B\u65B9\u7684\u9032\u5EA6\u689D\u5C31\u6703\u6162\u6162\u586B\u6EFF\uFF1B\u9B5A\u8DD1\u51FA\u53BB\uFF0C\u9032\u5EA6\u5C31\u6703\u4E0B\u964D\uFF0C\u6B78\u96F6\u7684\u8A71\u9B5A\u5C31\u8DD1\u6389\u4E86\u3002","\u5C0F\u77E5\u8B58\uFF1A\u300C\u63A7\u5236\u529B\u300D\u8B93\u767D\u689D\u8B8A\u5BEC\uFF0C\u300C\u5FA9\u539F\u529B\u300D\u8B93\u9B5A\u8DD1\u51FA\u767D\u689D\u6642\u9032\u5EA6\u6389\u5F97\u6BD4\u8F03\u6162\uFF0C\u300C\u904B\u6C23\u300D\u63D0\u9AD8\u7A00\u6709\u9B5A\u6A5F\u7387\uFF0C\u300C\u6700\u5927\u91CD\u91CF\u300D\u662F\u91E3\u7AFF\u80FD\u8F15\u9B06\u62C9\u8D77\u7684\u91CD\u91CF\u3002","\u91E3\u5230\u7684\u9B5A\u6703\u653E\u9032\u80CC\u5305\uFF08\u6309 B \u67E5\u770B\uFF09\u3002\u62FF\u53BB\u78BC\u982D\u5165\u53E3\u65C1\u7684\u9B5A\u5546\u30FB\u8001\u9673\u90A3\u88E1\u5C31\u80FD\u63DB\u6210\u9322\uFF01","\u719F\u7DF4\u4E4B\u5F8C\uFF0C\u53BB\u78BC\u982D\u627E\u8239\u5320\u30FB\u963F\u6728\u53EB\u4E00\u8258\u8239\uFF0C\u5F80\u6771\u5357\u65B9\u958B\u5C31\u80FD\u5230 normal Island\u3002\u90A3\u88E1\u6709\u66F4\u591A\u9B5A\u548C\u59D4\u8A17\u5728\u7B49\u4F60\uFF01"],qa={tutor(i,t){let e=i.quests;if(e.turnInReady("tutor")==="tutorial"){i.dialogue.run(t,["\u592A\u53B2\u5BB3\u4E86\uFF01\u4F60\u5DF2\u7D93\u5B78\u6703\u91E3\u9B5A\u3001\u9084\u628A\u9B5A\u8CE3\u6389\u4E86\uFF01",{text:"\u606D\u559C\u4F60\u5F9E\u65B0\u624B\u6559\u5B78\u7562\u696D\uFF01\u9019 $100 \u662F\u7D66\u4F60\u7684\u7562\u696D\u79AE\u7269\u3002",options:[{label:`\u9818\u53D6\u734E\u52F5 $${nn.tutorial.reward}`,cls:"green",action:()=>{e.advance("tutorial"),ip(i,t,!0)}}]}]);return}if(e.canStart("tutorial")){i.dialogue.run(t,["\u5594\uFF01\u4F60\u5C31\u662F\u65B0\u4F86\u7684\u91E3\u5BA2\u5427\uFF1F\u6B61\u8FCE\u4F86\u5230 noob Island\uFF01","\u6211\u662F\u5C0E\u5E2B\u30FB\u963F\u51F1\uFF0C\u8CA0\u8CAC\u6559\u65B0\u624B\u600E\u9EBC\u91E3\u9B5A\u3001\u600E\u9EBC\u628A\u9B5A\u8CE3\u6389\u63DB\u9322\u3002",{text:"\u8981\u6211\u5F9E\u982D\u6559\u4F60\u55CE\uFF1F",options:[{label:"\u597D\uFF01\u8ACB\u6559\u6211\u91E3\u9B5A",cls:"green",action:()=>i.dialogue.run(t,[...yu,{text:"\u5C31\u9019\u6A23\uFF01\u5148\u8A66\u8457\u91E3\u4E00\u689D\u9B5A\uFF0C\u518D\u62FF\u53BB\u8CE3\u7D66\u8001\u9673\u5427\u3002\u6211\u5728\u9019\u88E1\u7B49\u4F60\u7684\u597D\u6D88\u606F\uFF01",options:[{label:"\u4EA4\u7D66\u6211\u5427\uFF01",cls:"green",action:()=>{e.start("tutorial"),i.dialogue.close()}}]}])},{label:"\u6211\u5DF2\u7D93\u6703\u4E86",cls:"gray",action:()=>{e.start("tutorial"),i.dialogue.run(t,["\u54C8\u54C8\uFF0C\u771F\u6709\u81EA\u4FE1\uFF01\u90A3\u5C31\u53BB\u91E3\u4E00\u689D\u9B5A\uFF0C\u518D\u8CE3\u7D66\u78BC\u982D\u65C1\u908A\u7684\u9B5A\u5546\u30FB\u8001\u9673\u8B49\u660E\u7D66\u6211\u770B\u5427\uFF01"])}}]}]);return}if(e.isActive("tutorial")){let s=nn.tutorial.stages[st.quests.tutorial.stage],r={equip:"\u5148\u6309\u30101\u3011\u628A\u91E3\u7AFF\u62FF\u51FA\u4F86\uFF01",catch:"\u9762\u5411\u5927\u6D77\u6309\u4F4F\u5DE6\u9375\u84C4\u529B\u3001\u653E\u958B\u7529\u7AFF\u3002\u9B5A\u4E0A\u9264\u5C31\u72C2\u9EDE SHAKE\uFF0C\u7136\u5F8C\u7528\u5DE6\u9375\u63A7\u5236\u767D\u689D\u628A\u9B5A\u62C9\u4E0A\u4F86\uFF01",sell:"\u9B5A\u5546\u30FB\u8001\u9673\u5C31\u5728\u78BC\u982D\u5165\u53E3\u90A3\u500B\u7D05\u767D\u689D\u7D0B\u7684\u6524\u4F4D\uFF0C\u8DDF\u4ED6\u8AAA\u8A71\u5C31\u80FD\u8CE3\u9B5A\u3002"}[s.type]||"\u52A0\u6CB9\uFF01";i.dialogue.run(t,[{text:r,options:[{label:"\u518D\u6559\u6211\u4E00\u6B21",action:()=>i.dialogue.run(t,yu)},{label:"\u77E5\u9053\u4E86\uFF01",cls:"gray",action:Gn(i)}]}]);return}let n=st.playerName?`\u55E8\uFF0C${st.playerName}\uFF01`:"";i.dialogue.run(t,[{text:n+["\u4ECA\u5929\u7684\u6D77\u98A8\u771F\u8212\u670D\uFF0C\u5F88\u9069\u5408\u91E3\u9B5A\uFF01","\u807D\u8AAA\u665A\u4E0A\u6703\u51FA\u73FE\u767D\u5929\u770B\u4E0D\u5230\u7684\u9B5A\u5594\u3002","\u904B\u6C23\u8D8A\u9AD8\uFF0C\u8D8A\u5BB9\u6613\u91E3\u5230\u7A00\u6709\u7684\u9B5A\u3002"][Math.floor(Math.random()*3)],options:[{label:st.playerName?"\u6211\u60F3\u6539\u540D\u5B57":"\u6211\u60F3\u53D6\u540D\u5B57",cls:"green",action:()=>ip(i,t,!1)},{label:"\u518D\u6559\u6211\u4E00\u6B21\u91E3\u9B5A",action:()=>i.dialogue.run(t,yu)},{label:"\u518D\u898B",cls:"gray",action:Gn(i)}]}])},merchant(i,t){vu(i,t)},rodshop(i,t){let e=fs.starter,n=s=>()=>{if(!i.buyCrates(s)){i.dialogue.run(t,[{text:`${s} \u500B\u8981 $${rn.price*s}\uFF0C\u4F60\u7684\u9322\u597D\u50CF\u4E0D\u592A\u5920\u5594\u2026\u2026\u53BB\u91E3\u9EDE\u9B5A\u8CE3\u6389\u518D\u4F86\u5427\uFF01`,options:[{label:"\u597D\u5427",cls:"gray",action:Gn(i)}]}]);return}i.dialogue.run(t,[{text:`\u8B1D\u8B1D\u60E0\u9867\uFF01${s} \u500B\u8A98\u990C\u7BB1\u5DF2\u7D93\u653E\u9032\u4F60\u7684\u5FEB\u6377\u5217\u4E86\u3002\u9078\u53D6\u8A98\u990C\u7BB1\u4E4B\u5F8C\uFF0C\u9EDE\u4E00\u4E0B\u756B\u9762\u5C31\u80FD\u6253\u958B\u5594\uFF01`,options:[{label:"\u518D\u8CB7\u4E00\u4E9B",action:()=>qa.rodshop(i,t)},{label:"\u8B1D\u8B1D\uFF01",cls:"gray",action:Gn(i)}]}])};i.dialogue.run(t,[{text:"\u6B61\u8FCE\u5149\u81E8\u91E3\u5177\u5E97\uFF01\u5E97\u88E1\u6709\u300C\u65B0\u624B\u91E3\u7AFF\u300D\uFF0C\u9084\u6709\u8D85\u53D7\u6B61\u8FCE\u7684\u8A98\u990C\u7BB1\uFF0C\u6253\u958B\u6703\u6709\u9B5A\u990C\uFF0C\u88DD\u4E0A\u9B5A\u990C\u9B5A\u6703\u66F4\u5FEB\u4E0A\u9264\uFF01",options:[{label:`\u8CB7\u8A98\u990C\u7BB1 1 \u500B\uFF08$${rn.price}\uFF09`,cls:"green",action:n(1)},{label:`\u8CB7\u8A98\u990C\u7BB1 5 \u500B\uFF08$${rn.price*5}\uFF09`,cls:"green",action:n(5)},{label:"\u9B5A\u990C\u662F\u4EC0\u9EBC\uFF1F",action:()=>i.dialogue.run(t,[`\u8A98\u990C\u7BB1\u4E00\u500B $${rn.price}\uFF0C\u6253\u958B\u6703\u5F97\u5230 2~5 \u500B${sn.worm.icon}${sn.worm.name}\u3002`,`${sn.worm.name}\u662F\u6700\u57FA\u672C\u7684\u9B5A\u990C\uFF0C\u88DD\u4E0A\u4E4B\u5F8C\u4E0A\u9264\u901F\u5EA6 +${sn.worm.lure}%\uFF01\u6BCF\u91E3\u5230\u4E00\u689D\u9B5A\u6703\u7528\u6389 1 \u500B\u3002`,{text:"\u6309 V \u6216\u53F3\u908A\u7684\u300C\u9B5A\u990C\u300D\u6309\u9215\uFF0C\u5C31\u80FD\u88DD\u4E0A\u6216\u5378\u4E0B\u9B5A\u990C\u3002",options:[{label:"\u4E86\u89E3\uFF01",cls:"gray",action:()=>qa.rodshop(i,t)}]}])},{label:"\u770B\u770B\u65B0\u624B\u91E3\u7AFF",action:()=>i.dialogue.run(t,[`\u3010${e.name}\u3011${e.desc}`,`\u4E0A\u9264\u901F\u5EA6 ${e.lure}%\u30FB\u904B\u6C23 ${e.luck}%\u30FB\u63A7\u5236\u529B ${e.control}\u30FB\u5FA9\u539F\u529B ${e.resilience}%\u30FB\u6700\u5927\u91CD\u91CF ${e.maxWeight.toLocaleString()} kg`,"\u4F60\u5DF2\u7D93\u6709\u4E00\u628A\u4E86\uFF0C\u597D\u597D\u611B\u60DC\u5B83\u5427\uFF01"])},{label:"\u518D\u898B",cls:"gray",action:Gn(i)}]}])},shipwright(i,t){if(i.quests.turnInReady(t.id))return hr(i,t,{thanks:{voyage:["\u5594\uFF1F\u5F9E noob Island \u4E00\u8DEF\u958B\u904E\u4F86\u7684\u55CE\uFF1F\u4E86\u4E0D\u8D77\uFF01","\u6B61\u8FCE\u4F86\u5230 normal Island\uFF01\u9019\u88E1\u7684\u9B5A\u5546\u3001\u4E3B\u5EDA\u3001\u7814\u7A76\u54E1\u90FD\u5728\u627E\u80FD\u5E79\u7684\u91E3\u5BA2\u3002\u9019\u662F\u963F\u6D77\u8A17\u6211\u8F49\u4EA4\u7684\u734E\u52F5\uFF01"]}});i.dialogue.run(t,[{text:"\u8981\u51FA\u6D77\u55CE\uFF1F\u6211\u53EF\u4EE5\u5E6B\u4F60\u6E96\u5099\u4E00\u8258\u5C0F\u6C7D\u8247\uFF0C\u514D\u8CBB\u7684\uFF01",options:[{label:"\u53EB\u4E00\u8258\u8239",cls:"green",action:()=>{i.spawnBoatAt(t.def.boatSpawn),i.dialogue.run(t,["\u597D\u4E86\uFF01\u8239\u5C31\u505C\u5728\u78BC\u982D\u65C1\u908A\uFF0C\u9760\u8FD1\u6309\u3010E\u3011\u5C31\u80FD\u4E0A\u8239\u3002\u958B\u8239\u7528 W/S \u52A0\u901F\u5012\u9000\u3001A/D \u8F49\u5411\uFF0C\u6309\u4F4F Shift \u53EF\u4EE5\u5168\u901F\u524D\u9032\uFF01"])}},{label:"\u600E\u9EBC\u958B\u8239\uFF1F",action:()=>i.dialogue.run(t,["\u9760\u8FD1\u8239\u6309\u3010E\u3011\u4E0A\u8239\uFF0CW \u524D\u9032\u3001S \u5012\u9000\u3001A/D \u8F49\u5411\uFF0C\u6309\u4F4F Shift \u5168\u901F\u524D\u9032\u3002","\u5728\u8239\u4E0A\u6309\u30101\u3011\u62FF\u51FA\u91E3\u7AFF\u5C31\u80FD\u76F4\u63A5\u5728\u6D77\u4E0A\u91E3\u9B5A\uFF08\u8A18\u5F97\u5148\u505C\u8239\uFF09\u3002\u5916\u6D77\u6709\u5F88\u591A\u5927\u578B\u9B5A\uFF01","\u5F9E noob Island \u5F80\u6771\u5357\u65B9\u958B\u5C31\u662F normal Island\u3002\u8981\u4E0B\u8239\u6642\u9760\u8FD1\u9678\u5730\u6216\u78BC\u982D\u518D\u6309\u3010E\u3011\u3002"])},{label:"\u4E0D\u7528\u4E86",cls:"gray",action:Gn(i)}]}])},hai(i,t){hr(i,t,{quests:["dock5","voyage"],offers:{dock5:["\u563F\uFF0C\u65B0\u624B\uFF01\u6211\u662F\u963F\u6D77\uFF0C\u5F9E\u5C0F\u5C31\u5728\u9019\u500B\u78BC\u982D\u91E3\u9B5A\u3002","\u78BC\u982D\u76E1\u982D\u6C34\u6BD4\u8F03\u6DF1\uFF0C\u5E38\u5E38\u6709\u597D\u9B5A\u3002\u60F3\u8B49\u660E\u81EA\u5DF1\u7684\u8A71\uFF0C\u5C31\u5728 noob Island \u91E3 5 \u689D\u9B5A\u7D66\u6211\u770B\u770B\u5427\uFF01"],voyage:["\u4F60\u7684\u6280\u8853\u9032\u6B65\u5F88\u591A\u4E86\u561B\uFF01","noob Island \u7684\u9B5A\u5DF2\u7D93\u96E3\u4E0D\u5012\u4F60\u4E86\u3002\u53BB\u627E\u8239\u5320\u963F\u6728\u53EB\u8258\u8239\uFF0C\u958B\u5230\u6771\u5357\u65B9\u7684 normal Island \u5427\uFF0C\u90A3\u88E1\u7684\u8239\u5320\u5927\u77F3\u662F\u6211\u7684\u8001\u670B\u53CB\u3002"]},hints:{dock5:"\u5728 noob Island \u9644\u8FD1\u7684\u6C34\u57DF\u90FD\u7B97\uFF01\u78BC\u982D\u76E1\u982D\u662F\u6211\u6700\u63A8\u85A6\u7684\u4F4D\u7F6E\u3002",voyage:"\u627E\u8239\u5320\u30FB\u963F\u6728\u53EB\u8239\uFF0C\u7136\u5F8C\u5F80\u6771\u5357\u65B9\u4E00\u76F4\u958B\uFF0C\u770B\u5230\u5927\u5CF6\u548C\u98A8\u8ECA\u5C31\u5C0D\u4E86\uFF01"},thanks:{dock5:["5 \u689D\uFF01\u4E0D\u932F\u4E0D\u932F\uFF0C\u4F60\u6709\u91E3\u9B5A\u7684\u5929\u5206\uFF01","\u9019\u662F\u4F60\u7684\u734E\u52F5\u3002\u4E4B\u5F8C\u518D\u4F86\u627E\u6211\uFF0C\u6211\u9084\u6709\u4E8B\u60F3\u62DC\u8A17\u4F60\u3002"]},idle:["\u5916\u6D77\u6709\u5F88\u5927\u7684\u9B5A\uFF0C\u4F46\u662F\u8981\u5C0F\u5FC3\uFF0C\u592A\u91CD\u7684\u9B5A\u91E3\u7AFF\u53EF\u80FD\u62C9\u4E0D\u592A\u52D5\u3002","\u5929\u9ED1\u4E4B\u5F8C\uFF0C\u78BC\u982D\u7684\u71C8\u7C60\u6703\u4EAE\u8D77\u4F86\uFF0C\u5F88\u6F02\u4EAE\u5594\u3002","\u807D\u8AAA\u5728 noob Island \u7684\u591C\u665A\uFF0C\u6703\u6709\u767C\u51FA\u6708\u5149\u7684\u9B5F\u9B5A\u51FA\u6C92\u2026\u2026"]})},de(i,t){hr(i,t,{quests:["night3"],offers:{night3:["\u5E74\u8F15\u4EBA\uFF0C\u4F60\u77E5\u9053\u55CE\uFF1F\u6709\u4E9B\u9B5A\u53EA\u5728\u665A\u4E0A\u624D\u6703\u51FA\u73FE\u3002","\u87A2\u5149\u9B77\u9B5A\u3001\u9B9F\u9C47\u9B5A\u2026\u2026\u9084\u6709\u50B3\u8AAA\u4E2D\u7684\u6DF1\u6DF5\u5229\u7DAD\u5766\u3002","\u7B49\u5929\u9ED1\u4E4B\u5F8C\uFF0C\u5E6B\u6211\u91E3 3 \u689D\u9B5A\u56DE\u4F86\u5427\uFF0C\u8B93\u6211\u770B\u770B\u4F60\u591C\u91E3\u7684\u672C\u4E8B\uFF01"]},hints:{night3:"\u665A\u4E0A\u662F\u6307\u592A\u967D\u4E0B\u5C71\u4E4B\u5F8C\uFF08\u5927\u7D04 18:30 ~ 05:30\uFF09\u3002\u53F3\u4E0A\u89D2\u7684\u6642\u9418\u6703\u8B8A\u6210\u6708\u4EAE\u3002"},thanks:{night3:["\u54C8\u54C8\uFF01\u591C\u88E1\u7684\u6D77\u5F88\u7F8E\u5427\uFF1F","\u4F60\u5DF2\u7D93\u662F\u500B\u591C\u91E3\u597D\u624B\u4E86\uFF0C\u6536\u4E0B\u5427\uFF01"]},idle:["\u6211\u5728\u9019\u500B\u78BC\u982D\u91E3\u4E86\u56DB\u5341\u5E74\u7684\u9B5A\u2026\u2026","\u4E00\u5929\u4E00\u591C\u53EA\u6709\u5341\u5206\u9418\uFF0C\u6642\u9593\u904E\u5F97\u771F\u5FEB\u554A\u3002","\u6708\u5149\u7167\u5728\u6D77\u9762\u4E0A\u7684\u6642\u5019\uFF0C\u6700\u5BB9\u6613\u9047\u5230\u7A00\u6709\u7684\u50A2\u4F19\u3002"]})},anna(i,t){hr(i,t,{quests:["salmon"],offers:{salmon:["\u554A\uFF0C\u4F60\u662F\u91E3\u5BA2\u55CE\uFF1F\u592A\u597D\u4E86\uFF01","\u6211\u662F\u9019\u88E1\u9910\u5EF3\u7684\u4E3B\u5EDA\u5B89\u5A1C\uFF0C\u4ECA\u665A\u7684\u62DB\u724C\u83DC\u9700\u8981\u4E00\u689D\u65B0\u9BAE\u7684\u9BAD\u9B5A\u3002","\u9BAD\u9B5A\u5728 normal Island \u9644\u8FD1\u7684\u6D77\u88E1\u5C31\u91E3\u5F97\u5230\uFF0C\u53EF\u4EE5\u5E6B\u6211\u5E36\u4E00\u689D\u4F86\u55CE\uFF1F"]},hints:{salmon:"\u9BAD\u9B5A\u5728 normal Island \u7684\u6D77\u5CB8\u9644\u8FD1\uFF0C\u5C6C\u65BC\u300C\u7A00\u6709\u300D\u7B49\u7D1A\u3002\u91E3\u5230\u4E4B\u5F8C\u5225\u8CE3\u6389\u5594\uFF0C\u76F4\u63A5\u62FF\u4F86\u7D66\u6211\uFF01"},thanks:{salmon:["\u54C7\uFF01\u9019\u689D\u9BAD\u9B5A\u597D\u65B0\u9BAE\uFF01","\u4ECA\u665A\u7684\u9BAD\u9B5A\u6392\u4E00\u5B9A\u6703\u5927\u53D7\u597D\u8A55\uFF0C\u9019\u662F\u4F60\u7684\u5831\u916C\uFF01"]},idle:["\u4ECA\u5929\u7684\u7279\u9910\u662F\u9999\u714E\u9C48\u9B5A\uFF0C\u8981\u4F86\u4E00\u4EFD\u55CE\uFF1F","\u65B0\u9BAE\u7684\u9B5A\u53EA\u8981\u7C21\u55AE\u8ABF\u5473\u5C31\u5F88\u597D\u5403\u4E86\u3002"]})},lin(i,t){hr(i,t,{quests:["pond3","rare1"],offers:{pond3:["\u4F60\u597D\uFF0C\u6211\u662F\u6D77\u6D0B\u7814\u7A76\u54E1\u6797\u535A\u58EB\u3002","\u9019\u5EA7\u6C60\u5858\u662F\u6DE1\u6C34\u7684\uFF0C\u548C\u6D77\u88E1\u7684\u9B5A\u5B8C\u5168\u4E0D\u4E00\u6A23\uFF01\u9326\u9BC9\u3001\u8679\u9C52\u2026\u2026\u751A\u81F3\u9084\u6709\u50B3\u8AAA\u4E2D\u7684\u9EC3\u91D1\u9326\u9BC9\u3002","\u53EF\u4EE5\u5E6B\u6211\u5728\u6C60\u5858\u91E3 3 \u689D\u9B5A\uFF0C\u5354\u52A9\u6211\u7684\u7814\u7A76\u55CE\uFF1F"],rare1:["\u6C60\u5858\u7684\u8CC7\u6599\u5F88\u6709\u5E6B\u52A9\uFF01\u63A5\u4E0B\u4F86\u6211\u60F3\u7814\u7A76\u50B3\u5947\u9B5A\u7A2E\u3002",`\u9B5A\u7684\u7A00\u6709\u5EA6\u7531\u4F4E\u5230\u9AD8\u662F\uFF1A${oo.map(e=>e.name).join(" \u2192 ")}\u3002`,"\u5E6B\u6211\u91E3\u4E00\u689D\u300C\u50B3\u5947\u300D\u7B49\u7D1A\u4EE5\u4E0A\u7684\u9B5A\u5427\uFF01\u904B\u6C23\u8D8A\u9AD8\u8D8A\u5BB9\u6613\u9047\u5230\u3002"]},hints:{pond3:"\u6C60\u5858\u5C31\u5728\u6211\u65C1\u908A\uFF01\u7529\u7AFF\u6642\u8981\u8B93\u6D6E\u6A19\u843D\u5728\u6C60\u5858\u6C34\u9762\u4E0A\u3002",rare1:"\u50B3\u5947\u4EE5\u4E0A\u7684\u9B5A\u5F88\u5C11\u898B\uFF0C\u591A\u91E3\u5E7E\u6B21\u3001\u665A\u4E0A\u4E5F\u8A66\u8A66\u770B\u3002\u4E5F\u53EF\u4EE5\u53BB\u5916\u6D77\u78B0\u78B0\u904B\u6C23\uFF01"},thanks:{pond3:["\u592A\u597D\u4E86\uFF0C\u9019\u4E9B\u6A23\u672C\u5F88\u6709\u50F9\u503C\uFF01"],rare1:["\u9019\u2026\u2026\u9019\u771F\u662F\u592A\u68D2\u4E86\uFF01\u9019\u689D\u9B5A\u7684\u6578\u64DA\u975E\u5E38\u73CD\u8CB4\uFF01","\u9019\u662F\u7814\u7A76\u7D93\u8CBB\u7684\u4E00\u90E8\u5206\uFF0C\u8ACB\u6536\u4E0B\uFF01"]},idle:["\u6BCF\u7A2E\u9B5A\u90FD\u6709\u81EA\u5DF1\u51FA\u6C92\u7684\u5730\u9EDE\u548C\u6642\u9593\uFF0C\u8A18\u5F97\u770B\u770B\u5716\u9451\uFF08\u6309 N\uFF09\u3002","\u300C\u5DE8\u5927\u300D\u3001\u300C\u9583\u4EAE\u300D\u3001\u300C\u767D\u5316\u300D\u90FD\u662F\u7F55\u898B\u7684\u8B8A\u7570\uFF0C\u50F9\u503C\u6703\u66F4\u9AD8\u5594\u3002"]})}}});function A_(i,t){let e=i.index?i.toNonIndexed():i.clone();e.applyMatrix4(t);for(let n of Object.keys(e.attributes))["position","normal","uv"].includes(n)||e.deleteAttribute(n);return e.attributes.normal||e.computeVertexNormals(),e.attributes.uv||e.setAttribute("uv",new ce(new Float32Array(e.attributes.position.count*2),2)),e.morphAttributes={},e.clearGroups(),e}function op(i){let t=new Map;for(let n of i){let s=`${n.mesh.material.uuid}|${n.mesh.castShadow?1:0}|${n.mesh.receiveShadow?1:0}`;t.has(s)||t.set(s,{mat:n.mesh.material,cast:n.mesh.castShadow,recv:n.mesh.receiveShadow,geos:[]}),t.get(s).geos.push(A_(n.mesh.geometry,n.matrix))}let e=[];for(let n of t.values()){let s=n.geos.length===1?n.geos[0]:Hi(n.geos),r=new it(s,n.mat);r.castShadow=n.cast,r.receiveShadow=n.recv,e.push(r)}return e}function _u(i,t){i.updateMatrixWorld(!0);let e=[],n=[];i.traverse(s=>{s!==i&&(s.isLight||s.isSprite||s.isInstancedMesh||s.isPoints||s.isMesh&&Array.isArray(s.material)?n.push(s):s.isMesh&&e.push({mesh:s,matrix:s.matrixWorld.clone()}))});for(let s of n){let r=s.parent,o=!1;for(;r&&r!==i;){if(n.includes(r)){o=!0;break}r=r.parent}o||t.attach(s)}for(let s of op(e))t.add(s)}function ap(i){let t=[];i.traverse(e=>{e.isMesh||t.push(e)});for(let e of t){let n=e.children.filter(r=>r.isMesh&&!Array.isArray(r.material)&&r.children.length===0);if(n.length<2)continue;let s=n.map(r=>(r.updateMatrix(),{mesh:r,matrix:r.matrix.clone()}));for(let r of n)e.remove(r);for(let r of op(s))e.add(r)}}var Mu=ee(()=>{Ee();tu()});function ur(i,t,e){return{x:t*Math.cos(i)+e*Math.sin(i),z:-t*Math.sin(i)+e*Math.cos(i)}}function R_(i,t=!0){i.traverse(e=>{e.isMesh&&(e.castShadow=t,e.receiveShadow=!0)})}function lp(i){let t={npcs:[],spawn:null,boatSpawns:{}};for(let e of dn)i.add(Nf(e));return C_(i,Zh("noob"),t),P_(i,Zh("normal"),t),t}function C_(i,t,e){let n=new $a(i,t,1234),s=t.flats[0];for(let p of t.flats)n.exclude(p.x,p.z,p.r*.8);let r=1.5;n.dock(40,10,32,0,r),e.boatSpawns.noob={...n.w(66,14.6),heading:0},n.house(2,27,{w:7.5,d:6,wall:Q.wallCream,roof:Q.roofRed,sign:"\u91E3\u5177\u5E97"},s.x,s.z),n.house(-6,6,{w:6.5,d:6,wall:Q.wallBlue,roof:Q.roofBlue},s.x,s.z),n.house(24,28,{w:6,d:5.5,wall:Q.wallYellow,roof:Q.roofGreen},s.x,s.z),n.house(0,-10,{w:6,d:5,wall:Q.wallPink,roof:Q.roofBrown,chimney:!1},s.x,s.z);let o={x:31,z:1},a=En(o.x,o.z,26,12),l=du("\u9BAE\u9B5A\u6536\u8CFC"),c=n.w(o.x,o.z);n.add(l,o.x,o.z,a),Qn.push(l);let h=ur(a,0,.9);as(c.x+h.x,c.z+h.z,4.4,1.4,n.h(c.x,c.z)+1.3,a),n.exclude(o.x,o.z,5);let u=ur(a,0,-.3);n.npc("merchant_noob","\u8001\u9673","\u9B5A\u5546",o.x+u.x,o.z+u.z,a,{shirt:3829413,pants:2960685,apron:15921906,hat:"captain",hair:10132122,beard:"#bdbdbd",skin:14724201},{script:"merchant"});let f=fu();n.dynamic=!0,n.add(f,6,15),n.dynamic=!1,n.exclude(6,15,3);for(let p=0;p<3;p++){let y=p*2.1+.4,_=Ha();n.add(_,6+Math.cos(y)*3.4,15+Math.sin(y)*3.4,En(6+Math.cos(y)*3.4,15+Math.sin(y)*3.4,6,15)+Math.PI)}n.add(ka("noob Island","\u65B0\u624B\u5CF6\u30FB\u6B61\u8FCE\u5149\u81E8"),9,2,En(9,2,14,10)),n.exclude(9,2,1.5);let d=uu("noob Island");n.add(d,37,10,Math.PI/2),Qn.push(d);for(let p of[-2.6,2.6]){let y=n.w(37,10+p);ke(y.x,y.z,.3,10)}n.add(ka("\u78BC\u982D \u2192","\u53EB\u8239\u30FB\u6D77\u91E3"),33,15.5,-Math.PI/2+.3);for(let[p,y,_]of[[20,12.8,!0],[28,12.8,!1],[20,7,!1],[12,22,!0],[-2,14,!1]])n.lanternAt(p,y,_);let m=t.flats[1],x=Zf();n.dynamic=!0,n.add(x,m.x,m.z,.8),n.dynamic=!1,Qn.push(x);{let p=n.w(m.x,m.z);ke(p.x,p.z,3.4,30)}n.exclude(m.x,m.z,6);for(let[p,y,_]of[[34,4.5,.3],[35,5.6,1],[44,7.6,.2],[27,-3,.5]]){let v=us();n.add(v,p,y,_);let P=n.w(p,y);ke(P.x,P.z,.6,n.h(P.x,P.z)+1)}for(let[p,y]of[[45,11],[29,4]]){let _=Oa();n.add(_,p,y,0,p>40?r:null);let v=n.w(p,y);ke(v.x,v.z,.5,(p>40?r:n.h(v.x,v.z))+1.1)}n.add(hu(),22,4,.4);{let p=n.w(22,4);as(p.x,p.z,3.4,.4,n.h(p.x,p.z)+2.3,.4)}let g=ro(12597547,16053492);n.add(g,36,36,2.2,n.h(n.w(36,36).x,n.w(36,36).z)+.4),g.rotation.z=.15;{let p=n.w(36,36);ke(p.x,p.z,1.8,10)}n.exclude(36,36,3),n.npc("tutor","\u963F\u51F1","\u65B0\u624B\u5C0E\u5E2B",15,4,En(15,4,12,10),{shirt:15105570,pants:3426654,hat:"straw",hair:2824976,vest:9329195},{wave:!0}),n.npc("rodshop","\u5C0F\u7F8E","\u91E3\u5177\u5E97",4,22,En(4,22,s.x,s.z),{shirt:16743080,pants:2899536,hat:"beanie",hatColor:16765503,hair:7027230}),n.npc("shipwright_noob","\u963F\u6728","\u8239\u5320",58,8.9,Math.PI,{shirt:9323693,pants:3881787,hat:"bucket",hatColor:7048739,hair:1118481,beard:"#3a2a1a"},{script:"shipwright",y:r,boatSpawn:"noob"}),n.npc("hai","\u963F\u6D77","\u78BC\u982D\u6F01\u592B",70,11.2,Math.PI/2,{shirt:1482885,pants:2899536,hat:"bucket",hatColor:12597547,hair:2824976},{y:r}),n.scatter(30,(p,y)=>n.add(ru(n.rng),p,y,n.rng()*6),p=>p>.9&&p<3.2,3),n.scatter(22,(p,y,_,v)=>{n.add(au(n.rng),p,y,n.rng()*6),ke(v.x,v.z,.45,_+6),n.exclude(p,y,2.5)},p=>p>3.5,3),n.scatter(40,(p,y)=>n.add(lu(n.rng),p,y,0),p=>p>2,1),n.scatter(18,(p,y,_,v)=>{let P=.5+n.rng()*1.6;n.add(za(n.rng,P),p,y,0,_-.2),P>1&&ke(v.x,v.z,P*.8,_+P)},p=>p>-2.5&&p<1.2,2),n.groundCover(520),e.spawn={...n.w(13,9),yaw:En(13,9,15,4)},_u(n.root,i),e.npcs.push(...n.npcs)}function P_(i,t,e){let n=new $a(i,t,98765),s=t.flats[0];for(let m of t.flats)n.exclude(m.x,m.z,m.r*.8);let r=t.pond;n.exclude(r.x,r.z,r.r+4);let o=1.5;n.dock(-72,8,36,Math.PI,o),e.boatSpawns.normal={...n.w(-100,12.6),heading:Math.PI},n.dock(-70,-14,16,Math.PI*.92,o),n.house(-52,-10,{w:7,d:6,wall:Q.wallWhite,roof:Q.roofBlue,sign:"\u6F01\u6703"},s.x,s.z),n.house(-30,-12,{w:8,d:6.5,wall:Q.wallCream,roof:Q.roofRed,sign:"\u6D77\u98A8\u9910\u5EF3"},s.x,s.z),n.house(-54,26,{w:6.5,d:6,wall:Q.wallYellow,roof:Q.roofGreen},s.x,s.z),n.house(-30,28,{w:7,d:6,wall:Q.wallPink,roof:Q.roofBrown,sign:"\u65C5\u9928"},s.x,s.z),n.house(-18,10,{w:6,d:5.5,wall:Q.wallBlue,roof:Q.roofRed},s.x,s.z);let a={x:-60,z:10},l=En(a.x,a.z,s.x,s.z),c=du("\u6F01\u7372\u6536\u8CFC"),h=n.w(a.x,a.z);n.add(c,a.x,a.z,l),Qn.push(c);let u=ur(l,0,.9);as(h.x+u.x,h.z+u.z,4.4,1.4,n.h(h.x,h.z)+1.3,l),n.exclude(a.x,a.z,5);let f=ur(l,0,-.3);n.npc("merchant_normal","\u8001\u738B","\u9B5A\u5546",a.x+f.x,a.z+f.z,l,{shirt:12597547,pants:2960685,apron:15921906,hat:"bucket",hatColor:3113197,hair:2236962,skin:14066283},{script:"merchant"}),n.dynamic=!0,n.add(fu(),s.x,s.z),n.dynamic=!1;for(let m=0;m<4;m++){let x=m*Math.PI/2+.3,g=s.x+Math.cos(x)*3.6,p=s.z+Math.sin(x)*3.6;n.add(Ha(),g,p,En(g,p,s.x,s.z)+Math.PI)}Qn.push(n.add(uu("normal Island"),-68,8,-Math.PI/2));for(let m of[-2.6,2.6]){let x=n.w(-68,8+m);ke(x.x,x.z,.3,10)}for(let[m,x,g]of[[-62,3.5,!0],[-48,3,!1],[-48,14,!0],[-34,2,!1],[-34,16,!1],[-24,4,!0],[-10,24,!1],[12,9,!0]])n.lanternAt(m,x,g);n.add(ka("\u2192 \u6C60\u5858","\u6797\u535A\u58EB\u7684\u7814\u7A76\u7AD9"),-14,2,En(-14,2,0,-4));let d=t.flats[1];n.dynamic=!0,Qn.push(n.add(Jf(),d.x,d.z,En(d.x,d.z,s.x,s.z))),n.dynamic=!1;{let m=n.w(d.x,d.z);ke(m.x,m.z,2.6,40)}for(let[m,x,g]of[[-64,4,.2],[-65,5.2,.9],[-63,15,.4],[-44,-2,.1]]){let p=us();n.add(p,m,x,g);let y=n.w(m,x);ke(y.x,y.z,.6,n.h(y.x,y.z)+1)}for(let[m,x]of[[-57,4],[-42,20]]){n.add(Oa(),m,x);let g=n.w(m,x);ke(g.x,g.z,.5,n.h(g.x,g.z)+1.1)}n.add(hu(),-46,-2,.1);{let m=n.w(-46,-2);as(m.x,m.z,3.4,.4,n.h(m.x,m.z)+2.3,.1)}for(let[m,x,g]of[[-92,3.3,Math.PI],[-99,3.3,Math.PI+.1]]){let p=ro([3066993,15844367][Math.round(m)%2===0?0:1],3426654);n.add(p,m,x,g,.05);let y=n.w(m,x);ke(y.x,y.z,2.2,2)}n.npc("shipwright_normal","\u5927\u77F3","\u8239\u5320",-80,6.9,Math.PI*.5,{shirt:8359053,pants:2899536,hat:"captain",hair:1118481,beard:"#222222",skin:13010498},{script:"shipwright",y:o,boatSpawn:"normal"}),n.npc("de","\u5FB7\u53D4","\u8001\u6F01\u592B",-105,6.6,-Math.PI/2,{shirt:3426654,pants:2042422,hat:"bucket",hatColor:8359053,hair:14540253,beard:"#eeeeee",skin:14196848},{y:o}),n.npc("anna","\u5B89\u5A1C","\u4E3B\u5EDA",-30,-6.5,En(-30,-6.5,s.x,s.z),{shirt:16777215,pants:2899536,apron:15158332,hat:"chef",hair:12597547}),n.npc("lin","\u6797\u535A\u58EB","\u6D77\u6D0B\u7814\u7A76\u54E1",20,-1,En(20,-1,r.x,r.z),{shirt:15528177,pants:3426654,hat:null,hair:2829099,glasses:!0,vest:15528177}),n.add(us(.8),22,-4,.3),n.add(Ha(),4,12,Math.PI),n.scatter(70,(m,x,g,p)=>{n.add(Xf(n.rng,.9+n.rng()*.6),m,x,0),ke(p.x,p.z,.45,g+8)},m=>m>6,2.8),n.scatter(24,(m,x,g,p)=>{n.add(au(n.rng),m,x,n.rng()*6),ke(p.x,p.z,.45,g+6)},m=>m>2.5&&m<7,3),n.scatter(30,(m,x)=>n.add(ru(n.rng),m,x,0),m=>m>.9&&m<2.8,3),n.scatter(50,(m,x)=>n.add(lu(n.rng),m,x,0),m=>m>2,1),n.scatter(30,(m,x,g,p)=>{let y=.8+n.rng()*2.6;n.add(za(n.rng,y,n.rng()>.5?Q.rock:Q.rockDark),m,x,0,g-.3),y>1&&ke(p.x,p.z,y*.8,g+y)},(m,x,g)=>m>-2.5&&m<1.4||m>10&&g<-20,2),n.groundCover(800),_u(n.root,i),e.npcs.push(...n.npcs)}var En,$a,cp=ee(()=>{Ee();Kn();ls();ds();In();rp();Mu();En=(i,t,e,n)=>Math.atan2(e-i,n-t);$a=class{constructor(t,e,n){this.scene=t,this.isl=e,this.rng=Df(n),this.excl=[],this.npcs=[],this.root=new At,this.dynamic=!1}w(t,e){return{x:this.isl.cx+t,z:this.isl.cz+e}}h(t,e){return qe(t,e)}add(t,e,n,s=0,r=null,o=!0){let a=this.w(e,n);return t.position.set(a.x,r??this.h(a.x,a.z),a.z),t.rotation.y=s,R_(t,o),(this.dynamic?this.scene:this.root).add(t),t}exclude(t,e,n){let s=this.w(t,e);this.excl.push({x:s.x,z:s.z,r:n})}free(t,e,n=0){return!this.excl.some(s=>(t-s.x)**2+(e-s.z)**2<(s.r+n)**2)}house(t,e,n,s,r){let o=En(t,e,s,r),a=this.w(t,e),l=this.h(a.x,a.z),c=$f(n);this.add(c,t,e,o,l-.05),Qn.push(c);let h=n.w||7,u=n.d||6;return as(a.x,a.z,h+.5,u+.5,l+(n.h||3.6)+4,o),this.exclude(t,e,Math.max(h,u)*.75+1),{rot:o,p:a,y:l}}dock(t,e,n,s,r=1.5){let o=Yf(n,3.2,r);this.add(o,t,e,s,0);let a=ur(s,n/2,0),l=this.w(t+a.x,e+a.z);as(l.x,l.z,n,3.2,r,s,{walkable:!0});for(let c=0;c<=n;c+=4){let h=ur(s,c,0);this.exclude(t+h.x,e+h.z,4)}return o}npc(t,e,n,s,r,o,a,l={}){let c=this.w(s,r),h=l.y??this.h(c.x,c.z);this.npcs.push({id:t,name:e,title:n,x:c.x,y:h,z:c.z,yaw:o,look:a,talk:qa[l.script||t],...l}),this.exclude(s,r,2)}lanternAt(t,e,n=!1){let s=this.w(t,e),r=io(n);this.add(r,t,e,this.rng()*6),ke(s.x,s.z,.2,this.h(s.x,s.z)+3)}scatter(t,e,n,s=1.5){let r=0,o=0,a=this.isl.radius;for(;r<t&&o<t*30;){o++;let l=this.rng()*Math.PI*2,c=Math.sqrt(this.rng())*a*1.05,h=Math.cos(l)*c,u=Math.sin(l)*c,f=this.w(h,u),d=this.h(f.x,f.z);n(d,h,u,f)&&this.free(f.x,f.z,s)&&(e(h,u,d,f),r++)}}groundCover(t,e=1.9){let n=[],s=0;for(;n.length<t&&s<t*20;){s++;let r=this.rng()*Math.PI*2,o=Math.sqrt(this.rng())*this.isl.radius,a=this.w(Math.cos(r)*o,Math.sin(r)*o),l=this.h(a.x,a.z);if(l<e||!this.free(a.x,a.z,-1))continue;let c=this.h(a.x+1,a.z),h=this.h(a.x,a.z+1);Math.abs(c-l)>.7||Math.abs(h-l)>.7||n.push(new S(a.x,l-.05,a.z))}this.scene.add(qf(n))}}});var Ya,hp=ee(()=>{Ee();Kn();or();In();Ya=class{constructor(t){this.g=t;let e=t.scene;this.clouds=new At;let n=new Ut({color:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.95,fog:!1,emissive:16777215,emissiveIntensity:.15});this.cloudMat=n;let s=new gi(1,1);for(let f=0;f<26;f++){let d=new At,m=4+Math.floor(Math.random()*5);for(let x=0;x<m;x++){let g=new it(s,n);g.position.set(ie(-14,14),ie(-2,3),ie(-7,7)),g.scale.set(ie(7,13),ie(4,7),ie(6,10)),d.add(g)}d.position.set(ie(-700,900),ie(140,220),ie(-900,600)),d.userData.speed=ie(1.5,4),this.clouds.add(d)}e.add(this.clouds),this.gulls=[];let r=new ge;r.setAttribute("position",new Yt([0,0,.2,0,0,-.2,-1.1,.1,0],3)),r.computeVertexNormals();let o=new Ut({color:16053492,side:be,roughness:.8}),a=new Ut({color:3355443,side:be});for(let f=0;f<9;f++){let d=new At,m=new it(new Jn(.12,.5,3,6),o);m.rotation.x=Math.PI/2;let x=new it(new qt(.11,6,5),o);x.position.z=.42;let g=new it(new De(.04,.15,4),new Ut({color:15844367}));g.rotation.x=Math.PI/2,g.position.z=.55;let p=new it(r,o),y=new it(r,o);y.scale.x=-1;let _=new it(new De(.06,.3,3),a);_.rotation.z=Math.PI/2,_.position.x=-1,p.add(_),d.add(m,x,g,p,y),d.scale.setScalar(1.3);let v=dn[f%dn.length];d.userData={wl:p,wr:y,cx:v.cx+ie(-30,30),cz:v.cz+ie(-30,30),r:ie(25,60),h:ie(18,34),a:ie(0,6),sp:ie(.15,.3)*(Math.random()<.5?-1:1),flap:ie(0,6)},d.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),e.add(d),this.gulls.push(d)}let l=260,c=new Float32Array(l*3);this.ffBase=[];for(let f=0;f<l;f++){let d=dn[f%dn.length],m=Math.random()*Math.PI*2,x=Math.sqrt(Math.random())*d.radius*.85,g=d.cx+Math.cos(m)*x,p=d.cz+Math.sin(m)*x;this.ffBase.push({x:g,z:p,y:0,ph:Math.random()*10})}let h=new ge;h.setAttribute("position",new ce(c,3)),this.ffMat=new Gr({color:14221162,size:.35,transparent:!0,opacity:0,blending:Rn,depthWrite:!1}),this.fireflies=new Ks(h,this.ffMat),this.fireflies.frustumCulled=!1,e.add(this.fireflies),this.ffInit=!1,this.jumpers=[];let u=new Ut({color:12110036,metalness:.5,roughness:.3});for(let f=0;f<3;f++){let d=new At,m=new it(new qt(.2,8,6),u);m.scale.set(2.2,.8,.6);let x=new it(new De(.16,.3,3),u);x.rotation.z=-Math.PI/2,x.position.x=-.55,d.add(m,x),d.visible=!1,e.add(d),this.jumpers.push({mesh:d,t:0,active:!1})}this.jumpTimer=3}update(t,e,n,s){let r=this.g;for(let o of this.clouds.children)o.position.x+=o.userData.speed*t,o.position.x>1e3&&(o.position.x=-800);this.cloudMat.color.setRGB(1,1,1).lerp(r.sky.horizon,.25).multiplyScalar(.35+.65*r.sky.dayLight),this.cloudMat.emissive.copy(r.sky.horizon).multiplyScalar(.4);for(let o of this.gulls){let a=o.userData;a.a+=a.sp*t;let l=a.cx+Math.cos(a.a)*a.r,c=a.cz+Math.sin(a.a)*a.r,h=a.h+Math.sin(a.a*3)*2;o.position.set(l,h,c);let u=-Math.sin(a.a)*Math.sign(a.sp),f=Math.cos(a.a)*Math.sign(a.sp);o.rotation.set(0,Math.atan2(u,f),-Math.sign(a.sp)*.25),a.flap+=t*(Math.sin(e*.5+a.a)>.3?9:2);let d=Math.sin(a.flap)*.5;a.wl.rotation.z=d,a.wr.rotation.z=-d,o.visible=s<.7}if(!this.ffInit){for(let o of this.ffBase)o.y=Math.max(.5,r.terrainH(o.x,o.z));this.ffInit=!0}if(this.ffMat.opacity=s*.9,this.fireflies.visible=s>.05,this.fireflies.visible){let o=this.fireflies.geometry.attributes.position.array;this.ffBase.forEach((a,l)=>{o[l*3]=a.x+Math.sin(e*.6+a.ph)*1.5,o[l*3+1]=a.y+1+Math.sin(e*1.3+a.ph*2)*.6+(Math.sin(e*3+a.ph*5)>.6?0:-50),o[l*3+2]=a.z+Math.cos(e*.5+a.ph)*1.5}),this.fireflies.geometry.attributes.position.needsUpdate=!0}if(this.jumpTimer-=t,this.jumpTimer<=0){this.jumpTimer=ie(2.5,7);let o=this.jumpers.find(a=>!a.active);if(o){let a=Math.random()*Math.PI*2,l=ie(14,45),c=n.x+Math.cos(a)*l,h=n.z+Math.sin(a)*l,u=yi(c,h);u&&u.depth>2&&(o.active=!0,o.t=0,o.x=c,o.z=h,o.level=u.level,o.dir=Math.random()*6,o.h=ie(1,2.2),o.dur=ie(.8,1.2),o.mesh.visible=!0,r.fx.splash(new S(c,u.level,h),.35,u.level),r.water.addRipple(c,h,.7))}}for(let o of this.jumpers){if(!o.active)continue;o.t+=t;let a=o.t/o.dur,l=Math.cos(o.dir),c=Math.sin(o.dir),h=o.x+l*a*2.5,u=o.z+c*a*2.5;o.mesh.position.set(h,o.level+o.h*4*a*(1-a)-.2,u),o.mesh.rotation.set(0,-o.dir,(.5-a)*2.2),a>=1&&(o.active=!1,o.mesh.visible=!1,r.fx.splash(new S(h,o.level,u),.3,o.level),r.water.addRipple(h,u,.6))}}}});var Za,up=ee(()=>{Ee();ds();Kn();or();ls();In();Za=class{constructor(t){this.g=t,this.model=ro(16184298,2060213),this.model.rotation.order="YXZ",this.model.visible=!1,t.scene.add(this.model),this.pos=new S,this.heading=0,this.speed=0,this.spawned=!1,this.wakeTimer=0,this.pitch=0,this.roll=0,this.prevY=0}forward(){return new S(Math.cos(this.heading),0,-Math.sin(this.heading))}spawn(t,e,n){this.pos.set(t,0,e),this.heading=n,this.speed=0,this.spawned=!0,this.model.visible=!0,this.g.fx.splash(new S(t,0,e),1.4,0),this.g.sound.splash(1.2)}seatWorld(t){let e=t==="drive"?new S(-1.55,-.12,0):new S(-.2,-.12,0);return this.model.updateMatrixWorld(),e.applyMatrix4(this.model.matrixWorld)}blockedAt(t,e){return qe(t,e)>-.55}update(t,e,n,s){if(!this.spawned)return;let r=s&&!this.g.fishing.equipped,o=r?(n.f?1:0)-(n.b?1:0):0,a=r?(n.l?1:0)-(n.r?1:0):0,l=n.shift?30:22;o>0?this.speed+=12*t:o<0?this.speed-=10*t:this.speed=xe(this.speed,0,.9,t),this.speed=Ge(this.speed,-7,l),this.speed>l&&(this.speed=xe(this.speed,l,2,t)),this.heading+=a*1.35*t*Ge(this.speed/8,-1,1);let c=this.forward(),h=this.pos.clone().addScaledVector(c,this.speed*t),u=h.clone().addScaledVector(c,Math.sign(this.speed||1)*2.8);if(this.blockedAt(u.x,u.z)||this.blockedAt(h.x,h.z))Math.abs(this.speed)>6&&(this.g.cam.shake(.3),this.g.sound.plop(.6)),this.speed=-this.speed*.25;else{let E=h.clone();Da(h,1.6,.3,2,!0),E.distanceToSquared(h)>1e-4&&(this.speed*=.9),this.pos.copy(h)}let f=fn(this.pos.x,this.pos.z),d=this.pos.clone().addScaledVector(c,2.2),m=this.pos.clone().addScaledVector(c,-2.2),x=new S(c.z,0,-c.x),g=this.pos.clone().addScaledVector(x,1),p=this.pos.clone().addScaledVector(x,-1),y=fn(d.x,d.z),_=fn(m.x,m.z),v=fn(g.x,g.z),P=fn(p.x,p.z),A=Ge(this.speed/22,0,1);this.pitch=xe(this.pitch,Math.atan2(y-_,4.4)+A*.09+o*.03,5,t),this.roll=xe(this.roll,Math.atan2(v-P,2)-a*A*.12,5,t),this.pos.y=xe(this.pos.y,f+.05+A*.15,8,t),this.model.position.copy(this.pos),this.model.rotation.set(this.roll,this.heading,this.pitch);let R=this.model.userData.prop;R&&(R.rotation.x+=t*(r?10+Math.abs(this.speed)*3:0)),this.model.userData.motor&&(this.model.userData.motor.rotation.y=-a*.4);let I=Math.abs(this.speed);if(this.wakeTimer-=t,I>2&&this.wakeTimer<=0){this.wakeTimer=.07;let E=this.pos.clone().addScaledVector(c,-2.8);this.g.fx.ring(E.x,f+.04,E.z,.4,1.5+I*.12,1.6,.45),this.g.water.addRipple(E.x,E.z,.5);for(let M=0;M<3;M++)this.g.fx.drop(E.clone().setY(f+.1),new S((Math.random()-.5)*2-c.x*2,1+Math.random()*2,(Math.random()-.5)*2-c.z*2),.8,.8,f-.2);if(I>10){let M=this.pos.clone().addScaledVector(c,2.4);for(let L of[-1,1]){let z=x.clone().multiplyScalar(L*(2+Math.random()*2)).add(new S(0,2+Math.random()*2,0));this.g.fx.drop(M.clone().addScaledVector(x,L*.9).setY(f+.1),z,1,.9,f-.2)}}}this.g.sound.setEngine(r,Ge(I/26,0,1))}}});var Ja,dp=ee(()=>{Ee();Ja=class{constructor(t){this.scene=t,this.maxDrops=600;let e=new gi(.07,0);this.dropMat=new Ut({color:15136511,roughness:.1,metalness:0,transparent:!0,opacity:.9,emissive:2771546,emissiveIntensity:.4}),this.drops=new Ui(e,this.dropMat,this.maxDrops),this.drops.instanceMatrix.setUsage(rs),this.drops.frustumCulled=!1,this.dropData=[];for(let r=0;r<this.maxDrops;r++)this.dropData.push({life:0,p:new S,v:new S,s:1,floor:0});this.dropIdx=0,t.add(this.drops),this.maxSpark=500;let n=new ge;this.sparkPos=new Float32Array(this.maxSpark*3),this.sparkCol=new Float32Array(this.maxSpark*3),this.sparkSize=new Float32Array(this.maxSpark),n.setAttribute("position",new ce(this.sparkPos,3).setUsage(rs)),n.setAttribute("color",new ce(this.sparkCol,3).setUsage(rs)),n.setAttribute("size",new ce(this.sparkSize,1).setUsage(rs)),this.sparkMat=new Ae({uniforms:{uScale:{value:300}},vertexShader:`attribute float size; attribute vec3 color; varying vec3 vC; varying float vS;
        uniform float uScale;
        void main(){ vC = color; vS = size; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec3 vC; varying float vS;
        void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (vS <= 0.0) discard;
          float a = smoothstep(0.5, 0.0, r); float star = max(0.0, 1.0 - abs(d.x*d.y)*60.0) * smoothstep(0.5,0.1,r);
          gl_FragColor = vec4(vC * (a + star*0.6), a); }`,transparent:!0,depthWrite:!1,blending:Rn}),this.sparks=new Ks(n,this.sparkMat),this.sparks.frustumCulled=!1,this.sparkData=[];for(let r=0;r<this.maxSpark;r++)this.sparkData.push({life:0,max:1,p:new S,v:new S,c:new ot,s:1,g:0});this.sparkIdx=0,t.add(this.sparks),this.rings=[];let s=new _a(.85,1,40);s.rotateX(-Math.PI/2);for(let r=0;r<24;r++){let o=new it(s,new tn({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));o.visible=!1,o.renderOrder=3,t.add(o),this.rings.push({mesh:o,life:0,max:1,r0:.2,r1:2,a:.6,getY:null})}this.ringIdx=0,this._m=new le,this._q=new Mn,this._s=new S}drop(t,e,n=1,s=1.2,r=-1e9){let o=this.dropData[this.dropIdx];this.dropIdx=(this.dropIdx+1)%this.maxDrops,o.p.copy(t),o.v.copy(e),o.s=n,o.life=s,o.floor=r}splash(t,e=1,n=t.y){let s=Math.floor(14+e*26);for(let r=0;r<s;r++){let o=Math.random()*Math.PI*2,a=(.8+Math.random()*2.2)*e,l=(2.5+Math.random()*4.5)*Math.sqrt(e);this.drop(new S(t.x+Math.cos(o)*.15,n+.05,t.z+Math.sin(o)*.15),new S(Math.cos(o)*a,l,Math.sin(o)*a),.6+Math.random()*1.2*Math.min(1.6,e),1.5,n-.1)}for(let r=0;r<6*e;r++)this.drop(new S(t.x,n,t.z),new S((Math.random()-.5)*.6,5+Math.random()*3*e,(Math.random()-.5)*.6),1.3,1.5,n-.1);this.ring(t.x,n+.03,t.z,.2,2.2*e+1.2,1.2,.7),this.ring(t.x,n+.03,t.z,.1,1.2*e+.8,.9,.5)}ring(t,e,n,s,r,o=1,a=.6,l=null){let c=this.rings[this.ringIdx];this.ringIdx=(this.ringIdx+1)%this.rings.length,c.mesh.position.set(t,e,n),c.life=o,c.max=o,c.r0=s,c.r1=r,c.a=a,c.getY=l,c.mesh.visible=!0}spark(t,e,n,s=.4,r=1,o=0){let a=this.sparkData[this.sparkIdx];this.sparkIdx=(this.sparkIdx+1)%this.maxSpark,a.p.copy(t),a.v.copy(e),a.c.set(n),a.s=s,a.life=r,a.max=r,a.g=o}burst(t,e,n=30,s=4,r=.5,o=1.2){for(let a=0;a<n;a++){let l=new S(Math.random()-.5,Math.random()*.8+.2,Math.random()-.5).normalize().multiplyScalar(s*(.4+Math.random()*.6));this.spark(t,l,e,r*(.6+Math.random()*.8),o*(.6+Math.random()*.6),-3)}}update(t){let e=this._m,n=this._q,s=this._s;for(let o=0;o<this.maxDrops;o++){let a=this.dropData[o];if(a.life>0){a.life-=t,a.v.y-=14*t,a.v.multiplyScalar(1-t*.6),a.p.addScaledVector(a.v,t),a.p.y<a.floor&&(a.life=0);let l=Math.max(0,Math.min(1,a.life*2))*a.s;n.setFromUnitVectors(new S(0,1,0),a.v.lengthSq()>.01?a.v.clone().normalize():new S(0,1,0)),s.set(l,l*(1+Math.min(2.5,a.v.length()*.25)),l),e.compose(a.p,n,s)}else e.makeScale(0,0,0);this.drops.setMatrixAt(o,e)}this.drops.instanceMatrix.needsUpdate=!0;for(let o=0;o<this.maxSpark;o++){let a=this.sparkData[o];if(a.life>0){a.life-=t,a.v.y+=a.g*t,a.v.multiplyScalar(1-t*1.2),a.p.addScaledVector(a.v,t);let l=Math.max(0,a.life/a.max);this.sparkPos[o*3]=a.p.x,this.sparkPos[o*3+1]=a.p.y,this.sparkPos[o*3+2]=a.p.z,this.sparkCol[o*3]=a.c.r*l,this.sparkCol[o*3+1]=a.c.g*l,this.sparkCol[o*3+2]=a.c.b*l,this.sparkSize[o]=a.s*(.4+.6*l)}else this.sparkSize[o]=0}let r=this.sparks.geometry;r.attributes.position.needsUpdate=!0,r.attributes.color.needsUpdate=!0,r.attributes.size.needsUpdate=!0;for(let o of this.rings){if(o.life<=0){o.mesh.visible=!1;continue}o.life-=t;let a=1-o.life/o.max,l=1-Math.pow(1-a,2.2),c=o.r0+(o.r1-o.r0)*l;o.mesh.scale.set(c,1,c),o.mesh.material.opacity=o.a*(1-a),o.getY&&(o.mesh.position.y=o.getY(o.mesh.position.x,o.mesh.position.z)+.03)}}}});function kt(i,t,e=0,n=0,s=0){let r=new it(i,t);return r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}function Ka(i,t,e,n){let s=new It(t,i,e,14,1),r=kt(s,n,0,-e/2,0),o=kt(new qt(i,14,10),n,0,0,0),a=kt(new qt(t,14,10),n,0,-e,0),l=new At;return l.add(r,o,a),l}function fp(i=1,t=0,e=1){let n=[[0,-.02],[.165,0],[.168,.1],[.152,.24],[.162,.36],[.192,.5],[.2,.6],[.185,.67],[.13,.73],[.06,.77],[0,.78]],s=n.filter((o,a)=>a/(n.length-1)>=t-1e-6&&a/(n.length-1)<=e+1e-6).map(([o,a])=>new K(o*i,a)),r=new qr(s,28);return r.scale(1,1,.64),r}function Qa(i={}){let{skin:t=14724226,shirt:e=3113197,pants:n=3817290,shoes:s=2829099,hat:r="bucket",hatColor:o=15052874,hair:a=4861723,beard:l=!1,apron:c=null,vest:h=null,glasses:u=!1,scale:f=1,eye:d=3877402}=i,m=new At,x=new At;m.add(x);let g=I_(t),p=co(e),y=co(n),_=Be(s,.45),v=Be(a,.75),P=j=>{let dt=new At;dt.position.set(j,1.02,0),dt.add(Ka(.098,.078,.5,y));let mt=new At;mt.position.y=-.5,mt.add(Ka(.078,.06,.46,y));let Gt=new At;Gt.position.y=-.47;let $=kt(new qt(.075,16,10),_,0,-.025,.055);$.scale.set(.95,.62,1.75);let rt=kt(new Ot(.14,.025,.27),Be(1710618,.9),0,-.06,.055);return Gt.add($,rt),mt.add(Gt),dt.add(mt),x.add(dt),{hip:dt,knee:mt}},A=P(.1),R=P(-.1),I=kt(new qt(.17,20,12),y,0,1.03,0);I.scale.set(1.08,.62,.72),x.add(I);let E=new At;E.position.y=1.03,x.add(E),E.add(kt(fp(),p));let M=kt(new Fi(.075,.018,8,20),p,0,.745,.005);M.rotation.x=Math.PI/2,E.add(M);let L=kt(new It(.17,.17,.045,28,1,!0),Be(3877402,.5),0,.03,0);if(L.scale.z=.66,E.add(L),E.add(kt(new Ot(.05,.04,.012),Be(13215306,.3),0,.03,.112)),h){let j=co(h),dt=kt(fp(1.05,.25,.8),j);E.add(dt);for(let mt of[-1,1])E.add(kt(new Ot(.07,.06,.015),co(new ot(h).multiplyScalar(.75)),mt*.09,.4,.13))}if(c){let j=new Qs({color:c,roughness:.9,sheen:.6,side:be}),dt=kt(new It(.185,.2,.72,16,1,!0,-.75,1.5),j,0,.18,0);dt.scale.z=.72,E.add(dt)}let z=new At;z.position.y=.76,E.add(z),z.add(kt(new It(.052,.06,.12,12),g,0,.04,0));let N=new At;N.position.y=.19,z.add(N);let H=kt(new qt(.15,28,20),g);H.scale.set(.92,1.1,1),N.add(H);let Z=kt(new qt(.11,20,14),g,0,-.07,.035);Z.scale.set(1,.85,.95),N.add(Z);let V=Be(16184302,.2),at=Be(d,.15),G=Be(328965,.1);for(let j of[-1,1]){let dt=kt(new qt(.024,14,10),V,j*.05,.02,.122);dt.scale.z=.6,N.add(dt),N.add(kt(new qt(.0135,12,8),at,j*.05,.02,.134)),N.add(kt(new qt(.007,8,6),G,j*.05,.02,.1445));let mt=kt(new qt(.026,14,8,0,Math.PI*2,0,Math.PI*.42),g,j*.05,.022,.12);mt.rotation.x=.5,N.add(mt);let Gt=kt(new Jn(.008,.04,4,8),v,j*.052,.062,.13);Gt.rotation.z=Math.PI/2+j*.12,N.add(Gt);let $=kt(new qt(.034,12,10),g,j*.138,0,-.005);$.scale.set(.45,1,.75),N.add($)}let pt=kt(new qt(.022,12,10),g,0,-.02,.15);pt.scale.set(.85,1.1,1.15),N.add(pt);let vt=kt(new Jn(.012,.04,4,8),g,0,.01,.14);vt.rotation.x=-.3,N.add(vt);let Tt=kt(new Jn(.007,.04,4,8),Be(10111556,.5),0,-.07,.132);if(Tt.rotation.z=Math.PI/2,N.add(Tt),a!==null){let j=kt(new qt(.158,28,16,0,Math.PI*2,0,Math.PI*.52),v,0,.022,-.012);j.scale.set(.97,1.14,1.04),j.rotation.x=-.28,N.add(j);let dt=kt(new qt(.14,20,14),v,0,-.01,-.045);dt.scale.set(.98,1,.85),N.add(dt);for(let mt of[-1,1])N.add(kt(new Ot(.02,.07,.05),v,mt*.135,.03,.03))}if(l){let j=Be(typeof l=="string"?new ot(l):15262422,.85),dt=kt(new qt(.105,18,12,0,Math.PI*2,Math.PI*.35,Math.PI*.65),j,0,-.06,.045);dt.scale.set(1.05,1.05,.95),N.add(dt);let mt=kt(new Jn(.012,.06,4,8),j,0,-.05,.14);mt.rotation.z=Math.PI/2,N.add(mt)}if(u){let j=Be(1710618,.3);for(let dt of[-1,1])N.add(kt(new Fi(.03,.004,6,18),j,dt*.05,.02,.152));N.add(kt(new Ot(.04,.005,.005),j,0,.025,.155));for(let dt of[-1,1]){let mt=kt(new Ot(.004,.004,.13),j,dt*.082,.025,.09);N.add(mt)}}let Vt=co(o),se=(...j)=>j.forEach(dt=>N.add(dt));if(r==="bucket"){se(kt(new It(.135,.165,.12,28),Vt,0,.16,-.01),kt(new qt(.135,24,8,0,Math.PI*2,0,Math.PI/2),Vt,0,.215,-.01));let j=kt(new It(.2,.25,.04,32,1,!0),Vt,0,.09,-.01);j.material=Vt.clone(),j.material.side=be,N.add(j)}else if(r==="captain"){se(kt(new It(.18,.162,.08,28),Be(16119285,.5),0,.19,-.01),kt(new It(.163,.163,.05,28),Be(1780298,.6),0,.135,-.01),kt(new It(.01,.01,.02,8),Be(13938487,.3),0,.15,.16));let j=kt(new It(.12,.12,.012,20,1,!1,-Math.PI/2,Math.PI),Be(1118481,.3),0,.115,.1);j.rotation.x=.15,N.add(j)}else if(r==="chef"){se(kt(new It(.15,.155,.14,24),Be(16777215,.8),0,.17,-.01));let j=kt(new qt(.19,20,14),Be(16777215,.85),0,.31,-.01);j.scale.y=.65,N.add(j)}else if(r==="straw"){let j=Be(14862456,.9);se(kt(new It(.13,.16,.11,28),j,0,.17,-.01),kt(new It(.335,.345,.012,36),j,0,.12,-.01),kt(new It(.152,.158,.035,28),Be(11549230,.7),0,.14,-.01))}else if(r==="beanie"){let j=kt(new qt(.165,24,14,0,Math.PI*2,0,Math.PI/2),Vt,0,.07,-.01);j.scale.y=1.15;let dt=kt(new Fi(.155,.025,10,28),Vt,0,.075,-.01);dt.rotation.x=Math.PI/2,se(j,dt,kt(new qt(.045,12,8),Be(16777215,.95),0,.27,-.01))}let X=j=>{let dt=new At;dt.position.set(j,.62,0),E.add(kt(new qt(.082,16,12),p,j*.86,.625,0)),dt.add(Ka(.07,.058,.32,p));let mt=new At;mt.position.y=-.32,mt.add(Ka(.052,.04,.28,g));let Gt=new At;Gt.position.y=-.3;let $=kt(new qt(.05,14,10),g,0,-.035,.005);$.scale.set(.72,1.15,.52);let rt=kt(new Jn(.014,.035,4,8),g,-Math.sign(j)*-.03,-.02,.03);return rt.rotation.z=Math.sign(j)*.5,Gt.add($,rt),mt.add(Gt),dt.add(mt),E.add(dt),{sh:dt,elbow:mt,hand:Gt}},lt=X(.235),Rt=X(-.235);ap(m),m.traverse(j=>{j.isMesh&&(j.castShadow=!0,j.receiveShadow=!0)}),m.scale.setScalar(f*1.08);let J={root:m,body:x,torso:E,neck:z,head:N,legL:A.hip,legR:R.hip,kneeL:A.knee,kneeR:R.knee,armL:lt.sh,armR:Rt.sh,elbowL:lt.elbow,elbowR:Rt.elbow,handL:lt.hand,handR:Rt.hand,walkPhase:0,blend:0};return J.animate=(j,dt,mt,Gt="ground")=>{let $=Math.min(1,mt/6);J.blend+=($-J.blend)*Math.min(1,j*10),J.walkPhase+=j*(3.2+mt*.95);let rt=Math.sin(J.walkPhase),C=J.blend;if(x.rotation.set(0,0,0),x.position.y=0,E.rotation.set(0,0,0),z.rotation.set(0,0,0),J.elbowL.rotation.set(0,0,0),J.elbowR.rotation.set(0,0,0),Gt==="swim"){let ht=dt*3.2,Ht=.65+.55*C;x.rotation.x=Ht,x.position.y=-Math.cos(Ht)*1.4,z.rotation.x=-Ht*.85,J.armL.rotation.set(-Math.PI*.85+Math.sin(ht)*1.3,0,.25),J.armR.rotation.set(-Math.PI*.85-Math.sin(ht)*1.3,0,-.25),J.elbowL.rotation.x=-.3-Math.max(0,Math.cos(ht))*.6,J.elbowR.rotation.x=-.3-Math.max(0,-Math.cos(ht))*.6,A.hip.rotation.x=Math.sin(ht*2)*.35,R.hip.rotation.x=-Math.sin(ht*2)*.35,A.knee.rotation.x=.2+Math.max(0,Math.sin(ht*2))*.4,R.knee.rotation.x=.2+Math.max(0,-Math.sin(ht*2))*.4;return}if(Gt==="sit"){A.hip.rotation.x=-1.45,R.hip.rotation.x=-1.45,A.knee.rotation.x=1.45,R.knee.rotation.x=1.45,x.position.y=-.55,J.armL.rotation.set(-.55,0,.12),J.armR.rotation.set(-.55,0,-.12),J.elbowL.rotation.x=-.6,J.elbowR.rotation.x=-.6;return}if(Gt==="air"){A.hip.rotation.x=-.6,R.hip.rotation.x=.25,A.knee.rotation.x=.8,R.knee.rotation.x=.35,J.armL.rotation.set(-.4,0,.45),J.armR.rotation.set(-.4,0,-.45),J.elbowL.rotation.x=-.5,J.elbowR.rotation.x=-.5;return}let Lt=Math.sin(dt*1.7),et=Math.min(1,mt/12),Et=.55+et*.35;A.hip.rotation.x=rt*Et*C,R.hip.rotation.x=-rt*Et*C,A.knee.rotation.x=Math.max(0,-Math.cos(J.walkPhase))*(.5+et*.7)*C+.04,R.knee.rotation.x=Math.max(0,Math.cos(J.walkPhase))*(.5+et*.7)*C+.04,J.armL.rotation.set(-rt*(.45+et*.4)*C,0,.07+Lt*.01),J.armR.rotation.set(rt*(.45+et*.4)*C,0,-.07-Lt*.01),J.elbowL.rotation.x=-.12-Math.max(0,rt)*(.3+et*.9)*C,J.elbowR.rotation.x=-.12-Math.max(0,-rt)*(.3+et*.9)*C,x.position.y=Math.abs(Math.cos(J.walkPhase))*.05*C-.02*C,E.rotation.y=rt*.1*C,E.rotation.x=.05*C+et*.12*C+Lt*.008,z.rotation.y=-rt*.06*C},J}var co,I_,Be,bu=ee(()=>{Ee();Mu();co=i=>new Qs({color:i,roughness:.88,metalness:0,sheen:.8,sheenRoughness:.7,sheenColor:new ot(i).lerp(new ot(16777215),.35)}),I_=i=>new Qs({color:i,roughness:.55,metalness:0,sheen:.4,sheenRoughness:.5,sheenColor:new ot(16751232),clearcoat:.05}),Be=(i,t=.6)=>new Ut({color:i,roughness:t,metalness:0})});function ja(i,t){return new Ut({color:i,roughness:.45,metalness:.1,side:be,transparent:!0,opacity:.92,emissive:t?new ot(t):0,emissiveIntensity:t?.6:0})}function pp(i,t,e,n,s){let r=new qt(1,28,18),o=r.attributes.position,a=new Float32Array(o.count*3),l=ps(n.colors[0]),c=ps(n.colors[1]),h=new ot;for(let u=0;u<o.count;u++){let f=o.getX(u),d=o.getY(u),m=o.getZ(u),x=(f+1)/2,g=Math.pow(Math.sin(Math.PI*Math.min(1,.12+x*.95)),.75)*(x<.15?.6+x*2.6:1),p=d*t*g,y=m*e*g,_=f*i/2;o.setXYZ(u,_,p+(s.hump?Math.max(0,d)*.15*Math.sin(x*Math.PI):0),y);let v=Bh.smoothstep(d,-.45,.35);if(h.copy(c).lerp(l,v),s.stripes&&d>-.1&&Math.sin(_*9+Math.sin(d*6)*2)>.6&&h.multiplyScalar(.55),s.bands){let P=Math.abs(Math.sin((x-.08)*Math.PI*3));P<.22&&x>.15?h.set(16777215):P<.3&&x>.15&&h.set(1118481)}if(s.spots&&xi(Math.floor(_*14),Math.floor((d+m)*9))>.86&&d>-.2&&h.multiplyScalar(s.lightSpots?1.6:.5),s.koi){let P=Math.sin(_*5.3+1.2)*Math.sin(m*4.1+d*3.3+.7)+Math.sin(_*2.1+d*2);h.set(P>.25&&d>-.3?16734762:P<-.9&&d>0?1710618:16447472)}a[u*3]=h.r,a[u*3+1]=h.g,a[u*3+2]=h.b}return r.setAttribute("color",new ce(a,3)),r.computeVertexNormals(),r}function wn(i){let t=new mi;t.moveTo(i[0][0],i[0][1]);for(let e=1;e<i.length;e++)t.lineTo(i[e][0],i[e][1]);return t.closePath(),new Ma(t)}function dr(i,t,e,n,s=.09,r){let o=new Ut({color:16777215,roughness:.2}),a=new Ut({color:328965,roughness:.1,emissive:r||0,emissiveIntensity:r?.5:0});for(let l of[-1,1]){let c=new it(new qt(s,10,8),o);c.position.set(t,e,n*l);let h=new it(new qt(s*.6,8,6),a);h.position.set(t+s*.15,e,(n+s*.55)*l),i.add(c,h)}}function tl(i){let t=new At,e=new At;t.add(e);let n=i.glow,s=new Ut({vertexColors:!0,roughness:.32,metalness:.22,emissive:n?new ot(n):0,emissiveIntensity:n?.35:0}),r=i.fin??new ot(i.colors[0]).lerp(new ot(i.colors[1]),.35).getHex(),o=ja(r,n),a=null,l=i.shape,c={stripes:i.stripes,bands:i.bands,spots:i.spots,koi:i.koi,lightSpots:l==="whale"};if(l==="standard"||l==="tall"||l==="long"){let d=(l==="tall"?.62:l==="long"?1/(i.len||6)*1.4:1/(i.len||3.2)*1.15)*.95,m=d*(l==="tall"?.42:.55),x=new it(pp(1,d*.5*2/2,m*.5,i,c),s);e.add(x),a=new At,a.position.x=-.47;let g=Math.max(.2,d*1.1),p=new it(wn([[0,0],[-g*.55,g*.55],[-g*.35,0],[-g*.55,-g*.55]]),o);if(a.add(p),e.add(a),l==="long"){let y=new it(wn([[-.45,0],[-.4,d*.45],[.38,d*.55],[.42,0]]),ja(i.colors[1]===16727887?16727887:r,n));if(y.position.y=d*.35,e.add(y),i.id==="oarfish"){let _=new it(wn([[.3,0],[.35,d*1.6],[.42,d*.3]]),ja(16727887));_.position.y=d*.4,e.add(_)}}else{let y=new it(wn([[-.18,0],[.02,d*.55],[.16,0]]),o);y.position.set(0,d*.4,0),e.add(y);let _=new it(wn([[-.25,0],[-.15,-d*.3],[-.05,0]]),o);_.position.set(0,-d*.38,0),e.add(_)}for(let y of[-1,1]){let _=new it(wn([[0,0],[-.12,d*.18],[-.14,-d*.05]]),o);_.position.set(.18,-d*.12,m*.45*y),_.rotation.y=y*.5,e.add(_)}if(i.wings)for(let y of[-1,1]){let _=new it(wn([[.15,0],[-.25,.45],[-.3,.05]]),ja(12572927));_.rotation.x=y*Math.PI/2-y*.3,_.position.set(.05,d*.05,m*.3*y),e.add(_)}if(i.sword){let y=new it(new De(.025,.45,6),new Ut({color:2831168,roughness:.4}));y.rotation.z=-Math.PI/2,y.position.set(.7,d*.05,0),e.add(y),e.scale.set(.8,1,1)}if(i.whiskers){let y=new Ut({color:2829094});for(let _ of[-1,1]){let v=new it(new It(.006,.004,.3,4),y);v.rotation.z=Math.PI/2+.4,v.rotation.y=_*.6,v.position.set(.55,-d*.1,_*.08),e.add(v)}}dr(e,.36,d*.12,m*.32,Math.max(.025,d*.09),n)}else if(l==="shark"||l==="whale"){let u=l==="whale"?.16:.12,f=l==="whale"?.15:.1,d=new it(pp(1,u,f,i,c),s);e.add(d);let m=new it(wn([[-.12,0],[-.05,.28],[.12,0]]),o);m.position.y=u*.8,e.add(m),a=new At,a.position.x=-.46,a.add(new it(wn([[0,0],[-.2,.32],[-.1,0],[-.14,-.16]]),o)),e.add(a);for(let x of[-1,1]){let g=new it(wn([[0,0],[-.22,-.02],[-.1,.04]]),o);g.rotation.x=x*1.2,g.position.set(.12,-u*.4,f*.5*x),e.add(g)}if(i.hammer){let x=new it(new Ot(.1,.05,.42),new Ut({color:i.colors[0],roughness:.4}));x.position.set(.47,.01,0),e.add(x),dr(e,.47,.02,.2,.03,n)}else dr(e,.33,u*.25,f*.45,.025,n)}else if(l==="flat"){let u=i.id==="moonray",f=new qt(.5,24,12),d=f.attributes.position,m=new Float32Array(d.count*3),x=ps(i.colors[0]),g=ps(i.colors[1]),p=new ot;for(let y=0;y<d.count;y++){let _=d.getX(y),v=d.getY(y),P=d.getZ(y);if(u){let A=Math.abs(P)*2;_*=1-A*.35,P*=2,v*=.12}else P*=1.15,v*=.16,_*=1;d.setXYZ(y,_,v,P),p.copy(g).lerp(x,v>0?1:0),!u&&v>0&&xi(Math.floor(_*20),Math.floor(P*20))>.85&&p.multiplyScalar(.6),u&&v>0&&xi(Math.floor(_*12),Math.floor(P*12))>.9&&p.set(14674687),m[y*3]=p.r,m[y*3+1]=p.g,m[y*3+2]=p.b}if(f.setAttribute("color",new ce(m,3)),f.computeVertexNormals(),e.add(new it(f,s)),a=new At,a.position.x=-.45,u){let y=new it(new It(.004,.02,.8,5),o);y.rotation.z=Math.PI/2,y.position.x=-.4,a.add(y)}else a.add(new it(wn([[0,0],[-.18,.12],[-.18,-.12]]),o)),a.rotation.x=Math.PI/2;e.add(a),dr(e,.2,.08,.07,.03,n)}else if(l==="round"){let u=new qt(.33,20,14),f=u.attributes.position,d=new Float32Array(f.count*3),m=ps(i.colors[0]),x=ps(i.colors[1]),g=new ot;for(let p=0;p<f.count;p++){let y=f.getY(p);g.copy(x).lerp(m,Bh.smoothstep(y,-.15,.15)),i.id==="pufferfish"&&y>0&&xi(Math.floor(f.getX(p)*30),Math.floor(f.getZ(p)*30))>.8&&g.multiplyScalar(.55),d[p*3]=g.r,d[p*3+1]=g.g,d[p*3+2]=g.b}if(u.setAttribute("color",new ce(d,3)),e.add(new it(u,s)),i.id==="pufferfish"){let p=new Ut({color:15984312,roughness:.5});for(let y=0;y<40;y++){let _=new S(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),v=new it(new De(.02,.09,4),p);v.position.copy(_.clone().multiplyScalar(.34)),v.quaternion.setFromUnitVectors(new S(0,1,0),_),e.add(v)}}if(i.lure){let p=new it(new It(.01,.01,.35,4),new Ut({color:3813178}));p.position.set(.18,.42,0),p.rotation.z=-.6,e.add(p);let y=new it(new qt(.05,8,6),new tn({color:12124088}));y.position.set(.32,.56,0),e.add(y);let _=new Ut({color:16777215});for(let v=0;v<6;v++){let P=new it(new De(.015,.06,3),_);P.position.set(.31,-.03,-.12+v*.05),P.rotation.z=Math.PI,e.add(P)}}a=new At,a.position.x=-.32,a.add(new it(wn([[0,0],[-.16,.13],[-.16,-.13]]),o)),e.add(a),dr(e,.24,.1,.17,.055,n)}else if(l==="squid"){let u=new it(new De(.13,.55,12),s);u.rotation.z=Math.PI/2,u.position.x=-.1;let f=u.geometry,d=f.attributes.position,m=new Float32Array(d.count*3),x=ps(i.colors[0]);for(let y=0;y<d.count;y++)m[y*3]=x.r,m[y*3+1]=x.g,m[y*3+2]=x.b;f.setAttribute("color",new ce(m,3)),e.add(u);let g=new it(wn([[0,.2],[.12,0],[0,-.2]]),o);g.rotation.x=Math.PI/2,g.position.x=-.38,e.add(g),a=new At,a.position.x=.2;let p=new Ut({color:i.colors[1],emissive:n||0,emissiveIntensity:.5,roughness:.4});for(let y=0;y<8;y++){let _=new it(new It(.012,.025,.35,5),p),v=y/8*Math.PI*2;_.rotation.z=-Math.PI/2,_.position.set(.17,Math.cos(v)*.05,Math.sin(v)*.05),a.add(_)}e.add(a),dr(e,.17,0,.1,.035,n)}else if(l==="boot"){let u=new Ut({color:i.colors[0],roughness:.9}),f=new it(new Ot(.28,.5,.28),u);f.position.set(-.12,.12,0);let d=new it(new Ot(.55,.2,.3),u);d.position.set(.02,-.15,0);let m=new it(new Ot(.57,.05,.32),new Ut({color:i.colors[1]}));m.position.set(.02,-.27,0),e.add(f,d,m)}else if(l==="can"){let u=new Ut({color:i.colors[0],roughness:.5,metalness:.7}),f=new it(new It(.14,.14,.38,14),u),d=new it(new It(.143,.143,.2,14,1,!0),new Ut({color:i.colors[1],roughness:.8}));f.rotation.z=.5,d.rotation.z=.5,e.add(f,d)}else if(l==="wood"){let u=new Ut({color:i.colors[0],roughness:.95,flatShading:!0}),f=new it(new It(.07,.09,1,7),u);f.rotation.z=Math.PI/2;let d=new it(new It(.03,.04,.35,5),u);d.position.set(.15,.12,0),d.rotation.z=-.6,e.add(f,d)}else if(l==="weed"){let u=new Ut({color:i.colors[0],roughness:.6,side:be});for(let f=0;f<5;f++){let d=new Fe(.12,.8,1,6),m=d.attributes.position;for(let g=0;g<m.count;g++)m.setX(g,m.getX(g)+Math.sin(m.getY(g)*8+f)*.05);let x=new it(d,u);x.rotation.y=f*.6,x.rotation.z=(f-2)*.2,e.add(x)}a=e}t.traverse(u=>{u.isMesh&&(u.castShadow=!0)});let h=a?a.rotation.y:0;return t.userData.update=(u,f=1)=>{a&&a!==e&&(a.rotation.y=h+Math.sin(u*14)*.6*f),e.rotation.y=Math.sin(u*14+1.2)*.12*f,a===e&&(e.rotation.z=Math.sin(u*5)*.2)},t}function ho(i,t){if(["boot","can","weed","wood"].includes(i.shape))return i.shape==="wood"?1:.6;let e=.44*Math.cbrt(t);return i.shape==="long"&&(e*=1.6),(i.shape==="shark"||i.shape==="whale")&&(e*=1.15),i.shape==="round"&&(e*=.8),Math.max(.22,Math.min(5.5,e))}var ps,Eu=ee(()=>{Ee();In();ps=i=>new ot(i)});var el,mp=ee(()=>{Ee();bu();ls();Kn();or();In();Eu();lr();ds();el=class{constructor(t){this.g=t,this.rig=Qa({shirt:3113197,pants:3426654,hat:"bucket",hatColor:15317321,hair:3875860,vest:6130234}),t.scene.add(this.rig.root),this.pos=new S,this.vel=new S,this.yaw=0,this.onGround=!1,this.swimming=!1,this.boat=null,this.heldFish=null,this.heldModel=null,this.splashTimer=0,this.stepTimer=0}setName(t){this.nameTag&&(this.rig.root.remove(this.nameTag),this.nameTag.material.map.dispose(),this.nameTag.material.dispose(),this.nameTag=null),t&&(this.nameTag=Ba(t,null,"#9fe6ff"),this.nameTag.scale.set(3.2,.8,1),this.nameTag.position.set(0,2.75,0),this.rig.root.add(this.nameTag))}forward(){return new S(Math.sin(this.yaw),0,Math.cos(this.yaw))}faceCamera(){this.yaw=this.g.cam.yaw}teleport(t,e,n=this.yaw){this.pos.set(t,Math.max(qe(t,e),Of(t,e,999))+.05,e),this.vel.set(0,0,0),this.yaw=n}holdFish(t){if(this.heldModel&&(this.heldModel.parent.remove(this.heldModel),this.heldModel=null),this.heldFish=t,!t)return;let e=ki[t.id],n=tl(e),s=Math.min(2.2,ho(e,t.weight));n.scale.setScalar(s),n.rotation.set(1.1,0,0),n.position.set(0,-.12,.05),this.rig.handR.add(n),this.heldModel=n}holdCrate(t){if(this.crateModel&&(this.crateModel.parent.remove(this.crateModel),this.crateModel=null),!t)return;let e=us(.42);e.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),e.rotation.set(1.1,0,0),e.position.set(0,-.32,.05),this.rig.handR.add(e),this.crateModel=e,this.crateShake=0}update(t,e,n,s){let r=this.g;if(this.boat){this.updateInBoat(t,e);return}let o=0,a=0;s||(n.f&&(a+=1),n.b&&(a-=1),n.l&&(o-=1),n.r&&(o+=1));let l=r.cam.yaw,c=new S(Math.sin(l),0,Math.cos(l)),h=new S(-Math.cos(l),0,Math.sin(l)),u=c.multiplyScalar(a).add(h.multiplyScalar(o)),f=u.lengthSq()>.01;f&&(u.normalize(),(r.fishing.state==="waiting"||r.fishing.state==="landed")&&r.fishing.interruptByMove());let d=r.fishing.locksMovement,m=this.swimming?5.5:n.shift?15:9,x=d?new S:u.clone().multiplyScalar(m),g=this.onGround||this.swimming?14:3;this.vel.x=xe(this.vel.x,x.x,g,t),this.vel.z=xe(this.vel.z,x.z,g,t),f&&!d&&(this.yaw=Qr(this.yaw,Math.atan2(u.x,u.z),12,t));let p=yi(this.pos.x,this.pos.z),y=Oi(this.pos.x,this.pos.z,this.pos.y),_=p?fn(this.pos.x,this.pos.z,p.level,p.pond):-1/0,v=_-1.35,P=_-.15,A=this.swimming;this.swimming=!!p&&y<v-.05&&this.pos.y<=P+.1,this.swimming?(A||(r.fx.splash(new S(this.pos.x,_,this.pos.z),.9,_),r.sound.splash(.8),r.water.addRipple(this.pos.x,this.pos.z,1.2),r.fishing.equipped&&r.selectSlot(0)),this.vel.y=0,this.pos.y=xe(this.pos.y,P,8,t),this.onGround=!1,this.splashTimer-=t,this.splashTimer<=0&&f&&(this.splashTimer=.45,r.water.addRipple(this.pos.x,this.pos.z,.6),r.fx.ring(this.pos.x,_+.03,this.pos.z,.5,2.2,1.2,.35))):(this.vel.y-=32*t,n.jump&&this.onGround&&!s&&!d&&(this.vel.y=11.5,this.onGround=!1));let R=this.pos.clone().addScaledVector(this.vel,t);if(this.swimming){for(let M of os)if(M.walkable&&M.top>R.y+.6&&M.top<_+2.4&&La(M,R.x,R.z,.35)){R.y=M.top+.05,this.swimming=!1,this.vel.y=4;break}}Da(R,.45,R.y,R.y+2.4);let I=Oi(R.x,R.z,Math.max(R.y,this.pos.y));R.y<=I&&!this.swimming?(I-R.y>.05&&this.onGround?R.y=xe(R.y,I,25,t):R.y=I,R.y<I-.3&&(R.y=I),this.vel.y<0&&(this.vel.y=0),this.onGround=!0):this.swimming||(this.onGround=R.y-I<.08),this.pos.copy(R);let E=Math.hypot(this.vel.x,this.vel.z);this.onGround&&E>3&&(this.stepTimer-=t*E,this.stepTimer<=0&&(this.stepTimer=3.2,p&&p.level>this.pos.y-.05&&(r.fx.splash(new S(this.pos.x,p.level,this.pos.z),.15,p.level),r.water.addRipple(this.pos.x,this.pos.z,.5)))),this.applyVisual(t,e,E,this.swimming?"swim":this.onGround?"ground":"air")}updateInBoat(t,e){let n=this.boat,s=!this.g.fishing.equipped||this.g.fishing.state==="idle",r=n.seatWorld(s&&!this.g.fishing.equipped?"drive":"stand");this.pos.copy(r),this.vel.set(0,0,0),this.onGround=!0,this.swimming=!1,this.g.fishing.equipped?!this.g.fishing.locksMovement&&this.g.fishing.state==="idle"&&(this.yaw=Qr(this.yaw,this.g.cam.yaw,6,t)):this.yaw=n.heading+Math.PI/2,this.applyVisual(t,e,0,this.g.fishing.equipped?"ground":"sit"),this.rig.root.rotation.z=n.model.rotation.x*.6}applyVisual(t,e,n,s){let r=this.rig;r.root.position.copy(this.pos),r.root.rotation.set(0,this.yaw,0),this.nameTag&&(this.nameTag.visible=this.g.fishing.state!=="caught"),r.animate(t,e,n,s),this.crateModel&&s!=="swim"&&(r.armR.rotation.x=-1.1,r.armR.rotation.z=-.1,r.elbowR.rotation.x=0,r.armL.rotation.x=-1,r.armL.rotation.z=.35,r.elbowL.rotation.x=-.3,this.crateShake>0?(this.crateShake-=t,this.crateModel.rotation.z=Math.sin(e*60)*.25,this.crateModel.rotation.y=Math.cos(e*45)*.2):(this.crateModel.rotation.z=0,this.crateModel.rotation.y=0)),this.heldFish&&s!=="swim"&&(r.armR.rotation.x=-1.1,r.armR.rotation.z=-.1,r.elbowR.rotation.x=0,this.heldModel&&this.heldModel.userData.update(e,.25)),this.g.fishing.applyPose(r,t,e)}}});var nl,gp=ee(()=>{Ee();In();Kn();nl=class{constructor(t,e){this.camera=t,this.yaw=Math.PI/2,this.pitch=.32,this.dist=13,this.distTarget=13,this.target=new S,this.override=null,this.shakeAmt=0,this.dragging=!1,this.occluders=null,this.ray=new Aa,this.dom=e,e.addEventListener("mousedown",s=>{if(s.button===2){this.dragging=!0,this.skipMoves=1;try{let r=e.requestPointerLock&&e.requestPointerLock({unadjustedMovement:!0});r&&r.catch&&r.catch(()=>{try{let o=e.requestPointerLock();o&&o.catch&&o.catch(()=>{})}catch{}})}catch{}}});let n=()=>{this.dragging=!1,document.pointerLockElement===e&&document.exitPointerLock()};window.addEventListener("mouseup",s=>{s.button===2&&n()}),window.addEventListener("blur",n),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==e&&(this.dragging=!1)}),window.addEventListener("mousemove",s=>{if(!this.dragging||this.skipMoves>0&&(this.skipMoves--,Math.abs(s.movementX)>60||Math.abs(s.movementY)>60))return;let r=s.movementX||0,o=s.movementY||0;this.yaw-=r*.0055,this.pitch=Ge(this.pitch+o*.004,-.1,1.35)}),e.addEventListener("wheel",s=>{this.distTarget=Ge(this.distTarget*(s.deltaY>0?1.12:.89),4,45)},{passive:!0}),e.addEventListener("contextmenu",s=>s.preventDefault())}forward(){return new S(Math.sin(this.yaw),0,Math.cos(this.yaw))}shake(t){this.shakeAmt=Math.min(.6,this.shakeAmt+t)}update(t,e,n=!1){let s=this.override?this.override.pos:e,r=this.override?this.override.dist:this.distTarget;n?this.target.copy(s):(this.target.x=xe(this.target.x,s.x,12,t),this.target.y=xe(this.target.y,s.y,8,t),this.target.z=xe(this.target.z,s.z,12,t)),this.dist=xe(this.dist,r,6,t);let o=Math.cos(this.pitch),a=Math.sin(this.pitch),l=new S(-Math.sin(this.yaw)*o,a,-Math.cos(this.yaw)*o).multiplyScalar(this.dist);if(this.occluders&&this.occluders.length){let u=l.clone().normalize();this.ray.set(this.target,u),this.ray.far=this.dist;let f=this.ray.intersectObjects(this.occluders,!0)[0];f&&l.multiplyScalar(Math.max(1.5,f.distance-.4)/this.dist)}let c=this.target.clone().add(l),h=Math.max(qe(c.x,c.z),.2)+.7;c.y<h&&(c.y=h),this.shakeAmt>0&&(c.x+=(Math.random()-.5)*this.shakeAmt,c.y+=(Math.random()-.5)*this.shakeAmt,c.z+=(Math.random()-.5)*this.shakeAmt,this.shakeAmt=Math.max(0,this.shakeAmt-t*1.6)),this.camera.position.copy(c),this.camera.lookAt(this.target)}}});function L_(i){if(wu[i])return wu[i];let t=xp[i]||xp.common,e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");if(n.font='bold 120px "Arial Black", sans-serif',n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=16,n.strokeStyle=t.stroke,n.strokeText("!",64,66),t.fill==="rainbow"){let r=n.createLinearGradient(0,8,0,120);["#ff3b3b","#ff9b2f","#ffe733","#45e05a","#33b5ff","#7a5cff","#e04bff"].forEach((o,a,l)=>r.addColorStop(a/(l.length-1),o)),n.fillStyle=r}else n.fillStyle=t.fill;n.fillText("!",64,66);let s=new zn(e);return s.colorSpace=Le,wu[i]=s,s}function D_(){let i=new Di(new pi({map:L_("common"),transparent:!0,depthTest:!1,fog:!1}));return i.renderOrder=20,i.visible=!1,i}function U_(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,32);return e.addColorStop(0,"rgba(0,10,20,0.75)"),e.addColorStop(1,"rgba(0,10,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new zn(i)}var xp,wu,Ye,il,yp=ee(()=>{Ee();Xa();lo();lr();Eu();Kn();ls();or();In();zi();ds();xp={trash:{fill:"#ff2a2a",stroke:"#ffffff"},common:{fill:"#ff2a2a",stroke:"#ffffff"},rare:{fill:"#2f8cff",stroke:"#ffffff"},epic:{fill:"#a347ff",stroke:"#ffffff"},legendary:{fill:"#ffd21f",stroke:"#5a3a00"},mythical:{fill:"#ff2a2a",stroke:"#ffffff"},exotic:{fill:"rainbow",stroke:"#ffffff"},secret:{fill:"#000000",stroke:"#ffffff"}},wu={};Ye={idle:{rX:-.75,rZ:-.12,lX:null,lZ:null,torso:0},charge:{rX:-2.7,rZ:-.25,lX:-.6,lZ:.3,torso:.15},release:{rX:-.35,rZ:-.05,lX:-.5,lZ:.25,torso:-.05},wait:{rX:-.9,rZ:-.1,lX:-.75,lZ:.4,torso:0},reel:{rX:-1.05,rZ:-.1,lX:-.95,lZ:.5,torso:-.14},hold:{rX:-2.95,rZ:-.35,lX:-2.95,lZ:.35,torso:-.05}},il=class{constructor(t){this.g=t,this.rod=new Wa(t.scene),t.player.rig.handR.add(this.rod.group),this.rod.group.position.set(0,-.05,.05),this.rod.group.rotation.x=.49,this.state="none",this.t=0,this.power=0,this.powerDir=1,this.holding=!1,this.pose={rX:0,rZ:0,lX:0,lZ:0,torso:0},this.poseTarget=Ye.idle,this.excl=D_(),t.scene.add(this.excl),this.shadow=new it(new Fe(1,1),new tn({map:U_(),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,t.scene.add(this.shadow),this.castFrom=new S,this.castTo=new S,this.water=null,this.catch=null,this.mg=null,this.fishModel=null,this.bobPrev=new S,this.lateral=0,this.splashTimer=0,this.tickTimer=0,this.nibbleTimer=0,this.nibble=0}get stats(){return fs[st.rod]}get active(){return this.state!=="none"&&this.state!=="idle"}get equipped(){return this.state!=="none"}get locksMovement(){return["charging","casting","bite","shake","reeling","caught"].includes(this.state)}equip(t){t&&this.state==="none"?(this.state="idle",this.rod.setVisible(!0),this.resetBobberToTip(),this.g.ui.showRodStats(!0)):!t&&this.state!=="none"&&(this.cancelAll(),this.state="none",this.rod.setVisible(!1),this.g.ui.showRodStats(!1))}cancelAll(){this.g.ui.power(!1),this.g.ui.clearShake(),this.g.ui.reel(!1),this.g.sound.strain(0),this.excl.visible=!1,this.shadow.visible=!1,this.rod.spin=0,this.rod.targetBend=0,this.rod.targetSide=0,this.fishModel&&(this.g.scene.remove(this.fishModel),this.fishModel=null),this.state!=="none"&&this.rod.setVisible(!0),this.state=this.state==="none"?"none":"idle",this.resetBobberToTip()}resetBobberToTip(){let t=this.rod.tipWorld();this.rod.bobber.position.copy(t).add(new S(0,-.7,0)),this.bobPrev.copy(this.rod.bobber.position)}canCast(){let t=this.g.player;return t.swimming?(this.g.ui.toast("\u6E38\u6CF3\u6642\u4E0D\u80FD\u91E3\u9B5A\uFF01","#ffb3b3"),!1):t.boat&&Math.abs(t.boat.speed)>1.5?(this.g.ui.toast("\u5148\u628A\u8239\u505C\u4E0B\u4F86\u518D\u91E3\u9B5A\uFF01","#ffb3b3"),!1):!0}mouseDown(){if(this.state==="idle"){if(!this.canCast())return;this.state="charging",this.power=0,this.powerDir=1,this.g.player.faceCamera()}else this.state==="reeling"&&(this.holding=!0)}mouseUp(){this.state==="charging"&&this.cast(),this.holding=!1}interruptByMove(){(this.state==="waiting"||this.state==="landed")&&this.retrieve()}cast(){this.state="casting",this.t=0,this.released=!1,this.g.ui.power(!1),this.rod.impulse(-6)}releaseBobber(){this.released=!0;let t=this.g.player,e=t.forward(),n=3+this.power*11;this.castFrom.copy(this.rod.tipWorld());let s=t.pos.x+e.x*n,r=t.pos.z+e.z*n;this.water=yi(s,r);let o;this.water?o=fn(s,r,this.water.level,this.water.pond):o=Oi(s,r,999)+.12,this.castTo.set(s,o,r),this.flightT=0,this.flightDur=.45+this.power*.35,this.arc=1.5+this.power*3,this.g.sound.whoosh()}land(){let t=this.rod.bobber.position;if(!this.water){this.state="landed",this.t=0,this.g.ui.toast("\u8981\u628A\u6D6E\u6A19\u7529\u9032\u6C34\u88E1\u624D\u80FD\u91E3\u9B5A\u5594\uFF01","#ffd2a8"),this.g.fx.burst(t.clone(),13153162,10,2,.25,.6);return}let e=.45+this.power*.5;this.g.fx.splash(t.clone(),e,t.y),this.g.water.addRipple(t.x,t.z,1),this.g.sound.splash(e),this.state="waiting",this.t=0;let n=Math.min(100,this.stats.lure+xu("lure"));this.waitTime=n>=100?.2:ie(5,14)*(1-n/100)+.4,this.nibbleTimer=ie(1.2,2.5),this.pool=this.water.pond?"pond":this.water.island?this.water.island.id:"ocean",this.rod.impulse(3),this.catch=Qf(this.pool,this.stats.luck+xu("luck"),this.g.sky.isNight());let s=en[this.catch.fish.rarity].index;this.shakesNeeded=Ge(4+Math.floor(s*.8),4,10),this.lureProgress=0,this.g.ui.spawnShake(()=>this.onShake(),"\u9EDE\u64CA SHAKE \u8B93\u9B5A\u66F4\u5FEB\u4E0A\u9264\uFF01")}retrieve(){if(this.g.ui.clearShake(),this.state==="waiting"){let t=this.rod.bobber.position;this.g.fx.splash(t.clone(),.25,t.y),this.g.sound.plop(.4)}this.state="retrieve",this.t=0,this.retrieveFrom=this.rod.bobber.position.clone(),this.excl.visible=!1,this.shadow.visible=!1}bite(){this.g.ui.clearShake(),this.state="bite",this.t=0;let t=this.rod.bobber.position;this.g.fx.splash(t.clone(),.8,t.y),this.g.water.addRipple(t.x,t.z,1.4),this.g.sound.bite(),this.g.cam.shake(.25),this.g.ui.biteExcl(this.catch.fish.rarity);let e=this.g.worldToScreen(this.g.player.pos.clone().add(new S(0,2.75,0)));this.g.ui.biteExclPos(e.x,e.y),this.rod.impulse(10)}onShake(){if(this.state!=="waiting")return;this.lureProgress+=1/this.shakesNeeded,this.nibble=1,this.g.sound.shake();let t=this.rod.bobber.position;this.g.fx.splash(t.clone(),.35,t.y),this.g.water.addRipple(t.x,t.z,.7),this.rod.impulse(8),this.g.cam.shake(.08),this.lureProgress>=1?this.bite():setTimeout(()=>{this.state==="waiting"&&this.g.ui.spawnShake(()=>this.onShake(),"\u9EDE\u64CA SHAKE \u8B93\u9B5A\u66F4\u5FEB\u4E0A\u9264\uFF01")},90)}startReel(){this.state="reeling",this.t=0,this.excl.visible=!1;let t=this.stats,{fish:e,weight:n}=this.catch,s=tp(e,n)*(1-t.resilience/100*.35),r=Ge(.26+t.control,.1,.95);this.mg={barW:r,barPos:.5-r/2,barVel:0,fishPos:.5,fishVel:0,fishTarget:.5,timer:.5,progress:.3,diff:s,overweight:n>t.maxWeight,inBar:!0,perfect:!0},this.g.ui.reel(!0),this.reelStart=this.rod.bobber.position.clone(),this.lateral=0;let o=ho(e,n);this.shadow.scale.set(Math.max(.6,o*1.2),Math.max(.35,o*.5),1),this.shadow.visible=!["boot","can","weed","wood"].includes(e.shape)}updateMinigame(t,e){let n=this.mg,s=this.stats,r=this.holding||this.g.input.space;n.barVel+=(r?1:-1)*3.3*t,n.barVel=Ge(n.barVel,-1.35,1.35),n.barPos+=n.barVel*t,n.barPos<0&&(n.barPos=0,n.barVel=Math.abs(n.barVel)*.25),n.barPos>1-n.barW&&(n.barPos=1-n.barW,n.barVel=-Math.abs(n.barVel)*.25);let o=n.diff;n.timer-=t,n.timer<=0&&(Math.random()<.12+o*.3?n.fishTarget=Math.random()<.5?ie(.02,.15):ie(.85,.98):n.fishTarget=Ge(n.fishPos+ie(-.45,.45)*(.5+o),.03,.97),n.timer=ie(.4,1.5)*(1.25-o*.75));let a=1.3+o*4.2;n.fishVel=xe(n.fishVel,(n.fishTarget-n.fishPos)*a,5,t),n.fishPos=Ge(n.fishPos+(n.fishVel+Math.sin(e*11)*.06*o)*t,.02,.98),n.inBar=n.fishPos>=n.barPos&&n.fishPos<=n.barPos+n.barW;let l=.16*(n.overweight?.2:1)*(1-o*.3),c=.15*(1+o*.6)*(1-s.resilience/100);n.inBar?n.progress+=l*t:(n.progress-=c*t,n.perfect=!1),this.g.ui.updateReel(n),this.rod.spin=r?-22:-4,this.tickTimer-=t,this.tickTimer<=0&&(this.g.sound.tick(),this.tickTimer=r?.06:.16),this.g.sound.strain(n.inBar?.15:.7),n.inBar||this.g.cam.shake(.03),n.progress>=1?this.landFish():n.progress<=0&&this.lose("\u9B5A\u6399\u812B\u8DD1\u6389\u4E86\u2026")}landFish(){this.g.ui.reel(!1),this.g.sound.strain(0),this.rod.spin=0,this.shadow.visible=!1;let{fish:t,weight:e,mutation:n}=this.catch,s=jf(t,e,n);this.mg.perfect&&(s=Math.round(s*1.1));let{isNew:r}=Lf(t.id,e,n,s),o=st.equippedBait;np()&&this.g.ui.toast(`${sn[o].icon} ${sn[o].name}\u7528\u5B8C\u4E86\uFF01\u6253\u958B\u8A98\u990C\u7BB1\u53EF\u4EE5\u62FF\u5230\u66F4\u591A`,"#ffd2a8"),ln();let a=this.rod.bobber.position.clone(),l=ho(t,e);this.g.fx.splash(a,Math.min(2.2,.8+l*.5),a.y),this.g.water.addRipple(a.x,a.z,2),this.g.sound.splash(1.2),this.fishModel=tl(t),this.fishModel.scale.setScalar(Math.min(5,Math.max(.9,.6+l*.9))),this.fishModel.position.copy(a),n&&n.id==="albino"&&this.fishModel.traverse(c=>{c.isMesh&&c.material.color&&(c.material=c.material.clone(),c.material.color.set(16777215),c.material.vertexColors=!1)}),n&&n.id==="shiny"&&this.fishModel.traverse(c=>{c.isMesh&&c.material.emissive&&(c.material=c.material.clone(),c.material.emissive.set(16773792),c.material.emissiveIntensity=.35)}),this.g.scene.add(this.fishModel),this.flyFrom=a,this.fishSize=Math.min(5,Math.max(.9,.6+l*.9)),this.state="caught",this.t=0,this.caughtInfo={fish:t,weight:e,mutation:n,value:s,isNew:r},this.rod.setVisible(!1),this.g.quests.onEvent("catch",{fish:t,weight:e,pool:this.pool,night:this.g.sky.isNight()}),this.g.onInventoryChanged()}lose(t){this.g.ui.reel(!1),this.g.ui.clearShake(),this.g.sound.strain(0),this.g.sound.snap(),this.g.ui.toast(t,"#ff9b9b"),this.rod.impulse(-12),this.rod.spin=0,this.excl.visible=!1,this.shadow.visible=!1,this.state="lost",this.t=0,this.retrieveFrom=this.rod.bobber.position.clone()}update(t,e){if(this.state==="none")return;let n=this.rod,s=n.bobber.position,r=this.g.ui;this.t+=t;let o=.6,a=0,l=Ye.idle;switch(n.targetSide=0,this.state){case"idle":n.targetBend=.05,this.dangle(t);break;case"charging":{this.power+=this.powerDir*t*1.05,this.power>=1&&(this.power=1,this.powerDir=-1),this.power<=0&&(this.power=0,this.powerDir=1),l={rX:Hn(Ye.idle.rX,Ye.charge.rX,Math.min(1,this.t*4)),rZ:Ye.charge.rZ,lX:Ye.charge.lX,lZ:Ye.charge.lZ,torso:Ye.charge.torso},n.targetBend=-.15,this.dangle(t);let c=this.g.worldToScreen(this.g.player.pos.clone().add(new S(0,2.2,0)));r.power(!0,this.power,c.x+70,c.y);break}case"casting":{if(l=Ye.release,!this.released&&this.t>.12&&this.releaseBobber(),this.released){this.flightT+=t;let c=Math.min(1,this.flightT/this.flightDur),h=n.tipWorld(),u=this.flightT<.05?h:this.castFrom;s.lerpVectors(u,this.castTo,c),s.y+=this.arc*4*c*(1-c),o=.08,c>=1&&this.land()}else this.dangle(t);n.targetBend=.2;break}case"landed":l=Ye.wait,o=.5,this.t>.7&&this.retrieve();break;case"waiting":{l=Ye.wait;let c=this.water,h=fn(s.x,s.z,c.level,c.pond);this.nibbleTimer-=t,this.nibbleTimer<=0&&(this.nibble=1,this.nibbleTimer=ie(1.2,3.2),this.g.water.addRipple(s.x,s.z,.4),this.g.fx.ring(s.x,h+.02,s.z,.1,.9,.8,.35),Math.random()<.5&&this.g.sound.plop(.15)),this.nibble=Math.max(0,this.nibble-t*4),s.y=xe(s.y,h-.02-this.nibble*.12+Math.sin(e*2.2)*.02,12,t),s.x+=Math.sin(e*.6)*.002,n.bobber.rotation.z=Math.sin(e*1.7)*.1,n.bobber.rotation.x=Math.cos(e*1.3)*.08,n.targetBend=.12+this.nibble*.2,o=.45,this.lureProgress+=t/this.waitTime,this.lureProgress>=1&&this.bite();break}case"bite":{l=Ye.wait;let c=fn(s.x,s.z,this.water.level,this.water.pond);s.y=xe(s.y,c-.35,18,t),s.x+=Math.sin(e*30)*.01,n.targetBend=.7,o=0;let h=this.g.worldToScreen(this.g.player.pos.clone().add(new S(0,2.75,0)));this.g.ui.biteExclPos(h.x,h.y),this.t>.65&&this.startReel();break}case"shake":{l=Ye.wait;let c=fn(s.x,s.z,this.water.level,this.water.pond);s.y=xe(s.y,c-.25+Math.sin(e*20)*.06,14,t),s.x+=Math.sin(e*9)*.015,s.z+=Math.cos(e*7)*.015,n.targetBend=.55+Math.sin(e*18)*.1,o=0,a=.5,this.excl.visible=!0,this.excl.position.set(s.x,c+1.6+Math.sin(this.t*12)*.1,s.z),this.splashTimer-=t,this.splashTimer<=0&&(this.splashTimer=.35,this.g.fx.splash(s.clone(),.2,c),this.g.water.addRipple(s.x,s.z,.5)),this.t>20&&this.lose("\u592A\u6162\u4E86\uFF0C\u9B5A\u8DD1\u6389\u4E86\u2026");break}case"reeling":{if(l=Ye.reel,this.updateMinigame(t,e),this.state!=="reeling")break;let c=this.mg,h=this.g.player.pos,u=new S(h.x-this.reelStart.x,0,h.z-this.reelStart.z);u.normalize();let f=new S(-u.z,0,u.x);this.lateral=xe(this.lateral,(c.fishPos-.5)*3,3,t);let d=this.reelStart.x+f.x*this.lateral,m=this.reelStart.z+f.z*this.lateral;yi(d,m)&&(s.x=xe(s.x,d,4,t),s.z=xe(s.z,m,4,t));let g=fn(s.x,s.z,this.water.level,this.water.pond);s.y=xe(s.y,g-.18+Math.sin(e*25)*(c.inBar?.02:.07),15,t),n.bobber.rotation.z=Math.sin(e*15)*.4,n.targetBend=(c.inBar?.6:.95)+Math.sin(e*23)*.06,n.targetSide=Ge(-this.lateral*.08,-.4,.4),o=0,a=c.inBar?.2:1,this.splashTimer-=t,this.splashTimer<=0&&(this.splashTimer=c.inBar?.4:.14,this.g.fx.splash(s.clone(),c.inBar?.2:.45,g),this.g.water.addRipple(s.x,s.z,c.inBar?.4:.9)),this.shadow.position.set(s.x-u.x*.4,g-.25,s.z-u.z*.4),this.shadow.rotation.z=Math.atan2(u.x,u.z)+Math.PI/2+Math.sin(e*6)*.3;break}case"caught":{let c=this.g.player.pos,h=this.g.player.rig.handL.getWorldPosition(new S),u=this.g.player.rig.handR.getWorldPosition(new S),f=h.add(u).multiplyScalar(.5);f.y+=.12+Math.min(1.2,this.fishSize*.1);let d=this.g.player.forward();f.addScaledVector(d,.05);let m=this.fishModel,x=.75;if(this.t<x){l=Ye.reel;let g=this.t/x,p=1-Math.pow(1-g,2);m.position.lerpVectors(this.flyFrom,f,p),m.position.y+=3.5*4*g*(1-g),m.rotation.set(0,0,g*Math.PI*4),m.userData.update(e,1.5),Math.random()<.5&&this.g.fx.drop(m.position.clone(),new S(ie(-1,1),ie(-1,1),ie(-1,1)),.9,1,-50)}else{if(l=Ye.hold,!this.shownPopup){this.shownPopup=!0;let y=this.caughtInfo;r.catchPopup(y.fish,y.weight,y.mutation,y.isNew,y.value);let _=en[y.fish.rarity];this.g.sound.jingle(_.index),this.mg.perfect&&r.toast("\u2728 \u5B8C\u7F8E\u6536\u7DDA\uFF01\u50F9\u503C +10%","#fff59d");let v=_.color==="rainbow"?16747248:new ot(_.color).getHex();_.index>=3&&this.g.fx.burst(f.clone(),v,20+_.index*12,4+_.index,.5,1.5),_.index>=5&&(this.g.fx.burst(f.clone(),16777215,40,7,.6,2),this.g.cam.shake(.2))}m.position.copy(f);let g=this.g.player.yaw;m.rotation.set(0,g+Math.PI,0),m.rotateZ(Math.sin(e*9)*.08),m.userData.update(e,.8);let p=en[this.caughtInfo.fish.rarity];if(p.index>=4&&Math.random()<.3){let y=p.color==="rainbow"?new ot().setHSL(e*.5%1,1,.6):new ot(p.color);this.g.fx.spark(f.clone().add(new S(ie(-1,1)*this.fishSize*.6,ie(-.4,.6),ie(-.5,.5))),new S(0,.8,0),y,.35,1.2,0)}Math.random()<.15&&this.g.fx.drop(m.position.clone().add(new S(ie(-.3,.3)*this.fishSize,-.1,0)),new S(0,-1,0),.7,1.2,-50),this.t>x+2.4&&(this.g.scene.remove(m),this.fishModel=null,this.shownPopup=!1,this.state="idle",n.setVisible(!0),this.resetBobberToTip())}n.bobber.position.copy(n.tipWorld());break}case"retrieve":case"lost":{l=Ye.wait;let c=this.state==="lost"?.35:.45,h=Math.min(1,this.t/c),u=n.tipWorld().clone().add(new S(0,-.7,0));s.lerpVectors(this.retrieveFrom,u,h*h),s.y+=Math.sin(h*Math.PI)*1.2,o=this.state==="lost"?1.4:.15,a=this.state==="lost"?2:0,n.targetBend=.05,h>=1&&(this.state="idle",this.bobPrev.copy(s));break}}this.poseTarget=l,this.state!=="bite"&&this.state!=="shake"&&(this.excl.visible=!1),this.state!=="bite"&&this.g.ui.biteExcl(null),n.update(t),n.visible&&n.updateLine(o,a,e)}dangle(t){let e=this.rod.bobber.position,n=this.rod.tipWorld(),s=e.clone().sub(this.bobPrev).multiplyScalar(.96);this.bobPrev.copy(e),e.add(s),e.y-=9.8*t*t;let r=e.clone().sub(n),o=r.length(),a=.7;o>a&&e.copy(n).addScaledVector(r.normalize(),a),this.rod.bobber.rotation.set(0,0,0)}applyPose(t,e,n){if(this.state==="none")return;let s=this.poseTarget,r=this.pose,o=this.state==="casting"?30:12;if(r.rX=xe(r.rX,s.rX,o,e),r.rZ=xe(r.rZ,s.rZ,o,e),r.torso=xe(r.torso,s.torso,8,e),t.armR.rotation.x=r.rX,t.armR.rotation.z=r.rZ,t.elbowR.rotation.x=-.2,s.lX!==null){r.lX=xe(r.lX,s.lX,o,e),r.lZ=xe(r.lZ,s.lZ,o,e);let a=0;this.state==="reeling"&&(this.holding||this.g.input.space)&&(a=Math.sin(n*22)*.18),t.armL.rotation.x=r.lX+a,t.armL.rotation.z=r.lZ,t.elbowL.rotation.x=this.state==="caught"?-.2:-.65}else r.lX=t.armL.rotation.x,r.lZ=t.armL.rotation.z;t.torso.rotation.x+=r.torso}}});function vp(i){return Su[i]||(Su[i]=hs([{text:i,font:'bold 110px "Arial Black", sans-serif',color:i==="!"?"#ffd23f":"#7dff8a",strokeW:14}],{w:128,h:128,stroke:"#2a1a00"})),Su[i]}var Su,sl,_p=ee(()=>{Ee();bu();ds();In();ls();Su={};sl=class{constructor(t,e){this.g=t,this.def=e,this.id=e.id,this.name=e.name,this.title=e.title,this.talk=e.talk,this.rig=Qa(e.look||{}),this.pos=new S(e.x,e.y,e.z),this.baseYaw=e.yaw||0,this.yaw=this.baseYaw,this.rig.root.position.copy(this.pos),t.scene.add(this.rig.root),this.label=Ba(e.name,e.title),this.label.position.set(0,2.85,0),this.rig.root.add(this.label),this.marker=new Di(new pi({map:vp("!"),transparent:!0,depthWrite:!1,fog:!1})),this.marker.scale.set(1.1,1.1,1),this.marker.position.set(0,3.6,0),this.marker.visible=!1,this.marker.renderOrder=11,this.rig.root.add(this.marker),this.markerCh=null,this.talking=!1,this.phase=Math.random()*10,ke(e.x,e.z,.55,e.y+3,{boatBlock:!1}),e.prop&&e.prop(this)}update(t,e,n){let s=this.pos.distanceTo(n);if(this.rig.root.visible=s<170,!this.rig.root.visible)return;let r=this.baseYaw;(s<9||this.talking)&&(r=Math.atan2(n.x-this.pos.x,n.z-this.pos.z)),this.yaw=Qr(this.yaw,r,5,t),this.rig.root.rotation.y=this.yaw,this.rig.animate(t,e+this.phase,0,this.def.sit?"sit":"ground"),this.talking?(this.rig.armR.rotation.x=-.6+Math.sin(e*5)*.25,this.rig.armR.rotation.z=-.3,this.rig.neck.rotation.x=Math.sin(e*6)*.05):this.def.wave&&s<14&&(this.rig.armR.rotation.x=-2.6,this.rig.armR.rotation.z=-.3+Math.sin(e*8)*.35);let o=this.g.quests.markerFor(this.id);if(o!==this.markerCh&&(this.markerCh=o,this.marker.visible=!!o,o&&(this.marker.material.map=vp(o)),this.marker.material.needsUpdate=!0),o){this.marker.position.y=3.6+Math.sin(e*3)*.15;let a=1.1+Math.sin(e*6)*.05;this.marker.scale.set(a,a,1)}this.label.visible=s<45}}});var rl,Mp=ee(()=>{rl=class{constructor(t){this.g=t,this.el=document.querySelector("#dialogue"),this.nameEl=this.el.querySelector(".dlg-name"),this.textEl=this.el.querySelector(".dlg-text"),this.nextEl=this.el.querySelector(".dlg-next"),this.optEl=this.el.querySelector(".dlg-options"),this.box=this.el.querySelector(".dlg-box"),this.open=!1,this.steps=[],this.idx=0,this.typing=!1,this.full="",this.shown=0,this.box.addEventListener("mousedown",e=>{e.stopPropagation(),this.advance()})}run(t,e){this.npc=t,this.steps=e,this.idx=0,this.open=!0,this.el.classList.remove("hidden"),this.nameEl.textContent=t?t.title?`${t.title}\u30FB${t.name}`:t.name:"",this.g.onDialogue(!0,t),this.showStep()}showStep(){let t=this.steps[this.idx];if(t===void 0){this.close();return}let e=typeof t=="string"?{text:t}:t;this.node=e,this.full=e.text,this.shown=0,this.typing=!0,this.textEl.textContent="",this.optEl.innerHTML="",this.nextEl.style.visibility="hidden",this.box.style.animation="none",this.box.offsetWidth,this.box.style.animation=""}finishTyping(){this.typing=!1,this.shown=this.full.length,this.textEl.textContent=this.full;let t=this.node;t.options?(this.nextEl.style.visibility="hidden",this.optEl.innerHTML="",t.options.forEach((e,n)=>{let s=document.createElement("button");s.textContent=e.label,e.cls&&(s.className=e.cls),s.style.animationDelay=`${n*.05}s`,s.onmousedown=r=>{r.stopPropagation(),this.g.sound.click(),e.action?e.action():this.close()},this.optEl.appendChild(s)})):this.nextEl.style.visibility="visible"}advance(){if(this.open){if(this.typing){this.finishTyping();return}this.node.options||(this.g.sound.click(),this.idx++,this.showStep())}}close(){this.open&&(this.open=!1,this.el.classList.add("hidden"),this.optEl.innerHTML="",this.g.onDialogue(!1,this.npc))}update(t){if(!this.open||!this.typing)return;let e=Math.floor(this.shown);this.shown+=t*38;let n=Math.floor(this.shown);n!==e&&(this.textEl.textContent=this.full.slice(0,n),n%2===0&&this.full[n-1]&&this.full[n-1]!==" "&&this.g.sound.talk()),this.shown>=this.full.length&&this.finishTyping()}}});function Tu(i){return i.shape==="boot"?"\u{1F97E}":i.shape==="can"?"\u{1F96B}":i.shape==="weed"?"\u{1F33F}":i.shape==="wood"?"\u{1FAB5}":i.shape==="squid"?"\u{1F991}":i.shape==="round"?"\u{1F421}":i.shape==="shark"||i.shape==="whale"?"\u{1F988}":i.shape==="flat"?"\u{1F41F}":N_[i.rarity]||"\u{1F41F}"}function Au(i){return i.color==="rainbow"?{cls:"rainbow",color:"#fff"}:i.id==="secret"?{cls:"secret-glow",color:i.color}:{cls:"",color:i.color}}var we,N_,F_,ol,bp=ee(()=>{zi();lr();Xa();lo();we=i=>document.querySelector(i),N_={trash:"\u{1F5D1}\uFE0F",common:"\u{1F41F}",rare:"\u{1F41F}",epic:"\u{1F420}",legendary:"\u{1F420}",mythical:"\u{1F988}",exotic:"\u{1F409}",secret:"\u2728"};F_=Object.fromEntries(pu.map(i=>[i.id,i])),ol=class{constructor(){this.zone=we("#zoneBanner"),this.moneyEl=we("#moneyText"),this.powerEl=we("#powerBar"),this.shakeLayer=we("#shakeLayer"),this.reelEl=we("#reel"),this.reelBar=we(".reel-bar"),this.reelFish=we(".reel-fish"),this.reelFill=we(".reel-progress .fill"),this.reelPct=we(".reel-pct"),this.reelWarn=we(".reel-warn"),this.catchEl=we("#catchPopup"),this.hotbarEl=we("#hotbar"),this.toastsEl=we("#toasts"),this.interactEl=we("#interact"),this.questsEl=we("#quests"),this.rodStatsEl=we("#rodStats"),this.wp=we("#waypoint"),this.panels={backpack:we("#backpack"),help:we("#help"),dex:we("#dex"),menu:we("#menu"),bait:we("#baitPanel")};for(let[t,e]of Object.entries(this.panels))e.querySelector(".close").onclick=()=>this.togglePanel(t,!1);this.onSelectSlot=null,this._zoneTimer=null,this.selectedKey=null,this.confirmOpen=!1}anyPanelOpen(){return Object.values(this.panels).some(t=>!t.classList.contains("hidden"))}togglePanel(t,e){let n=this.panels[t],s=e??n.classList.contains("hidden");for(let[r,o]of Object.entries(this.panels))r!==t&&o.classList.add("hidden");n.classList.toggle("hidden",!s),s&&t==="backpack"&&this.renderBackpack(),s&&t==="dex"&&this.renderDex(),s&&t==="bait"&&this.renderBait()}setMoney(t,e=!1){if(this.moneyEl.textContent=Math.floor(t).toLocaleString(),e){let n=we("#money");n.classList.add("bump"),setTimeout(()=>n.classList.remove("bump"),160)}}setClock(t,e,n=""){we("#clockText").textContent=t,we("#clockIcon").textContent=e?"\u{1F319}":"\u2600\uFE0F",we("#clockSub").textContent=n}showZone(t,e){this.zone.querySelector(".zb-name").textContent=t,this.zone.querySelector(".zb-sub").textContent=e||"",this.zone.classList.remove("show"),this.zone.offsetWidth,this.zone.classList.add("show"),clearTimeout(this._zoneTimer),this._zoneTimer=setTimeout(()=>this.zone.classList.remove("show"),4200)}toast(t,e="#fff"){let n=document.createElement("div");n.className="toast",n.style.color=e,n.textContent=t,this.toastsEl.appendChild(n),setTimeout(()=>n.remove(),3200)}setInteract(t){if(!t){this.interactEl.classList.add("hidden");return}this.interactEl.classList.remove("hidden"),this.interactEl.querySelector(".txt").textContent=t}power(t,e=0,n=0,s=0){this.powerEl.classList.toggle("hidden",!t),t&&(this.powerEl.style.left=`${n}px`,this.powerEl.style.top=`${s}px`,this.powerEl.querySelector(".fill").style.height=`${Math.round(e*100)}%`,this.powerEl.querySelector(".pb-label").textContent=e>.92?"\u5B8C\u7F8E\uFF01":"\u529B\u9053")}spawnShake(t,e){this.clearShake();let n=document.createElement("button");n.className="shake",n.textContent="SHAKE";let s=25+Math.random()*50,r=28+Math.random()*42;n.style.left=`${s}%`,n.style.top=`${r}%`,n.onmousedown=a=>{a.stopPropagation(),n.classList.add("pop"),t()},this.shakeLayer.appendChild(n);let o=document.createElement("div");o.className="shake-count",o.textContent=e,this.shakeLayer.appendChild(o)}renderBait(){let t=this.panels.bait.querySelector(".bait-body"),e=[];e.push(`<div class="bait-row"><span class="bi">${rn.icon}</span><div class="bt"><div class="bn">${rn.name} \xD7${st.baitCrates}</div><div class="bd">\u5230\u91E3\u5177\u5E97\u627E\u5C0F\u7F8E\u8CFC\u8CB7\uFF08$${rn.price} \u4E00\u500B\uFF09\uFF0C\u6253\u958B\u6703\u5F97\u5230\u9B5A\u990C</div></div>${st.baitCrates>0?'<button data-act="open">\u958B\u555F</button>':""}</div>`);let n=Object.values(sn).filter(s=>st.baits[s.id]>0);n.length||e.push('<div class="bait-empty">\u4F60\u9084\u6C92\u6709\u4EFB\u4F55\u9B5A\u990C\u3002\u6253\u958B\u8A98\u990C\u7BB1\u5C31\u80FD\u62FF\u5230\u9B5A\u990C\uFF01</div>');for(let s of n){let r=st.equippedBait===s.id;e.push(`<div class="bait-row ${r?"on":""}"><span class="bi">${s.icon}</span><div class="bt"><div class="bn">${s.name} \xD7${st.baits[s.id]}${r?'\u3000<span style="color:#7dff8a">\u4F7F\u7528\u4E2D</span>':""}</div><div class="bd">${s.desc}\u30FB\u6BCF\u91E3\u5230\u4E00\u689D\u9B5A\u6D88\u8017 1 \u500B</div></div><button data-act="${r?"unequip":"equip"}" data-id="${s.id}" class="${r?"off":""}">${r?"\u5378\u4E0B":"\u88DD\u4E0A"}</button></div>`)}t.innerHTML=e.join(""),t.querySelectorAll("button").forEach(s=>{s.onclick=()=>{let r=s.dataset.act;r==="open"?(this.togglePanel("bait",!1),this.onOpenCrate&&this.onOpenCrate()):this.onEquipBait&&this.onEquipBait(r==="equip"?s.dataset.id:null)}})}confirm({icon:t="\u2754",text:e,sub:n="",yes:s="\u78BA\u5B9A",no:r="\u53D6\u6D88"}){let o=document.querySelector("#confirmModal");return o.querySelector(".cm-icon").textContent=t,o.querySelector(".cm-text").textContent=e,o.querySelector(".cm-sub").textContent=n,o.querySelector(".cm-yes").textContent=s,o.querySelector(".cm-no").textContent=r,o.classList.remove("hidden"),this.confirmOpen=!0,new Promise(a=>{let l=h=>{o.classList.add("hidden"),this.confirmOpen=!1,window.removeEventListener("keydown",c,!0),a(h)},c=h=>{h.code==="Escape"&&(h.stopPropagation(),l(!1)),(h.code==="Enter"||h.code==="KeyE")&&(h.stopPropagation(),l(!0))};window.addEventListener("keydown",c,!0),o.querySelector(".cm-yes").onclick=()=>l(!0),o.querySelector(".cm-no").onclick=()=>l(!1)})}rewardPopup(t,e=""){let n=document.createElement("div");n.className="reward",n.innerHTML='<div class="r-main"></div><div class="r-sub"></div>',n.querySelector(".r-main").textContent=t,n.querySelector(".r-sub").textContent=e,this.catchEl.innerHTML="",this.catchEl.appendChild(n),setTimeout(()=>n.remove(),3500)}biteExcl(t){let e=document.querySelector("#biteExcl");if(!t){e.classList.contains("hidden")||e.classList.add("hidden");return}e.className="ex-"+t,e.offsetWidth}biteExclPos(t,e){let n=document.querySelector("#biteExcl");n.style.left=t+"px",n.style.top=e+"px"}clearShake(){for(let t of[...this.shakeLayer.children])t.classList.contains("pop")?setTimeout(()=>t.remove(),200):t.remove()}reel(t){this.reelEl.classList.toggle("hidden",!t)}updateReel(t){this.reelBar.style.left=`${t.barPos*100}%`,this.reelBar.style.width=`${t.barW*100}%`,this.reelBar.classList.toggle("out",!t.inBar),this.reelFish.style.left=`${t.fishPos*100}%`,this.reelFill.style.width=`${Math.max(0,Math.min(1,t.progress))*100}%`,this.reelEl.classList.toggle("shaking",!t.inBar),this.reelWarn.textContent=t.overweight?"\u26A0 \u8D85\u904E\u91E3\u7AFF\u6700\u5927\u91CD\u91CF\uFF01\u6536\u7DDA\u975E\u5E38\u5403\u529B":t.inBar?"":"\u9B5A\u5728\u6399\u624E\uFF01"}catchPopup(t,e,n,s,r){let o=en[t.rarity],a=Au(o),l=document.createElement("div");l.className="catch";let c=n?`<span style="color:${n.color}">${n.name} </span>`:"";l.innerHTML=`${s?'<div class="c-new">NEW! \u9996\u6B21\u6355\u7372</div>':""}
      <div><span class="c-name ${a.cls}" style="color:${a.color}">${c}${t.name}</span><span class="c-weight stroke">(${ao(e)})</span></div>
      <div class="c-meta"><span class="${a.cls}" style="color:${a.color}">${o.name}</span>\u3000<span style="color:#7dff8a">\u50F9\u503C $${r}</span></div>`,this.catchEl.innerHTML="",this.catchEl.appendChild(l),setTimeout(()=>l.remove(),4400)}renderHotbar(t=this.lastItems||[],e=this.selectedKey){this.lastItems=t;let n=fs[st.rod],s=[];for(let r=0;r<9;r++){let o=t[r],a=r+1;if(!o){s.push(`<div class="slot" data-slot="${a}" style="opacity:.45"><span class="num">${a}</span></div>`);continue}let l=o.key===e?"sel":"";if(o.type==="rod")s.push(`<div class="slot ${l}" data-slot="${a}"><span class="num">${a}</span><span class="ico">\u{1F3A3}</span><span class="nm">${n.name}</span></div>`);else if(o.type==="crate")s.push(`<div class="slot ${l}" data-slot="${a}" style="border-bottom-color:#c8a165"><span class="num">${a}</span><span class="ico">${rn.icon}</span><span class="nm">${rn.name}</span><span class="cnt">\xD7${st.baitCrates}</span></div>`);else{let c=o.item,h=ki[c.id],u=en[h.rarity],f=u.color==="rainbow"?"#ff8af0":u.color;s.push(`<div class="slot ${l}" data-slot="${a}" style="border-bottom-color:${f}"><span class="num">${a}</span><span class="ico">${Tu(h)}</span><span class="nm" style="color:${f}">${h.name}</span><span class="wt">${ao(c.weight)}</span></div>`)}}this.hotbarEl.innerHTML=s.join(""),this.hotbarEl.querySelectorAll(".slot").forEach(r=>{r.onmousedown=o=>{o.stopPropagation(),this.onSelectSlot&&this.onSelectSlot(parseInt(r.dataset.slot,10))}})}showRodStats(t){if(this.rodStatsEl.classList.toggle("hidden",!t),!t)return;let e=fs[st.rod],n=cr(),s=r=>r?` <span style="color:#7dff8a">+${r}%</span>`:"";this.rodStatsEl.innerHTML=`<div class="rs-name">\u{1F3A3} ${e.name}</div>
      <div class="rs-row"><span>\u4E0A\u9264\u901F\u5EA6</span><b>${e.lure}%${s(n&&n.lure)}</b></div>
      <div class="rs-row"><span>\u904B\u6C23</span><b>${e.luck}%${s(n&&n.luck)}</b></div>
      <div class="rs-row"><span>\u63A7\u5236\u529B</span><b>${e.control}</b></div>
      <div class="rs-row"><span>\u5FA9\u539F\u529B</span><b>${e.resilience}%</b></div>
      <div class="rs-row"><span>\u6700\u5927\u91CD\u91CF</span><b>${e.maxWeight.toLocaleString()} kg</b></div>
      <div class="rs-row"><span>\u9B5A\u990C</span><b>${n?`${n.icon} ${n.name} \xD7${st.baits[n.id]}`:'<span style="opacity:.6">\u7121\uFF08\u6309 V\uFF09</span>'}</b></div>`}renderBackpack(){let t=st.inventory,e=t.reduce((s,r)=>s+r.value,0);this.panels.backpack.querySelector(".bp-summary").innerHTML=`\u5171 <b>${t.length}</b> \u689D\u3000\u7E3D\u50F9\u503C <b style="color:#7dff8a">$${e.toLocaleString()}</b>\u3000\uFF08\u9EDE\u64CA\u9B5A\u53EF\u4EE5\u62FF\u5728\u624B\u4E0A\uFF0C\u5230\u9B5A\u5546\u90A3\u88E1\u8CE3\u6389\uFF09`;let n=this.panels.backpack.querySelector(".bp-grid");if(!t.length){n.innerHTML='<div style="opacity:.7">\u80CC\u5305\u662F\u7A7A\u7684\uFF0C\u5FEB\u53BB\u91E3\u9B5A\u5427\uFF01</div>';return}n.innerHTML=t.map((s,r)=>{let o=ki[s.id],a=en[o.rarity],l=Au(a),c=s.mutation?F_[s.mutation]:null;return`<div class="bp-item ${this.selectedKey==="fish:"+s.uid?"sel":""}" data-idx="${r}">
        <div class="n ${l.cls}" style="color:${l.color}">${Tu(o)} ${c?c.name+" ":""}${o.name}</div>
        <div class="w">${a.name}\u30FB${ao(s.weight)}</div><div class="v">$${s.value}</div></div>`}).join(""),n.querySelectorAll(".bp-item").forEach(s=>{s.onclick=()=>{let r=parseInt(s.dataset.idx,10),[o]=st.inventory.splice(r,1);st.inventory.unshift(o),this.onSelectKey&&this.onSelectKey("fish:"+o.uid,!0),this.renderBackpack()}})}renderDex(){let t=this.panels.dex.querySelector(".dex-grid"),e=[...Va].sort((s,r)=>en[s.rarity].index-en[r.rarity].index),n=e.filter(s=>st.dex[s.id]).length;t.innerHTML=`<div style="grid-column:1/-1;opacity:.85">\u5DF2\u767C\u73FE ${n} / ${e.length} \u7A2E</div>`+e.map(s=>{let r=st.dex[s.id],o=en[s.rarity],a=Au(o),l=s.pools.map(h=>Kf[h]).join("\u3001"),c=s.time==="night"?"\u{1F319} \u591C\u665A":s.time==="day"?"\u2600\uFE0F \u767D\u5929":"\u5168\u5929";return r?`<div class="dex-item"><div class="n ${a.cls}" style="color:${a.color}">${Tu(s)} ${s.name}</div><div class="w">${o.name}\u30FB${c}</div><div class="w">${l}</div><div class="w">\u6355\u7372 ${r.count} \u6B21\u30FB\u6700\u91CD ${ao(r.best)}</div></div>`:`<div class="dex-item locked"><div class="n">\u2753 ???</div><div class="w" style="color:${o.color==="rainbow"?"#ff8af0":o.color}">${o.name}</div><div class="w">${l}</div></div>`}).join("")}renderQuests(t){this.questsEl.innerHTML=t.map(e=>`<div class="quest"><div class="q-title">\u{1F4DC} ${e.title}</div>
      ${e.steps.map(n=>`<div class="q-step ${n.done?"done":""}">\u2022 ${n.text}</div>`).join("")}
      ${e.reward?`<div class="q-reward">\u734E\u52F5\uFF1A${e.reward}</div>`:""}</div>`).join("")}waypoint(t,e,n,s,r=null){this.wp.classList.toggle("hidden",!t),t&&(this.wp.style.left=`${e}px`,this.wp.style.top=`${n}px`,this.wp.querySelector(".wp-label").textContent=s,this.wp.querySelector(".wp-arrow").style.transform=r===null?"rotate(180deg)":`rotate(${r}rad)`)}fade(t){document.querySelector("#fade").style.opacity=t?1:0}}});var al,Ep=ee(()=>{al=class{constructor(){this.ctx=null,this.enabled=!0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.6,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate*2;this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let n=this.noise.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1;this.startAmbience(),this.startEngine()}get t(){return this.ctx.currentTime}noiseSrc(){let t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t.playbackRate.value=.8+Math.random()*.4,t}env(t,e,n,s){let r=t.gain,o=this.t;r.cancelScheduledValues(o),r.setValueAtTime(1e-4,o),r.linearRampToValueAtTime(n,o+e),r.exponentialRampToValueAtTime(1e-4,o+e+s)}startAmbience(){let t=this.ctx,e=this.noiseSrc(),n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=520;let s=t.createGain();s.gain.value=.05;let r=t.createOscillator();r.frequency.value=.11;let o=t.createGain();o.gain.value=.035,r.connect(o),o.connect(s.gain),e.connect(n),n.connect(s),s.connect(this.master),e.start(),r.start(),this.oceanGain=s;let a=this.noiseSrc(),l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=900,l.Q.value=.6;let c=t.createGain();c.gain.value=.012,a.connect(l),l.connect(c),c.connect(this.master),a.start(),this.windGain=c,this.nextCritter=0}startEngine(){let t=this.ctx,e=t.createOscillator();e.type="sawtooth",e.frequency.value=40;let n=t.createOscillator();n.type="square",n.frequency.value=20;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=300;let r=t.createGain();r.gain.value=0,e.connect(s),n.connect(s),s.connect(r),r.connect(this.master),e.start(),n.start(),this.engine={o:e,o2:n,g:r,lp:s}}setEngine(t,e){if(!this.ctx)return;let n=this.engine,s=this.t;n.g.gain.setTargetAtTime(t?.05+e*.06:0,s,.15),n.o.frequency.setTargetAtTime(38+e*60,s,.2),n.o2.frequency.setTargetAtTime(19+e*30,s,.2),n.lp.frequency.setTargetAtTime(220+e*600,s,.2)}update(t,e,n){this.ctx&&(this.oceanGain.gain.setTargetAtTime(n?.06:.04,this.t,1),this.nextCritter-=t,this.nextCritter<=0&&(this.nextCritter=1.5+Math.random()*5,e>.6?this.cricket():Math.random()<.6&&this.gull()))}cricket(){let t=this.ctx;for(let e=0;e<3;e++){let n=t.createOscillator();n.type="sine",n.frequency.value=4200+Math.random()*300;let s=t.createGain();s.gain.value=0,n.connect(s),s.connect(this.master);let r=this.t+e*.12;for(let o=0;o<4;o++)s.gain.setValueAtTime(1e-4,r+o*.025),s.gain.linearRampToValueAtTime(.012,r+o*.025+.005),s.gain.linearRampToValueAtTime(1e-4,r+o*.025+.02);n.start(r),n.stop(r+.15)}}gull(){let t=this.ctx,e=t.createOscillator();e.type="triangle";let n=t.createGain();n.gain.value=0,e.connect(n),n.connect(this.master);let s=this.t,r=1100+Math.random()*400;for(let o=0;o<2+Math.floor(Math.random()*3);o++){let a=s+o*.22;e.frequency.setValueAtTime(r,a),e.frequency.exponentialRampToValueAtTime(r*1.45,a+.06),e.frequency.exponentialRampToValueAtTime(r*.8,a+.18),n.gain.setValueAtTime(1e-4,a),n.gain.linearRampToValueAtTime(.018,a+.03),n.gain.exponentialRampToValueAtTime(1e-4,a+.19)}e.start(s),e.stop(s+1.2)}splash(t=1){if(!this.ctx)return;let e=this.ctx,n=this.noiseSrc(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(3e3,this.t),s.frequency.exponentialRampToValueAtTime(400,this.t+.4+t*.2);let r=e.createGain();n.connect(s),s.connect(r),r.connect(this.master),this.env(r,.01,.25*Math.min(1.5,t),.35+t*.25),n.start(),n.stop(this.t+1.2),this.plop(.6*t)}plop(t=.5){if(!this.ctx)return;let e=this.ctx,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(700,this.t),n.frequency.exponentialRampToValueAtTime(140,this.t+.12);let s=e.createGain();n.connect(s),s.connect(this.master),this.env(s,.005,.2*t,.15),n.start(),n.stop(this.t+.3)}whoosh(){if(!this.ctx)return;let t=this.ctx,e=this.noiseSrc(),n=t.createBiquadFilter();n.type="bandpass",n.Q.value=1.5,n.frequency.setValueAtTime(600,this.t),n.frequency.exponentialRampToValueAtTime(2600,this.t+.25);let s=t.createGain();e.connect(n),n.connect(s),s.connect(this.master),this.env(s,.08,.15,.25),e.start(),e.stop(this.t+.5);let r=t.createOscillator();r.type="square",r.frequency.value=55;let o=t.createGain(),a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=1500,r.connect(a),a.connect(o),o.connect(this.master),this.env(o,.02,.03,.7),r.frequency.exponentialRampToValueAtTime(25,this.t+.8),r.start(),r.stop(this.t+.9)}bite(){if(!this.ctx)return;this.splash(.7);let t=this.ctx;[880,1175].forEach((e,n)=>{let s=t.createOscillator();s.type="square",s.frequency.value=e;let r=t.createGain();s.connect(r),r.connect(this.master);let o=this.t+n*.08;r.gain.setValueAtTime(1e-4,o),r.gain.linearRampToValueAtTime(.06,o+.01),r.gain.exponentialRampToValueAtTime(1e-4,o+.12),s.start(o),s.stop(o+.15)})}shake(){if(!this.ctx)return;let t=this.ctx,e=t.createOscillator();e.type="triangle",e.frequency.setValueAtTime(500+Math.random()*200,this.t),e.frequency.exponentialRampToValueAtTime(1200,this.t+.06);let n=t.createGain();e.connect(n),n.connect(this.master),this.env(n,.005,.12,.1),e.start(),e.stop(this.t+.15),this.plop(.4)}tick(){if(!this.ctx)return;let t=this.ctx,e=this.noiseSrc(),n=t.createBiquadFilter();n.type="highpass",n.frequency.value=3e3;let s=t.createGain();e.connect(n),n.connect(s),s.connect(this.master),this.env(s,.001,.08,.025),e.start(),e.stop(this.t+.05)}strain(t){if(this.ctx){if(!this.strainNode){let e=this.ctx,n=e.createOscillator();n.type="sawtooth",n.frequency.value=180;let s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=900,s.Q.value=4;let r=e.createGain();r.gain.value=0,n.connect(s),s.connect(r),r.connect(this.master),n.start(),this.strainNode={o:n,g:r}}this.strainNode.g.gain.setTargetAtTime(t*.03,this.t,.05),this.strainNode.o.frequency.setTargetAtTime(160+t*120+Math.random()*20,this.t,.05)}}snap(){if(!this.ctx)return;let t=this.ctx,e=this.noiseSrc(),n=t.createBiquadFilter();n.type="highpass",n.frequency.value=1500;let s=t.createGain();e.connect(n),n.connect(s),s.connect(this.master),this.env(s,.001,.3,.12),e.start(),e.stop(this.t+.2);let r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(400,this.t),r.frequency.exponentialRampToValueAtTime(90,this.t+.4);let o=t.createGain();r.connect(o),o.connect(this.master),this.env(o,.005,.15,.4),r.start(),r.stop(this.t+.5)}jingle(t=1){if(!this.ctx)return;let e=this.ctx,n=[523.25,659.25,783.99,1046.5,1318.5,1568,2093],s=Math.min(n.length,3+t);for(let r=0;r<s;r++){let o=e.createOscillator();o.type=t>=4?"triangle":"sine",o.frequency.value=n[r];let a=e.createGain();o.connect(a),a.connect(this.master);let l=this.t+r*.085;a.gain.setValueAtTime(1e-4,l),a.gain.linearRampToValueAtTime(.11,l+.01),a.gain.exponentialRampToValueAtTime(1e-4,l+.5),o.start(l),o.stop(l+.55)}t>=5&&[1046.5,1318.5,1568].forEach(r=>{let o=e.createOscillator();o.type="sine",o.frequency.value=r;let a=e.createGain();o.connect(a),a.connect(this.master);let l=this.t+s*.085;a.gain.setValueAtTime(1e-4,l),a.gain.linearRampToValueAtTime(.06,l+.05),a.gain.exponentialRampToValueAtTime(1e-4,l+1.6),o.start(l),o.stop(l+1.7)})}coin(){if(!this.ctx)return;let t=this.ctx;[1318.5,1975.5].forEach((e,n)=>{let s=t.createOscillator();s.type="square",s.frequency.value=e;let r=t.createGain();s.connect(r),r.connect(this.master);let o=this.t+n*.07;r.gain.setValueAtTime(1e-4,o),r.gain.linearRampToValueAtTime(.05,o+.005),r.gain.exponentialRampToValueAtTime(1e-4,o+.25),s.start(o),s.stop(o+.3)})}click(){if(!this.ctx)return;let t=this.ctx,e=t.createOscillator();e.type="sine",e.frequency.value=900;let n=t.createGain();e.connect(n),n.connect(this.master),this.env(n,.002,.06,.05),e.start(),e.stop(this.t+.08)}talk(){if(!this.ctx)return;let t=this.ctx,e=t.createOscillator();e.type="square",e.frequency.value=300+Math.random()*160;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=1200;let s=t.createGain();e.connect(n),n.connect(s),s.connect(this.master),this.env(s,.002,.025,.04),e.start(),e.stop(this.t+.06)}chime(){if(!this.ctx)return;let t=this.ctx;[659.25,987.77,1318.5].forEach((e,n)=>{let s=t.createOscillator();s.type="sine",s.frequency.value=e;let r=t.createGain();s.connect(r),r.connect(this.master);let o=this.t+n*.12;r.gain.setValueAtTime(1e-4,o),r.gain.linearRampToValueAtTime(.07,o+.02),r.gain.exponentialRampToValueAtTime(1e-4,o+1.2),s.start(o),s.stop(o+1.3)})}}});var B_,z_,ll,wp=ee(()=>{zi();B_=["\u6D77\u98A8","\u6D6A\u82B1","\u6708\u5149","\u5C0F\u6D6E\u6A19","\u9EC3\u91D1","\u6DF1\u6D77","\u5915\u967D","\u661F\u7A7A","\u66B4\u98A8","\u73CA\u745A","\u9BD6\u9B5A","\u9BAA\u9B5A"],z_=["\u91E3\u5BA2","\u6F01\u592B","\u8239\u9577","\u7375\u4EBA","\u9054\u4EBA","\u5C0F\u5B50","\u5927\u5E2B","\u738B"],ll=class{constructor(t){this.g=t,this.el=document.querySelector("#nameModal"),this.input=document.querySelector("#nmInput"),this.preview=document.querySelector("#nmPreview"),this.error=this.el.querySelector(".nm-error"),this.isOpen=!1,this.input.addEventListener("input",()=>this.refresh()),this.input.addEventListener("keydown",e=>{e.stopPropagation(),e.key==="Enter"&&!e.isComposing&&this.confirm(),e.key==="Escape"&&this.cancel()}),document.querySelector("#nmDice").onclick=()=>{let e=n=>n[Math.floor(Math.random()*n.length)];this.input.value=`${e(B_)}${e(z_)}${Math.floor(Math.random()*90+10)}`,this.g.sound.click(),this.refresh(),this.input.focus()},document.querySelector("#nmOk").onclick=()=>this.confirm(),document.querySelector("#nmCancel").onclick=()=>this.cancel()}open(t,e,n){this.onDone=e,this.onCancel=n,this.isOpen=!0,this.input.value=t||"",this.el.classList.remove("hidden"),this.refresh(!0),setTimeout(()=>this.input.focus(),50)}refresh(t=!1){let{ok:e,name:n,error:s}=Gh(this.input.value);return this.preview.textContent=n||"\uFF1F\uFF1F\uFF1F",this.error.textContent=e||t||!this.input.value?"":s,e}confirm(){let{ok:t,name:e,error:n}=Gh(this.input.value);if(!t){this.error.textContent=n,this.input.focus();return}this.close(),this.onDone&&this.onDone(e)}cancel(){this.close(),this.onCancel&&this.onCancel()}close(){this.isOpen=!1,this.el.classList.add("hidden"),this.input.blur()}}});var cl,Ru=ee(()=>{cl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var Sn,O_,Cu,H_,Vi,fr=ee(()=>{Ee();Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},O_=new Ys(-1,1,1,-1,0,1),Cu=class extends ge{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}},H_=new Cu,Vi=class{constructor(t){this._mesh=new it(H_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,O_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}});var hl,Sp=ee(()=>{Ee();fr();hl=class extends Sn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bi.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Vi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var uo,ul,Pu=ee(()=>{fr();uo=class extends Sn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ul=class extends Sn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}});var dl,Tp=ee(()=>{Ee();Ru();Sp();Pu();Pu();dl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new K);this._width=n.width,this._height=n.height,e=new We(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hl(cl),this.copyPass.material.blending=$n,this.clock=new er}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}uo!==void 0&&(o instanceof uo?n=!0:o instanceof ul&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var fl,Ap=ee(()=>{Ee();fr();fl=class extends Sn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}});var Rp,Cp=ee(()=>{Ee();Rp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var pr,Pp=ee(()=>{Ee();fr();Ru();Cp();pr=class i extends Sn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new K(t.x,t.y):new K(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new We(r,o,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new We(r,o,{type:bn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new We(r,o,{type:bn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Rp;this.highPassUniforms=Bi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new K(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=cl;this.copyUniforms=Bi.clone(h.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new tn,this.fsQuad=new Vi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new K(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};pr.BlurDirectionX=new K(1,0);pr.BlurDirectionY=new K(0,1)});var Ip,Lp=ee(()=>{Ip={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var pl,Dp=ee(()=>{Ee();fr();Lp();pl=class extends Sn{constructor(){super();let t=Ip;this.uniforms=Bi.clone(t.uniforms),this.material=new ba({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Th?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ah?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var V_=Bp(()=>{Ee();zi();Kn();ls();or();Vf();cp();ds();hp();up();dp();mp();gp();yp();_p();Mp();mu();bp();Ep();wp();lo();Tp();Ap();Pp();Dp();var k_={id:"ocean",name:"Open Sea",subtitle:"\u4E00\u671B\u7121\u969B\u7684\u5916\u6D77"},Iu=class{constructor(){Pf();let t=new ca({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Eh,t.toneMapping=Kr,t.toneMappingExposure=1,t.outputColorSpace=Le,document.body.prepend(t.domElement),this.renderer=t,this.scene=new Js,this.camera=new Qe(60,window.innerWidth/window.innerHeight,.1,4e3);let e=new We(window.innerWidth,window.innerHeight,{type:bn,samples:4});this.composer=new dl(t,e),this.composer.addPass(new fl(this.scene,this.camera)),this.bloom=new pr(new K(window.innerWidth/4,window.innerHeight/4),.32,.55,.92);let n=this.bloom.setSize.bind(this.bloom);this.bloom.setSize=(r,o)=>n(Math.max(1,Math.round(r/4)),Math.max(1,Math.round(o/4))),this.composer.addPass(this.bloom),this.composer.addPass(new pl),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)}),this.terrainH=qe,this.input={f:!1,b:!1,l:!1,r:!1,shift:!1,jump:!1,space:!1},this.ui=new ol,this.sound=new al,this.fx=new Ja(this.scene),this.sky=new Na(this.scene,st.time??.3),this.water=new Ua(this.scene,Bf(512)),this.scene.add(Ff()),this.world=lp(this.scene),this.ambient=new Ya(this),this.cam=new nl(this.camera,t.domElement),this.cam.occluders=Qn,this.player=new el(this),this.fishing=new il(this),this.boat=new Za(this),this.quests=new Ga(this),this.dialogue=new rl(this),this.npcs=this.world.npcs.map(r=>new sl(this,r)),this.nameModal=new ll(this),st.playerName&&this.applyPlayerName(st.playerName);let s=st.pos||this.world.spawn;if(this.player.teleport(s.x,s.z,s.yaw??this.world.spawn.yaw),st.pos&&yi(s.x,s.z)&&Oi(s.x,s.z,99)<-1){let r=this.world.spawn;this.player.teleport(r.x,r.z,r.yaw)}this.cam.yaw=this.player.yaw,this.cam.update(0,this.player.pos.clone().add(new S(0,1.8,0)),!0),this.ui.setMoney(st.money),this.ui.onSelectSlot=r=>this.selectSlot(r),this.ui.onSelectKey=(r,o)=>this.selectKey(r,o),this.ui.onOpenCrate=()=>this.openCrate(),this.ui.onEquipBait=r=>this.equipBait(r),this.refreshHotbar(),this.quests.render(),this.started=!1,this.time=0,this.zoneKey=null,this.zoneTimer=0,this.saveTimer=0,this.interactTarget=null,this.clock=new er,this.bindInput(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}bindInput(){let t={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};window.addEventListener("keydown",n=>{if(!this.started||this.nameModal.isOpen||this.ui.confirmOpen||n.target.tagName==="INPUT")return;if(t[n.code]&&(this.input[t[n.code]]=!0),(n.code==="ShiftLeft"||n.code==="ShiftRight")&&(this.input.shift=!0),n.code==="Space"){if(n.preventDefault(),this.dialogue.open){this.dialogue.advance();return}this.fishing.state==="reeling"?this.input.space=!0:n.repeat||(this.input.jump=!0)}if(n.repeat)return;if(n.code==="KeyE"&&this.interact(),n.code==="Escape")if(this.dialogue.open)this.dialogue.close();else if(this.ui.anyPanelOpen())for(let r of Object.keys(this.ui.panels))this.ui.togglePanel(r,!1);else this.ui.togglePanel("menu",!0);n.code==="KeyB"&&this.ui.togglePanel("backpack"),n.code==="KeyN"&&this.ui.togglePanel("dex"),n.code==="KeyV"&&this.ui.togglePanel("bait"),n.code==="KeyH"&&this.ui.togglePanel("help"),n.code==="Enter"&&this.dialogue.open&&this.dialogue.advance();let s=n.code.match(/^Digit([1-9])$/);s&&!this.dialogue.open&&this.selectSlot(parseInt(s[1],10))}),window.addEventListener("keyup",n=>{t[n.code]&&(this.input[t[n.code]]=!1),(n.code==="ShiftLeft"||n.code==="ShiftRight")&&(this.input.shift=!1),n.code==="Space"&&(this.input.space=!1)}),window.addEventListener("blur",()=>{for(let n of Object.keys(this.input))this.input[n]=!1;this.fishing.holding=!1}),this.renderer.domElement.addEventListener("mousedown",n=>{if(!(!this.started||n.button!==0)&&(this.sound.init(),!(this.dialogue.open||this.ui.anyPanelOpen()||this.nameModal.isOpen||this.ui.confirmOpen))){if(this.ui.selectedKey==="crate"){this.openCrate();return}this.fishing.equipped&&this.fishing.mouseDown()}}),window.addEventListener("mouseup",n=>{n.button===0&&this.fishing.mouseUp()}),document.querySelector("#btnBag").onclick=()=>this.ui.togglePanel("backpack"),document.querySelector("#btnDex").onclick=()=>this.ui.togglePanel("dex"),document.querySelector("#btnBait").onclick=()=>this.ui.togglePanel("bait"),document.querySelector("#btnHelp").onclick=()=>this.ui.togglePanel("help");let e=n=>document.querySelector(n);e("#btnMenu").onclick=()=>this.ui.togglePanel("menu"),e("#mResume").onclick=()=>this.ui.togglePanel("menu",!1),e("#mHelp").onclick=()=>this.ui.togglePanel("help",!0),e("#mTitle").onclick=()=>this.backToTitle(),e("#mQuit").onclick=()=>this.quitGame(),e("#qsBack").onclick=()=>e("#quitScreen").classList.add("hidden"),document.querySelector("#btnStart").onclick=()=>this.start(),document.querySelector("#btnReset").onclick=()=>{confirm("\u78BA\u5B9A\u8981\u6E05\u9664\u5B58\u6A94\u3001\u5F9E\u982D\u958B\u59CB\u55CE\uFF1F")&&(If(),this.noSave=!0,location.reload())},window.addEventListener("beforeunload",()=>{this.noSave||this.save()})}start(){this.started=!0,this.sound.init(),document.querySelector("#start").classList.add("hidden"),this.zoneKey=null,st.quests.tutorial||setTimeout(()=>this.ui.toast("\u{1F449} \u53BB\u627E\u982D\u4E0A\u6709\u300C!\u300D\u7684\u5C0E\u5E2B\u30FB\u963F\u51F1 \u8AAA\u8A71\u5427\uFF01","#ffd75e"),1500)}playerName(){return st.playerName||"\u65B0\u624B\u91E3\u5BA2"}applyPlayerName(t){this.player.setName(t);let e=document.querySelector("#playerNameTag");e.textContent=`\u{1F464} ${t}`,e.classList.toggle("hidden",!t)}setPlayerName(t){let e=!st.playerName;st.playerName=t,ln(),this.applyPlayerName(t),this.sound.jingle(3),this.ui.toast(e?`\u{1F389} \u5F9E\u4ECA\u5929\u8D77\u4F60\u5C31\u662F\u300C${t}\u300D\u4E86\uFF01`:`\u270F\uFE0F \u540D\u5B57\u5DF2\u6539\u6210\u300C${t}\u300D`,"#9fe6ff")}backToTitle(){this.ui.togglePanel("menu",!1),this.dialogue.open&&this.dialogue.close(),this.fishing.equip(!1),this.player.holdFish(null),this.ui.selectedKey=null,this.player.holdCrate(!1),this.refreshHotbar();for(let t of Object.keys(this.input))this.input[t]=!1;this.save(),this.started=!1,document.querySelector("#start").classList.remove("hidden")}quitGame(){this.backToTitle(),document.querySelector("#quitScreen").classList.remove("hidden");try{window.close()}catch{}}save(){st.pos=this.player.boat?null:{x:this.player.pos.x,z:this.player.pos.z,yaw:this.player.yaw},st.time=this.sky.t,ln()}hotbarItems(){let t=[{key:"rod",type:"rod"}];st.baitCrates>0&&t.push({key:"crate",type:"crate"});for(let e of st.inventory){if(t.length>=9)break;t.push({key:"fish:"+e.uid,type:"fish",item:e})}return t}refreshHotbar(){this.ui.renderHotbar(this.hotbarItems(),this.ui.selectedKey)}selectSlot(t){if(t===0){this.selectKey(null);return}let e=this.hotbarItems()[t-1];e&&this.selectKey(e.key)}selectKey(t,e=!1){let n=this.ui;if(t===null||t===n.selectedKey&&!e){this.fishing.equip(!1),this.player.holdFish(null),this.player.holdCrate(!1),n.selectedKey=null,this.refreshHotbar();return}if(t==="rod"){if(this.player.swimming){n.toast("\u6E38\u6CF3\u6642\u4E0D\u80FD\u62FF\u91E3\u7AFF\uFF01","#ffb3b3");return}this.player.holdFish(null),this.player.holdCrate(!1),this.fishing.equip(!0),this.quests.onEvent("equip")}else if(t==="crate"){if(st.baitCrates<=0)return;this.fishing.equip(!1),this.player.holdFish(null),this.player.holdCrate(!0),n.toast("\u9EDE\u4E00\u4E0B\u756B\u9762\u5C31\u80FD\u958B\u555F\u8A98\u990C\u7BB1","#ffe9a8")}else{let s=parseInt(t.split(":")[1],10),r=st.inventory.find(o=>o.uid===s);if(!r)return;this.fishing.equip(!1),this.player.holdCrate(!1),this.player.holdFish(r)}n.selectedKey=t,this.refreshHotbar()}onInventoryChanged(){let t=this.player.heldFish;if(t){let e=st.inventory.indexOf(t);e<0?(this.player.holdFish(null),this.ui.selectedKey=this.fishing.equipped?"rod":null):this.hotbarItems().some(n=>n.key==="fish:"+t.uid)||(st.inventory.splice(e,1),st.inventory.unshift(t))}this.ui.selectedKey==="crate"&&st.baitCrates<=0&&(this.player.holdCrate(!1),this.ui.selectedKey=null),this.refreshHotbar(),this.ui.panels.backpack.classList.contains("hidden")||this.ui.renderBackpack(),this.ui.panels.bait.classList.contains("hidden")||this.ui.renderBait(),this.fishing.equipped&&this.ui.showRodStats(!0),this.quests.render()}async openCrate(){if(st.baitCrates<=0||this.ui.confirmOpen||!await this.ui.confirm({icon:rn.icon,text:"\u4F60\u8981\u958B\u555F\u9019\u500B\u9B5A\u990C\u7BB1\u55CE\uFF1F",sub:`\u5269\u4E0B ${st.baitCrates} \u500B\u8A98\u990C\u7BB1`,yes:"\u958B\u555F",no:"\u53D6\u6D88"})||st.baitCrates<=0)return;st.baitCrates--;let{baitId:e,amount:n}=ep(),s=sn[e];st.baits[e]=(st.baits[e]||0)+n;let r=!1;cr()||(st.equippedBait=e,r=!0),ln(),this.player.crateShake=.55,this.sound.tick(),setTimeout(()=>{let o=this.player.rig.handR.getWorldPosition(new S);this.fx.burst(o,13148517,26,4.5,.45,1),this.fx.burst(o,16773792,20,3,.35,1.2),this.sound.coin(),this.sound.jingle(2),this.ui.rewardPopup(`\u7372\u5F97 ${s.icon} ${s.name} \xD7${n}`,r?"\u5DF2\u81EA\u52D5\u88DD\u4E0A\u9B5A\u990C\uFF08\u4E0A\u9264\u901F\u5EA6 +"+s.lure+"%\uFF09":`\u73FE\u5728\u5171\u6709 ${st.baits[e]} \u500B`),this.onInventoryChanged()},550)}equipBait(t){t&&!(st.baits[t]>0)||(st.equippedBait=t,ln(),this.sound.click(),this.ui.toast(t?`\u5DF2\u88DD\u4E0A ${sn[t].icon} ${sn[t].name}`:"\u5DF2\u5378\u4E0B\u9B5A\u990C","#c8ff8a"),this.onInventoryChanged())}buyCrates(t){let e=rn.price*t;return st.money<e?!1:(st.money-=e,st.baitCrates+=t,ln(),this.ui.setMoney(st.money,!0),this.sound.coin(),this.ui.toast(`\u7372\u5F97 ${rn.icon} ${rn.name} \xD7${t}\uFF08\u5728\u5FEB\u6377\u5217\uFF0C\u9078\u53D6\u5F8C\u9EDE\u4E00\u4E0B\u756B\u9762\u958B\u555F\uFF09`,"#ffe9a8"),this.onInventoryChanged(),!0)}findInteract(){if(this.fishing.active)return null;let t=this.player.pos;if(this.player.boat)return{type:"exitBoat",label:"\u4E0B\u8239"};let e=null,n=4.2;for(let s of this.npcs){let r=Math.hypot(s.pos.x-t.x,s.pos.z-t.z);r<n&&Math.abs(s.pos.y-t.y)<3&&(n=r,e=s)}return e?{type:"npc",npc:e,label:`\u4EA4\u8AC7\u30FB${e.name}`}:this.boat.spawned&&this.boat.pos.distanceTo(t)<4.8?{type:"enterBoat",label:"\u4E0A\u8239"}:null}interact(){if(this.dialogue.open){this.dialogue.advance();return}let t=this.interactTarget;t&&(this.sound.click(),t.type==="npc"?t.npc.talk(this,t.npc):t.type==="enterBoat"?this.enterBoat():t.type==="exitBoat"&&this.exitBoat())}enterBoat(){this.fishing.equipped&&this.selectSlot(0),this.player.boat=this.boat,this.player.swimming=!1,this.ui.toast("W/S \u524D\u9032\u5F8C\u9000\u30FBA/D \u8F49\u5411\u30FBShift \u5168\u901F\u30FBE \u4E0B\u8239","#bfe9ff")}exitBoat(){let t=this.boat,e=null,n=1/0;for(let s=2.5;s<=7;s+=1.5){for(let r=0;r<16;r++){let o=r/16*Math.PI*2,a=t.pos.x+Math.cos(o)*s,l=t.pos.z+Math.sin(o)*s;if(Oi(a,l,3)>.2){let h=s;h<n&&(n=h,e={x:a,z:l})}}if(e)break}if(this.player.boat=null,this.sound.setEngine(!1,0),e)this.player.teleport(e.x,e.z,this.player.yaw);else{let s=new S(t.forward().z,0,-t.forward().x).multiplyScalar(2.2);this.player.pos.set(t.pos.x+s.x,-1.3,t.pos.z+s.z),this.player.vel.set(0,0,0)}}spawnBoatAt(t){let e=this.world.boatSpawns[t];this.player.boat&&this.exitBoat(),this.boat.spawn(e.x,e.z,e.heading)}onDialogue(t,e){if(e&&(e.talking=t),document.body.classList.toggle("in-dialogue",t),t&&e){let n=this.player.pos.clone().lerp(e.pos,.5).add(new S(0,1.8,0));this.cam.override={pos:n,dist:9},this.player.yaw=Math.atan2(e.pos.x-this.player.pos.x,e.pos.z-this.player.pos.z)}else this.cam.override=null}worldToScreen(t){let e=t.clone().project(this.camera);return{x:(e.x*.5+.5)*window.innerWidth,y:(-e.y*.5+.5)*window.innerHeight,behind:e.z>1}}updateZone(t){if(this.zoneTimer-=t,this.zoneTimer>0)return;this.zoneTimer=.4;let e=Jh(this.player.pos.x,this.player.pos.z)||k_;if(e.id!==this.zoneKey){let n=this.zoneKey===null;this.zoneKey=e.id,this.started&&(this.ui.showZone(e.name,e.subtitle),this.sound.chime(),(!n||e.id!=="ocean")&&this.quests.onEvent("arrive",{island:e.id}))}}updateClock(){let t=new Date,e=l=>String(l).padStart(2,"0"),n=this.sky.isNight(),r=(n?5.6/24:18.6/24)-this.sky.t;r<0&&(r+=1);let o=Math.ceil(r*jh),a=`${n?"\u8DDD\u96E2\u5929\u4EAE":"\u8DDD\u96E2\u5929\u9ED1"} ${Math.floor(o/60)}:${e(o%60)}`;this.ui.setClock(`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`,n,a)}updateWaypoint(){let t=this.quests.currentTarget();!t&&this.quests.canStart("tutorial")&&(t="tutor");let e=t&&this.npcs.find(g=>g.id===t);if(!e||this.dialogue.open){this.ui.waypoint(!1);return}let n=e.pos.distanceTo(this.player.pos);if(n<8){this.ui.waypoint(!1);return}let s=this.worldToScreen(e.pos.clone().add(new S(0,4.2,0))),r=window.innerWidth,o=window.innerHeight,a=110,l=120,c=210,h=(l+(o-c))/2,u=(o-c-l)/2,f=r/2-a,{x:d,y:m}=s,x=null;if(s.behind||d<a||d>r-a||m<l||m>o-c){let g=d-r/2,p=m-h;s.behind&&(g=-g,p=-p);let y=Math.min(f/Math.abs(g||.001),u/Math.abs(p||.001));d=r/2+g*y,m=h+p*y,x=Math.atan2(p,g)+Math.PI/2}this.ui.waypoint(!0,d,m,`${e.name}\u30FB${Math.round(n)}m`,x)}loop(){requestAnimationFrame(this.loop);let t=Math.min(.05,this.clock.getDelta());this.time+=t;let e=this.time,n=!this.started||this.dialogue.open||this.ui.anyPanelOpen()||this.nameModal.isOpen||this.ui.confirmOpen;this.sky.update(t,this.player.pos,e);let s=this.sky.night;this.boat.update(t,e,n?{}:this.input,this.player.boat===this.boat),this.player.update(t,e,this.input,n),this.input.jump=!1,this.fishing.update(t,e);for(let o of this.npcs)o.update(t,e,this.player.pos);this.dialogue.update(t),this.started||(this.cam.yaw+=t*.05),this.cam.update(t,this.player.pos.clone().add(new S(0,1.8,0))),this.water.update(e,this.camera,this.sky),this.fx.update(t),this.ambient.update(t,e,this.player.pos,s);for(let o of cs)o(t,e,s);for(let o of so)o.light.intensity=o.base*s*(o.flicker?.75+.25*Math.sin(e*13)*Math.sin(e*7.3):1)+(o.flicker?o.base*.25:0);Q.window.emissiveIntensity=s*1.6,Q.lampGlass.emissiveIntensity=.2+s*3,this.updateZone(t),this.updateClock(),this.interactTarget=this.started&&!this.dialogue.open?this.findInteract():null,this.ui.setInteract(this.interactTarget?this.interactTarget.label:null),this.updateWaypoint();let r=qe(this.player.pos.x,this.player.pos.z)>-6;this.sound.update(t,s,r),this.saveTimer+=t,this.saveTimer>10&&this.started&&(this.saveTimer=0,this.save()),this.sky.updateEnv(this.renderer,t),this.composer.render()}};window.addEventListener("DOMContentLoaded",()=>{try{window.game=new Iu}catch(i){console.error(i),document.body.insertAdjacentHTML("beforeend",`<div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#111;color:#fff;font-size:18px;z-index:99;padding:40px;text-align:center">\u904A\u6232\u8F09\u5165\u5931\u6557\uFF1A${i.message}<br>\u8ACB\u4F7F\u7528\u652F\u63F4 WebGL \u7684\u700F\u89BD\u5668\uFF08Chrome / Edge / Firefox\uFF09\u3002</div>`)}})});V_();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
