(()=>{var ye=(i,t,e)=>()=>{if(e)throw e[0];try{return i&&(t=i(i=0)),t}catch(n){throw e=[n],n}};var Tf=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};function zn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function th(i,t){return(i%t+t)%t}function dp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fp(i,t,e){return i!==t?(e-i)/(t-i):0}function lr(i,t,e){return(1-e)*i+e*t}function pp(i,t,e,n){return lr(i,t,1-Math.exp(-e*n))}function mp(i,t=1){return t-Math.abs(th(i,t*2)-t)}function gp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vp(i,t){return i+Math.random()*(t-i)}function _p(i){return i*(.5-Math.random())}function Mp(i){i!==void 0&&(Qh=i);let t=Qh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bp(i){return i*ar}function Ep(i){return i*fr}function wp(i){return(i&i-1)===0&&i!==0}function Sp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ap(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Md(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rp(){let i=Ao("canvas");return i.style.display="block",i}function rr(i){i in jh||(jh[i]=!0,console.warn(i))}function Cp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ip(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);let a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function tl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function Gp(i,t,e,n,s,r,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===wi,a),l===null)return null;eo.copy(a),eo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(eo);return c<e.near||c>e.far?null:{distance:c,point:eo.clone(),object:i}}function no(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Kr),i.getVertexPosition(l,Qr),i.getVertexPosition(c,jr);let h=Gp(i,t,e,n,Kr,Qr,jr,gu);if(h){let u=new S;_i.getBarycoord(gu,Kr,Qr,jr,u),s&&(h.uv=_i.getInterpolatedAttribute(s,a,l,c,u,new it)),r&&(h.uv1=_i.getInterpolatedAttribute(r,a,l,c,u,new it)),o&&(h.normal=_i.getInterpolatedAttribute(o,a,l,c,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new S,materialIndex:0};_i.getNormal(Kr,Qr,jr,f.normal),h.face=f,h.barycoord=u}return h}function Ps(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=Ps(i[e]);for(let s in n)t[s]=n[s]}return t}function Wp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ed(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}function wd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function Pg(i,t,e,n,s,r,o){let a=new dt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function x(y){let _=!1,v=m(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,_){let v=m(_);v&&(v.isCubeTexture||v.mapping===ra)?(h===void 0&&(h=new et(new Tt(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Ps(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(_.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Ni)),h.material.toneMapped=re.getTransfer(v.colorSpace)!==pe,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new et(new Ue(2,2),new Ze({name:"BackgroundMaterial",uniforms:Ps(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=re.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(so,Ed(i)),n.buffers.color.setClear(so.r,so.g,so.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:g}}function Lg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,L,O,z,k){let $=!1,G=u(z,O,L);r!==G&&(r=G,c(r.object)),$=d(M,z,O,k),$&&m(M,z,O,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(M,L,O,z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,O){let z=O.wireframe===!0,k=n[M.id];k===void 0&&(k={},n[M.id]=k);let $=k[L.id];$===void 0&&($={},k[L.id]=$);let G=$[z];return G===void 0&&(G=f(l()),$[z]=G),G}function f(M){let L=[],O=[],z=[];for(let k=0;k<e;k++)L[k]=0,O[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:z,object:M,attributes:{},index:null}}function d(M,L,O,z){let k=r.attributes,$=L.attributes,G=0,Q=O.getAttributes();for(let F in Q)if(Q[F].location>=0){let lt=k[F],mt=$[F];if(mt===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),lt===void 0||lt.attribute!==mt||mt&&lt.data!==mt.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function m(M,L,O,z){let k={},$=L.attributes,G=0,Q=O.getAttributes();for(let F in Q)if(Q[F].location>=0){let lt=$[F];lt===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));let mt={};mt.attribute=lt,lt&&lt.data&&(mt.data=lt.data),k[F]=mt,G++}r.attributes=k,r.attributesNum=G,r.index=z}function x(){let M=r.newAttributes;for(let L=0,O=M.length;L<O;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){let O=r.newAttributes,z=r.enabledAttributes,k=r.attributeDivisors;O[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),k[M]!==L&&(i.vertexAttribDivisor(M,L),k[M]=L)}function y(){let M=r.newAttributes,L=r.enabledAttributes;for(let O=0,z=L.length;O<z;O++)L[O]!==M[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function _(M,L,O,z,k,$,G){G===!0?i.vertexAttribIPointer(M,L,O,k,$):i.vertexAttribPointer(M,L,O,z,k,$)}function v(M,L,O,z){x();let k=z.attributes,$=O.getAttributes(),G=L.defaultAttributeValues;for(let Q in $){let F=$[Q];if(F.location>=0){let Z=k[Q];if(Z===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){let lt=Z.normalized,mt=Z.itemSize,Bt=t.get(Z);if(Bt===void 0)continue;let te=Bt.buffer,X=Bt.type,st=Bt.bytesPerElement,bt=X===i.INT||X===i.UNSIGNED_INT||Z.gpuType===Yc;if(Z.isInterleavedBufferAttribute){let ct=Z.data,zt=ct.stride,Gt=Z.offset;if(ct.isInstancedInterleavedBuffer){for(let kt=0;kt<F.locationSize;kt++)p(F.location+kt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let kt=0;kt<F.locationSize;kt++)g(F.location+kt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let kt=0;kt<F.locationSize;kt++)_(F.location+kt,mt/F.locationSize,X,lt,zt*st,(Gt+mt/F.locationSize*kt)*st,bt)}else{if(Z.isInstancedBufferAttribute){for(let ct=0;ct<F.locationSize;ct++)p(F.location+ct,Z.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ct=0;ct<F.locationSize;ct++)g(F.location+ct);i.bindBuffer(i.ARRAY_BUFFER,te);for(let ct=0;ct<F.locationSize;ct++)_(F.location+ct,mt/F.locationSize,X,lt,mt*st,mt/F.locationSize*ct*st,bt)}}else if(G!==void 0){let lt=G[Q];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(F.location,lt);break;case 3:i.vertexAttrib3fv(F.location,lt);break;case 4:i.vertexAttrib4fv(F.location,lt);break;default:i.vertexAttrib1fv(F.location,lt)}}}}y()}function R(){P();for(let M in n){let L=n[M];for(let O in L){let z=L[O];for(let k in z)h(z[k].object),delete z[k];delete L[O]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let O in L){let z=L[O];for(let k in z)h(z[k].object),delete z[k];delete L[O]}delete n[M.id]}function I(M){for(let L in n){let O=n[L];if(O[M.id]===void 0)continue;let z=O[M.id];for(let k in z)h(z[k].object),delete z[k];delete O[M.id]}}function P(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Dg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ug(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==dn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let P=I===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ti&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Fn&&!P)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function Ng(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Jn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,_=y*4,v=p.clippingState||null;l.value=v,v=h(m,f,_,d);for(let R=0;R!==_;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Fg(i){let t=new WeakMap;function e(o,a){return a===Tl?o.mapping=Ts:a===Al&&(o.mapping=As),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Tl||a===Al)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new lc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function zg(i){let t=[],e=[],n=[],s=i,r=i-vs+1+vu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-vs?l=vu[o-i+vs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,y=new Float32Array(x*m*d),_=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let T=0;T<d;T++){let I=T%3*2/3-1,P=T>2?0:-1,E=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];y.set(E,x*m*T),_.set(f,g*m*T);let M=[T,T,T,T,T,T];v.set(M,p*m*T)}let R=new me;R.setAttribute("position",new le(y,x)),R.setAttribute("uv",new le(_,g)),R.setAttribute("faceIndex",new le(v,p)),t.push(R),s>vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bu(i,t,e){let n=new ei(i,t,e);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ro(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bg(i,t,e){let n=new Float32Array(Oi),s=new S(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Eu(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function wu(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}function Og(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Tl||l===Al,h=l===Ts||l===As;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new No(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new No(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kg(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let x=d[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let _=0,v=y.length;_<v;_+=3){let R=y[_+0],T=y[_+1],I=y[_+2];f.push(R,T,T,I,I,R)}}else if(m!==void 0){let y=m.array;x=m.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let R=_+0,T=_+1,I=_+2;f.push(R,T,T,I,I,R)}}else return;let g=new(Md(f)?Po:Io)(f,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Vg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wg(i,t,e){let n=new WeakMap,s=new ae;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*R*4*u),I=new Co(T,v,R,u);I.type=Fn,I.needsUpdate=!0;let P=_*4;for(let M=0;M<u;M++){let L=g[M],O=p[M],z=y[M],k=v*R*4*M;for(let $=0;$<L.count;$++){let G=$*P;d===!0&&(s.fromBufferAttribute(L,$),T[k+G+0]=s.x,T[k+G+1]=s.y,T[k+G+2]=s.z,T[k+G+3]=0),m===!0&&(s.fromBufferAttribute(O,$),T[k+G+4]=s.x,T[k+G+5]=s.y,T[k+G+6]=s.z,T[k+G+7]=0),x===!0&&(s.fromBufferAttribute(z,$),T[k+G+8]=s.x,T[k+G+9]=s.y,T[k+G+10]=s.z,T[k+G+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new it(v,R)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Xg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}function Fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function aa(i,t){let e=Au[t];e===void 0&&(e=new Int32Array(t),Au[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Iu.set(n),i.uniformMatrix2fv(this.addr,!1,Iu),Fe(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Cu.set(n),i.uniformMatrix3fv(this.addr,!1,Cu),Fe(e,n)}}function Qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Ru.set(n),i.uniformMatrix4fv(this.addr,!1,Ru),Fe(e,n)}}function jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function ix(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Su.compareFunction=_d,r=Su):r=Sd,e.setTexture2D(t||r,s)}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ad,s)}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Rd,s)}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Td,s)}function ux(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return $g;case 35666:return Zg;case 35674:return Jg;case 35675:return Kg;case 35676:return Qg;case 5124:case 35670:return jg;case 35667:case 35671:return tx;case 35668:case 35672:return ex;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}function dx(i,t){i.uniform1fv(this.addr,t)}function fx(i,t){let e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function px(i,t){let e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function mx(i,t){let e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function gx(i,t){let e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xx(i,t){let e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yx(i,t){let e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vx(i,t){i.uniform1iv(this.addr,t)}function _x(i,t){i.uniform2iv(this.addr,t)}function Mx(i,t){i.uniform3iv(this.addr,t)}function bx(i,t){i.uniform4iv(this.addr,t)}function Ex(i,t){i.uniform1uiv(this.addr,t)}function wx(i,t){i.uniform2uiv(this.addr,t)}function Sx(i,t){i.uniform3uiv(this.addr,t)}function Tx(i,t){i.uniform4uiv(this.addr,t)}function Ax(i,t,e){let n=this.cache,s=t.length,r=aa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Sd,r[o])}function Rx(i,t,e){let n=this.cache,s=t.length,r=aa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ad,r[o])}function Cx(i,t,e){let n=this.cache,s=t.length,r=aa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Rd,r[o])}function Ix(i,t,e){let n=this.cache,s=t.length,r=aa(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Td,r[o])}function Px(i){switch(i){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return xx;case 35676:return yx;case 5124:case 35670:return vx;case 35667:case 35671:return _x;case 35668:case 35672:return Mx;case 35669:case 35673:return bx;case 5125:return Ex;case 36294:return wx;case 36295:return Sx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Ix}}function Pu(i,t){i.seq.push(t),i.map[t.id]=t}function Lx(i,t,e){let n=i.name,s=n.length;for(cl.lastIndex=0;;){let r=cl.exec(n),o=cl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Pu(e,c===void 0?new cc(a,i,t):new hc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new uc(a),Pu(e,u)),e=u}}}function Lu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function Nx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Fx(i){re._getMatrix(Du,re.workingColorSpace,i);let t=`mat3( ${Du.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case oa:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Nx(i.getShaderSource(t),o)}else return s}function zx(i,t){let e=Fx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bx(i,t){let e;switch(t){case Zf:e="Linear";break;case Jf:e="Reinhard";break;case Kf:e="Cineon";break;case qc:e="ACESFilmic";break;case jf:e="AgX";break;case tp:e="Neutral";break;case Qf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ox(){re.getLuminanceCoefficients(oo);let i=oo.x.toFixed(4),t=oo.y.toFixed(4),e=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function kx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function or(i){return i!==""}function Nu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function dc(i){return i.replace(Gx,Xx)}function Xx(i,t){let e=Zt[t];if(e===void 0){let n=Wx.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return dc(e)}function zu(i){return i.replace(qx,Yx)}function Yx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function $x(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ad?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Zx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===As&&(t="ENVMAP_MODE_REFRACTION"),t}function Kx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ld:t="ENVMAP_BLENDING_MULTIPLY";break;case Yf:t="ENVMAP_BLENDING_MIX";break;case $f:t="ENVMAP_BLENDING_ADD";break}return t}function Qx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function jx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=$x(e),c=Zx(e),h=Jx(e),u=Kx(e),f=Qx(e),d=Hx(e),m=kx(r),x=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(or).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(or).join(`
`),p.length>0&&(p+=`
`)):(g=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==bi?Bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,zx("linearToOutputTexel",e.outputColorSpace),Ox(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=dc(o),o=Nu(o,e),o=Fu(o,e),a=dc(a),a=Nu(a,e),a=Fu(a,e),o=zu(o),a=zu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+g+o,v=y+p+a,R=Lu(s,s.VERTEX_SHADER,_),T=Lu(s,s.FRAGMENT_SHADER,v);s.attachShader(x,R),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(L){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(R).trim(),k=s.getShaderInfoLog(T).trim(),$=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,T);else{let Q=Uu(s,R,"vertex"),F=Uu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+Q+`
`+F)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||k==="")&&(G=!1);G&&(L.diagnostics={runnable:$,programLog:O,vertexShader:{log:z,prefix:g},fragmentShader:{log:k,prefix:p}})}s.deleteShader(R),s.deleteShader(T),P=new ws(s,x),E=Vx(s,x)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Dx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ux++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}function ey(i,t,e,n,s,r,o){let a=new pr,l=new fc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,L,O,z){let k=O.fog,$=z.geometry,G=E.isMeshStandardMaterial?O.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),F=Q&&Q.mapping===ra?Q.image.height:null,Z=m[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,mt=lt!==void 0?lt.length:0,Bt=0;$.morphAttributes.position!==void 0&&(Bt=1),$.morphAttributes.normal!==void 0&&(Bt=2),$.morphAttributes.color!==void 0&&(Bt=3);let te,X,st,bt;if(Z){let de=Nn[Z];te=de.vertexShader,X=de.fragmentShader}else te=E.vertexShader,X=E.fragmentShader,l.update(E),st=l.getVertexShaderID(E),bt=l.getFragmentShaderID(E);let ct=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Gt=z.isInstancedMesh===!0,kt=z.isBatchedMesh===!0,se=!!E.map,j=!!E.matcap,ot=!!Q,C=!!E.aoMap,Ut=!!E.lightMap,nt=!!E.bumpMap,Et=!!E.normalMap,ut=!!E.displacementMap,Ot=!!E.emissiveMap,_t=!!E.metalnessMap,A=!!E.roughnessMap,b=E.anisotropy>0,B=E.clearcoat>0,q=E.dispersion>0,tt=E.iridescence>0,Y=E.sheen>0,At=E.transmission>0,pt=b&&!!E.anisotropyMap,Mt=B&&!!E.clearcoatMap,ee=B&&!!E.clearcoatNormalMap,rt=B&&!!E.clearcoatRoughnessMap,wt=tt&&!!E.iridescenceMap,Ht=tt&&!!E.iridescenceThicknessMap,Vt=Y&&!!E.sheenColorMap,St=Y&&!!E.sheenRoughnessMap,ie=!!E.specularMap,$t=!!E.specularColorMap,ge=!!E.specularIntensityMap,D=At&&!!E.transmissionMap,gt=At&&!!E.thicknessMap,W=!!E.gradientMap,J=!!E.alphaMap,vt=E.alphaTest>0,xt=!!E.alphaHash,Xt=!!E.extensions,Ae=bi;E.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let We={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:te,fragmentShader:X,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:bt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:kt,batchingColor:kt&&z._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&z.instanceColor!==null,instancingMorph:Gt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ns,alphaToCoverage:!!E.alphaToCoverage,map:se,matcap:j,envMap:ot,envMapMode:ot&&Q.mapping,envMapCubeUVHeight:F,aoMap:C,lightMap:Ut,bumpMap:nt,normalMap:Et,displacementMap:f&&ut,emissiveMap:Ot,normalMapObjectSpace:Et&&E.normalMapType===sp,normalMapTangentSpace:Et&&E.normalMapType===vd,metalnessMap:_t,roughnessMap:A,anisotropy:b,anisotropyMap:pt,clearcoat:B,clearcoatMap:Mt,clearcoatNormalMap:ee,clearcoatRoughnessMap:rt,dispersion:q,iridescence:tt,iridescenceMap:wt,iridescenceThicknessMap:Ht,sheen:Y,sheenColorMap:Vt,sheenRoughnessMap:St,specularMap:ie,specularColorMap:$t,specularIntensityMap:ge,transmission:At,transmissionMap:D,thicknessMap:gt,gradientMap:W,opaque:E.transparent===!1&&E.blending===Ms&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:vt,alphaHash:xt,combine:E.combine,mapUv:se&&x(E.map.channel),aoMapUv:C&&x(E.aoMap.channel),lightMapUv:Ut&&x(E.lightMap.channel),bumpMapUv:nt&&x(E.bumpMap.channel),normalMapUv:Et&&x(E.normalMap.channel),displacementMapUv:ut&&x(E.displacementMap.channel),emissiveMapUv:Ot&&x(E.emissiveMap.channel),metalnessMapUv:_t&&x(E.metalnessMap.channel),roughnessMapUv:A&&x(E.roughnessMap.channel),anisotropyMapUv:pt&&x(E.anisotropyMap.channel),clearcoatMapUv:Mt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:St&&x(E.sheenRoughnessMap.channel),specularMapUv:ie&&x(E.specularMap.channel),specularColorMapUv:$t&&x(E.specularColorMap.channel),specularIntensityMapUv:ge&&x(E.specularIntensityMap.channel),transmissionMapUv:D&&x(E.transmissionMap.channel),thicknessMapUv:gt&&x(E.thicknessMap.channel),alphaMapUv:J&&x(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Et||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(se||J),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:zt,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:se&&E.map.isVideoTexture===!0&&re.getTransfer(E.map.colorSpace)===pe,decodeVideoTextureEmissive:Ot&&E.emissiveMap.isVideoTexture===!0&&re.getTransfer(E.emissiveMap.colorSpace)===pe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ie,flipSided:E.side===$e,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&E.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(y(M,E),_(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function _(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){let M=m[E.type],L;if(M){let O=Nn[M];L=Xp.clone(O.uniforms)}else L=E.uniforms;return L}function R(E,M){let L;for(let O=0,z=h.length;O<z;O++){let k=h[O];if(k.cacheKey===M){L=k,++L.usedTimes;break}}return L===void 0&&(L=new jx(i,M,E,r),h.push(L)),L}function T(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function I(E){l.remove(E)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:P}}function ny(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function iy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||iy),n.length>1&&n.sort(f||Ou),s.length>1&&s.sort(f||Ou)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function sy(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Hu,i.set(n,[o])):s>=r.length?(o=new Hu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ry(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new dt};break;case"SpotLight":e={position:new S,direction:new S,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new S,halfWidth:new S,halfHeight:new S};break}return i[t.id]=e,e}}}function oy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function ly(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cy(i){let t=new ry,e=oy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);let s=new S,r=new ne,o=new ne;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,y=0,_=0,v=0,R=0,T=0,I=0;c.sort(ly);for(let E=0,M=c.length;E<M;E++){let L=c[E],O=L.color,z=L.intensity,k=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*z,u+=O.g*z,f+=O.b*z;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],z);I++}else if(L.isDirectionalLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,F=e.get(L);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=G,d++}else if(L.isSpotLight){let G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(O).multiplyScalar(z),G.distance=k,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[x]=G;let Q=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,Q.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=Q.matrix,L.castShadow){let F=e.get(L);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=$,v++}x++}else if(L.isRectAreaLight){let G=t.get(L);G.color.copy(O).multiplyScalar(z),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=G,g++}else if(L.isPointLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let Q=L.shadow,F=e.get(L);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,F.shadowCameraNear=Q.camera.near,F.shadowCameraFar=Q.camera.far,n.pointShadow[m]=F,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=L.shadow.matrix,_++}n.point[m]=G,m++}else if(L.isHemisphereLight){let G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(z),G.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,P.directionalLength=d,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=I,n.version=ay++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let _=c[p];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(_.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(_.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function ku(i){let t=new cy(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function hy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ku(i),t.set(s,[a])):r>=o.length?(a=new ku(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function fy(i,t,e){let n=new mr,s=new it,r=new it,o=new ae,a=new mc({depthPacking:ip}),l=new gc,c={},h=e.maxTextureSize,u={[wi]:$e,[$e]:wi,[Ie]:Ie},f=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:uy,fragmentShader:dy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new me;m.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new et(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ad;let p=this.type;this.render=function(T,I,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Mi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=p!==Zn&&this.type===Zn,k=p===Zn&&this.type!==Zn;for(let $=0,G=T.length;$<G;$++){let Q=T[$],F=Q.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let Z=F.getFrameExtents();if(s.multiply(Z),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,F.mapSize.y=r.y)),F.map===null||z===!0||k===!0){let mt=this.type!==Zn?{minFilter:fn,magFilter:fn}:{};F.map!==null&&F.map.dispose(),F.map=new ei(s.x,s.y,mt),F.map.texture.name=Q.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let lt=F.getViewportCount();for(let mt=0;mt<lt;mt++){let Bt=F.getViewport(mt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),O.viewport(o),F.updateMatrices(Q,mt),n=F.getFrustum(),v(I,P,F.camera,Q,this.type)}F.isPointLightShadow!==!0&&this.type===Zn&&y(F,P),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,M,L)};function y(T,I){let P=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ei(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,P,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,P,d,x,null)}function _(T,I,P,E){let M=null,L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let O=M.uuid,z=I.uuid,k=c[O];k===void 0&&(k={},c[O]=k);let $=k[z];$===void 0&&($=M.clone(),k[z]=$,I.addEventListener("dispose",R)),M=$}if(M.visible=I.visible,M.wireframe=I.wireframe,E===Zn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=i.properties.get(M);O.light=P}return M}function v(T,I,P,E,M){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let z=t.update(T),k=T.material;if(Array.isArray(k)){let $=z.groups;for(let G=0,Q=$.length;G<Q;G++){let F=$[G],Z=k[F.materialIndex];if(Z&&Z.visible){let lt=_(T,Z,E,M);T.onBeforeShadow(i,T,I,P,z,lt,F),i.renderBufferDirect(P,null,z,lt,T,F),T.onAfterShadow(i,T,I,P,z,lt,F)}}}else if(k.visible){let $=_(T,k,E,M);T.onBeforeShadow(i,T,I,P,z,$,null),i.renderBufferDirect(P,null,z,$,T,null),T.onAfterShadow(i,T,I,P,z,$,null)}}let O=T.children;for(let z=0,k=O.length;z<k;z++)v(O[z],I,P,E,M)}function R(T){T.target.removeEventListener("dispose",R);for(let P in c){let E=c[P],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function my(i,t){function e(){let D=!1,gt=new ae,W=null,J=new ae(0,0,0,0);return{setMask:function(vt){W!==vt&&!D&&(i.colorMask(vt,vt,vt,vt),W=vt)},setLocked:function(vt){D=vt},setClear:function(vt,xt,Xt,Ae,We){We===!0&&(vt*=Ae,xt*=Ae,Xt*=Ae),gt.set(vt,xt,Xt,Ae),J.equals(gt)===!1&&(i.clearColor(vt,xt,Xt,Ae),J.copy(gt))},reset:function(){D=!1,W=null,J.set(-1,0,0,0)}}}function n(){let D=!1,gt=!1,W=null,J=null,vt=null;return{setReversed:function(xt){if(gt!==xt){let Xt=t.get("EXT_clip_control");gt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);let Ae=vt;vt=null,this.setClear(Ae)}gt=xt},getReversed:function(){return gt},setTest:function(xt){xt?ct(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(xt){W!==xt&&!D&&(i.depthMask(xt),W=xt)},setFunc:function(xt){if(gt&&(xt=py[xt]),J!==xt){switch(xt){case vl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case bl:i.depthFunc(i.EQUAL);break;case El:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=xt}},setLocked:function(xt){D=xt},setClear:function(xt){vt!==xt&&(gt&&(xt=1-xt),i.clearDepth(xt),vt=xt)},reset:function(){D=!1,W=null,J=null,vt=null,gt=!1}}}function s(){let D=!1,gt=null,W=null,J=null,vt=null,xt=null,Xt=null,Ae=null,We=null;return{setTest:function(de){D||(de?ct(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(de){gt!==de&&!D&&(i.stencilMask(de),gt=de)},setFunc:function(de,bn,Vn){(W!==de||J!==bn||vt!==Vn)&&(i.stencilFunc(de,bn,Vn),W=de,J=bn,vt=Vn)},setOp:function(de,bn,Vn){(xt!==de||Xt!==bn||Ae!==Vn)&&(i.stencilOp(de,bn,Vn),xt=de,Xt=bn,Ae=Vn)},setLocked:function(de){D=de},setClear:function(de){We!==de&&(i.clearStencil(de),We=de)},reset:function(){D=!1,gt=null,W=null,J=null,vt=null,xt=null,Xt=null,Ae=null,We=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,y=null,_=null,v=null,R=null,T=null,I=new dt(0,0,0),P=0,E=!1,M=null,L=null,O=null,z=null,k=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=Q>=1):F.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=Q>=2);let Z=null,lt={},mt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),te=new ae().fromArray(mt),X=new ae().fromArray(Bt);function st(D,gt,W,J){let vt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(D,xt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<W;Xt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(gt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return xt}let bt={};bt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Ss),nt(!1),Et(Wh),ct(i.CULL_FACE),C(Mi);function ct(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function zt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Gt(D,gt){return u[D]!==gt?(i.bindFramebuffer(D,gt),u[D]=gt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=gt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function kt(D,gt){let W=d,J=!1;if(D){W=f.get(gt),W===void 0&&(W=[],f.set(gt,W));let vt=D.textures;if(W.length!==vt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Xt=vt.length;xt<Xt;xt++)W[xt]=i.COLOR_ATTACHMENT0+xt;W.length=vt.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function se(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let j={[Bi]:i.FUNC_ADD,[If]:i.FUNC_SUBTRACT,[Pf]:i.FUNC_REVERSE_SUBTRACT};j[Lf]=i.MIN,j[Df]=i.MAX;let ot={[Uf]:i.ZERO,[Nf]:i.ONE,[Ff]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[Vf]:i.SRC_ALPHA_SATURATE,[Hf]:i.DST_COLOR,[Bf]:i.DST_ALPHA,[zf]:i.ONE_MINUS_SRC_COLOR,[yl]:i.ONE_MINUS_SRC_ALPHA,[kf]:i.ONE_MINUS_DST_COLOR,[Of]:i.ONE_MINUS_DST_ALPHA,[Gf]:i.CONSTANT_COLOR,[Wf]:i.ONE_MINUS_CONSTANT_COLOR,[Xf]:i.CONSTANT_ALPHA,[qf]:i.ONE_MINUS_CONSTANT_ALPHA};function C(D,gt,W,J,vt,xt,Xt,Ae,We,de){if(D===Mi){x===!0&&(zt(i.BLEND),x=!1);return}if(x===!1&&(ct(i.BLEND),x=!0),D!==Cf){if(D!==g||de!==E){if((p!==Bi||v!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,v=Bi),de)switch(D){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.ONE,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,_=null,R=null,T=null,I.set(0,0,0),P=0,g=D,E=de}return}vt=vt||gt,xt=xt||W,Xt=Xt||J,(gt!==p||vt!==v)&&(i.blendEquationSeparate(j[gt],j[vt]),p=gt,v=vt),(W!==y||J!==_||xt!==R||Xt!==T)&&(i.blendFuncSeparate(ot[W],ot[J],ot[xt],ot[Xt]),y=W,_=J,R=xt,T=Xt),(Ae.equals(I)===!1||We!==P)&&(i.blendColor(Ae.r,Ae.g,Ae.b,We),I.copy(Ae),P=We),g=D,E=!1}function Ut(D,gt){D.side===Ie?zt(i.CULL_FACE):ct(i.CULL_FACE);let W=D.side===$e;gt&&(W=!W),nt(W),D.blending===Ms&&D.transparent===!1?C(Mi):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Et(D){D!==Af?(ct(i.CULL_FACE),D!==L&&(D===Wh?i.cullFace(i.BACK):D===Rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),L=D}function ut(D){D!==O&&(G&&i.lineWidth(D),O=D)}function Ot(D,gt,W){D?(ct(i.POLYGON_OFFSET_FILL),(z!==gt||k!==W)&&(i.polygonOffset(gt,W),z=gt,k=W)):zt(i.POLYGON_OFFSET_FILL)}function _t(D){D?ct(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+$-1),Z!==D&&(i.activeTexture(D),Z=D)}function b(D,gt,W){W===void 0&&(Z===null?W=i.TEXTURE0+$-1:W=Z);let J=lt[W];J===void 0&&(J={type:void 0,texture:void 0},lt[W]=J),(J.type!==D||J.texture!==gt)&&(Z!==W&&(i.activeTexture(W),Z=W),i.bindTexture(D,gt||bt[D]),J.type=D,J.texture=gt)}function B(){let D=lt[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(D){te.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function St(D){X.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function ie(D,gt){let W=c.get(gt);W===void 0&&(W=new WeakMap,c.set(gt,W));let J=W.get(D);J===void 0&&(J=i.getUniformBlockIndex(gt,D.name),W.set(D,J))}function $t(D,gt){let J=c.get(gt).get(D);l.get(gt)!==J&&(i.uniformBlockBinding(gt,J,D.__bindingPointIndex),l.set(gt,J))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,lt={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,y=null,_=null,v=null,R=null,T=null,I=new dt(0,0,0),P=0,E=!1,M=null,L=null,O=null,z=null,k=null,te.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:zt,bindFramebuffer:Gt,drawBuffers:kt,useProgram:se,setBlending:C,setMaterial:Ut,setFlipSided:nt,setCullFace:Et,setLineWidth:ut,setPolygonOffset:Ot,setScissorTest:_t,activeTexture:A,bindTexture:b,unbindTexture:B,compressedTexImage2D:q,compressedTexImage3D:tt,texImage2D:wt,texImage3D:Ht,updateUBOMapping:ie,uniformBlockBinding:$t,texStorage2D:ee,texStorage3D:rt,texSubImage2D:Y,texSubImage3D:At,compressedTexSubImage2D:pt,compressedTexSubImage3D:Mt,scissor:Vt,viewport:St,reset:ge}}function Vu(i,t,e,n){let s=gy(n);switch(e){case fd:return i*t;case md:return i*t;case gd:return i*t*2;case Jc:return i*t/s.components*s.byteLength;case Kc:return i*t/s.components*s.byteLength;case xd:return i*t*2/s.components*s.byteLength;case Qc:return i*t*2/s.components*s.byteLength;case pd:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case jc:return i*t*4/s.components*s.byteLength;case _o:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:case Dl:return Math.max(i,16)*Math.max(t,8)/4;case Il:case Ll:return Math.max(i,8)*Math.max(t,8)/2;case Ul:case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wo:case Kl:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yd:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case tc:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gy(i){switch(i){case ti:case hd:return{byteLength:1,components:1};case dr:case ud:case Ar:return{byteLength:2,components:1};case $c:case Zc:return{byteLength:2,components:4};case ki:case Yc:case Fn:return{byteLength:4,components:1};case dd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,b){return d?new OffscreenCanvas(A,b):Ao("canvas")}function x(A,b,B){let q=1,tt=_t(A);if((tt.width>B||tt.height>B)&&(q=B/Math.max(tt.width,tt.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Y=Math.floor(q*tt.width),At=Math.floor(q*tt.height);u===void 0&&(u=m(Y,At));let pt=b?m(Y,At):u;return pt.width=Y,pt.height=At,pt.getContext("2d").drawImage(A,0,0,Y,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+At+")."),pt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,b,B,q,tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=b;if(b===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),b===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),b===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),b===i.RGBA){let At=tt?oa:re.getTransfer(q);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=At===pe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(A,b){let B;return A?b===null||b===ki||b===Rs?B=i.DEPTH24_STENCIL8:b===Fn?B=i.DEPTH32F_STENCIL8:b===dr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ki||b===Rs?B=i.DEPTH_COMPONENT24:b===Fn?B=i.DEPTH_COMPONENT32F:b===dr&&(B=i.DEPTH_COMPONENT16),B}function R(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==fn&&A.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){let b=A.target;b.removeEventListener("dispose",T),P(b),b.isVideoTexture&&h.delete(b)}function I(A){let b=A.target;b.removeEventListener("dispose",I),M(b)}function P(A){let b=n.get(A);if(b.__webglInit===void 0)return;let B=A.source,q=f.get(B);if(q){let tt=q[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(A),Object.keys(q).length===0&&f.delete(B)}n.remove(A)}function E(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let B=A.source,q=f.get(B);delete q[b.__cacheKey],o.memory.textures--}function M(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let tt=0;tt<b.__webglFramebuffer[q].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[q][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)i.deleteFramebuffer(b.__webglFramebuffer[q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let B=A.textures;for(let q=0,tt=B.length;q<tt;q++){let Y=n.get(B[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[q])}n.remove(A)}let L=0;function O(){L=0}function z(){let A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function k(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function $(A,b){let B=n.get(A);if(A.isVideoTexture&&ut(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,A,b);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function G(A,b){let B=n.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function Q(A,b){let B=n.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,b);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function F(A,b){let B=n.get(A);if(A.version>0&&B.__version!==A.version){st(B,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}let Z={[Rl]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Cl]:i.MIRRORED_REPEAT},lt={[fn]:i.NEAREST,[ep]:i.NEAREST_MIPMAP_NEAREST,[Hr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},mt={[rp]:i.NEVER,[up]:i.ALWAYS,[op]:i.LESS,[_d]:i.LEQUAL,[ap]:i.EQUAL,[hp]:i.GEQUAL,[lp]:i.GREATER,[cp]:i.NOTEQUAL};function Bt(A,b){if(b.type===Fn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===un||b.magFilter===Fa||b.magFilter===Hr||b.magFilter===Hi||b.minFilter===un||b.minFilter===Fa||b.minFilter===Hr||b.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Z[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Z[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Z[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,lt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,lt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,mt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fn||b.minFilter!==Hr&&b.minFilter!==Hi||b.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function te(A,b){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));let q=b.source,tt=f.get(q);tt===void 0&&(tt={},f.set(q,tt));let Y=k(b);if(Y!==A.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[Y].usedTimes++;let At=tt[A.__cacheKey];At!==void 0&&(tt[A.__cacheKey].usedTimes--,At.usedTimes===0&&E(b)),A.__cacheKey=Y,A.__webglTexture=tt[Y].texture}return B}function X(A,b,B){let q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=i.TEXTURE_3D);let tt=te(A,b),Y=b.source;e.bindTexture(q,A.__webglTexture,i.TEXTURE0+B);let At=n.get(Y);if(Y.version!==At.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);let pt=re.getPrimaries(re.workingColorSpace),Mt=b.colorSpace===vi?null:re.getPrimaries(b.colorSpace),ee=b.colorSpace===vi||pt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let rt=x(b.image,!1,s.maxTextureSize);rt=Ot(b,rt);let wt=r.convert(b.format,b.colorSpace),Ht=r.convert(b.type),Vt=_(b.internalFormat,wt,Ht,b.colorSpace,b.isVideoTexture);Bt(q,b);let St,ie=b.mipmaps,$t=b.isVideoTexture!==!0,ge=At.__version===void 0||tt===!0,D=Y.dataReady,gt=R(b,rt);if(b.isDepthTexture)Vt=v(b.format===Cs,b.type),ge&&($t?e.texStorage2D(i.TEXTURE_2D,1,Vt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Vt,rt.width,rt.height,0,wt,Ht,null));else if(b.isDataTexture)if(ie.length>0){$t&&ge&&e.texStorage2D(i.TEXTURE_2D,gt,Vt,ie[0].width,ie[0].height);for(let W=0,J=ie.length;W<J;W++)St=ie[W],$t?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,St.width,St.height,wt,Ht,St.data):e.texImage2D(i.TEXTURE_2D,W,Vt,St.width,St.height,0,wt,Ht,St.data);b.generateMipmaps=!1}else $t?(ge&&e.texStorage2D(i.TEXTURE_2D,gt,Vt,rt.width,rt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,wt,Ht,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,rt.width,rt.height,0,wt,Ht,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Vt,ie[0].width,ie[0].height,rt.depth);for(let W=0,J=ie.length;W<J;W++)if(St=ie[W],b.format!==dn)if(wt!==null)if($t){if(D)if(b.layerUpdates.size>0){let vt=Vu(St.width,St.height,b.format,b.type);for(let xt of b.layerUpdates){let Xt=St.data.subarray(xt*vt/St.data.BYTES_PER_ELEMENT,(xt+1)*vt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,xt,St.width,St.height,1,wt,Xt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,St.width,St.height,rt.depth,wt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Vt,St.width,St.height,rt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,St.width,St.height,rt.depth,wt,Ht,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Vt,St.width,St.height,rt.depth,0,wt,Ht,St.data)}else{$t&&ge&&e.texStorage2D(i.TEXTURE_2D,gt,Vt,ie[0].width,ie[0].height);for(let W=0,J=ie.length;W<J;W++)St=ie[W],b.format!==dn?wt!==null?$t?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,St.width,St.height,wt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Vt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,St.width,St.height,wt,Ht,St.data):e.texImage2D(i.TEXTURE_2D,W,Vt,St.width,St.height,0,wt,Ht,St.data)}else if(b.isDataArrayTexture)if($t){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Vt,rt.width,rt.height,rt.depth),D)if(b.layerUpdates.size>0){let W=Vu(rt.width,rt.height,b.format,b.type);for(let J of b.layerUpdates){let vt=rt.data.subarray(J*W/rt.data.BYTES_PER_ELEMENT,(J+1)*W/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,rt.width,rt.height,1,wt,Ht,vt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,wt,Ht,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,rt.width,rt.height,rt.depth,0,wt,Ht,rt.data);else if(b.isData3DTexture)$t?(ge&&e.texStorage3D(i.TEXTURE_3D,gt,Vt,rt.width,rt.height,rt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,wt,Ht,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,rt.width,rt.height,rt.depth,0,wt,Ht,rt.data);else if(b.isFramebufferTexture){if(ge)if($t)e.texStorage2D(i.TEXTURE_2D,gt,Vt,rt.width,rt.height);else{let W=rt.width,J=rt.height;for(let vt=0;vt<gt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Vt,W,J,0,wt,Ht,null),W>>=1,J>>=1}}else if(ie.length>0){if($t&&ge){let W=_t(ie[0]);e.texStorage2D(i.TEXTURE_2D,gt,Vt,W.width,W.height)}for(let W=0,J=ie.length;W<J;W++)St=ie[W],$t?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,wt,Ht,St):e.texImage2D(i.TEXTURE_2D,W,Vt,wt,Ht,St);b.generateMipmaps=!1}else if($t){if(ge){let W=_t(rt);e.texStorage2D(i.TEXTURE_2D,gt,Vt,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ht,rt)}else e.texImage2D(i.TEXTURE_2D,0,Vt,wt,Ht,rt);g(b)&&p(q),At.__version=Y.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function st(A,b,B){if(b.image.length!==6)return;let q=te(A,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let Y=n.get(tt);if(tt.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+B);let At=re.getPrimaries(re.workingColorSpace),pt=b.colorSpace===vi?null:re.getPrimaries(b.colorSpace),Mt=b.colorSpace===vi||At===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let ee=b.isCompressedTexture||b.image[0].isCompressedTexture,rt=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let J=0;J<6;J++)!ee&&!rt?wt[J]=x(b.image[J],!0,s.maxCubemapSize):wt[J]=rt?b.image[J].image:b.image[J],wt[J]=Ot(b,wt[J]);let Ht=wt[0],Vt=r.convert(b.format,b.colorSpace),St=r.convert(b.type),ie=_(b.internalFormat,Vt,St,b.colorSpace),$t=b.isVideoTexture!==!0,ge=Y.__version===void 0||q===!0,D=tt.dataReady,gt=R(b,Ht);Bt(i.TEXTURE_CUBE_MAP,b);let W;if(ee){$t&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,ie,Ht.width,Ht.height);for(let J=0;J<6;J++){W=wt[J].mipmaps;for(let vt=0;vt<W.length;vt++){let xt=W[vt];b.format!==dn?Vt!==null?$t?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,xt.width,xt.height,Vt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,ie,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,xt.width,xt.height,Vt,St,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,ie,xt.width,xt.height,0,Vt,St,xt.data)}}}else{if(W=b.mipmaps,$t&&ge){W.length>0&&gt++;let J=_t(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,ie,J.width,J.height)}for(let J=0;J<6;J++)if(rt){$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,wt[J].width,wt[J].height,Vt,St,wt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ie,wt[J].width,wt[J].height,0,Vt,St,wt[J].data);for(let vt=0;vt<W.length;vt++){let Xt=W[vt].image[J].image;$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,Xt.width,Xt.height,Vt,St,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,ie,Xt.width,Xt.height,0,Vt,St,Xt.data)}}else{$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Vt,St,wt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ie,Vt,St,wt[J]);for(let vt=0;vt<W.length;vt++){let xt=W[vt];$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,Vt,St,xt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,ie,Vt,St,xt.image[J])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),Y.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function bt(A,b,B,q,tt,Y){let At=r.convert(B.format,B.colorSpace),pt=r.convert(B.type),Mt=_(B.internalFormat,At,pt,B.colorSpace),ee=n.get(b),rt=n.get(B);if(rt.__renderTarget=b,!ee.__hasExternalTextures){let wt=Math.max(1,b.width>>Y),Ht=Math.max(1,b.height>>Y);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,Mt,wt,Ht,b.depth,0,At,pt,null):e.texImage2D(tt,Y,Mt,wt,Ht,0,At,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,tt,rt.__webglTexture,0,nt(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,tt,rt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(A,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let q=b.depthTexture,tt=q&&q.isDepthTexture?q.type:null,Y=v(b.stencilBuffer,tt),At=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=nt(b);Et(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Y,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Y,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Y,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,A)}else{let q=b.textures;for(let tt=0;tt<q.length;tt++){let Y=q[tt],At=r.convert(Y.format,Y.colorSpace),pt=r.convert(Y.type),Mt=_(Y.internalFormat,At,pt,Y.colorSpace),ee=nt(b);B&&Et(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Mt,b.width,b.height):Et(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Mt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(b.depthTexture);q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);let tt=q.__webglTexture,Y=nt(b);if(b.depthTexture.format===bs)Et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(b.depthTexture.format===Cs)Et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Gt(A){let b=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",tt)};q.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=q}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");zt(b.__webglFramebuffer,A)}else if(B){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=i.createRenderbuffer(),ct(b.__webglDepthbuffer[q],A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ct(b.__webglDepthbuffer,A,!1);else{let q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(A,b,B){let q=n.get(A);b!==void 0&&bt(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Gt(A)}function se(A){let b=A.texture,B=n.get(A),q=n.get(b);A.addEventListener("dispose",I);let tt=A.textures,Y=A.isWebGLCubeRenderTarget===!0,At=tt.length>1;if(At||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=b.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)B.__webglFramebuffer[pt][Mt]=i.createFramebuffer()}else B.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)B.__webglFramebuffer[pt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(At)for(let pt=0,Mt=tt.length;pt<Mt;pt++){let ee=n.get(tt[pt]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Et(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pt=0;pt<tt.length;pt++){let Mt=tt[pt];B.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);let ee=r.convert(Mt.format,Mt.colorSpace),rt=r.convert(Mt.type),wt=_(Mt.internalFormat,ee,rt,Mt.colorSpace,A.isXRRenderTarget===!0),Ht=nt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,wt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,B.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)bt(B.__webglFramebuffer[pt][Mt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else bt(B.__webglFramebuffer[pt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let pt=0,Mt=tt.length;pt<Mt;pt++){let ee=tt[pt],rt=n.get(ee);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Bt(i.TEXTURE_2D,ee),bt(B.__webglFramebuffer,A,ee,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),g(ee)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,q.__webglTexture),Bt(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)bt(B.__webglFramebuffer[Mt],A,b,i.COLOR_ATTACHMENT0,pt,Mt);else bt(B.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,pt,0);g(b)&&p(pt),e.unbindTexture()}A.depthBuffer&&Gt(A)}function j(A){let b=A.textures;for(let B=0,q=b.length;B<q;B++){let tt=b[B];if(g(tt)){let Y=y(A),At=n.get(tt).__webglTexture;e.bindTexture(Y,At),p(Y),e.unbindTexture()}}}let ot=[],C=[];function Ut(A){if(A.samples>0){if(Et(A)===!1){let b=A.textures,B=A.width,q=A.height,tt=i.COLOR_BUFFER_BIT,Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(A),pt=b.length>1;if(pt)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Mt]);let ee=n.get(b[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,tt,i.NEAREST),l===!0&&(ot.length=0,C.length=0,ot.push(i.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ot.push(Y),C.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Mt]);let ee=n.get(b[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function nt(A){return Math.min(s.maxSamples,A.samples)}function Et(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ut(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Ot(A,b){let B=A.colorSpace,q=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ns&&B!==vi&&(re.getTransfer(B)===pe?(q!==dn||tt!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function _t(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=F,this.rebindTextures=kt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Et}function yy(i,t){function e(n,s=vi){let r,o=re.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===$c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hd)return i.BYTE;if(n===ud)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===Yc)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Ar)return i.HALF_FLOAT;if(n===fd)return i.ALPHA;if(n===pd)return i.RGB;if(n===dn)return i.RGBA;if(n===md)return i.LUMINANCE;if(n===gd)return i.LUMINANCE_ALPHA;if(n===bs)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===Jc)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===xd)return i.RG;if(n===Qc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===_o||n===Mo||n===bo||n===Eo)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Il||n===Pl||n===Ll||n===Dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ul||n===Nl||n===Fl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ul||n===Nl)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zl||n===Bl||n===Ol||n===Hl||n===kl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Zl||n===Jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ol)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ql)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===Kl||n===Ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wo)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yd||n===jl||n===tc||n===ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function Ey(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ed(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$e&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$e&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),_=y.envMap,v=y.envMapRotation;_&&(g.envMap.value=_,Fi.copy(v),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),g.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler(Fi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(m(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",g));let R=_.program;n.updateUBOMapping(y,R);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let _=u();y.__bindingPointIndex=_;let v=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let _=s[y.id],v=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,I=v.length;T<I;T++){let P=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,M=P.length;E<M;E++){let L=P[E];if(d(L,T,E,R)===!0){let O=L.__offset,z=Array.isArray(L.value)?L.value:[L.value],k=0;for(let $=0;$<z.length;$++){let G=z[$],Q=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+k,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,k),k+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,v,R){let T=y.value,I=_+"_"+v;if(R[I]===void 0)return typeof T=="number"||typeof T=="boolean"?R[I]=T:R[I]=T.clone(),!0;{let P=R[I];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[I]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function m(y){let _=y.uniforms,v=0,R=16;for(let I=0,P=_.length;I<P;I++){let E=Array.isArray(_[I])?_[I]:[_[I]];for(let M=0,L=E.length;M<L;M++){let O=E[M],z=Array.isArray(O.value)?O.value:[O.value];for(let k=0,$=z.length;k<$;k++){let G=z[k],Q=x(G),F=v%R,Z=F%Q.boundary,lt=F+Z;v+=Z,lt!==0&&R-lt<Q.storage&&(v+=R-lt),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=Q.storage}}}let T=v%R;return T>0&&(v+=R-T),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){let _=y.target;_.removeEventListener("dispose",g);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}function co(i,t,e,n,s,r){xs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(js.x=r*xs.x-s*xs.y,js.y=s*xs.x+r*xs.y):js.copy(xs),i.copy(t),i.x+=js.x,i.y+=js.y,i.applyMatrix4(Cd)}function fo(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(ko.fromBufferAttribute(o,s),Vo.fromBufferAttribute(o,r),e.distanceSqToSegment(ko,Vo,ul,$u)>n)return;ul.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ul);if(!(l<t.near||l>t.far))return{distance:l,point:$u.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function Ju(i,t,e,n,s,r,o){let a=_c.distanceSqToPoint(i);if(a<e){let l=new S;_c.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function ih(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function Ku(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Ty(i,t){let e=1-i;return e*e*t}function Ay(i,t){return 2*(1-i)*i*t}function Ry(i,t){return i*i*t}function hr(i,t,e,n){return Ty(i,t)+Ay(i,e)+Ry(i,n)}function Cy(i,t){let e=1-i;return e*e*e*t}function Iy(i,t){let e=1-i;return 3*e*e*i*t}function Py(i,t){return 3*(1-i)*i*i*t}function Ly(i,t){return i*i*i*t}function ur(i,t,e,n,s){return Cy(i,t)+Iy(i,e)+Py(i,n)+Ly(i,s)}function Id(i,t,e,n,s){let r,o;if(s===Zy(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Qu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Qu(r,i[r],i[r+1],o);return o&&la(o,o.next)&&(Sr(o),o=o.next),o}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(la(e,e.next)||we(e.prev,e,e.next)===0)){if(Sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Er(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Gy(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Ny(i,n,s,r):Uy(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Sr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Fy(Gi(i),t,e),Er(i,t,e,n,s,r,2)):o===2&&zy(i,t,e,n,s,r):Er(Gi(i),t,e,n,s,r,1);break}}}function Uy(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&_s(s,a,r,l,o,c,m.x,m.y)&&we(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ny(i,t,e,n){let s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=Ic(d,m,t,e,n),y=Ic(x,g,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&_s(a,h,l,u,c,f,_.x,_.y)&&we(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&_s(a,h,l,u,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&_s(a,h,l,u,c,f,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&_s(a,h,l,u,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Fy(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!la(s,r)&&Pd(s,n,n.next,r)&&wr(s,r)&&wr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Sr(n),Sr(n.next),n=i=r),n=n.next}while(n!==i);return Gi(n)}function zy(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qy(o,a)){let l=Ld(o,a);o=Gi(o,o.next),l=Gi(l,l.next),Er(o,t,e,n,s,r,0),Er(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function By(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Id(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Xy(c));for(s.sort(Oy),r=0;r<s.length;r++)e=Hy(s[r],e);return e}function Oy(i,t){return i.x-t.x}function Hy(i,t){let e=ky(i,t);if(!e)return t;let n=Ld(e,i);return Gi(n,n.next),Gi(e,e.next)}function ky(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&_s(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),wr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Vy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Vy(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function Gy(i,t,e,n){let s=i;do s.z===0&&(s.z=Ic(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wy(s)}function Wy(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Ic(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Xy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _s(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function qy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Yy(i,t)&&(wr(i,t)&&wr(t,i)&&$y(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||la(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function la(i,t){return i.x===t.x&&i.y===t.y}function Pd(i,t,e,n){let s=yo(we(i,t,e)),r=yo(we(i,t,n)),o=yo(we(e,n,i)),a=yo(we(e,n,t));return!!(s!==r&&o!==a||s===0&&xo(i,e,t)||r===0&&xo(i,n,t)||o===0&&xo(e,i,n)||a===0&&xo(e,t,n))}function xo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yo(i){return i>0?1:i<0?-1:0}function Yy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function $y(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ld(i,t){let e=new Pc(i.i,i.x,i.y),n=new Pc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qu(i,t,e,n){let s=new Pc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Zy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function ju(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function td(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function Ky(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function Qy(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function vo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function jy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sd(){return performance.now()}function od(i,t){return i.distance-t.distance}function Wc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Wc(r[o],t,e,!0)}}var Af,Wh,Rf,ad,Xc,Zn,wi,$e,Ie,Mi,Ms,Bn,Xh,qh,Cf,Bi,If,Pf,Lf,Df,Uf,Nf,Ff,zf,xl,yl,Bf,Of,Hf,kf,Vf,Gf,Wf,Xf,qf,vl,_l,Ml,Ss,bl,El,wl,Sl,ld,Yf,$f,bi,Zf,Jf,Kf,qc,Qf,jf,tp,cd,Ts,As,Tl,Al,ra,Rl,Kn,Cl,fn,ep,Hr,un,Fa,Hi,ti,hd,ud,dr,Yc,ki,Fn,Ar,$c,Zc,Rs,dd,fd,pd,dn,md,gd,bs,Cs,Jc,Kc,xd,Qc,jc,_o,Mo,bo,Eo,Il,Pl,Ll,Dl,Ul,Nl,Fl,zl,Bl,Ol,Hl,kl,Vl,Gl,Wl,Xl,ql,Yl,$l,Zl,Jl,wo,Kl,Ql,yd,jl,tc,ec,So,nc,za,Yh,$h,Zh,np,ip,vd,sp,vi,De,Ns,oa,pe,ts,Jh,rp,op,ap,_d,lp,cp,hp,up,ic,qi,Kh,Qn,To,Si,Xe,Qh,ar,fr,eh,it,Yt,Ba,jh,re,tu,eu,nu,iu,su,es,sc,Lp,Ro,Dp,nn,ae,rc,ei,Co,oc,pn,S,Ha,ru,ni,Wn,wn,kr,ns,is,ss,fi,pi,Pi,$s,Vr,Gr,Li,Up,Zs,Va,ii,Xn,Ga,Wr,mi,Wa,Xr,Xa,Is,ne,rs,Sn,Np,Fp,gi,qr,cn,ou,au,vn,pr,zp,lu,os,qn,Yr,Js,Bp,Op,cu,hu,uu,du,Hp,as,qa,Pe,Tn,Yn,Ya,$n,ls,cs,fu,$a,Za,Ja,Ka,Qa,ja,_i,bd,xi,$r,dt,qe,kp,On,sn,Ce,Zr,le,Io,Po,Kt,Vp,yn,el,hs,hn,Ks,Be,me,pu,Di,Jr,mu,Kr,Qr,jr,nl,to,gu,eo,et,Tt,Xp,qp,Yp,Ze,Lo,yi,xu,yu,Ye,us,ds,ac,Do,lc,il,$p,Zp,Jn,Ui,io,mr,Ue,Kp,Qp,jp,tm,em,nm,im,sm,rm,om,am,lm,cm,hm,um,dm,fm,pm,mm,gm,xm,ym,vm,_m,Mm,bm,Em,wm,Sm,Tm,Am,Rm,Cm,Im,Pm,Lm,Dm,Um,Nm,Fm,zm,Bm,Om,Hm,km,Vm,Gm,Wm,Xm,qm,Ym,$m,Zm,Jm,Km,Qm,jm,t0,e0,n0,i0,s0,r0,o0,a0,l0,c0,h0,u0,d0,f0,p0,m0,g0,x0,y0,v0,_0,M0,b0,E0,w0,S0,T0,A0,R0,C0,I0,P0,L0,D0,U0,N0,F0,z0,B0,O0,H0,k0,V0,G0,W0,X0,q0,Y0,$0,Z0,J0,K0,Q0,j0,tg,eg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,xg,yg,vg,_g,Mg,bg,Eg,wg,Sg,Tg,Ag,Rg,Cg,Zt,ft,Nn,so,Ni,Ig,Uo,vs,vu,Oi,sl,_u,rl,ol,al,ll,zi,fs,Mu,No,Fo,Sd,Su,Td,Ad,Rd,Tu,Au,Ru,Cu,Iu,cc,hc,uc,cl,ws,Dx,Ux,Du,oo,Gx,Wx,qx,ty,fc,pc,ay,mc,gc,uy,dy,py,xc,Pt,vy,cr,_y,My,yc,vc,Fi,by,zo,Bo,Oo,Ho,Qe,gr,si,ps,Qs,ms,gs,xs,js,Cd,ao,tr,lo,Gu,hl,Wu,Ti,xr,yr,ys,Xu,ho,qu,Sy,er,nr,Vi,vr,ko,Vo,Yu,ir,uo,ul,$u,Go,_r,Zu,_c,po,mo,Ls,ri,_n,Mr,Mc,go,dl,fl,pl,bc,Wo,Ec,Xo,wc,qo,Sc,Yo,Tc,Ac,br,Rc,$o,Zo,Ft,Re,Cc,oi,Dy,Ei,Ai,Jy,Rn,Jo,Ko,ve,Qo,Lt,Ds,Lc,Dc,Uc,Cn,Wi,Nc,Fc,zc,jo,Xi,Bc,Oc,tv,Hc,Tr,ta,ml,ed,nd,ea,id,sr,gl,kc,Us,Vc,na,ia,sh,ev,rh,nv,iv,sv,rv,ov,av,lv,Gc,Ee,Lv,rd,sa,He=ye(()=>{Af=0,Wh=1,Rf=2,ad=1,Xc=2,Zn=3,wi=0,$e=1,Ie=2,Mi=0,Ms=1,Bn=2,Xh=3,qh=4,Cf=5,Bi=100,If=101,Pf=102,Lf=103,Df=104,Uf=200,Nf=201,Ff=202,zf=203,xl=204,yl=205,Bf=206,Of=207,Hf=208,kf=209,Vf=210,Gf=211,Wf=212,Xf=213,qf=214,vl=0,_l=1,Ml=2,Ss=3,bl=4,El=5,wl=6,Sl=7,ld=0,Yf=1,$f=2,bi=0,Zf=1,Jf=2,Kf=3,qc=4,Qf=5,jf=6,tp=7,cd=300,Ts=301,As=302,Tl=303,Al=304,ra=306,Rl=1e3,Kn=1001,Cl=1002,fn=1003,ep=1004,Hr=1005,un=1006,Fa=1007,Hi=1008,ti=1009,hd=1010,ud=1011,dr=1012,Yc=1013,ki=1014,Fn=1015,Ar=1016,$c=1017,Zc=1018,Rs=1020,dd=35902,fd=1021,pd=1022,dn=1023,md=1024,gd=1025,bs=1026,Cs=1027,Jc=1028,Kc=1029,xd=1030,Qc=1031,jc=1033,_o=33776,Mo=33777,bo=33778,Eo=33779,Il=35840,Pl=35841,Ll=35842,Dl=35843,Ul=36196,Nl=37492,Fl=37496,zl=37808,Bl=37809,Ol=37810,Hl=37811,kl=37812,Vl=37813,Gl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,$l=37819,Zl=37820,Jl=37821,wo=36492,Kl=36494,Ql=36495,yd=36283,jl=36284,tc=36285,ec=36286,So=2300,nc=2301,za=2302,Yh=2400,$h=2401,Zh=2402,np=3200,ip=3201,vd=0,sp=1,vi="",De="srgb",Ns="srgb-linear",oa="linear",pe="srgb",ts=7680,Jh=519,rp=512,op=513,ap=514,_d=515,lp=516,cp=517,hp=518,up=519,ic=35044,qi=35048,Kh="300 es",Qn=2e3,To=2001,Si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=1234567,ar=Math.PI/180,fr=180/Math.PI;eh={DEG2RAD:ar,RAD2DEG:fr,generateUUID:zn,clamp:Oe,euclideanModulo:th,mapLinear:dp,inverseLerp:fp,lerp:lr,damp:pp,pingpong:mp,smoothstep:gp,smootherstep:xp,randInt:yp,randFloat:vp,randFloatSpread:_p,seededRandom:Mp,degToRad:bp,radToDeg:Ep,isPowerOfTwo:wp,ceilPowerOfTwo:Sp,floorPowerOfTwo:Tp,setQuaternionFromProperEuler:Ap,normalize:fe,denormalize:An},it=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],_=s[4],v=s[7],R=s[2],T=s[5],I=s[8];return r[0]=o*x+a*y+l*R,r[3]=o*g+a*_+l*T,r[6]=o*p+a*v+l*I,r[1]=c*x+h*y+u*R,r[4]=c*g+h*_+u*T,r[7]=c*p+h*v+u*I,r[2]=f*x+d*y+m*R,r[5]=f*g+d*_+m*T,r[8]=f*p+d*v+m*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ba=new Yt;jh={};re={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?oa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};tu=[.64,.33,.3,.6,.15,.06],eu=[.2126,.7152,.0722],nu=[.3127,.329],iu=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[Ns]:{primaries:tu,whitePoint:nu,transfer:oa,toXYZ:iu,fromXYZ:su,luminanceCoefficients:eu,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:tu,whitePoint:nu,transfer:pe,toXYZ:iu,fromXYZ:su,luminanceCoefficients:eu,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});sc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=Ao("canvas")),es.width=t.width,es.height=t.height;let n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lp=0,Ro=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oa(s[o].image)):r.push(Oa(s[o]))}else r=Oa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};Dp=0,nn=class i extends Si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=un,o=Hi,a=dn,l=ti,c=i.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=zn(),this.name="",this.source=new Ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rl:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rl:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=cd;nn.DEFAULT_ANISOTROPY=1;ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,R=(p+1)/2,T=(h+f)/4,I=(u+x)/4,P=(m+g)/4;return _>v&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=I/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rc=class extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ro(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends rc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Co=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},oc=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-a,p=l*f+c*d+h*m+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,p*y);g=Math.sin(g*T)/R,a=Math.sin(a*T)/R}let v=a*y;if(l=l*g+f*v,c=c*g+d*v,h=h*g+m*v,u=u*g+x*v,g===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ru.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ru.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ha.copy(this).projectOnVector(t),this.sub(Ha)}reflect(t){return this.sub(Ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ha=new S,ru=new pn,ni=class{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Vr.subVectors(this.max,$s),ns.subVectors(t.a,$s),is.subVectors(t.b,$s),ss.subVectors(t.c,$s),fi.subVectors(is,ns),pi.subVectors(ss,is),Pi.subVectors(ns,ss);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Pi.z,Pi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Pi.z,0,-Pi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Pi.y,Pi.x,0];return!ka(e,ns,is,ss,Vr)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,ns,is,ss,Vr))?!1:(Gr.crossVectors(fi,pi),e=[Gr.x,Gr.y,Gr.z],ka(e,ns,is,ss,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new S,new S,new S,new S,new S,new S,new S,new S],wn=new S,kr=new ni,ns=new S,is=new S,ss=new S,fi=new S,pi=new S,Pi=new S,$s=new S,Vr=new S,Gr=new S,Li=new S;Up=new ni,Zs=new S,Va=new S,ii=class{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Up.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(Va)),this.expandByPoint(Zs.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new S,Ga=new S,Wr=new S,mi=new S,Wa=new S,Xr=new S,Xa=new S,Is=class{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ga.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(Ga);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Wr),a=mi.dot(this.direction),l=-mi.dot(Wr),c=mi.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ga).addScaledVector(Wr,f),d}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){Wa.subVectors(e,t),Xr.subVectors(n,t),Xa.crossVectors(Wa,Xr);let o=this.direction.dot(Xa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);let l=a*this.direction.dot(Xr.crossVectors(mi,Xr));if(l<0)return null;let c=a*this.direction.dot(Wa.cross(mi));if(c<0||l+c>o)return null;let h=-a*mi.dot(Xa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Np,t,Fp)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),gi.crossVectors(n,cn),gi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),gi.crossVectors(n,cn)),gi.normalize(),qr.crossVectors(cn,gi),s[0]=gi.x,s[4]=qr.x,s[8]=cn.x,s[1]=gi.y,s[5]=qr.y,s[9]=cn.y,s[2]=gi.z,s[6]=qr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],_=n[7],v=n[11],R=n[15],T=s[0],I=s[4],P=s[8],E=s[12],M=s[1],L=s[5],O=s[9],z=s[13],k=s[2],$=s[6],G=s[10],Q=s[14],F=s[3],Z=s[7],lt=s[11],mt=s[15];return r[0]=o*T+a*M+l*k+c*F,r[4]=o*I+a*L+l*$+c*Z,r[8]=o*P+a*O+l*G+c*lt,r[12]=o*E+a*z+l*Q+c*mt,r[1]=h*T+u*M+f*k+d*F,r[5]=h*I+u*L+f*$+d*Z,r[9]=h*P+u*O+f*G+d*lt,r[13]=h*E+u*z+f*Q+d*mt,r[2]=m*T+x*M+g*k+p*F,r[6]=m*I+x*L+g*$+p*Z,r[10]=m*P+x*O+g*G+p*lt,r[14]=m*E+x*z+g*Q+p*mt,r[3]=y*T+_*M+v*k+R*F,r[7]=y*I+_*L+v*$+R*Z,r[11]=y*P+_*O+v*G+R*lt,r[15]=y*E+_*z+v*Q+R*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=u*g*c-x*f*c+x*l*d-a*g*d-u*l*p+a*f*p,_=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,v=h*x*c-m*u*c+m*a*d-o*x*d-h*a*p+o*u*p,R=m*u*l-h*x*l-m*a*f+o*x*f+h*a*g-o*u*g,T=e*y+n*_+s*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return t[0]=y*I,t[1]=(x*f*r-u*g*r-x*s*d+n*g*d+u*s*p-n*f*p)*I,t[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*I,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*I,t[4]=_*I,t[5]=(h*g*r-m*f*r+m*s*d-e*g*d-h*s*p+e*f*p)*I,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*I,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*I,t[8]=v*I,t[9]=(m*u*r-h*x*r-m*n*d+e*x*d+h*n*p-e*u*p)*I,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*p+e*a*p)*I,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*I,t[12]=R*I,t[13]=(h*x*s-m*u*s+m*n*f-e*x*f-h*n*g+e*u*g)*I,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*g-e*a*g)*I,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,y=l*c,_=l*h,v=l*u,R=n.x,T=n.y,I=n.z;return s[0]=(1-(x+p))*R,s[1]=(d+v)*R,s[2]=(m-_)*R,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(f+p))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(m+_)*I,s[9]=(g-y)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);let c=1/r,h=1/o,u=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,m;if(a===Qn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===To)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,m,x;if(a===Qn)m=(o+r)*u,x=-2*u;else if(a===To)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},rs=new S,Sn=new ne,Np=new S(0,0,0),Fp=new S(1,1,1),gi=new S,qr=new S,cn=new S,ou=new ne,au=new pn,vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ou,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return au.setFromEuler(this),this.setFromQuaternion(au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zp=0,lu=new S,os=new pn,qn=new ne,Yr=new S,Js=new S,Bp=new S,Op=new pn,cu=new S(1,0,0),hu=new S(0,1,0),uu=new S(0,0,1),du={type:"added"},Hp={type:"removed"},as={type:"childadded",child:null},qa={type:"childremoved",child:null},Pe=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new S,e=new vn,n=new pn,s=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Yt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(hu,t)}rotateZ(t){return this.rotateOnAxis(uu,t)}translateOnAxis(t,e){return lu.copy(t).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(hu,t)}translateZ(t){return this.translateOnAxis(uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Js,Yr,this.up):qn.lookAt(Yr,Js,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(qn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(du),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hp),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(du),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,Bp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new S(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Tn=new S,Yn=new S,Ya=new S,$n=new S,ls=new S,cs=new S,fu=new S,$a=new S,Za=new S,Ja=new S,Ka=new ae,Qa=new ae,ja=new ae,_i=class i{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),Yn.subVectors(n,e),Ya.subVectors(t,e);let o=Tn.dot(Tn),a=Tn.dot(Yn),l=Tn.dot(Ya),c=Yn.dot(Yn),h=Yn.dot(Ya),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ka.setScalar(0),Qa.setScalar(0),ja.setScalar(0),Ka.fromBufferAttribute(t,e),Qa.fromBufferAttribute(t,n),ja.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector(Qa,r.y),o.addScaledVector(ja,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),Yn.subVectors(t,e),Tn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ls.subVectors(s,n),cs.subVectors(r,n),$a.subVectors(t,n);let l=ls.dot($a),c=cs.dot($a);if(l<=0&&c<=0)return e.copy(n);Za.subVectors(t,s);let h=ls.dot(Za),u=cs.dot(Za);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ls,o);Ja.subVectors(t,r);let d=ls.dot(Ja),m=cs.dot(Ja);if(m>=0&&d<=m)return e.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(cs,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return fu.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(fu,a);let p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},$r={h:0,s:0,l:0};dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=th(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=tl(o,r,t+1/3),this.g=tl(o,r,t),this.b=tl(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=bd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return re.fromWorkingColorSpace(qe.copy(this),t),Math.round(Oe(qe.r*255,0,255))*65536+Math.round(Oe(qe.g*255,0,255))*256+Math.round(Oe(qe.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=De){re.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL($r);let n=lr(xi.h,$r.h,e),s=lr(xi.s,$r.s,e),r=lr(xi.l,$r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new dt;dt.NAMES=bd;kp=0,On=class extends Si{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=zn(),this.name="",this.blending=Ms,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=yl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xl&&(n.blendSrc=this.blendSrc),this.blendDst!==yl&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},sn=class extends On{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ce=new S,Zr=new it,le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ic,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ic&&(t.usage=this.usage),t}},Io=class extends le{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Po=class extends le{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Kt=class extends le{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vp=0,yn=new ne,el=new Pe,hs=new S,hn=new ni,Ks=new ni,Be=new S,me=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Md(t)?Po:Io)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return el.lookAt(t),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(hn.min,Ks.min),hn.expandByPoint(Be),Be.addVectors(hn.max,Ks.max),hn.expandByPoint(Be)):(hn.expandByPoint(Ks.min),hn.expandByPoint(Ks.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),Be.add(hs)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new S,l[P]=new S;let c=new S,h=new S,u=new S,f=new it,d=new it,m=new it,x=new S,g=new S;function p(P,E,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),a[P].add(x),a[E].add(x),a[M].add(x),l[P].add(g),l[E].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,E=y.length;P<E;++P){let M=y[P],L=M.start,O=M.count;for(let z=L,k=L+O;z<k;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let _=new S,v=new S,R=new S,T=new S;function I(P){R.fromBufferAttribute(s,P),T.copy(R);let E=a[P];_.copy(E),_.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(T,E);let L=v.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,L)}for(let P=0,E=y.length;P<E;++P){let M=y[P],L=M.start,O=M.count;for(let z=L,k=L+O;z<k;z+=3)I(t.getX(z+0)),I(t.getX(z+1)),I(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new S,r=new S,o=new S,a=new S,l=new S,c=new S,h=new S,u=new S;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new le(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pu=new ne,Di=new Is,Jr=new ii,mu=new S,Kr=new S,Qr=new S,jr=new S,nl=new S,to=new S,gu=new S,eo=new S,et=class extends Pe{constructor(t=new me,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(nl.fromBufferAttribute(u,t),o?to.addScaledVector(nl,h):to.addScaledVector(nl.sub(e),h))}e.add(to)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(Jr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Jr,mu)===null||Di.origin.distanceToSquared(mu)>(t.far-t.near)**2))&&(pu.copy(r).invert(),Di.copy(t.ray).applyMatrix4(pu),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,R=_;v<R;v+=3){let T=a.getX(v),I=a.getX(v+1),P=a.getX(v+2);s=no(this,p,t,n,c,h,u,T,I,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=no(this,o,t,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,R=_;v<R;v+=3){let T=v,I=v+1,P=v+2;s=no(this,p,t,n,c,h,u,T,I,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let y=g,_=g+1,v=g+2;s=no(this,o,t,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};Tt=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function m(x,g,p,y,_,v,R,T,I,P,E){let M=v/I,L=R/P,O=v/2,z=R/2,k=T/2,$=I+1,G=P+1,Q=0,F=0,Z=new S;for(let lt=0;lt<G;lt++){let mt=lt*L-z;for(let Bt=0;Bt<$;Bt++){let te=Bt*M-O;Z[x]=te*y,Z[g]=mt*_,Z[p]=k,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[p]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Bt/I),u.push(1-lt/P),Q+=1}}for(let lt=0;lt<P;lt++)for(let mt=0;mt<I;mt++){let Bt=f+mt+$*lt,te=f+mt+$*(lt+1),X=f+(mt+1)+$*(lt+1),st=f+(mt+1)+$*lt;l.push(Bt,te,st),l.push(te,X,st),F+=6}a.addGroup(d,F,E),d+=F,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};Xp={clone:Ps,merge:je},qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends On{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=Wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Lo=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yi=new S,xu=new it,yu=new it,Ye=class extends Lo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,xu,yu),e.subVectors(yu,xu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ar*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},us=-90,ds=1,ac=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(us,ds,t,e);s.layers=this.layers,this.add(s);let r=new Ye(us,ds,t,e);r.layers=this.layers,this.add(r);let o=new Ye(us,ds,t,e);o.layers=this.layers,this.add(o);let a=new Ye(us,ds,t,e);a.layers=this.layers,this.add(a);let l=new Ye(us,ds,t,e);l.layers=this.layers,this.add(l);let c=new Ye(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Do=class extends nn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},lc=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Do(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tt(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Mi});r.uniforms.tEquirect.value=e;let o=new et(s,r),a=e.minFilter;return e.minFilter===Hi&&(e.minFilter=un),new ac(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},il=new S,$p=new S,Zp=new Yt,Jn=class{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=il.subVectors(n,e).cross($p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(il),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zp.getNormalMatrix(t),s=this.coplanarPoint(il).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new ii,io=new S,mr=class{constructor(t=new Jn,e=new Jn,n=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],x=s[10],g=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,g-d,v-p).normalize(),n[1].setComponents(l+r,f+c,g+d,v+p).normalize(),n[2].setComponents(l+o,f+h,g+m,v+y).normalize(),n[3].setComponents(l-o,f-h,g-m,v-y).normalize(),n[4].setComponents(l-a,f-u,g-x,v-_).normalize(),e===Qn)n[5].setComponents(l+a,f+u,g+x,v+_).normalize();else if(e===To)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ue=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*f-o;for(let _=0;_<c;_++){let v=_*u-r;m.push(v,-y,0),x.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let _=y+c*p,v=y+c*(p+1),R=y+1+c*(p+1),T=y+1+c*p;d.push(_,v,T),d.push(v,R,T)}this.setIndex(d),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qp=`#ifdef USE_ALPHAHASH
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
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
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
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
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
#endif`,om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hm=`#ifdef USE_IRIDESCENCE
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
#endif`,um=`#ifdef USE_BUMPMAP
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_m=`#define PI 3.141592653589793
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
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bm=`vec3 transformedNormal = objectNormal;
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
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bm=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
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
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
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
#endif`,Zm=`struct PhysicalMaterial {
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
}`,Jm=`
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,H0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,xg=`#define NORMAL
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
}`,yg=`#define PHONG
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
}`,vg=`#define PHONG
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
}`,_g=`#define STANDARD
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
}`,Mg=`#define STANDARD
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
}`,bg=`#define TOON
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
}`,Eg=`#define TOON
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
}`,wg=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,Rg=`uniform float rotation;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Kp,alphahash_pars_fragment:Qp,alphamap_fragment:jp,alphamap_pars_fragment:tm,alphatest_fragment:em,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,batching_pars_vertex:rm,batching_vertex:om,begin_vertex:am,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:um,clipping_planes_fragment:dm,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:xm,color_pars_vertex:ym,color_vertex:vm,common:_m,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:bm,displacementmap_pars_vertex:Em,displacementmap_vertex:wm,emissivemap_fragment:Sm,emissivemap_pars_fragment:Tm,colorspace_fragment:Am,colorspace_pars_fragment:Rm,envmap_fragment:Cm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Pm,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Gm,envmap_vertex:Dm,fog_vertex:Um,fog_pars_vertex:Nm,fog_fragment:Fm,fog_pars_fragment:zm,gradientmap_pars_fragment:Bm,lightmap_pars_fragment:Om,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:km,lights_pars_begin:Vm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:qm,lights_phong_pars_fragment:Ym,lights_physical_fragment:$m,lights_physical_pars_fragment:Zm,lights_fragment_begin:Jm,lights_fragment_maps:Km,lights_fragment_end:Qm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:o0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:l0,morphinstance_vertex:c0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:x0,normal_vertex:y0,normalmap_pars_fragment:v0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:E0,opaque_fragment:w0,packing:S0,premultiplied_alpha_fragment:T0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:D0,shadowmap_vertex:U0,shadowmask_pars_fragment:N0,skinbase_vertex:F0,skinning_pars_vertex:z0,skinning_vertex:B0,skinnormal_vertex:O0,specularmap_fragment:H0,specularmap_pars_fragment:k0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:q0,uv_pars_vertex:Y0,uv_vertex:$0,worldpos_vertex:Z0,background_vert:J0,background_frag:K0,backgroundCube_vert:Q0,backgroundCube_frag:j0,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:og,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:xg,meshphong_vert:yg,meshphong_frag:vg,meshphysical_vert:_g,meshphysical_frag:Mg,meshtoon_vert:bg,meshtoon_frag:Eg,points_vert:wg,points_frag:Sg,shadow_vert:Tg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},ft={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Nn={basic:{uniforms:je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new dt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:je([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:je([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new dt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:je([ft.points,ft.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:je([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:je([ft.common,ft.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:je([ft.sprite,ft.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:je([ft.common,ft.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:je([ft.lights,ft.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Nn.physical={uniforms:je([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};so={r:0,b:0,g:0},Ni=new vn,Ig=new ne;Uo=class extends Lo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vs=4,vu=[.125,.215,.35,.446,.526,.582],Oi=20,sl=new Uo,_u=new dt,rl=null,ol=0,al=0,ll=!1,zi=(1+Math.sqrt(5))/2,fs=1/zi,Mu=[new S(-zi,fs,0),new S(zi,fs,0),new S(-fs,0,zi),new S(fs,0,zi),new S(0,zi,-fs),new S(0,zi,fs),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],No=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rl,ol,al),this._renderer.xr.enabled=ll,t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ar,format:dn,colorSpace:Ns,depthBuffer:!1},s=bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Bg(r,t,e)}return s}_compileMaterial(t){let e=new et(this._lodPlanes[0],t);this._renderer.compile(e,sl)}_sceneToCubeUV(t,e,n,s){let a=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(_u),h.toneMapping=bi,h.autoClear=!1;let d=new sn({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),m=new et(new Tt,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(_u),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;ro(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ts||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ro(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,sl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mu[(s-r-1)%Mu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new et(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Oi;g>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Oi}`);let p=[],y=0;for(let I=0;I<Oi;++I){let P=I/x,E=Math.exp(-P*P/2);p.push(E),I===0?y+=E:I<g&&(y+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/y;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;let v=this._sizeLods[s],R=3*v*(s>_-vs?s-_+vs:0),T=4*(this._cubeSize-v);ro(e,R,T,3*v,2*v),l.setRenderTarget(e),l.render(u,sl)}};Fo=class extends nn{constructor(t,e,n,s,r,o,a,l,c,h=bs){if(h!==bs&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bs&&(n=ki),n===void 0&&h===Cs&&(n=Rs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Sd=new nn,Su=new Fo(1,1),Td=new Co,Ad=new oc,Rd=new Do,Tu=[],Au=[],Ru=new Float32Array(16),Cu=new Float32Array(9),Iu=new Float32Array(4);cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ux(e.type)}},hc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Px(e.type)}},uc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},cl=/(\w+)(\])?(\[|\.)?/g;ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Lx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};Dx=37297,Ux=0;Du=new Yt;oo=new S;Gx=/^[ \t]*#include +<([\w\d./]+)>/gm;Wx=new Map;qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;ty=0,fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new pc(t),e.set(t,n)),n}},pc=class{constructor(t){this.id=ty++,this.code=t,this.usedTimes=0}};ay=0;mc=class extends On{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},gc=class extends On{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dy=`uniform sampler2D shadow_pass;
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
}`;py={[vl]:_l,[Ml]:wl,[bl]:Sl,[Ss]:El,[_l]:vl,[wl]:Ml,[Sl]:bl,[El]:Ss};xc=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Pt=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},vy={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,My=`
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

}`,yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new nn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ze({vertexShader:_y,fragmentShader:My,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vc=class extends Si{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=new yc,g=e.getContextAttributes(),p=null,y=null,_=[],v=[],R=new it,T=null,I=new Ye;I.viewport=new ae;let P=new Ye;P.viewport=new ae;let E=[I,P],M=new xc,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let st=_[X];return st===void 0&&(st=new cr,_[X]=st),st.getTargetRaySpace()},this.getControllerGrip=function(X){let st=_[X];return st===void 0&&(st=new cr,_[X]=st),st.getGripSpace()},this.getHand=function(X){let st=_[X];return st===void 0&&(st=new cr,_[X]=st),st.getHandSpace()};function z(X){let st=v.indexOf(X.inputSource);if(st===-1)return;let bt=_[st];bt!==void 0&&(bt.update(X.inputSource,X.frame,c||o),bt.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",$);for(let X=0;X<_.length;X++){let st=v[X];st!==null&&(v[X]=null,_[X].disconnect(st))}L=null,O=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,y=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ei(d.framebufferWidth,d.framebufferHeight,{format:dn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,bt=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?Cs:bs,bt=g.stencil?Rs:ki);let zt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ei(f.textureWidth,f.textureHeight,{format:dn,type:ti,depthTexture:new Fo(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(X){for(let st=0;st<X.removed.length;st++){let bt=X.removed[st],ct=v.indexOf(bt);ct>=0&&(v[ct]=null,_[ct].disconnect(bt))}for(let st=0;st<X.added.length;st++){let bt=X.added[st],ct=v.indexOf(bt);if(ct===-1){for(let Gt=0;Gt<_.length;Gt++)if(Gt>=v.length){v.push(bt),ct=Gt;break}else if(v[Gt]===null){v[Gt]=bt,ct=Gt;break}if(ct===-1)break}let zt=_[ct];zt&&zt.connect(bt)}}let G=new S,Q=new S;function F(X,st,bt){G.setFromMatrixPosition(st.matrixWorld),Q.setFromMatrixPosition(bt.matrixWorld);let ct=G.distanceTo(Q),zt=st.projectionMatrix.elements,Gt=bt.projectionMatrix.elements,kt=zt[14]/(zt[10]-1),se=zt[14]/(zt[10]+1),j=(zt[9]+1)/zt[5],ot=(zt[9]-1)/zt[5],C=(zt[8]-1)/zt[0],Ut=(Gt[8]+1)/Gt[0],nt=kt*C,Et=kt*Ut,ut=ct/(-C+Ut),Ot=ut*-C;if(st.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ot),X.translateZ(ut),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),zt[10]===-1)X.projectionMatrix.copy(st.projectionMatrix),X.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let _t=kt+ut,A=se+ut,b=nt-Ot,B=Et+(ct-Ot),q=j*se/A*_t,tt=ot*se/A*_t;X.projectionMatrix.makePerspective(b,B,q,tt,_t,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Z(X,st){st===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(st.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let st=X.near,bt=X.far;x.texture!==null&&(x.depthNear>0&&(st=x.depthNear),x.depthFar>0&&(bt=x.depthFar)),M.near=P.near=I.near=st,M.far=P.far=I.far=bt,(L!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,O=M.far),I.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,M.layers.mask=I.layers.mask|P.layers.mask;let ct=X.parent,zt=M.cameras;Z(M,ct);for(let Gt=0;Gt<zt.length;Gt++)Z(zt[Gt],ct);zt.length===2?F(M,I,P):M.projectionMatrix.copy(I.projectionMatrix),lt(X,M,ct)};function lt(X,st,bt){bt===null?X.matrix.copy(st.matrixWorld):(X.matrix.copy(bt.matrixWorld),X.matrix.invert(),X.matrix.multiply(st.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(st.projectionMatrix),X.projectionMatrixInverse.copy(st.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=fr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let mt=null;function Bt(X,st){if(h=st.getViewerPose(c||o),m=st,h!==null){let bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ct=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,ct=!0);for(let Gt=0;Gt<bt.length;Gt++){let kt=bt[Gt],se=null;if(d!==null)se=d.getViewport(kt);else{let ot=u.getViewSubImage(f,kt);se=ot.viewport,Gt===0&&(t.setRenderTargetTextures(y,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(y))}let j=E[Gt];j===void 0&&(j=new Ye,j.layers.enable(Gt),j.viewport=new ae,E[Gt]=j),j.matrix.fromArray(kt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(kt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(se.x,se.y,se.width,se.height),Gt===0&&(M.matrix.copy(j.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ct===!0&&M.cameras.push(j)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Gt=u.getDepthInformation(bt[0]);Gt&&Gt.isValid&&Gt.texture&&x.init(t,Gt,s.renderState)}}for(let bt=0;bt<_.length;bt++){let ct=v[bt],zt=_[bt];ct!==null&&zt!==void 0&&zt.update(ct,st,c||o)}mt&&mt(X,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}let te=new wd;te.setAnimationLoop(Bt),this.setAnimationLoop=function(X){mt=X},this.dispose=function(){}}},Fi=new vn,by=new ne;zo=class{constructor(t={}){let{canvas:e=Rp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=bi,this.toneMappingExposure=1;let v=this,R=!1,T=0,I=0,P=null,E=-1,M=null,L=new ae,O=new ae,z=null,k=new dt(0),$=0,G=e.width,Q=e.height,F=1,Z=null,lt=null,mt=new ae(0,0,G,Q),Bt=new ae(0,0,G,Q),te=!1,X=new mr,st=!1,bt=!1,ct=new ne,zt=new ne,Gt=new S,kt=new ae,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function ot(){return P===null?F:1}let C=n;function Ut(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),C===null){let U="webgl2";if(C=Ut(U,w),C===null)throw Ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let nt,Et,ut,Ot,_t,A,b,B,q,tt,Y,At,pt,Mt,ee,rt,wt,Ht,Vt,St,ie,$t,ge,D;function gt(){nt=new Hg(C),nt.init(),$t=new yy(C,nt),Et=new Ug(C,nt,t,$t),ut=new my(C,nt),Et.reverseDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),Ot=new Gg(C),_t=new ny,A=new xy(C,nt,ut,_t,Et,$t,Ot),b=new Fg(v),B=new Og(v),q=new Jp(C),ge=new Lg(C,q),tt=new kg(C,q,Ot,ge),Y=new Xg(C,tt,q,Ot),Vt=new Wg(C,Et,A),rt=new Ng(_t),At=new ey(v,b,B,nt,Et,ge,rt),pt=new Ey(v,_t),Mt=new sy,ee=new hy(nt),Ht=new Pg(v,b,B,ut,Y,d,l),wt=new fy(v,Y,Et),D=new wy(C,Ot,Et,ut),St=new Dg(C,nt,Ot),ie=new Vg(C,nt,Ot),Ot.programs=At.programs,v.capabilities=Et,v.extensions=nt,v.properties=_t,v.renderLists=Mt,v.shadowMap=wt,v.state=ut,v.info=Ot}gt();let W=new vc(v,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(G,Q,!1))},this.getSize=function(w){return w.set(G,Q)},this.setSize=function(w,U,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,Q=U,e.width=Math.floor(w*F),e.height=Math.floor(U*F),H===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(G*F,Q*F).floor()},this.setDrawingBufferSize=function(w,U,H){G=w,Q=U,F=H,e.width=Math.floor(w*H),e.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(mt)},this.setViewport=function(w,U,H,V){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,U,H,V),ut.viewport(L.copy(mt).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(Bt)},this.setScissor=function(w,U,H,V){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,U,H,V),ut.scissor(O.copy(Bt).multiplyScalar(F).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(w){ut.setScissorTest(te=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){lt=w},this.getClearColor=function(w){return w.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(w=!0,U=!0,H=!0){let V=0;if(w){let N=!1;if(P!==null){let at=P.texture.format;N=at===jc||at===Qc||at===Kc}if(N){let at=P.texture.type,yt=at===ti||at===ki||at===dr||at===Rs||at===$c||at===Zc,Rt=Ht.getClearColor(),Ct=Ht.getClearAlpha(),Wt=Rt.r,qt=Rt.g,It=Rt.b;yt?(m[0]=Wt,m[1]=qt,m[2]=It,m[3]=Ct,C.clearBufferuiv(C.COLOR,0,m)):(x[0]=Wt,x[1]=qt,x[2]=It,x[3]=Ct,C.clearBufferiv(C.COLOR,0,x))}else V|=C.COLOR_BUFFER_BIT}U&&(V|=C.DEPTH_BUFFER_BIT),H&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Mt.dispose(),ee.dispose(),_t.dispose(),b.dispose(),B.dispose(),Y.dispose(),ge.dispose(),D.dispose(),At.dispose(),W.dispose(),W.removeEventListener("sessionstart",Fh),W.removeEventListener("sessionend",zh),Ii.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=Ot.autoReset,U=wt.enabled,H=wt.autoUpdate,V=wt.needsUpdate,N=wt.type;gt(),Ot.autoReset=w,wt.enabled=U,wt.autoUpdate=H,wt.needsUpdate=V,wt.type=N}function xt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xt(w){let U=w.target;U.removeEventListener("dispose",Xt),Ae(U)}function Ae(w){We(w),_t.remove(w)}function We(w){let U=_t.get(w).programs;U!==void 0&&(U.forEach(function(H){At.releaseProgram(H)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,V,N,at){U===null&&(U=se);let yt=N.isMesh&&N.matrixWorld.determinant()<0,Rt=Ef(w,U,H,V,N);ut.setMaterial(V,yt);let Ct=H.index,Wt=1;if(V.wireframe===!0){if(Ct=tt.getWireframeAttribute(H),Ct===void 0)return;Wt=2}let qt=H.drawRange,It=H.attributes.position,oe=qt.start*Wt,xe=(qt.start+qt.count)*Wt;at!==null&&(oe=Math.max(oe,at.start*Wt),xe=Math.min(xe,(at.start+at.count)*Wt)),Ct!==null?(oe=Math.max(oe,0),xe=Math.min(xe,Ct.count)):It!=null&&(oe=Math.max(oe,0),xe=Math.min(xe,It.count));let _e=xe-oe;if(_e<0||_e===1/0)return;ge.setup(N,V,Rt,H,Ct);let en,ce=St;if(Ct!==null&&(en=q.get(Ct),ce=ie,ce.setIndex(en)),N.isMesh)V.wireframe===!0?(ut.setLineWidth(V.wireframeLinewidth*ot()),ce.setMode(C.LINES)):ce.setMode(C.TRIANGLES);else if(N.isLine){let Nt=V.linewidth;Nt===void 0&&(Nt=1),ut.setLineWidth(Nt*ot()),N.isLineSegments?ce.setMode(C.LINES):N.isLineLoop?ce.setMode(C.LINE_LOOP):ce.setMode(C.LINE_STRIP)}else N.isPoints?ce.setMode(C.POINTS):N.isSprite&&ce.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ce.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ce.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Nt=N._multiDrawStarts,Gn=N._multiDrawCounts,he=N._multiDrawCount,En=Ct?q.get(Ct).bytesPerElement:1,ji=_t.get(V).currentProgram.getUniforms();for(let ln=0;ln<he;ln++)ji.setValue(C,"_gl_DrawID",ln),ce.render(Nt[ln]/En,Gn[ln])}else if(N.isInstancedMesh)ce.renderInstances(oe,_e,N.count);else if(H.isInstancedBufferGeometry){let Nt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Gn=Math.min(H.instanceCount,Nt);ce.renderInstances(oe,_e,Gn)}else ce.render(oe,_e)};function de(w,U,H){w.transparent===!0&&w.side===Ie&&w.forceSinglePass===!1?(w.side=$e,w.needsUpdate=!0,Or(w,U,H),w.side=wi,w.needsUpdate=!0,Or(w,U,H),w.side=Ie):Or(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),p=ee.get(H),p.init(U),_.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==H&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let V=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let yt=0;yt<at.length;yt++){let Rt=at[yt];de(Rt,H,N),V.add(Rt)}else de(at,H,N),V.add(at)}),_.pop(),p=null,V},this.compileAsync=function(w,U,H=null){let V=this.compile(w,U,H);return new Promise(N=>{function at(){if(V.forEach(function(yt){_t.get(yt).currentProgram.isReady()&&V.delete(yt)}),V.size===0){N(w);return}setTimeout(at,10)}nt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let bn=null;function Vn(w){bn&&bn(w)}function Fh(){Ii.stop()}function zh(){Ii.start()}let Ii=new wd;Ii.setAnimationLoop(Vn),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(w){bn=w,W.setAnimationLoop(w),w===null?Ii.stop():Ii.start()},W.addEventListener("sessionstart",Fh),W.addEventListener("sessionend",zh),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,P),p=ee.get(w,_.length),p.init(U),_.push(p),zt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(zt),bt=this.localClippingEnabled,st=rt.init(this.clippingPlanes,bt),g=Mt.get(w,y.length),g.init(),y.push(g),W.enabled===!0&&W.isPresenting===!0){let at=v.xr.getDepthSensingMesh();at!==null&&Na(at,U,-1/0,v.sortObjects)}Na(w,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Z,lt),j=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,j&&Ht.addToRenderList(g,w),this.info.render.frame++,st===!0&&rt.beginShadows();let H=p.state.shadowsArray;wt.render(H,w,U),st===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){let at=U.cameras;if(N.length>0)for(let yt=0,Rt=at.length;yt<Rt;yt++){let Ct=at[yt];Oh(V,N,w,Ct)}j&&Ht.render(w);for(let yt=0,Rt=at.length;yt<Rt;yt++){let Ct=at[yt];Bh(g,w,Ct,Ct.viewport)}}else N.length>0&&Oh(V,N,w,U),j&&Ht.render(w),Bh(g,w,U);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,U),ge.resetDefaultState(),E=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],st===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Na(w,U,H,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){V&&kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(zt);let yt=Y.update(w),Rt=w.material;Rt.visible&&g.push(w,yt,Rt,H,kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){let yt=Y.update(w),Rt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),kt.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),kt.copy(yt.boundingSphere.center)),kt.applyMatrix4(w.matrixWorld).applyMatrix4(zt)),Array.isArray(Rt)){let Ct=yt.groups;for(let Wt=0,qt=Ct.length;Wt<qt;Wt++){let It=Ct[Wt],oe=Rt[It.materialIndex];oe&&oe.visible&&g.push(w,yt,oe,H,kt.z,It)}}else Rt.visible&&g.push(w,yt,Rt,H,kt.z,null)}}let at=w.children;for(let yt=0,Rt=at.length;yt<Rt;yt++)Na(at[yt],U,H,V)}function Bh(w,U,H,V){let N=w.opaque,at=w.transmissive,yt=w.transparent;p.setupLightsView(H),st===!0&&rt.setGlobalState(v.clippingPlanes,H),V&&ut.viewport(L.copy(V)),N.length>0&&Br(N,U,H),at.length>0&&Br(at,U,H),yt.length>0&&Br(yt,U,H),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Oh(w,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new ei(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Ar:ti,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let at=p.state.transmissionRenderTarget[V.id],yt=V.viewport||L;at.setSize(yt.z,yt.w);let Rt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(k),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),j&&Ht.render(H);let Ct=v.toneMapping;v.toneMapping=bi;let Wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),st===!0&&rt.setGlobalState(v.clippingPlanes,V),Br(w,H,V),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),nt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let It=0,oe=U.length;It<oe;It++){let xe=U[It],_e=xe.object,en=xe.geometry,ce=xe.material,Nt=xe.group;if(ce.side===Ie&&_e.layers.test(V.layers)){let Gn=ce.side;ce.side=$e,ce.needsUpdate=!0,Hh(_e,H,V,en,ce,Nt),ce.side=Gn,ce.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}v.setRenderTarget(Rt),v.setClearColor(k,$),Wt!==void 0&&(V.viewport=Wt),v.toneMapping=Ct}function Br(w,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=w.length;N<at;N++){let yt=w[N],Rt=yt.object,Ct=yt.geometry,Wt=V===null?yt.material:V,qt=yt.group;Rt.layers.test(H.layers)&&Hh(Rt,U,H,Ct,Wt,qt)}}function Hh(w,U,H,V,N,at){w.onBeforeRender(v,U,H,V,N,at),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,H,V,w,at),N.transparent===!0&&N.side===Ie&&N.forceSinglePass===!1?(N.side=$e,N.needsUpdate=!0,v.renderBufferDirect(H,U,V,N,w,at),N.side=wi,N.needsUpdate=!0,v.renderBufferDirect(H,U,V,N,w,at),N.side=Ie):v.renderBufferDirect(H,U,V,N,w,at),w.onAfterRender(v,U,H,V,N,at)}function Or(w,U,H){U.isScene!==!0&&(U=se);let V=_t.get(w),N=p.state.lights,at=p.state.shadowsArray,yt=N.state.version,Rt=At.getParameters(w,N.state,at,U,H),Ct=At.getProgramCacheKey(Rt),Wt=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?B:b).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",Xt),Wt=new Map,V.programs=Wt);let qt=Wt.get(Ct);if(qt!==void 0){if(V.currentProgram===qt&&V.lightsStateVersion===yt)return Vh(w,Rt),qt}else Rt.uniforms=At.getUniforms(w),w.onBeforeCompile(Rt,v),qt=At.acquireProgram(Rt,Ct),Wt.set(Ct,qt),V.uniforms=Rt.uniforms;let It=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=rt.uniform),Vh(w,Rt),V.needsLights=Sf(w),V.lightsStateVersion=yt,V.needsLights&&(It.ambientLightColor.value=N.state.ambient,It.lightProbe.value=N.state.probe,It.directionalLights.value=N.state.directional,It.directionalLightShadows.value=N.state.directionalShadow,It.spotLights.value=N.state.spot,It.spotLightShadows.value=N.state.spotShadow,It.rectAreaLights.value=N.state.rectArea,It.ltc_1.value=N.state.rectAreaLTC1,It.ltc_2.value=N.state.rectAreaLTC2,It.pointLights.value=N.state.point,It.pointLightShadows.value=N.state.pointShadow,It.hemisphereLights.value=N.state.hemi,It.directionalShadowMap.value=N.state.directionalShadowMap,It.directionalShadowMatrix.value=N.state.directionalShadowMatrix,It.spotShadowMap.value=N.state.spotShadowMap,It.spotLightMatrix.value=N.state.spotLightMatrix,It.spotLightMap.value=N.state.spotLightMap,It.pointShadowMap.value=N.state.pointShadowMap,It.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=qt,V.uniformsList=null,qt}function kh(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=ws.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Vh(w,U){let H=_t.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Ef(w,U,H,V,N){U.isScene!==!0&&(U=se),A.resetTextureUnits();let at=U.fog,yt=V.isMeshStandardMaterial?U.environment:null,Rt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ns,Ct=(V.isMeshStandardMaterial?B:b).get(V.envMap||yt),Wt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,qt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),It=!!H.morphAttributes.position,oe=!!H.morphAttributes.normal,xe=!!H.morphAttributes.color,_e=bi;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_e=v.toneMapping);let en=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=en!==void 0?en.length:0,Nt=_t.get(V),Gn=p.state.lights;if(st===!0&&(bt===!0||w!==M)){let xn=w===M&&V.id===E;rt.setState(V,w,xn)}let he=!1;V.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Gn.state.version||Nt.outputColorSpace!==Rt||N.isBatchedMesh&&Nt.batching===!1||!N.isBatchedMesh&&Nt.batching===!0||N.isBatchedMesh&&Nt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Nt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Nt.instancing===!1||!N.isInstancedMesh&&Nt.instancing===!0||N.isSkinnedMesh&&Nt.skinning===!1||!N.isSkinnedMesh&&Nt.skinning===!0||N.isInstancedMesh&&Nt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Nt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Nt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Nt.instancingMorph===!1&&N.morphTexture!==null||Nt.envMap!==Ct||V.fog===!0&&Nt.fog!==at||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==rt.numPlanes||Nt.numIntersection!==rt.numIntersection)||Nt.vertexAlphas!==Wt||Nt.vertexTangents!==qt||Nt.morphTargets!==It||Nt.morphNormals!==oe||Nt.morphColors!==xe||Nt.toneMapping!==_e||Nt.morphTargetsCount!==ce)&&(he=!0):(he=!0,Nt.__version=V.version);let En=Nt.currentProgram;he===!0&&(En=Or(V,U,N));let ji=!1,ln=!1,qs=!1,Me=En.getUniforms(),Un=Nt.uniforms;if(ut.useProgram(En.program)&&(ji=!0,ln=!0,qs=!0),V.id!==E&&(E=V.id,ln=!0),ji||M!==w){ut.buffers.depth.getReversed()?(ct.copy(w.projectionMatrix),Ip(ct),Pp(ct),Me.setValue(C,"projectionMatrix",ct)):Me.setValue(C,"projectionMatrix",w.projectionMatrix),Me.setValue(C,"viewMatrix",w.matrixWorldInverse);let ui=Me.map.cameraPosition;ui!==void 0&&ui.setValue(C,Gt.setFromMatrixPosition(w.matrixWorld)),Et.logarithmicDepthBuffer&&Me.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Me.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ln=!0,qs=!0)}if(N.isSkinnedMesh){Me.setOptional(C,N,"bindMatrix"),Me.setOptional(C,N,"bindMatrixInverse");let xn=N.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Me.setValue(C,"boneTexture",xn.boneTexture,A))}N.isBatchedMesh&&(Me.setOptional(C,N,"batchingTexture"),Me.setValue(C,"batchingTexture",N._matricesTexture,A),Me.setOptional(C,N,"batchingIdTexture"),Me.setValue(C,"batchingIdTexture",N._indirectTexture,A),Me.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&Me.setValue(C,"batchingColorTexture",N._colorsTexture,A));let Ys=H.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&Vt.update(N,H,En),(ln||Nt.receiveShadow!==N.receiveShadow)&&(Nt.receiveShadow=N.receiveShadow,Me.setValue(C,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Un.envMap.value=Ct,Un.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Un.envMapIntensity.value=U.environmentIntensity),ln&&(Me.setValue(C,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&wf(Un,qs),at&&V.fog===!0&&pt.refreshFogUniforms(Un,at),pt.refreshMaterialUniforms(Un,V,F,Q,p.state.transmissionRenderTarget[w.id]),ws.upload(C,kh(Nt),Un,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ws.upload(C,kh(Nt),Un,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Me.setValue(C,"center",N.center),Me.setValue(C,"modelViewMatrix",N.modelViewMatrix),Me.setValue(C,"normalMatrix",N.normalMatrix),Me.setValue(C,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let xn=V.uniformsGroups;for(let ui=0,di=xn.length;ui<di;ui++){let Gh=xn[ui];D.update(Gh,En),D.bind(Gh,En)}}return En}function wf(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Sf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,U,H){_t.get(w.texture).__webglTexture=U,_t.get(w.depthTexture).__webglTexture=H;let V=_t.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let H=_t.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){P=w,T=U,I=H;let V=!0,N=null,at=!1,yt=!1;if(w){let Ct=_t.get(w);if(Ct.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(Ct.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Ct.__hasExternalTextures)A.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let It=w.depthTexture;if(Ct.__boundDepthTexture!==It){if(It!==null&&_t.has(It)&&(w.width!==It.image.width||w.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(yt=!0);let qt=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[U])?N=qt[U][H]:N=qt[U],at=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=_t.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?N=qt[H]:N=qt,L.copy(w.viewport),O.copy(w.scissor),z=w.scissorTest}else L.copy(mt).multiplyScalar(F).floor(),O.copy(Bt).multiplyScalar(F).floor(),z=te;if(ut.bindFramebuffer(C.FRAMEBUFFER,N)&&V&&ut.drawBuffers(w,N),ut.viewport(L),ut.scissor(O),ut.setScissorTest(z),at){let Ct=_t.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ct.__webglTexture,H)}else if(yt){let Ct=_t.get(w.texture),Wt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ct.__webglTexture,H||0,Wt)}E=-1},this.readRenderTargetPixels=function(w,U,H,V,N,at,yt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){ut.bindFramebuffer(C.FRAMEBUFFER,Rt);try{let Ct=w.texture,Wt=Ct.format,qt=Ct.type;if(!Et.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&H>=0&&H<=w.height-N&&C.readPixels(U,H,V,N,$t.convert(Wt),$t.convert(qt),at)}finally{let Ct=P!==null?_t.get(P).__webglFramebuffer:null;ut.bindFramebuffer(C.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,V,N,at,yt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){let Ct=w.texture,Wt=Ct.format,qt=Ct.type;if(!Et.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&H>=0&&H<=w.height-N){ut.bindFramebuffer(C.FRAMEBUFFER,Rt);let It=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,It),C.bufferData(C.PIXEL_PACK_BUFFER,at.byteLength,C.STREAM_READ),C.readPixels(U,H,V,N,$t.convert(Wt),$t.convert(qt),0);let oe=P!==null?_t.get(P).__webglFramebuffer:null;ut.bindFramebuffer(C.FRAMEBUFFER,oe);let xe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Cp(C,xe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,It),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,at),C.deleteBuffer(It),C.deleteSync(xe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,H=0){w.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-H),N=Math.floor(w.image.width*V),at=Math.floor(w.image.height*V),yt=U!==null?U.x:0,Rt=U!==null?U.y:0;A.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,yt,Rt,N,at),ut.unbindTexture()},this.copyTextureToTexture=function(w,U,H=null,V=null,N=0){w.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let at,yt,Rt,Ct,Wt,qt,It,oe,xe,_e=w.isCompressedTexture?w.mipmaps[N]:w.image;H!==null?(at=H.max.x-H.min.x,yt=H.max.y-H.min.y,Rt=H.isBox3?H.max.z-H.min.z:1,Ct=H.min.x,Wt=H.min.y,qt=H.isBox3?H.min.z:0):(at=_e.width,yt=_e.height,Rt=_e.depth||1,Ct=0,Wt=0,qt=0),V!==null?(It=V.x,oe=V.y,xe=V.z):(It=0,oe=0,xe=0);let en=$t.convert(U.format),ce=$t.convert(U.type),Nt;U.isData3DTexture?(A.setTexture3D(U,0),Nt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Nt=C.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Nt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let Gn=C.getParameter(C.UNPACK_ROW_LENGTH),he=C.getParameter(C.UNPACK_IMAGE_HEIGHT),En=C.getParameter(C.UNPACK_SKIP_PIXELS),ji=C.getParameter(C.UNPACK_SKIP_ROWS),ln=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,_e.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,_e.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ct),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,qt);let qs=w.isDataArrayTexture||w.isData3DTexture,Me=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Un=_t.get(w),Ys=_t.get(U),xn=_t.get(Un.__renderTarget),ui=_t.get(Ys.__renderTarget);ut.bindFramebuffer(C.READ_FRAMEBUFFER,xn.__webglFramebuffer),ut.bindFramebuffer(C.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let di=0;di<Rt;di++)qs&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(w).__webglTexture,N,qt+di),w.isDepthTexture?(Me&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(U).__webglTexture,N,xe+di),C.blitFramebuffer(Ct,Wt,at,yt,It,oe,at,yt,C.DEPTH_BUFFER_BIT,C.NEAREST)):Me?C.copyTexSubImage3D(Nt,N,It,oe,xe+di,Ct,Wt,at,yt):C.copyTexSubImage2D(Nt,N,It,oe,xe+di,Ct,Wt,at,yt);ut.bindFramebuffer(C.READ_FRAMEBUFFER,null),ut.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Me?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Nt,N,It,oe,xe,at,yt,Rt,en,ce,_e.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Nt,N,It,oe,xe,at,yt,Rt,en,_e.data):C.texSubImage3D(Nt,N,It,oe,xe,at,yt,Rt,en,ce,_e):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,It,oe,at,yt,en,ce,_e.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,It,oe,_e.width,_e.height,en,_e.data):C.texSubImage2D(C.TEXTURE_2D,N,It,oe,at,yt,en,ce,_e);C.pixelStorei(C.UNPACK_ROW_LENGTH,Gn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he),C.pixelStorei(C.UNPACK_SKIP_PIXELS,En),C.pixelStorei(C.UNPACK_SKIP_ROWS,ji),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ln),N===0&&U.generateMipmaps&&C.generateMipmap(Nt),ut.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H=null,V=null,N=0){return w.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,H,V,N)},this.initRenderTarget=function(w){_t.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),ut.unbindTexture()},this.resetState=function(){T=0,I=0,P=null,ut.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}},Bo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Oo=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ho=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ic,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qe=new S,gr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},si=class extends On{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qs=new S,ms=new S,gs=new S,xs=new it,js=new it,Cd=new ne,ao=new S,tr=new S,lo=new S,Gu=new it,hl=new it,Wu=new it,Ti=class extends Pe{constructor(t=new si){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ho(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new gr(n,3,0,!1)),ps.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=ps,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),Cd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;co(ao.set(-.5,-.5,0),gs,o,ms,s,r),co(tr.set(.5,-.5,0),gs,o,ms,s,r),co(lo.set(.5,.5,0),gs,o,ms,s,r),Gu.set(0,0),hl.set(1,0),Wu.set(1,1);let a=t.ray.intersectTriangle(ao,tr,lo,!1,Qs);if(a===null&&(co(tr.set(-.5,.5,0),gs,o,ms,s,r),hl.set(0,1),a=t.ray.intersectTriangle(ao,lo,tr,!1,Qs),a===null))return;let l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:_i.getInterpolation(Qs,ao,tr,lo,Gu,hl,Wu,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};xr=class extends nn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=fn,h=fn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yr=class extends le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ys=new ne,Xu=new ne,ho=[],qu=new ni,Sy=new ne,er=new et,nr=new ii,Vi=class extends et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),qu.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(qu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),nr.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),Xu.multiplyMatrices(n,ys),er.matrixWorld=Xu,er.raycast(t,ho);for(let o=0,a=ho.length;o<a;o++){let l=ho[o];l.instanceId=r,l.object=this,e.push(l)}ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(s*this.count),s,this.count,Jc,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},vr=class extends On{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ko=new S,Vo=new S,Yu=new ne,ir=new Is,uo=new ii,ul=new S,$u=new S,Go=class extends Pe{constructor(t=new me,e=new vr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ko.fromBufferAttribute(e,s-1),Vo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ko.distanceTo(Vo);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,t.ray.intersectsSphere(uo)===!1)return;Yu.copy(s).invert(),ir.copy(t.ray).applyMatrix4(Yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),y=h.getX(x+1),_=fo(this,t,ir,l,p,y);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=fo(this,t,ir,l,x,g);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=fo(this,t,ir,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=fo(this,t,ir,l,m-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};_r=class extends On{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zu=new ne,_c=new Is,po=new ii,mo=new S,Ls=class extends Pe{constructor(t=new me,e=new _r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),po.radius+=r,t.ray.intersectsSphere(po)===!1)return;Zu.copy(s).invert(),_c.copy(t.ray).applyMatrix4(Zu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);mo.fromBufferAttribute(u,g),Ju(mo,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)mo.fromBufferAttribute(u,m),Ju(mo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};ri=class extends nn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new it:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new S,s=[],r=[],o=[],a=new S,l=new ne;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Oe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Oe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Mr=class extends _n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Mc=class extends Mr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};go=new S,dl=new ih,fl=new ih,pl=new ih,bc=class extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new S){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(go.subVectors(s[0],s[1]).add(s[0]),c=go);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(go.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=go),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),dl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),fl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),pl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),fl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),pl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(dl.calc(l),fl.calc(l),pl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new S().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};Wo=class extends _n{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ec=class extends _n{constructor(t=new S,e=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new S){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y),ur(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xo=class extends _n{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wc=class extends _n{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends _n{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sc=class extends _n{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y),hr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yo=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ku(a,l.x,c.x,h.x,u.x),Ku(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new it().fromArray(s))}return this}},Tc=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:bc,CubicBezierCurve:Wo,CubicBezierCurve3:Ec,EllipseCurve:Mr,LineCurve:Xo,LineCurve3:wc,QuadraticBezierCurve:qo,QuadraticBezierCurve3:Sc,SplineCurve:Yo}),Ac=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Tc[s.type]().fromJSON(s))}return this}},br=class extends Ac{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Xo(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new qo(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Wo(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Yo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Mr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Rc=class i extends me{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new S,f=new it,d=new S,m=new S,x=new S,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let y=0;y<=e;y++){let _=n+y*h*s,v=Math.sin(_),R=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*R,o.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),a.push(f.x,f.y);let I=l[3*T+0]*v,P=l[3*T+1],E=l[3*T+0]*R;c.push(I,P,E)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,R=v,T=v+t.length,I=v+t.length+1,P=v+1;r.push(R,T,P),r.push(I,P,T)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},$o=class i extends Rc{constructor(t=1,e=1,n=4,s=8){let r=new br;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Zo=class i extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new S,h=new it;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ft=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=n/2,p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(d,2));function y(){let v=new S,R=new S,T=0,I=(e-t)/n;for(let P=0;P<=r;P++){let E=[],M=P/r,L=M*(e-t)+t;for(let O=0;O<=s;O++){let z=O/s,k=z*l+a,$=Math.sin(k),G=Math.cos(k);R.x=L*$,R.y=-M*n+g,R.z=L*G,u.push(R.x,R.y,R.z),v.set($,I,G).normalize(),f.push(v.x,v.y,v.z),d.push(z,1-M),E.push(m++)}x.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){let M=x[E][P],L=x[E+1][P],O=x[E+1][P+1],z=x[E][P+1];(t>0||E!==0)&&(h.push(M,L,z),T+=3),(e>0||E!==r-1)&&(h.push(L,O,z),T+=3)}c.addGroup(p,T,0),p+=T}function _(v){let R=m,T=new it,I=new S,P=0,E=v===!0?t:e,M=v===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),m++;let L=m;for(let O=0;O<=s;O++){let k=O/s*l+a,$=Math.cos(k),G=Math.sin(k);I.x=E*G,I.y=g*M,I.z=E*$,u.push(I.x,I.y,I.z),f.push(0,M,0),T.x=$*.5+.5,T.y=G*.5*M+.5,d.push(T.x,T.y),m++}for(let O=0;O<s;O++){let z=R+O,k=L+O;v===!0?h.push(k,k+1,z):h.push(k+1,k,z),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Re=class i extends Ft{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cc=class i extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new S,v=new S,R=new S;for(let T=0;T<e.length;T+=3)d(e[T+0],_),d(e[T+1],v),d(e[T+2],R),l(_,v,R,y)}function l(y,_,v,R){let T=R+1,I=[];for(let P=0;P<=T;P++){I[P]=[];let E=y.clone().lerp(v,P/T),M=_.clone().lerp(v,P/T),L=T-P;for(let O=0;O<=L;O++)O===0&&P===T?I[P][O]=E:I[P][O]=E.clone().lerp(M,O/L)}for(let P=0;P<T;P++)for(let E=0;E<2*(T-P)-1;E++){let M=Math.floor(E/2);E%2===0?(f(I[P][M+1]),f(I[P+1][M]),f(I[P][M])):(f(I[P][M+1]),f(I[P+1][M+1]),f(I[P+1][M]))}}function c(y){let _=new S;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(y),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let y=new S;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let v=g(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(v,1-R)}m(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],v=o[y+2],R=o[y+4],T=Math.max(_,v,R),I=Math.min(_,v,R);T>.9&&I<.1&&(_<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,_){let v=y*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function m(){let y=new S,_=new S,v=new S,R=new S,T=new it,I=new it,P=new it;for(let E=0,M=0;E<r.length;E+=9,M+=6){y.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),T.set(o[M+0],o[M+1]),I.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),R.copy(y).add(_).add(v).divideScalar(3);let L=g(R);x(T,M+0,y,L),x(I,M+2,_,L),x(P,M+4,v,L)}}function x(y,_,v,R){R<0&&y.x===1&&(o[_]=y.x-1),v.x===0&&v.z===0&&(o[_]=R/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},oi=class extends br{constructor(t){super(t),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new br().fromJSON(s))}return this}},Dy={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Id(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=By(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],f=i[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Er(r,o,e,a,l,d,0),o}};Ei=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ju(t),td(n,t);let o=t.length;e.forEach(ju);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,td(n,e[l]);let a=Dy.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Ai=class i extends me{constructor(t=new oi([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Jy,_,v=!1,R,T,I,P;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,R=p.computeFrenetFrames(h,!1),T=new S,I=new S,P=new S),f||(g=0,d=0,m=0,x=0);let E=a.extractPoints(c),M=E.shape,L=E.holes;if(!Ei.isClockWise(M)){M=M.reverse();for(let j=0,ot=L.length;j<ot;j++){let C=L[j];Ei.isClockWise(C)&&(L[j]=C.reverse())}}let z=Ei.triangulateShape(M,L),k=M;for(let j=0,ot=L.length;j<ot;j++){let C=L[j];M=M.concat(C)}function $(j,ot,C){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(ot,C)}let G=M.length,Q=z.length;function F(j,ot,C){let Ut,nt,Et,ut=j.x-ot.x,Ot=j.y-ot.y,_t=C.x-j.x,A=C.y-j.y,b=ut*ut+Ot*Ot,B=ut*A-Ot*_t;if(Math.abs(B)>Number.EPSILON){let q=Math.sqrt(b),tt=Math.sqrt(_t*_t+A*A),Y=ot.x-Ot/q,At=ot.y+ut/q,pt=C.x-A/tt,Mt=C.y+_t/tt,ee=((pt-Y)*A-(Mt-At)*_t)/(ut*A-Ot*_t);Ut=Y+ut*ee-j.x,nt=At+Ot*ee-j.y;let rt=Ut*Ut+nt*nt;if(rt<=2)return new it(Ut,nt);Et=Math.sqrt(rt/2)}else{let q=!1;ut>Number.EPSILON?_t>Number.EPSILON&&(q=!0):ut<-Number.EPSILON?_t<-Number.EPSILON&&(q=!0):Math.sign(Ot)===Math.sign(A)&&(q=!0),q?(Ut=-Ot,nt=ut,Et=Math.sqrt(b)):(Ut=ut,nt=Ot,Et=Math.sqrt(b/2))}return new it(Ut/Et,nt/Et)}let Z=[];for(let j=0,ot=k.length,C=ot-1,Ut=j+1;j<ot;j++,C++,Ut++)C===ot&&(C=0),Ut===ot&&(Ut=0),Z[j]=F(k[j],k[C],k[Ut]);let lt=[],mt,Bt=Z.concat();for(let j=0,ot=L.length;j<ot;j++){let C=L[j];mt=[];for(let Ut=0,nt=C.length,Et=nt-1,ut=Ut+1;Ut<nt;Ut++,Et++,ut++)Et===nt&&(Et=0),ut===nt&&(ut=0),mt[Ut]=F(C[Ut],C[Et],C[ut]);lt.push(mt),Bt=Bt.concat(mt)}for(let j=0;j<g;j++){let ot=j/g,C=d*Math.cos(ot*Math.PI/2),Ut=m*Math.sin(ot*Math.PI/2)+x;for(let nt=0,Et=k.length;nt<Et;nt++){let ut=$(k[nt],Z[nt],Ut);ct(ut.x,ut.y,-C)}for(let nt=0,Et=L.length;nt<Et;nt++){let ut=L[nt];mt=lt[nt];for(let Ot=0,_t=ut.length;Ot<_t;Ot++){let A=$(ut[Ot],mt[Ot],Ut);ct(A.x,A.y,-C)}}}let te=m+x;for(let j=0;j<G;j++){let ot=f?$(M[j],Bt[j],te):M[j];v?(I.copy(R.normals[0]).multiplyScalar(ot.x),T.copy(R.binormals[0]).multiplyScalar(ot.y),P.copy(_[0]).add(I).add(T),ct(P.x,P.y,P.z)):ct(ot.x,ot.y,0)}for(let j=1;j<=h;j++)for(let ot=0;ot<G;ot++){let C=f?$(M[ot],Bt[ot],te):M[ot];v?(I.copy(R.normals[j]).multiplyScalar(C.x),T.copy(R.binormals[j]).multiplyScalar(C.y),P.copy(_[j]).add(I).add(T),ct(P.x,P.y,P.z)):ct(C.x,C.y,u/h*j)}for(let j=g-1;j>=0;j--){let ot=j/g,C=d*Math.cos(ot*Math.PI/2),Ut=m*Math.sin(ot*Math.PI/2)+x;for(let nt=0,Et=k.length;nt<Et;nt++){let ut=$(k[nt],Z[nt],Ut);ct(ut.x,ut.y,u+C)}for(let nt=0,Et=L.length;nt<Et;nt++){let ut=L[nt];mt=lt[nt];for(let Ot=0,_t=ut.length;Ot<_t;Ot++){let A=$(ut[Ot],mt[Ot],Ut);v?ct(A.x,A.y+_[h-1].y,_[h-1].x+C):ct(A.x,A.y,u+C)}}}X(),st();function X(){let j=s.length/3;if(f){let ot=0,C=G*ot;for(let Ut=0;Ut<Q;Ut++){let nt=z[Ut];zt(nt[2]+C,nt[1]+C,nt[0]+C)}ot=h+g*2,C=G*ot;for(let Ut=0;Ut<Q;Ut++){let nt=z[Ut];zt(nt[0]+C,nt[1]+C,nt[2]+C)}}else{for(let ot=0;ot<Q;ot++){let C=z[ot];zt(C[2],C[1],C[0])}for(let ot=0;ot<Q;ot++){let C=z[ot];zt(C[0]+G*h,C[1]+G*h,C[2]+G*h)}}n.addGroup(j,s.length/3-j,0)}function st(){let j=s.length/3,ot=0;bt(k,ot),ot+=k.length;for(let C=0,Ut=L.length;C<Ut;C++){let nt=L[C];bt(nt,ot),ot+=nt.length}n.addGroup(j,s.length/3-j,1)}function bt(j,ot){let C=j.length;for(;--C>=0;){let Ut=C,nt=C-1;nt<0&&(nt=j.length-1);for(let Et=0,ut=h+g*2;Et<ut;Et++){let Ot=G*Et,_t=G*(Et+1),A=ot+Ut+Ot,b=ot+nt+Ot,B=ot+nt+_t,q=ot+Ut+_t;Gt(A,b,B,q)}}}function ct(j,ot,C){l.push(j),l.push(ot),l.push(C)}function zt(j,ot,C){kt(j),kt(ot),kt(C);let Ut=s.length/3,nt=y.generateTopUV(n,s,Ut-3,Ut-2,Ut-1);se(nt[0]),se(nt[1]),se(nt[2])}function Gt(j,ot,C,Ut){kt(j),kt(ot),kt(Ut),kt(ot),kt(C),kt(Ut);let nt=s.length/3,Et=y.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);se(Et[0]),se(Et[1]),se(Et[3]),se(Et[1]),se(Et[2]),se(Et[3])}function kt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function se(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ky(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Tc[s.type]().fromJSON(s)),new i(n,t.options)}},Jy={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new it(r,o),new it(a,l),new it(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new it(o,1-l),new it(c,1-u),new it(f,1-m),new it(x,1-p)]:[new it(a,1-l),new it(h,1-u),new it(d,1-m),new it(g,1-p)]}};Rn=class i extends Cc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Jo=class i extends me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new S,m=new it;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,_=y,v=y+n+1,R=y+n+2,T=y+1;a.push(_,v,T),a.push(v,R,T)}}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ko=class i extends me{constructor(t=new oi([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,m=f.holes;Ei.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];Ei.isClockWise(y)===!0&&(m[g]=y.reverse())}let x=Ei.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];d=d.concat(y)}for(let g=0,p=d.length;g<p;g++){let y=d[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=x.length;g<p;g++){let y=x[g],_=y[0]+u,v=y[1]+u,R=y[2]+u;n.push(_,v,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Qy(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};ve=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new S,f=new S,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(T+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],v=h[p][y],R=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&d.push(_,v,T),(p!==n-1||l<Math.PI)&&d.push(v,R,T)}this.setIndex(d),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Qo=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new S,u=new S,f=new S;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let x=m/s*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,y=(s+1)*d+m;o.push(x,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Lt=class extends On{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vd,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};Ds=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lc=class extends Ds{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yh,endingEnd:Yh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $h:r=t,a=2*e-n;break;case Zh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $h:o=t,l=2*n-e;break;case Zh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,_=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[c+R]+_*o[l+R]+v*o[u+R];return r}},Dc=class extends Ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Uc=class extends Ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vo(e,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vo(t.times,Array),values:vo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case So:e=this.InterpolantFactoryMethodDiscrete;break;case nc:e=this.InterpolantFactoryMethodLinear;break;case za:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return nc;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&jy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===za,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=nc;Wi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=So;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;Nc=class extends Cn{};Nc.prototype.ValueTypeName="color";Fc=class extends Cn{};Fc.prototype.ValueTypeName="number";zc=class extends Ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},jo=class extends Cn{InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}};jo.prototype.ValueTypeName="quaternion";jo.prototype.InterpolantFactoryMethodSmooth=void 0;Xi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=So;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;Bc=class extends Cn{};Bc.prototype.ValueTypeName="vector";Oc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},tv=new Oc,Hc=class{constructor(t){this.manager=t!==void 0?t:tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Hc.DEFAULT_MATERIAL_NAME="__DEFAULT";Tr=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ta=class extends Tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ml=new ne,ed=new S,nd=new S,ea=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(ed),nd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nd),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},id=new ne,sr=new S,gl=new S,kc=class extends ea{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),gl.copy(n.position),gl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(gl),n.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id)}},Us=class extends Tr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Vc=class extends ea{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},na=class extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Vc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ia=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=sd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};sh="\\[\\]\\.:\\/",ev=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",nv="[^"+sh.replace("\\.","")+"]",iv=/((?:WC+[\/:])*)/.source.replace("WC",rh),sv=/(WCOD+)?/.source.replace("WCOD",nv),rv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),ov=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),av=new RegExp("^"+iv+sv+rv+ov+"$"),lv=["material","materials","bones","map"],Gc=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ev,"")}static parseTrackName(t){let e=av.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Gc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Lv=new Float32Array(1),rd=new ne,sa=class{constructor(t,e,n=0,s=1/0){this.ray=new Is(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rd),this}intersectObject(t,e=!0,n=[]){return Wc(t,this,n,e),n.sort(od),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Wc(t[s],this,n,e);return n.sort(od),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170")});function Dd(){try{let i=localStorage.getItem(oh);return i?(Object.assign(Dt,JSON.parse(i)),!0):!1}catch{return!1}}function In(){try{localStorage.setItem(oh,JSON.stringify(Dt))}catch{}}function Ud(){try{localStorage.removeItem(oh)}catch{}}function Nd(i,t,e,n){let s={uid:Dt.nextUid++,id:i,weight:t,mutation:e?e.id:null,value:n};Dt.inventory.unshift(s);let r=Dt.dex[i]||(Dt.dex[i]={count:0,best:0}),o=r.count===0;return r.count++,r.best=Math.max(r.best,t),Dt.totalCaught++,{item:s,isNew:o}}function ah(i){let t=Dt.inventory.findIndex(e=>e.uid===i);return t>=0?Dt.inventory.splice(t,1)[0]:null}var oh,Dt,zs=ye(()=>{oh="fisch2-save-v1",Dt={money:0,rod:"starter",inventory:[],dex:{},quests:{},time:.3,pos:null,nextUid:1,totalCaught:0,tutorialSeen:!1}});function ai(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}function lh(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=ai(e,n),c=ai(e+1,n),h=ai(e,n+1),u=ai(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+u)*o*a}function Bs(i,t,e=4){let n=0,s=.5,r=1,o=0;for(let a=0;a<e;a++)n+=s*lh(i*r+a*17.3,t*r-a*9.1),o+=s,s*=.5,r*=2.03;return n/o}function Fd(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Se(i,t,e){let n=ke((e-i)/(t-i),0,1);return n*n*(3-2*n)}function ue(i,t,e,n){return Pn(i,t,1-Math.exp(-e*n))}function cv(i,t){let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}function Rr(i,t,e,n){return i+cv(i,t)*(1-Math.exp(-e*n))}var ke,Pn,jt,Mn=ye(()=>{ke=(i,t,e)=>i<t?t:i>e?e:i,Pn=(i,t,e)=>i+(t-i)*e;jt=(i,t)=>i+Math.random()*(t-i)});function zd(i,t,e){let n=t-i.cx,s=e-i.cz,r=Math.hypot(n,s);if(r>i.radius*2)return Os;let o=1+(Bs(t*.018+i.seed*7.1,e*.018-i.seed*3.3,3)-.5)*2*i.warp,a=r/(i.radius*o),l=Os+(1.2-Os)*Se(1.75,.95,a),c=Se(.93,.62,a),h=Math.hypot(n-i.hill.x,s-i.hill.z)/(i.radius*.85);return l+=(i.peak-2.2)*Math.pow(Se(1,0,h),1.4)*c,l+=1*c,l+=(Bs(t*.06,e*.06,3)-.5)*3*c,l+=(Bs(t*.25,e*.25,2)-.5)*.3,l}function hh(i,t,e){let n=zd(i,t,e);if(n<=Os+.01)return n;for(let r of i.flats){let o=Math.hypot(t-i.cx-r.x,e-i.cz-r.z);o<r.r+9&&(n=Pn(n,r.h,Se(r.r+9,r.r,o)))}let s=i.pond;if(s){let r=Math.hypot(t-i.cx-s.x,e-i.cz-s.z);if(r<s.r+12&&(n=Pn(n,s.level+.7,Se(s.r+12,s.r+3,r)),r<s.r+3)){let o=r/s.r,a=s.level-.3-3.2*(1-o*o);n=Pn(n,a,Se(s.r+3,s.r-1,r))}}return n}function Ve(i,t){let e=Os+(lh(i*.02,t*.02)-.5)*2;for(let n of on){let s=i-n.cx,r=t-n.cz;if(s*s+r*r>(n.radius*2)**2)continue;let o=hh(n,i,t);o>e&&(e=o)}return e}function uh(i){return on.find(t=>t.id===i)}function dh(i,t){for(let e of on)if(Math.hypot(i-e.cx,t-e.cz)<e.zoneRadius)return e;return null}function li(i,t){let e=Ve(i,t);for(let n of on){let s=n.pond;if(s&&Math.hypot(i-s.wx,t-s.wz)<s.r+4)return e<s.level-.05?{level:s.level,pond:!0,island:n,depth:s.level-e}:null}return e<ch-.05?{level:ch,pond:!1,island:dh(i,t),depth:ch-e}:null}function Bd(i){let t=i.radius*2*1.95,e=Math.round(t/1.15),n=new Ue(t,t,e,e);n.rotateX(-Math.PI/2);let s=n.attributes.position,r=s.count;for(let f=0;f<r;f++){let d=s.getX(f)+i.cx,m=s.getZ(f)+i.cz;s.setY(f,hh(i,d,m))}n.computeVertexNormals();let o=n.attributes.normal,a=new Float32Array(r*3),l=new dt,c=new dt;for(let f=0;f<r;f++){let d=s.getX(f)+i.cx,m=s.getZ(f)+i.cz,x=s.getY(f),g=o.getY(f),p=Bs(d*.15,m*.15,2);if(x<-.2)l.copy(rn.sandWet).lerp(rn.sandDeep,Se(-.2,-4,x)).lerp(rn.seabed,Se(-4,-13,x));else if(x<.7)l.copy(rn.sandWet).lerp(rn.sandDry,Se(-.2,.7,x));else{l.copy(rn.grassA).lerp(rn.grassB,p);let v=Se(2,1.3,x);c.copy(rn.sandDry).lerp(rn.grassDry,.25*p),l.lerp(c,v);let R=Se(.86,.68,g);l.lerp(p>.5?rn.rock:rn.rockDark,R),x>i.peak*.82&&l.lerp(rn.rock,Se(i.peak*.82,i.peak,x)*.7);for(let T of i.flats){let I=Math.hypot(d-i.cx-T.x,m-i.cz-T.z),P=Se(T.r*.8,T.r*.45,I+(p-.5)*6);P>0&&l.lerp(rn.dirt,P*.85)}}let y=i.pond;if(y){let v=Math.hypot(d-y.wx,m-y.wz);v<y.r+1.5&&l.lerp(rn.mud,Se(y.r+1.5,y.r-2,v)*.85)}let _=.92+.16*Bs(d*.03,m*.03,2);a[f*3]=l.r*_,a[f*3+1]=l.g*_,a[f*3+2]=l.b*_}n.setAttribute("color",new le(a,3));let h=new Lt({vertexColors:!0,roughness:.95,metalness:0}),u=new et(n,h);return u.position.set(i.cx,0,i.cz),u.receiveShadow=!0,u.castShadow=!1,u}function Od(){let i=new Ue(4e3,4e3,1,1);i.rotateX(-Math.PI/2);let t=new et(i,new Lt({color:4085072,roughness:1}));return t.position.y=Os-1.2,t}function Hd(i=512){let t=new Uint8Array(i*i*4),{minX:e,minZ:n,size:s}=fh;for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=e+a/(i-1)*s,c=n+o/(i-1)*s,h=Ve(l,c),u=ke((h+20)/50,0,1)*255,f=(o*i+a)*4;t[f]=u,t[f+1]=u,t[f+2]=u,t[f+3]=255}let r=new xr(t,i,i,dn);return r.magFilter=un,r.minFilter=un,r.wrapS=r.wrapT=Kn,r.needsUpdate=!0,r}var ch,Os,on,Ln,rn,fh,Hn=ye(()=>{He();Mn();ch=0,Os=-16,on=[{id:"noob",name:"noob Island",subtitle:"\u65B0\u624B\u7684\u51FA\u767C\u9EDE",cx:0,cz:0,radius:58,peak:11,hill:{x:-22,z:-20},warp:.07,seed:3,flats:[{x:12,z:10,r:18},{x:-36,z:-30,r:6}],pond:null,zoneRadius:125},{id:"normal",name:"normal Island",subtitle:"\u71B1\u9B27\u7684\u6D77\u6E2F\u6F01\u6751",cx:360,cz:-230,radius:86,peak:19,hill:{x:30,z:-32},warp:.09,seed:11,flats:[{x:-40,z:8,r:23},{x:-6,z:40,r:7},{x:6,z:-4,r:16}],pond:{x:6,z:-4,r:11},zoneRadius:165}];for(let i of on){for(let t of i.flats)t.h=Math.max(1.6,zd(i,i.cx+t.x,i.cz+t.z));if(i.pond){let t=i.pond;t.level=0;let e=i.pond;i.pond=null,t.level=hh(i,i.cx+t.x,i.cz+t.z)-.6,i.pond=e,t.wx=i.cx+t.x,t.wz=i.cz+t.z}}Ln=i=>new dt(i),rn={sandDry:Ln(15391142),sandWet:Ln(13151866),sandDeep:Ln(10259558),seabed:Ln(5203552),grassA:Ln(6003255),grassB:Ln(8238666),grassDry:Ln(11121514),rock:Ln(9143675),rockDark:Ln(7104351),dirt:Ln(11111006),mud:Ln(6116416)};fh={minX:-170,minZ:-430,size:700}});function $i(i,t,e,n,s,r=0,o={}){let a=-r,l={type:"box",cx:i,cz:t,hw:e/2,hd:n/2,top:s,bottom:o.bottom??-100,cos:Math.cos(a),sin:Math.sin(a),walkable:o.walkable??!1,boatBlock:o.boatBlock??!0};return Yi.push(l),l}function ze(i,t,e,n,s={}){let r={type:"circle",x:i,z:t,r:e,top:n,bottom:s.bottom??-100,walkable:!1,boatBlock:s.boatBlock??!0};return Yi.push(r),r}function kd(i,t,e){let n=t-i.cx,s=e-i.cz;return[n*i.cos+s*i.sin,-n*i.sin+s*i.cos]}function ca(i,t,e,n=0){if(i.type==="circle"){let o=t-i.x,a=e-i.z;return o*o+a*a<(i.r+n)**2}let[s,r]=kd(i,t,e);return Math.abs(s)<i.hw+n&&Math.abs(r)<i.hd+n}function Ri(i,t,e=999){let n=Ve(i,t);for(let s of Yi)s.top>n&&s.top<=e+ph&&ca(s,i,t,.05)&&(n=s.top);return n}function Vd(i,t,e=999){let n=-1/0;for(let s of Yi)s.walkable&&s.top<=e+ph&&ca(s,i,t,.05)&&(n=Math.max(n,s.top));return n}function ha(i,t,e,n,s=!1){for(let r of Yi)if(!(s&&!r.boatBlock)&&!(r.top<=e+ph)&&!(r.bottom>n))if(r.type==="circle"){let o=i.x-r.x,a=i.z-r.z,l=Math.hypot(o,a),c=r.r+t;l<c&&l>1e-5&&(i.x=r.x+o/l*c,i.z=r.z+a/l*c)}else{let[o,a]=kd(r,i.x,i.z),l=r.hw+t-Math.abs(o),c=r.hd+t-Math.abs(a);if(l>0&&c>0){let h=o,u=a;l<c?h=Math.sign(o||1)*(r.hw+t):u=Math.sign(a||1)*(r.hd+t),i.x=r.cx+h*r.cos-u*r.sin,i.z=r.cz+h*r.sin+u*r.cos}}return i}var ph,Yi,Zi=ye(()=>{Hn();ph=.6,Yi=[]});function hv(i){Wd=i}function uv(i,t,e=0,n=1){let s=e-Ve(i,t),r=(.15+.85*Se(0,6,s))*n,o=0;for(let a of Gd)o+=a.a*Math.sin(a.k*(a.dx*i+a.dz*t)+Wd*a.s);return o*r}function an(i,t,e=0,n=!1){return e+uv(i,t,e,n?.12:1)}var Gd,Wd,dv,fv,pv,ua,Hs=ye(()=>{He();Hn();Mn();Gd=[{dx:.96,dz:.28,k:.075,a:.34,s:.9},{dx:.6,dz:-.8,k:.13,a:.19,s:1.25},{dx:-.42,dz:.91,k:.21,a:.09,s:1.7},{dx:.88,dz:.47,k:.37,a:.05,s:2.4}],Wd=0;dv=Gd.map(i=>`
    ph = ${i.k.toFixed(4)} * dot(vec2(${i.dx.toFixed(3)}, ${i.dz.toFixed(3)}), p) + uTime * ${i.s.toFixed(3)};
    h += ${i.a.toFixed(4)} * sin(ph);
    g += ${(i.a*i.k).toFixed(5)} * cos(ph) * vec2(${i.dx.toFixed(3)}, ${i.dz.toFixed(3)});`).join(""),fv=`
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
  ${dv}
  wp.y = uLevel + h * damp;
  vH = h * damp;
  vDepth = depth;
  vNormalW = normalize(vec3(-g.x * damp, 1.0, -g.y * damp));
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,pv=`
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
`,ua=class{constructor(t,e){this.ripples=[];for(let r=0;r<10;r++)this.ripples.push(new ae(0,0,-100,0));this.rippleIdx=0;let n=fh;this.uniforms={uTime:{value:0},uLevel:{value:0},uAmp:{value:1},uHeightTex:{value:e},uBounds:{value:new ae(n.minX,n.minZ,n.size,n.size)},uSunDir:{value:new S(0,1,0)},uSunColor:{value:new dt(1,1,1)},uMoonDir:{value:new S(0,-1,0)},uZenith:{value:new dt},uHorizon:{value:new dt},uFogColor:{value:new dt},uFogDensity:{value:.003},uDayLight:{value:1},uNight:{value:0},uDeep:{value:new dt(140602)},uShallow:{value:new dt(2078128)},uRipples:{value:this.ripples}},this.material=new Ze({uniforms:this.uniforms,vertexShader:fv,fragmentShader:pv,transparent:!0,depthWrite:!0});let s=new Ue(1400,1400,280,280);s.rotateX(-Math.PI/2),this.sea=new et(s,this.material),this.sea.frustumCulled=!1,this.sea.renderOrder=2,t.add(this.sea),this.ponds=[];for(let r of on){if(!r.pond)continue;let o=r.pond,a=this.material.clone();a.uniforms={...this.uniforms,uLevel:{value:o.level},uAmp:{value:.12},uDeep:{value:new dt(866860)},uShallow:{value:new dt(4037752)}};let l=new Zo(o.r+4,64,0,Math.PI*2);l.rotateX(-Math.PI/2);let c=new et(l,a);c.position.set(o.wx,0,o.wz),c.renderOrder=2,t.add(c),this.ponds.push(c)}}addRipple(t,e,n=1){this.ripples[this.rippleIdx].set(t,e,this.uniforms.uTime.value,n),this.rippleIdx=(this.rippleIdx+1)%this.ripples.length}update(t,e,n){hv(t);let s=this.uniforms;s.uTime.value=t;let r=1400/280;this.sea.position.set(Math.round(e.position.x/r)*r,0,Math.round(e.position.z/r)*r),n&&(s.uSunDir.value.copy(n.sunDir),s.uMoonDir.value.copy(n.moonDir),s.uSunColor.value.copy(n.sunColor),s.uZenith.value.copy(n.zenith),s.uHorizon.value.copy(n.horizon),s.uFogColor.value.copy(n.fogColor),s.uFogDensity.value=n.fogDensity,s.uDayLight.value=n.dayLight,s.uNight.value=n.night)}}});var mv,Dn,Cr,gv,xv,da,Xd=ye(()=>{He();Mn();mv=600,Dn=(i,t)=>({t:i,...t}),Cr=[Dn(0,{zenith:132367,horizon:726320,fog:660006,sun:0,hemiSky:2833766,hemiGround:724760,hemi:.35,day:.12}),Dn(.21,{zenith:396066,horizon:1844038,fog:1317427,sun:0,hemiSky:3358826,hemiGround:921624,hemi:.38,day:.15}),Dn(.25,{zenith:2704766,horizon:15764570,fog:9072250,sun:16747084,hemiSky:9081016,hemiGround:4864560,hemi:.55,day:.45}),Dn(.3,{zenith:3897545,horizon:15976864,fog:12372182,sun:16765600,hemiSky:11060462,hemiGround:7035459,hemi:.75,day:.85}),Dn(.38,{zenith:2914528,horizon:12115199,fog:12377333,sun:16773596,hemiSky:11917055,hemiGround:7759435,hemi:.85,day:1}),Dn(.5,{zenith:206e4,horizon:12903679,fog:12903162,sun:16777215,hemiSky:12442879,hemiGround:8022606,hemi:.9,day:1}),Dn(.64,{zenith:2782424,horizon:12639477,fog:12638960,sun:16773336,hemiSky:11916538,hemiGround:7759435,hemi:.85,day:1}),Dn(.71,{zenith:3433388,horizon:16102010,fog:14005146,sun:16757610,hemiSky:10989264,hemiGround:6967872,hemi:.7,day:.8}),Dn(.75,{zenith:2503531,horizon:15755836,fog:9198178,sun:16738869,hemiSky:8155034,hemiGround:4074538,hemi:.5,day:.42}),Dn(.79,{zenith:791092,horizon:3812693,fog:2301754,sun:0,hemiSky:3817840,hemiGround:1183512,hemi:.4,day:.18}),Dn(1,{zenith:132367,horizon:726320,fog:660006,sun:0,hemiSky:2833766,hemiGround:724760,hemi:.35,day:.12})];for(let i of Cr)for(let t of["zenith","horizon","fog","sun","hemiSky","hemiGround"])i[t]=new dt(i[t]);gv=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = vec4(p.xy, p.w * 0.99995, p.w);
}`,xv=`
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
}`,da=class{constructor(t,e=.3){this.t=e,this.scene=t,this.zenith=new dt,this.horizon=new dt,this.fogColor=new dt,this.sunColor=new dt,this.sunDir=new S,this.moonDir=new S,this.dayLight=1,this.night=0,this.fogDensity=.0032,this.uniforms={uZenith:{value:this.zenith},uHorizon:{value:this.horizon},uSunDir:{value:this.sunDir},uMoonDir:{value:this.moonDir},uSunColor:{value:this.sunColor},uStars:{value:0},uTime:{value:0},uSunset:{value:0}};let n=new et(new ve(3e3,48,24),new Ze({uniforms:this.uniforms,vertexShader:gv,fragmentShader:xv,side:$e,depthWrite:!1,fog:!1}));n.frustumCulled=!1,n.renderOrder=-10,this.dome=n,t.add(n),t.fog=new Bo(12377333,this.fogDensity),this.hemi=new ta(12442879,8022606,.9),t.add(this.hemi),this.light=new na(16777215,2.2),this.light.castShadow=!0,this.light.shadow.mapSize.set(2048,2048);let s=this.light.shadow.camera;s.left=-55,s.right=55,s.top=55,s.bottom=-55,s.near=1,s.far=400,this.light.shadow.bias=-6e-4,this.light.shadow.normalBias=.04,t.add(this.light),t.add(this.light.target),this._a={},this._b={}}get hours(){return this.t*24%24}isNight(){let t=this.hours;return t>=18.6||t<5.6}clockString(){let t=this.hours,e=Math.floor(t),n=Math.floor((t-e)*60);return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}sample(t){let e=0;for(;e<Cr.length-2&&Cr[e+1].t<=t;)e++;let n=Cr[e],s=Cr[e+1],r=Se(0,1,(t-n.t)/(s.t-n.t));return{a:n,b:s,f:r}}update(t,e,n){this.t=(this.t+t/mv)%1;let{a:s,b:r,f:o}=this.sample(this.t);this.zenith.copy(s.zenith).lerp(r.zenith,o),this.horizon.copy(s.horizon).lerp(r.horizon,o),this.fogColor.copy(s.fog).lerp(r.fog,o),this.sunColor.copy(s.sun).lerp(r.sun,o);let a=Pn(s.hemi,r.hemi,o);this.dayLight=Pn(s.day,r.day,o);let l=(this.t-.25)*Math.PI*2;this.sunDir.set(Math.cos(l),Math.sin(l),.35).normalize(),this.moonDir.set(-Math.cos(l),-Math.sin(l),-.25).normalize();let c=Se(-.05,.12,this.sunDir.y),h=Se(-.05,.15,this.moonDir.y);this.night=1-Se(-.12,.08,this.sunDir.y),this.uniforms.uStars.value=this.night,this.uniforms.uTime.value=n,this.uniforms.uSunset.value=Se(.45,0,Math.abs(this.sunDir.y))*c+.3*(1-this.night);let u=this.sunDir.y>-.02,f=u?this.sunDir:this.moonDir;u?(this.light.color.copy(this.sunColor),this.light.intensity=2.6*c):(this.light.color.setRGB(.55,.65,.95),this.light.intensity=.55*h),this.light.position.set(e.x+f.x*150,e.y+Math.max(f.y,.08)*150,e.z+f.z*150),this.light.target.position.copy(e),this.light.target.updateMatrixWorld(),this.hemi.color.copy(s.hemiSky).lerp(r.hemiSky,o),this.hemi.groundColor.copy(s.hemiGround).lerp(r.hemiGround,o),this.hemi.intensity=a*1.25,this.scene.fog.color.copy(this.fogColor),this.fogDensity=Pn(.0026,.0042,this.night),this.scene.fog.density=this.fogDensity,this.dome.position.copy(e)}}});function Ir(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new me,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=qd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let m=qd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function qd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new le(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Yd=ye(()=>{He()});function xh(i,t,e,n){return i.position.set(t,e,n),i}function ht(i,t,e=!0,n=!0){let s=new et(i,t);return s.castShadow=e,s.receiveShadow=n,s}function ci(i,t={}){let{w:e=512,h:n=128,bg:s=null,color:r="#fff",stroke:o="#000",font:a='bold 64px "Microsoft JhengHei", "PingFang TC", sans-serif',border:l=null}=t,c=document.createElement("canvas");c.width=e,c.height=n;let h=c.getContext("2d");s&&(h.fillStyle=s,h.fillRect(0,0,e,n)),l&&(h.strokeStyle=l,h.lineWidth=10,h.strokeRect(5,5,e-10,n-10));let u=Array.isArray(i)?i:[i];h.textAlign="center",h.textBaseline="middle",u.forEach((d,m)=>{let x=typeof d=="string"?{text:d}:d;h.font=x.font||a;let g=n/2+(m-(u.length-1)/2)*(x.lh||n/u.length);o&&(h.lineWidth=x.strokeW||8,h.strokeStyle=o,h.lineJoin="round",h.strokeText(x.text,e/2,g)),h.fillStyle=x.color||r,h.fillText(x.text,e/2,g)});let f=new ri(c);return f.colorSpace=De,f.anisotropy=4,f}function $d(i,t,e="#ffffff"){let s=ci(t?[{text:t,font:'bold 34px "Microsoft JhengHei", sans-serif',color:"#ffe08a",strokeW:7,lh:48},{text:i,font:'bold 50px "Microsoft JhengHei", sans-serif',color:e,strokeW:9,lh:56}]:[{text:i,font:'bold 50px "Microsoft JhengHei", sans-serif',color:e}],{w:512,h:128,stroke:"rgba(0,0,0,0.85)"}),r=new Ti(new si({map:s,transparent:!0,depthWrite:!1,fog:!1}));return r.scale.set(4,1,1),r.renderOrder=10,r}function yv(){if(mh)return mh;let i=new Ue(1,3.6,2,6),t=i.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),s=t.getY(e)+1.8,r=s/3.6,o=Math.sin(Math.PI*Math.min(1,r*1.15))*.55+.05;t.setX(e,n*o*2),t.setY(e,s),t.setZ(e,-r*r*1.5+Math.abs(n)*.35)}return i.rotateX(-Math.PI/2+.25),i.computeVertexNormals(),mh=i,i}function yh(i=Math.random){let t=new Pt,e=6+i()*3.5,n=8,s=(i()-.5)*2.4,r=(i()-.5)*2.4,o=new S(0,0,0),a=[];for(let d=1;d<=n;d++){let m=d/n,x=new S(s*m*m,e*m,r*m*m),g=x.distanceTo(o),p=.3-(d-1)/n*.12,y=.3-d/n*.12,_=new Ft(y,p*1.08,g*1.04,7,1),v=o.clone().add(x).multiplyScalar(.5),R=new pn().setFromUnitVectors(new S(0,1,0),x.clone().sub(o).normalize());_.applyMatrix4(new ne().compose(v,R,new S(1,1,1))),a.push(_),o=x}let l=ht(Ir(a),K.palmTrunk);t.add(l);let c=o.clone(),h=7+Math.floor(i()*3),u=new Pt;u.position.copy(c);for(let d=0;d<h;d++){let m=ht(yv(),K.palmLeaf,!0,!1);m.rotation.y=d/h*Math.PI*2+i()*.3,m.rotation.x=(i()-.5)*.3,m.scale.setScalar(.85+i()*.35),u.add(m)}t.add(u);for(let d=0;d<3;d++){let m=ht(new ve(.2,7,5),K.coconut),x=d/3*Math.PI*2;m.position.set(c.x+Math.cos(x)*.3,c.y-.35,c.z+Math.sin(x)*.3),t.add(m)}let f=i()*10;return ks.push((d,m)=>{u.rotation.z=Math.sin(m*.9+f)*.05,u.rotation.x=Math.cos(m*.7+f)*.04}),t}function Zd(i=Math.random,t=1){let e=new Pt,n=(5+i()*4)*t;e.add(xh(ht(new Ft(.18*t,.3*t,n*.4,6),K.trunk),0,n*.2,0));let s=4;for(let r=0;r<s;r++){let o=r/s,a=(2.2-o*1.5)*t,l=ht(new Re(a,n*.42,7),i()>.5?K.pine:K.leaf);l.position.y=n*.3+o*n*.55,l.rotation.y=i()*3,e.add(l)}return e}function vh(i=Math.random){let t=new Pt,e=3+i()*2;t.add(xh(ht(new Ft(.22,.35,e,6),K.trunk),0,e/2,0));for(let n=0;n<4;n++){let s=ht(new Rn(1.3+i()*.8,0),i()>.5?K.leaf:K.leafLight);s.position.set((i()-.5)*2,e+i()*1.2,(i()-.5)*2),s.rotation.set(i(),i(),i()),t.add(s)}return t}function _h(i=Math.random){let t=new Pt,e=2+Math.floor(i()*3);for(let n=0;n<e;n++){let s=ht(new Rn(.5+i()*.5,0),i()>.4?K.leaf:K.leafLight);s.position.set((i()-.5)*1.2,.35+i()*.3,(i()-.5)*1.2),s.rotation.set(i(),i(),i()),t.add(s)}return t}function fa(i=Math.random,t=1,e=K.rock){let n=new Rn(1,1),s=n.attributes.position;for(let o=0;o<s.count;o++){let a=new S().fromBufferAttribute(s,o),l=.75+i()*.45;a.multiplyScalar(l),a.y*=.7,s.setXYZ(o,a.x,a.y,a.z)}n.computeVertexNormals();let r=ht(n,e);return r.scale.setScalar(t),r.rotation.y=i()*6,r}function Jd(i,t=6202175,e=9224530){let n=new Re(.12,.55,3);n.translate(0,.27,0);let s=new Vi(n,new Lt({roughness:1,flatShading:!0}),i.length*3),r=new Rn(.11,0);r.translate(0,.35,0);let o=i.filter((p,y)=>y%5===0),a=new Vi(r,new Lt({roughness:.6,emissiveIntensity:.05}),o.length),l=new ne,c=new pn,h=new S,u=new dt,f=new dt(t),d=new dt(e),m=0;for(let p of i)for(let y=0;y<3;y++)c.setFromEuler(new vn((Math.random()-.5)*.5,Math.random()*6,(Math.random()-.5)*.5)),h.setScalar(.7+Math.random()*.8),l.compose(new S(p.x+(Math.random()-.5)*.5,p.y,p.z+(Math.random()-.5)*.5),c,h),s.setMatrixAt(m,l),s.setColorAt(m,u.copy(f).lerp(d,Math.random())),m++;let x=[16739210,16766282,16777215,11893759,16747069];o.forEach((p,y)=>{l.compose(new S(p.x+.3,p.y,p.z-.2),c.identity(),h.setScalar(.8+Math.random()*.6)),a.setMatrixAt(y,l),a.setColorAt(y,u.set(x[y%x.length]))}),s.receiveShadow=!0;let g=new Pt;return g.add(s,a),g}function gh(i,t,e){let n=new oi;n.moveTo(-i/2,0),n.lineTo(i/2,0),n.lineTo(0,t),n.lineTo(-i/2,0);let s=new Ai(n,{depth:e,bevelEnabled:!1});return s.translate(0,0,-e/2),s}function Kd(i={}){let{w:t=7,d:e=6,h:n=3.6,wall:s=K.wallCream,roof:r=K.roofRed,sign:o=null,chimney:a=!0,porch:l=!0}=i,c=new Pt;c.add(xh(ht(new Tt(t+.4,.5,e+.4),K.stone),0,0,0));let h=ht(new Tt(t,n,e),s);h.position.y=n/2+.25,c.add(h);for(let y of[-1,1])for(let _ of[-1,1]){let v=ht(new Tt(.3,n,.3),K.woodDark);v.position.set(y*(t/2),n/2+.25,_*(e/2)),c.add(v)}let u=ht(new Tt(t+.2,.25,e+.2),K.woodDark);u.position.y=n+.25,c.add(u);let f=t*.45,d=ht(gh(t+1.2,f,e+1),r);d.position.y=n+.3,c.add(d);let m=ht(gh(t,f-.3,e-.05),s);if(m.position.y=n+.3,c.add(m),a){let y=ht(new Tt(.8,2.2,.8),K.stone);y.position.set(t*.25,n+f*.7,-e*.2),c.add(y)}let x=ht(new Tt(1.2,2.2,.15),K.woodDark);x.position.set(0,1.35,e/2+.05),c.add(x);let g=ht(new ve(.07,6,4),K.metal);g.position.set(.4,1.3,e/2+.15),c.add(g);let p=(y,_,v,R)=>{let T=ht(new Tt(1.1,1,.12),K.window,!1);T.position.set(y,_,v),T.rotation.y=R;let I=ht(new Tt(1.3,1.2,.08),K.woodLight,!1);I.position.set(y,_,v),I.rotation.y=R,I.translateZ(-.03);let P=ht(new Tt(1.4,.12,.3),K.woodDark);P.position.set(y,_-.6,v),P.rotation.y=R,c.add(I,T,P)};if(p(-t*.3,n*.55+.3,e/2+.04,0),p(t*.3,n*.55+.3,e/2+.04,0),p(t/2+.04,n*.55+.3,0,Math.PI/2),p(-t/2-.04,n*.55+.3,0,-Math.PI/2),p(0,n*.55+.3,-e/2-.04,Math.PI),l){let y=ht(new Tt(2.2,.3,1.2),K.plank);y.position.set(0,.15,e/2+.7),c.add(y);let _=ht(new Tt(2.4,.12,1.4),r);_.position.set(0,2.85,e/2+.7),_.rotation.x=.25,c.add(_)}if(o){let y=ci(o,{w:512,h:128,bg:"#6b4423",border:"#3d2510",color:"#ffe9b0",stroke:"#2a1808",font:'bold 70px "Microsoft JhengHei", sans-serif'}),_=ht(new Ue(2.6,.65),new Lt({map:y,roughness:.8}),!1);_.position.set(0,n-.2,e/2+.2),c.add(_)}return c}function Pr(i=!1,t=16757575){let e=new Pt,n=ht(new Ft(.09,.12,2.6,6),K.woodDark);n.position.y=1.3,e.add(n);let s=ht(new Tt(.6,.08,.08),K.woodDark);s.position.set(.25,2.5,0),e.add(s);let r=ht(new Tt(.3,.4,.3),K.lampGlass,!1);r.position.set(.5,2.2,0);let o=ht(new Re(.28,.2,4),K.dark);if(o.position.set(.5,2.5,0),o.rotation.y=Math.PI/4,e.add(r,o),i){let a=new Us(t,0,16,1.6);a.position.set(.5,2.1,0),e.add(a),Lr.push({light:a,base:9})}return e}function Qd(i=24,t=3.2,e=1.4,n={}){let s=new Pt,r=[],o=.5;for(let u=0;u<i;u+=o+.05){let f=new Tt(o,.14,t*(.96+Math.random()*.06));f.translate(u+o/2,e-.07+(Math.random()-.5)*.03,(Math.random()-.5)*.08),r.push(f)}let a=ht(Ir(r),K.plank);s.add(a);let l=[];for(let u=.3;u<=i;u+=3)for(let f of[-1,1]){let d=new Ft(.16,.18,e+8,7);d.translate(u,(e-8)/2+.25,f*(t/2-.05)),l.push(d)}s.add(ht(Ir(l),K.woodDark));for(let u of[-1,1]){let f=ht(new Tt(i,.25,.18),K.woodDark);f.position.set(i/2,e-.25,u*(t/2)),s.add(f)}if(n.rail!==!1){let u=[];for(let d=1.5;d<i-1;d+=3){let m=new Ft(.07,.07,1,5);m.translate(d,e+.5,t/2-.1),u.push(m)}s.add(ht(Ir(u),K.woodDark));let f=ht(new Ft(.035,.035,i-3,4),K.rope);f.rotation.z=Math.PI/2,f.position.set(i/2,e+.85,t/2-.1),s.add(f)}let c=Pr(!0);c.position.set(i-.6,e,-t/2+.25),c.rotation.y=Math.PI/2;let h=Pr(!1);return h.position.set(i*.45,e,-t/2+.25),h.rotation.y=Math.PI/2,s.add(c,h),s}function Dr(i=.9){let t=new Pt;t.add(ht(new Tt(i,i,i),K.woodLight));let e=ht(new Tt(i*1.02,i*.14,i*1.02),K.woodDark);e.position.y=i*.3,t.add(e);let n=e.clone();return n.position.y=-i*.3,t.add(n),t.children.forEach(s=>s.position.y+=i/2),t}function pa(){let i=new Pt,t=ht(new Ft(.42,.42,1.1,10),K.wood);t.position.y=.55;let e=ht(new Ft(.47,.47,.6,10),K.wood);e.position.y=.55;for(let n of[.2,.9]){let s=ht(new Ft(.46,.46,.06,10),K.metal);s.position.y=n,i.add(s)}return i.add(t,e),i}function Mh(){let i=new Pt;for(let n of[-1.5,1.5]){let s=ht(new Ft(.08,.08,2.2,5),K.woodDark);s.position.set(n,1.1,0),i.add(s)}let t=ht(new Ft(.05,.05,3.2,5),K.woodDark);t.rotation.z=Math.PI/2,t.position.y=2.1,i.add(t);let e=Jt(10528936,{metalness:.3,roughness:.5});for(let n=0;n<5;n++){let s=ht(new Re(.16,.8,5),e);s.position.set(-1.1+n*.55,1.65,0),s.rotation.x=Math.PI,i.add(s)}return i}function ma(){let i=new Pt,t=ht(new Tt(2.2,.12,.6),K.woodLight);t.position.y=.55,i.add(t);for(let n of[-.9,.9]){let s=ht(new Tt(.12,.55,.5),K.woodDark);s.position.set(n,.27,0),i.add(s)}let e=ht(new Tt(2.2,.5,.08),K.woodLight);return e.position.set(0,.95,-.27),i.add(e),i}function ga(i,t=""){let e=new Pt,n=ht(new Ft(.1,.12,2.4,6),K.woodDark);n.position.y=1.2,e.add(n);let r=ci(t?[{text:i,lh:60},{text:t,font:'bold 36px "Microsoft JhengHei", sans-serif',lh:50}]:[i],{w:512,h:160,bg:"#8a5a2b",border:"#4a2e14",color:"#fff4d6",stroke:"#3b230e"}),o=ht(new Tt(2.2,.7,.1),[K.wood,K.wood,K.wood,K.wood,new Lt({map:r}),new Lt({map:r})]);return o.position.y=2,e.add(o),e}function bh(i){let t=new Pt;for(let r of[-2.6,2.6]){let o=ht(new Ft(.22,.28,4.4,7),K.woodDark);o.position.set(r,2.2,0),t.add(o)}let e=ci(i,{w:1024,h:192,bg:"#2f6fa3",border:"#f1d27a",color:"#ffffff",stroke:"#0f2a40",font:'bold 110px "Arial Black", "Microsoft JhengHei", sans-serif'}),n=ht(new Tt(6.2,1.15,.2),[K.wood,K.wood,K.wood,K.wood,new Lt({map:e}),new Lt({map:e})]);n.position.y=4.4,t.add(n);let s=ht(gh(7,.9,.9),K.roofBlue);return s.position.y=5,t.add(s),t}function Eh(i="\u9BAE\u9B5A\u6536\u8CFC"){let t=new Pt,e=ht(new Tt(4.2,1.1,1.3),K.woodLight);e.position.set(0,.55,.9),t.add(e);let n=ht(new Tt(4.4,.12,1.5),K.woodDark);n.position.set(0,1.15,.9),t.add(n);for(let g of[-2.1,2.1])for(let p of[-1,1.5]){let y=ht(new Ft(.09,.09,3.4,6),K.woodDark);y.position.set(g,1.7,p),t.add(y)}let s=document.createElement("canvas");s.width=256,s.height=64;let r=s.getContext("2d");for(let g=0;g<8;g++)r.fillStyle=g%2?"#f4f1ea":"#d9483b",r.fillRect(g*32,0,32,64);let o=new ri(s);o.colorSpace=De;let a=new Lt({map:o,side:Ie,roughness:.9}),l=ht(new Ue(4.8,3,8,1),a);l.rotation.x=-Math.PI/2+.32,l.position.set(0,3.25,.3),t.add(l);for(let g=0;g<8;g++){let p=ht(new Re(.3,.35,3),g%2?K.white:K.red,!1);p.rotation.x=Math.PI,p.position.set(-2.1+g*.6,2.62,1.75),t.add(p)}let c=ht(new Tt(3.6,.15,1),K.ice);c.position.set(0,1.27,.9),t.add(c);let h=[Jt(10466240,{metalness:.4,roughness:.35}),Jt(14711391,{roughness:.4}),Jt(7180200,{metalness:.4,roughness:.35})];for(let g=0;g<6;g++){let p=ht(new ve(.18,8,6),h[g%3]);p.scale.set(2.4,.6,.8),p.position.set(-1.4+g*.56,1.42,.75+g%2*.25),p.rotation.y=(Math.random()-.5)*.4,t.add(p);let y=ht(new Re(.15,.3,3),h[g%3]);y.rotation.z=Math.PI/2,y.position.set(p.position.x+.5,1.42,p.position.z),t.add(y)}let u=ci(i,{w:512,h:128,bg:"#1e4d6b",border:"#f3d27a",color:"#ffffff",stroke:"#0b2233",font:'bold 76px "Microsoft JhengHei", sans-serif'}),f=ht(new Ue(3,.75),new Lt({map:u}),!1);f.position.set(0,3.55,1.85),f.rotation.x=-.1,t.add(f);let d=pa();d.position.set(2.8,0,1.2),t.add(d);let m=Dr();m.position.set(-2.9,0,1),m.rotation.y=.3,t.add(m);let x=Pr(!0);return x.position.set(2.4,0,2),t.add(x),t}function jd(){let i=new Pt,t=ht(new Ft(3.2,3.6,1.2,12),K.stone);t.position.y=.6,i.add(t);let e=6,n=14;for(let g=0;g<e;g++){let p=2.4-g/e*.9,y=2.4-(g+1)/e*.9,_=ht(new Ft(y,p,n/e,16),g%2?K.red:K.white);_.position.y=1.2+(g+.5)*(n/e),i.add(_)}let s=1.2+n,r=ht(new Ft(2,2,.25,16),K.dark);r.position.y=s,i.add(r);let o=ht(new Ft(1.1,1.1,1.8,10),K.lampGlass,!1);o.position.y=s+1,i.add(o);let a=ht(new Re(1.5,1.4,10),K.red);a.position.y=s+2.6,i.add(a);let l=ht(new ve(.2,8,6),K.metal);l.position.y=s+3.4,i.add(l);let c=ht(new Tt(1.2,2.2,.3),K.woodDark);c.position.set(0,2.3,2.3),i.add(c);let h=new sn({color:16774080,transparent:!0,opacity:0,blending:Bn,depthWrite:!1,side:Ie,fog:!1}),u=new Re(4,60,16,1,!0);u.translate(0,-30,0),u.rotateZ(Math.PI/2);let f=new Pt;f.position.y=s+1;let d=new et(u,h),m=new et(u,h);m.rotation.y=Math.PI,f.add(d,m),i.add(f);let x=new Us(16769696,0,40,1.5);return x.position.y=s+1,i.add(x),Lr.push({light:x,base:30}),ks.push((g,p,y)=>{f.rotation.y+=g*.6,h.opacity=.14*y,f.visible=y>.05}),i}function tf(){let i=new Pt,t=ht(new Ft(1.6,2.6,9,8),K.wallWhite);t.position.y=4.5,i.add(t);let e=ht(new Re(2.2,2.4,8),K.roofBrown);e.position.y=10.2,i.add(e);let n=ht(new Tt(1.2,2,.3),K.woodDark);n.position.set(0,1,2.45),i.add(n);let s=new Pt;s.position.set(0,8.6,2.1);let r=ht(new Ft(.25,.25,.8,8),K.woodDark);r.rotation.x=Math.PI/2,s.add(r);for(let o=0;o<4;o++){let a=new Pt;a.rotation.z=o/4*Math.PI*2;let l=ht(new Tt(.2,6.5,.15),K.woodDark);l.position.y=3.3,a.add(l);let c=ht(new Ue(1.3,5.2),K.sail);c.position.set(.75,3.6,.05),a.add(c),s.add(a)}return i.add(s),ks.push(o=>{s.rotation.z-=o*.7}),i}function wh(){let i=new Pt;for(let r=0;r<9;r++){let o=r/9*Math.PI*2,a=fa(Math.random,.32,K.stone);a.position.set(Math.cos(o)*.9,.12,Math.sin(o)*.9),i.add(a)}for(let r=0;r<4;r++){let o=ht(new Ft(.1,.12,1.3,6),K.trunk);o.rotation.z=Math.PI/2-.5,o.rotation.y=r/4*Math.PI*2,o.position.y=.35,i.add(o)}let t=new sn({color:16752688,transparent:!0,opacity:.9,blending:Bn,depthWrite:!1}),e=new sn({color:16769162,transparent:!0,opacity:.9,blending:Bn,depthWrite:!1}),n=[];for(let r=0;r<5;r++){let o=new et(new Re(.28-r*.03,1.1-r*.1,6),r%2?e:t);o.position.set((Math.random()-.5)*.3,.75,(Math.random()-.5)*.3),i.add(o),n.push(o)}let s=new Us(16747066,4,14,1.5);return s.position.y=1.3,i.add(s),s.castShadow=!1,Lr.push({light:s,base:14,flicker:!0}),ks.push((r,o)=>{n.forEach((a,l)=>{let c=.8+.35*Math.sin(o*(8+l*2.3)+l);a.scale.set(1,c,1),a.rotation.y=o*(1+l*.3)})}),i}function Ur(i=16053492,t=2845872){let e=new Pt,n=_=>{let v=new oi;return v.moveTo(-2.4*_,-1.05*_),v.lineTo(1*_,-1.1*_),v.quadraticCurveTo(2.4*_,-.9*_,2.9*_,0),v.quadraticCurveTo(2.4*_,.9*_,1*_,1.1*_),v.lineTo(-2.4*_,1.05*_),v.lineTo(-2.4*_,-1.05*_),v},s=n(1),r=n(.86);s.holes.push(r);let o=new Ai(s,{depth:.95,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:1});o.rotateX(-Math.PI/2);let a=ht(o,Jt(i,{roughness:.5}));a.position.y=-.35,e.add(a);let l=new Ai(n(1.015),{depth:.16,bevelEnabled:!1});l.rotateX(-Math.PI/2);let c=ht(l,Jt(t,{roughness:.5}));c.position.y=.32,e.add(c);let h=new Ai(n(.9),{depth:.12,bevelEnabled:!1});h.rotateX(-Math.PI/2);let u=ht(h,K.plank);u.position.y=-.2,e.add(u);let f=new Ai(n(.75),{depth:.35,bevelEnabled:!1});f.rotateX(-Math.PI/2);let d=ht(f,Jt(t,{roughness:.6}));d.position.y=-.62,e.add(d);for(let _ of[-1.2,.6]){let v=ht(new Tt(.55,.1,1.8),K.woodLight);v.position.set(_,.3,0),e.add(v)}let m=new Pt,x=ht(new Tt(.6,.7,.5),Jt(2237480,{roughness:.4}));x.position.y=.55,m.add(x);let g=ht(new Tt(.62,.15,.52),Jt(14239803,{roughness:.4}));g.position.y=.95,m.add(g);let p=ht(new Tt(.15,1.1,.15),K.metal);p.position.y=-.2,m.add(p);let y=ht(new Tt(.05,.45,.1),K.metal);return y.position.set(-.1,-.65,0),m.add(y),m.position.set(-2.6,0,0),e.add(m),e.userData.prop=y,e.userData.motor=m,e}var Jt,K,Kv,Lr,ks,kn,mh,Vs=ye(()=>{He();Yd();Jt=(i,t={})=>new Lt({color:i,roughness:.85,metalness:0,...t}),K={wood:Jt(9132587),woodDark:Jt(5913118),woodLight:Jt(11764302),plank:Jt(10119998),plankOld:Jt(8350293),roofRed:Jt(11814191,{flatShading:!0}),roofBlue:Jt(4022156,{flatShading:!0}),roofGreen:Jt(5012028,{flatShading:!0}),roofBrown:Jt(7227950,{flatShading:!0}),wallCream:Jt(15720898),wallWhite:Jt(15855334),wallBlue:Jt(11127256),wallPink:Jt(15254712),wallYellow:Jt(15785114),stone:Jt(9275264,{flatShading:!0}),rock:Jt(8222573,{flatShading:!0}),rockDark:Jt(6249042,{flatShading:!0}),leaf:Jt(4165434,{flatShading:!0}),leafLight:Jt(5941572,{flatShading:!0}),palmLeaf:Jt(4889148,{side:Ie,flatShading:!0}),pine:Jt(2909495,{flatShading:!0}),trunk:Jt(7031342,{flatShading:!0}),palmTrunk:Jt(9400136,{flatShading:!0}),metal:Jt(7106679,{metalness:.6,roughness:.4}),dark:Jt(2236962),red:Jt(12597547),white:Jt(16053492),rope:Jt(13152892),coconut:Jt(5913890),sail:Jt(15985366,{side:Ie}),window:new Lt({color:2898762,emissive:16761194,emissiveIntensity:0,roughness:.2,metalness:.1}),lampGlass:new Lt({color:16773577,emissive:16758090,emissiveIntensity:.2,roughness:.3}),ice:Jt(14283519,{roughness:.2,transparent:!0,opacity:.85})},Kv=[K.window,K.lampGlass],Lr=[],ks=[],kn=[];mh=null});function _v(i){let t=i/100;return Nr.map((e,n)=>n===0?e.weight*Math.max(.15,1-t*.5):n===1?e.weight:e.weight*(1+t*(n-1)*.55))}function nf(i,t,e){let n=xa.filter(m=>m.pools.includes(i)&&(m.time==="any"||m.time==="night"===e)),s=_v(t),r=Nr.map((m,x)=>({r:m,w:n.some(g=>g.rarity===m.id)?s[x]:0})),o=r.reduce((m,x)=>m+x.w,0),a=Math.random()*o,l=r.find(m=>(a-=m.w)<=0)||r[1],c=n.filter(m=>m.rarity===l.r.id),h=c[Math.floor(Math.random()*c.length)],u=Math.random(),f=h.minW+(h.maxW-h.minW)*Math.pow(u,2.3),d=null;if(h.rarity!=="trash"){for(let m of Sh)if(Math.random()<m.chance*(1+t/200)){d=m;break}}return d&&(f*=d.weightMul),f=Math.round(f*100)/100,f<.01&&(f=.01),{fish:h,weight:f,mutation:d}}function sf(i,t,e){let n=Ke[i.rarity],s=(i.minW+i.maxW)/2,r=.6+.8*Math.min(2.5,t/s),o=i.base*r*(e?e.valueMul:1);return n.id==="trash"&&(o=i.base),Math.max(1,Math.round(o))}function rf(i,t){let e=Ke[i.rarity],n=(i.minW+i.maxW)/2;return Math.min(1,e.diff+i.diff+Math.max(0,Math.min(.15,(t/n-1)*.08)))}function Fr(i){return i>=1e3?`${(i/1e3).toFixed(2)} \u516C\u5678`:i<1?`${Math.round(i*1e3)} g`:`${i.toFixed(2)} kg`}var Nr,Ke,Qt,xa,Ci,ef,Sh,Gs=ye(()=>{Nr=[{id:"trash",name:"\u5783\u573E",color:"#9a9a9a",weight:14,diff:0,valueMul:.3},{id:"common",name:"\u666E\u901A",color:"#e8e8e8",weight:52,diff:.1,valueMul:1},{id:"uncommon",name:"\u7F55\u898B",color:"#61d26b",weight:22,diff:.2,valueMul:1.6},{id:"unusual",name:"\u4E0D\u5C0B\u5E38",color:"#c38bff",weight:8.5,diff:.32,valueMul:2.6},{id:"rare",name:"\u7A00\u6709",color:"#3f9bff",weight:3.2,diff:.45,valueMul:4.5},{id:"legendary",name:"\u50B3\u8AAA",color:"#ffa31a",weight:.55,diff:.62,valueMul:9},{id:"mythical",name:"\u795E\u8A71",color:"#ff3f6c",weight:.11,diff:.78,valueMul:18},{id:"exotic",name:"\u7570\u754C",color:"rainbow",weight:.02,diff:.9,valueMul:40}],Ke=Object.fromEntries(Nr.map((i,t)=>[i.id,{...i,index:t}])),Qt=(i,t,e,n,s,r,o,a,l,c={})=>({id:i,name:t,rarity:e,pools:n,minW:s,maxW:r,base:o,shape:a,colors:l,time:"any",diff:0,...c}),xa=[Qt("seaweed","\u6D77\u5E36","trash",["noob","normal","ocean"],.1,.8,2,"weed",[4025130,6986298]),Qt("boot","\u7834\u820A\u9774\u5B50","trash",["noob","normal","pond"],.4,1.5,3,"boot",[5913122,3088146]),Qt("can","\u751F\u93FD\u9435\u7F50","trash",["normal","pond","ocean"],.1,.4,3,"can",[10528429,12597547]),Qt("driftwood","\u6F02\u6D41\u6728","trash",["noob","normal","ocean"],.5,3,4,"wood",[9071173,6178352]),Qt("anchovy","\u9BF7\u9B5A","common",["noob"],.05,.35,12,"standard",[7311272,14674158],{len:3.2}),Qt("sardine","\u6C99\u4E01\u9B5A","common",["noob","ocean"],.08,.5,14,"standard",[5140367,15134450],{len:3}),Qt("mackerel","\u9BD6\u9B5A","common",["noob","normal"],.4,2.2,18,"standard",[3107438,14739168],{len:3.4,stripes:!0}),Qt("clownfish","\u5C0F\u4E11\u9B5A","uncommon",["noob"],.05,.4,35,"standard",[16743196,16777215],{len:2.2,bands:!0,time:"day"}),Qt("seabream","\u9ED1\u9BDB","uncommon",["noob","normal"],.6,4,32,"tall",[6055536,13225682]),Qt("pufferfish","\u6CB3\u8C5A","unusual",["noob"],.3,2.5,55,"round",[14205562,16446424]),Qt("glowsquid","\u87A2\u5149\u9B77\u9B5A","unusual",["noob","ocean"],.3,3,60,"squid",[6280447,13104383],{time:"night",glow:6280447}),Qt("yellowfin","\u9EC3\u9C2D\u9BAA\u9B5A","rare",["noob","ocean"],15,120,110,"standard",[2112107,14278888],{len:3.6,fin:16765503}),Qt("moonray","\u6708\u5149\u9B5F","legendary",["noob"],20,160,260,"flat",[3820154,13623551],{time:"night",glow:10470655}),Qt("goldtuna","\u9EC3\u91D1\u9BAA\u9B5A","mythical",["noob"],80,400,700,"standard",[16763955,16773808],{len:3.6,glow:16765503}),Qt("cod","\u9C48\u9B5A","common",["normal"],1,9,20,"standard",[8025172,15130822],{len:3.4,spots:!0}),Qt("flounder","\u6BD4\u76EE\u9B5A","common",["normal"],.5,5,22,"flat",[9073488,15854038]),Qt("herring","\u9BE1\u9B5A","common",["normal","ocean"],.1,.8,15,"standard",[5930394,15265522],{len:3.2}),Qt("salmon","\u9BAD\u9B5A","uncommon",["normal"],2,18,40,"standard",[6254470,15900810],{len:3.5,spots:!0}),Qt("redsnapper","\u7D05\u9BDB","uncommon",["normal"],1,12,42,"tall",[14241855,16238264]),Qt("grouper","\u77F3\u6591\u9B5A","unusual",["normal"],5,60,70,"tall",[7035450,13218698],{spots:!0}),Qt("anglerfish","\u9B9F\u9C47\u9B5A","unusual",["normal","ocean"],2,25,75,"round",[3813178,7035755],{time:"night",glow:10354589,lure:!0}),Qt("mahimahi","\u9B3C\u982D\u5200","rare",["normal"],6,40,120,"standard",[3122027,16765503],{len:3.6}),Qt("hammerhead","\u96D9\u9AFB\u9BCA","legendary",["normal","ocean"],150,450,320,"shark",[7110543,14673642],{hammer:!0}),Qt("oarfish","\u7687\u5E36\u9B5A","mythical",["normal"],100,600,800,"long",[14212582,16727887],{len:9}),Qt("tilapia","\u5433\u90ED\u9B5A","common",["pond"],.2,2,14,"tall",[6976614,14277833]),Qt("carp","\u9BC9\u9B5A","common",["pond"],1,12,16,"standard",[9075258,15128992],{len:3}),Qt("catfish","\u9BF0\u9B5A","uncommon",["pond"],2,30,38,"standard",[4868676,12105896],{len:3.6,whiskers:!0}),Qt("rainbowtrout","\u8679\u9C52","unusual",["pond"],.5,8,62,"standard",[7047770,16748464],{len:3.4,spots:!0}),Qt("koi","\u9326\u9BC9","rare",["pond"],1,15,140,"standard",[16777215,16734762],{len:3,koi:!0}),Qt("goldenkoi","\u9EC3\u91D1\u9326\u9BC9","legendary",["pond"],3,25,380,"standard",[16763955,16773808],{len:3,glow:16765503}),Qt("spiritcarp","\u9748\u9B42\u9BC9","mythical",["pond"],5,40,900,"standard",[10482687,16777215],{len:3.2,glow:10482687,time:"night"}),Qt("skipjack","\u6B63\u9C39","common",["ocean"],2,15,22,"standard",[2834283,14278888],{len:3.3,stripes:!0}),Qt("flyingfish","\u98DB\u9B5A","uncommon",["ocean"],.2,1.2,36,"standard",[3895216,15266040],{len:3.2,wings:!0,time:"day"}),Qt("barracuda","\u68AD\u9B5A","unusual",["ocean"],3,25,68,"long",[8030874,14739178],{len:5}),Qt("swordfish","\u528D\u65D7\u9B5A","rare",["ocean"],50,400,150,"standard",[3100538,13687008],{len:4,sword:!0}),Qt("bluemarlin","\u85CD\u69CD\u9B5A","legendary",["ocean"],100,700,340,"standard",[2052e3,14214388],{len:4.2,sword:!0,fin:3898320}),Qt("whaleshark","\u9BE8\u9BCA","mythical",["ocean"],2e3,9e3,1200,"whale",[4083558,15265007],{spots:!0}),Qt("abyssleviathan","\u6DF1\u6DF5\u5229\u7DAD\u5766","exotic",["ocean","normal","noob"],3e3,12e3,3e3,"shark",[1773616,9060351],{glow:11758591,time:"night"}),Qt("starlightkoi","\u661F\u8F1D\u9326\u9BC9","exotic",["pond"],10,80,2500,"standard",[12166143,16777215],{len:3,glow:16777215})],Ci=Object.fromEntries(xa.map(i=>[i.id,i])),ef={noob:"noob Island \u6D77\u5CB8",normal:"normal Island \u6D77\u5CB8",pond:"normal Island \u6C60\u5858",ocean:"\u5916\u6D77"},Sh=[{id:"big",name:"\u5DE8\u5927",chance:.035,weightMul:2.4,valueMul:1.4,color:"#ffd36b"},{id:"shiny",name:"\u9583\u4EAE",chance:.03,weightMul:1,valueMul:1.85,color:"#fff7a8"},{id:"albino",name:"\u767D\u5316",chance:.02,weightMul:1,valueMul:2.2,color:"#ffffff"},{id:"tiny",name:"\u8FF7\u4F60",chance:.03,weightMul:.35,valueMul:1.1,color:"#9fe6ff"}]});var tn,ya,Th=ye(()=>{zs();Gs();tn={tutorial:{title:"\u65B0\u624B\u6559\u5B78",giver:"tutor",reward:100,stages:[{kind:"event",type:"equip",count:1,text:"\u6309 1 \u62FF\u51FA\u65B0\u624B\u91E3\u7AFF"},{kind:"event",type:"catch",count:1,text:"\u6309\u4F4F\u5DE6\u9375\u7529\u7AFF\uFF0C\u91E3\u5230\u7B2C\u4E00\u689D\u9B5A"},{kind:"event",type:"sell",count:1,text:"\u628A\u9B5A\u8CE3\u7D66\u9B5A\u5546\u30FB\u8001\u9673",target:"merchant_noob"},{kind:"turnin",npc:"tutor",text:"\u56DE\u53BB\u627E\u5C0E\u5E2B\u30FB\u963F\u51F1 \u9818\u734E\u52F5",target:"tutor"}]},dock5:{title:"\u78BC\u982D\u8A66\u8EAB\u624B",giver:"hai",reward:150,requires:["tutorial"],stages:[{kind:"event",type:"catch",count:5,text:"\u5728 noob Island \u91E3\u5230 5 \u689D\u9B5A",filter:i=>i.pool==="noob"},{kind:"turnin",npc:"hai",text:"\u56DE\u5831\u78BC\u982D\u6F01\u592B\u30FB\u963F\u6D77",target:"hai"}]},voyage:{title:"\u51FA\u822A\uFF01",giver:"hai",reward:120,requires:["dock5"],stages:[{kind:"event",type:"arrive",count:1,text:"\u627E\u8239\u5320\u30FB\u963F\u6728\u53EB\u8239\uFF0C\u958B\u5230 normal Island",filter:i=>i.island==="normal"},{kind:"turnin",npc:"shipwright_normal",text:"\u8DDF normal Island \u7684\u8239\u5320\u30FB\u5927\u77F3 \u6253\u62DB\u547C",target:"shipwright_normal"}]},night3:{title:"\u591C\u91E3\u9054\u4EBA",giver:"de",reward:300,stages:[{kind:"event",type:"catch",count:3,text:"\u5728\u591C\u665A\u91E3\u5230 3 \u689D\u9B5A\uFF08\u4E0D\u542B\u5783\u573E\uFF09",filter:i=>i.night&&i.fish.rarity!=="trash"},{kind:"turnin",npc:"de",text:"\u56DE\u5831\u8001\u6F01\u592B\u30FB\u5FB7\u53D4",target:"de"}]},salmon:{title:"\u4E3B\u5EDA\u7684\u59D4\u8A17",giver:"anna",reward:250,stages:[{kind:"deliver",npc:"anna",fishId:"salmon",text:"\u5E36\u4E00\u689D\u9BAD\u9B5A\u7D66\u4E3B\u5EDA\u30FB\u5B89\u5A1C\uFF08normal Island \u6D77\u5CB8\uFF09",target:"anna"}]},pond3:{title:"\u6C60\u5858\u7814\u7A76",giver:"lin",reward:200,stages:[{kind:"event",type:"catch",count:3,text:"\u5728 normal Island \u7684\u6C60\u5858\u91E3\u5230 3 \u689D\u9B5A",filter:i=>i.pool==="pond"},{kind:"turnin",npc:"lin",text:"\u56DE\u5831\u7814\u7A76\u54E1\u30FB\u6797\u535A\u58EB",target:"lin"}]},rare1:{title:"\u7A00\u6709\u9B5A\u8ABF\u67E5",giver:"lin",reward:600,requires:["pond3"],stages:[{kind:"event",type:"catch",count:1,text:"\u91E3\u5230\u4E00\u689D\u300C\u7A00\u6709\u300D\u4EE5\u4E0A\u7684\u9B5A",filter:i=>Ke[i.fish.rarity].index>=Ke.rare.index},{kind:"turnin",npc:"lin",text:"\u56DE\u5831\u7814\u7A76\u54E1\u30FB\u6797\u535A\u58EB",target:"lin"}]}},ya=class{constructor(t){this.g=t}q(t){return Dt.quests[t]}isDone(t){return!!(Dt.quests[t]&&Dt.quests[t].done)}isActive(t){let e=Dt.quests[t];return!!e&&!e.done}canStart(t){let e=tn[t];return!Dt.quests[t]&&(e.requires||[]).every(n=>this.isDone(n))}stage(t){let e=Dt.quests[t];return e?tn[t].stages[e.stage]:null}start(t){this.canStart(t)&&(Dt.quests[t]={stage:0,progress:0,done:!1},this.g.ui.toast(`\u{1F4DC} \u63A5\u53D7\u4EFB\u52D9\uFF1A${tn[t].title}`,"#ffd75e"),this.g.sound.chime(),t==="tutorial"&&this.g.fishing.equipped&&this.onEvent("equip",{}),In(),this.render())}advance(t){let e=Dt.quests[t];if(e.stage++,e.progress=0,e.stage>=tn[t].stages.length){this.finish(t);return}this.g.sound.coin(),In(),this.render()}finish(t){let e=tn[t],n=Dt.quests[t];n.done=!0,Dt.money+=e.reward,this.g.ui.setMoney(Dt.money,!0),this.g.ui.toast(`\u2705 \u4EFB\u52D9\u5B8C\u6210\uFF1A${e.title}\u3000\u734E\u52F5 $${e.reward}`,"#8dff9a"),this.g.sound.jingle(4),In(),this.render()}onEvent(t,e={}){for(let[n,s]of Object.entries(Dt.quests)){if(s.done)continue;let r=tn[n].stages[s.stage];r.kind!=="event"||r.type!==t||r.filter&&!r.filter(e)||(s.progress+=e.count||1,s.progress>=r.count?this.advance(n):(In(),this.render()))}}turnInReady(t){for(let[e,n]of Object.entries(Dt.quests)){if(n.done)continue;let s=tn[e].stages[n.stage];if((s.kind==="turnin"||s.kind==="deliver")&&s.npc===t){if(s.kind==="deliver"&&!Dt.inventory.some(r=>r.id===s.fishId))continue;return e}}return null}markerFor(t){if(this.turnInReady(t))return"?";for(let[e,n]of Object.entries(tn))if(n.giver===t&&this.canStart(e))return"!";return null}activeList(){let t=[];for(let[e,n]of Object.entries(Dt.quests)){if(n.done)continue;let s=tn[e],r=s.stages.map((o,a)=>{let l=o.text;return a===n.stage&&o.kind==="event"&&o.count>1&&(l+=`\uFF08${n.progress}/${o.count}\uFF09`),a===n.stage&&o.kind==="deliver"&&(l+=Dt.inventory.some(c=>c.id===o.fishId)?"\uFF08\u2714 \u80CC\u5305\u4E2D\u6709\uFF09":"\uFF08\u80CC\u5305\u4E2D\u6C92\u6709\uFF09"),{text:l,done:a<n.stage,current:a===n.stage}}).filter((o,a)=>a<=n.stage);t.push({id:e,title:s.title,steps:r,reward:`$${s.reward}`})}return t}currentTarget(){for(let[t,e]of Object.entries(Dt.quests)){if(e.done)continue;let n=tn[t].stages[e.stage];if(n.target)return n.target}return null}render(){this.g.ui.renderQuests(this.activeList())}}});var Ji,Ah,va,_a=ye(()=>{He();Ji={starter:{id:"starter",name:"\u65B0\u624B\u91E3\u7AFF",lure:25,luck:50,control:.1,resilience:35,maxWeight:5e3,desc:"\u6BCF\u4F4D\u91E3\u5BA2\u7684\u7B2C\u4E00\u628A\u91E3\u7AFF\u3002\u6728\u88FD\u7AFF\u8EAB\u3001\u7D05\u8272\u7D81\u7DDA\uFF0C\u53EF\u9760\u53C8\u597D\u4E0A\u624B\u3002"}},Ah=48,va=class{constructor(t){this.group=new Pt,this.segments=[];let e=new Lt({color:8016432,roughness:.45,metalness:.1}),n=new Lt({color:12597547,roughness:.5}),s=new Lt({color:13214826,roughness:.95}),r=new Lt({color:12106948,roughness:.3,metalness:.8}),o=new Lt({color:2303531,roughness:.4,metalness:.4}),a=new et(new Ft(.045,.05,.55,10),s);a.rotation.x=Math.PI/2,a.position.z=-.12;let l=new et(new Ft(.055,.055,.06,10),o);l.rotation.x=Math.PI/2,l.position.z=-.41,this.group.add(a,l);let c=new Pt;c.position.set(0,-.11,.08);let h=new et(new Tt(.03,.08,.12),r);h.position.y=.05;let u=new et(new Ft(.075,.075,.06,14),r);u.rotation.z=Math.PI/2;let f=new et(new Ft(.06,.06,.062,14),new Lt({color:15856113,roughness:.6}));f.rotation.z=Math.PI/2;let d=new Pt;d.position.x=.05;let m=new et(new Tt(.015,.11,.02),o);m.position.y=.05;let x=new et(new Ft(.018,.018,.05,8),new Lt({color:12597547}));x.rotation.z=Math.PI/2,x.position.set(.03,.1,0),d.add(m,x),c.add(h,u,f,d),this.group.add(c),this.reelHandle=d;let g=9,y=3/g,_=this.group;for(let M=0;M<g;M++){let L=new Pt;L.position.z=M===0?.14:y;let O=.032-M/g*.024,z=.032-(M+1)/g*.024,k=new et(new Ft(z,O,y,7),e);if(k.rotation.x=Math.PI/2,k.position.z=y/2,k.castShadow=!0,L.add(k),M%2===1){let $=new et(new Ft(O+.006,O+.006,.05,7),n);$.rotation.x=Math.PI/2,$.position.z=.03;let G=new et(new Qo(.025-M*.002,.004,4,10),r);G.position.set(0,-.045,.03),L.add($,G)}_.add(L),this.segments.push(L),_=L}this.tip=new Pe,this.tip.position.z=y,_.add(this.tip),this.bobber=new Pt;let v=new et(new ve(.15,14,8,0,Math.PI*2,0,Math.PI/2),new Lt({color:15217962,roughness:.35})),R=new et(new ve(.15,14,8,0,Math.PI*2,Math.PI/2,Math.PI/2),new Lt({color:16777215,roughness:.35})),T=new et(new Ft(.152,.152,.025,14),o),I=new et(new Ft(.012,.012,.3,5),new Lt({color:16769354,emissive:16761856,emissiveIntensity:.4}));I.position.y=.27;let P=new et(new Ft(.01,.01,.18,4),o);P.position.y=-.22,this.bobber.add(v,R,T,I,P),this.bobber.traverse(M=>{M.isMesh&&(M.castShadow=!0)}),t.add(this.bobber),this.bobberVel=new S;let E=new me;this.linePos=new Float32Array(Ah*3),E.setAttribute("position",new le(this.linePos,3).setUsage(qi)),this.lineMat=new vr({color:16185078,transparent:!0,opacity:.85}),this.line=new Go(E,this.lineMat),this.line.frustumCulled=!1,t.add(this.line),this.bend=0,this.side=0,this.targetBend=0,this.targetSide=0,this.bendVel=0,this.spin=0,this.visible=!1,this.setVisible(!1),this._tip=new S}setVisible(t){this.visible=t,this.group.visible=t,this.bobber.visible=t,this.line.visible=t}tipWorld(t=this._tip){return this.tip.updateWorldMatrix(!0,!1),this.tip.getWorldPosition(t)}update(t){let s=(this.targetBend-this.bend)*120-this.bendVel*14;this.bendVel+=s*t,this.bend+=this.bendVel*t,this.side+=(this.targetSide-this.side)*Math.min(1,t*8);let r=this.segments.length;for(let o=0;o<r;o++){let a=Math.pow((o+1)/r,1.6)*.42;this.segments[o].rotation.x=this.bend*a,this.segments[o].rotation.y=this.side*a}this.reelHandle.rotation.x+=this.spin*t}impulse(t){this.bendVel+=t}updateLine(t,e=0,n=0){let s=this.tipWorld(),r=this.bobber.position,o=s.distanceTo(r),a=t*o*.18;for(let l=0;l<Ah;l++){let c=l/(Ah-1),h=s.x+(r.x-s.x)*c,u=s.z+(r.z-s.z)*c,f=s.y+(r.y-s.y)*c-a*4*c*(1-c),d=e*Math.sin(c*Math.PI)*Math.sin(n*40+c*12)*.05;this.linePos[l*3]=h+d,this.linePos[l*3+1]=f+d,this.linePos[l*3+2]=u}this.line.geometry.attributes.position.needsUpdate=!0}}});function hi(i){return()=>i.dialogue.close()}function Ki(i,t,e){let n=i.quests,s=n.turnInReady(t.id);if(s){let o=tn[s].stages[Dt.quests[s].stage],a=e.thanks&&e.thanks[s]||["\u505A\u5F97\u597D\uFF01\u9019\u662F\u4F60\u7684\u734E\u52F5\u3002"];i.dialogue.run(t,[...a.slice(0,-1),{text:a[a.length-1],options:[{label:`\u9818\u53D6\u734E\u52F5 $${tn[s].reward}`,cls:"green",action:()=>{if(o.kind==="deliver"){let l=Dt.inventory.find(c=>c.id===o.fishId);l&&ah(l.uid),i.onInventoryChanged()}n.advance(s),i.dialogue.close()}}]}]);return}for(let o of e.quests||[])if(n.canStart(o)){let a=e.offers[o];i.dialogue.run(t,[...a.slice(0,-1),{text:a[a.length-1],options:[{label:`\u63A5\u53D7\u4EFB\u52D9\u300C${tn[o].title}\u300D`,cls:"green",action:()=>{n.start(o),i.dialogue.close()}},{label:"\u4E0B\u6B21\u518D\u8AAA",cls:"gray",action:hi(i)}]}]);return}for(let o of e.quests||[])if(n.isActive(o)&&e.hints&&e.hints[o]){i.dialogue.run(t,[{text:e.hints[o],options:[...e.extra?e.extra(i,t):[],{label:"\u597D\u7684\uFF01",cls:"gray",action:hi(i)}]}]);return}let r=Array.isArray(e.idle)?e.idle[Math.floor(Math.random()*e.idle.length)]:e.idle;i.dialogue.run(t,[{text:r,options:[...e.extra?e.extra(i,t):[],{label:"\u518D\u898B",cls:"gray",action:hi(i)}]}])}function Ch(i,t){let e=Dt.inventory,n=e.reduce((a,l)=>a+l.value,0),s=i.player.heldFish;if(i.quests.turnInReady(t.id))return Ki(i,t,{});let r=[];if(s){let a=Ci[s.id];r.push({label:`\u8CE3\u6389\u624B\u4E0A\u7684${a.name}\uFF08$${s.value}\uFF09`,cls:"green",action:()=>of(i,t,[s])})}e.length&&r.push({label:`\u5168\u90E8\u8CE3\u6389\uFF08${e.length} \u689D\u30FB$${n}\uFF09`,cls:"green",action:()=>i.dialogue.run(t,[{text:`\u5168\u90E8 ${e.length} \u689D\u9B5A\uFF0C\u4E00\u5171 $${n.toLocaleString()}\u3002\u78BA\u5B9A\u8981\u5168\u90E8\u8CE3\u6389\u55CE\uFF1F`,options:[{label:"\u78BA\u5B9A\u8CE3\u6389\uFF01",cls:"green",action:()=>of(i,t,[...e])},{label:"\u518D\u60F3\u60F3",cls:"gray",action:()=>Ch(i,t)}]}])}),r.push({label:"\u50F9\u683C\u600E\u9EBC\u7B97\uFF1F",action:()=>i.dialogue.run(t,["\u9B5A\u7684\u50F9\u683C\u770B\u7A2E\u985E\u3001\u7A00\u6709\u5EA6\u8DDF\u91CD\u91CF\u3002\u540C\u4E00\u7A2E\u9B5A\u8D8A\u91CD\u8D8A\u503C\u9322\uFF01","\u5E36\u6709\u300C\u5DE8\u5927\u300D\u3001\u300C\u9583\u4EAE\u300D\u3001\u300C\u767D\u5316\u300D\u9019\u4E9B\u8B8A\u7570\u7684\u9B5A\uFF0C\u6211\u6703\u7528\u66F4\u597D\u7684\u50F9\u9322\u6536\u8CFC\u3002",{text:"\u5B8C\u7F8E\u6536\u7DDA\uFF08\u9B5A\u5F9E\u982D\u5230\u5C3E\u90FD\u6C92\u8DD1\u51FA\u767D\u689D\uFF09\u7684\u9B5A\uFF0C\u50F9\u503C\u9084\u6703\u591A 10%\uFF01",options:[{label:"\u4E86\u89E3",cls:"gray",action:()=>Ch(i,t)}]}])}),r.push({label:"\u6C92\u4E8B\uFF0C\u518D\u898B",cls:"gray",action:hi(i)});let o=e.length?s?`\u5594\uFF01\u624B\u4E0A\u90A3\u689D${Ci[s.id].name}\u770B\u8D77\u4F86\u4E0D\u932F\u561B\uFF01\u8981\u8CE3\u55CE\uFF1F`:`\u6B61\u8FCE\uFF01\u4F60\u7684\u80CC\u5305\u88E1\u6709 ${e.length} \u689D\u9B5A\uFF0C\u7E3D\u5171\u503C $${n.toLocaleString()}\u3002\u8981\u8CE3\u9EDE\u4EC0\u9EBC\uFF1F`:"\u563F\uFF01\u6211\u662F\u9B5A\u5546\uFF0C\u4EC0\u9EBC\u9B5A\u90FD\u6536\uFF01\u7B49\u4F60\u91E3\u5230\u9B5A\u518D\u62FF\u4F86\u7D66\u6211\u770B\u770B\u5427\u3002";i.dialogue.run(t,[{text:o,options:r}])}function of(i,t,e){let n=0;for(let r of e)ah(r.uid)&&(n+=r.value);i.player.heldFish&&!Dt.inventory.includes(i.player.heldFish)&&i.selectSlot(0),Dt.money+=n,In(),i.ui.setMoney(Dt.money,!0),i.sound.coin(),i.onInventoryChanged(),i.quests.onEvent("sell",{count:e.length});let s=["\u6210\u4EA4\uFF01\u8B1D\u8B1D\u60E0\u9867\uFF5E","\u597D\u8CA8\uFF01\u4E0B\u6B21\u518D\u4F86\uFF01","\u9019\u4E9B\u9B5A\u5F88\u65B0\u9BAE\uFF0C\u5408\u4F5C\u6109\u5FEB\uFF01"];i.dialogue.run(t,[{text:`\u4E00\u5171 $${n.toLocaleString()}\uFF0C\u62FF\u597D\uFF01${s[Math.floor(Math.random()*s.length)]}`,options:[{label:"\u8B1D\u5566\uFF01",cls:"gray",action:hi(i)}]}])}var Rh,af,lf=ye(()=>{zs();Th();Gs();_a();Rh=["\u9996\u5148\u6309\u9375\u76E4\u4E0A\u7684\u30101\u3011\u62FF\u51FA\u4F60\u7684\u300C\u65B0\u624B\u91E3\u7AFF\u300D\u3002\u5DE6\u4E0B\u89D2\u6703\u986F\u793A\u91E3\u7AFF\u7684\u5C6C\u6027\u3002","\u9762\u5411\u6C34\u9762\uFF0C\u3010\u6309\u4F4F\u6ED1\u9F20\u5DE6\u9375\u3011\u958B\u59CB\u84C4\u529B\uFF0C\u89D2\u8272\u65C1\u908A\u6703\u51FA\u73FE\u529B\u9053\u689D\u3002\u3010\u653E\u958B\u3011\u5C31\u6703\u628A\u6D6E\u6A19\u7529\u51FA\u53BB\u2014\u2014\u529B\u9053\u8D8A\u5927\u7529\u5F97\u8D8A\u9060\uFF01","\u6D6E\u6A19\u4E00\u5B9A\u8981\u843D\u5728\u6C34\u88E1\u624D\u884C\u3002\u843D\u6C34\u5F8C\u8010\u5FC3\u7B49\u4E00\u4E0B\u2026\u2026\u300C\u4E0A\u9264\u901F\u5EA6\u300D\u8D8A\u9AD8\uFF0C\u9B5A\u5C31\u8D8A\u5FEB\u54AC\u990C\u3002\u7B49\u5F85\u6642\u518D\u9EDE\u4E00\u4E0B\u5DE6\u9375\u53EF\u4EE5\u6536\u56DE\u6D6E\u6A19\u3002","\u7576\u6D6E\u6A19\u88AB\u731B\u529B\u62C9\u4E0B\u53BB\u3001\u982D\u4E0A\u5192\u51FA\u3010!\u3011\u6642\uFF0C\u756B\u9762\u4E0A\u6703\u8DF3\u51FA\u3010SHAKE\u3011\u6309\u9215\uFF0C\u5FEB\u901F\u9EDE\u64CA\u5B83\u5011\u628A\u9B5A\u9264\u7262\uFF01","\u63A5\u8457\u662F\u6536\u7DDA\u5C0F\u904A\u6232\uFF1A\u3010\u6309\u4F4F\u5DE6\u9375\u6216\u7A7A\u767D\u9375\u3011\u767D\u8272\u63A7\u5236\u689D\u6703\u5F80\u53F3\u79FB\uFF0C\u653E\u958B\u5C31\u6703\u5F80\u5DE6\u6ED1\u3002\u60F3\u8FA6\u6CD5\u8B93\u9B5A\u7684\u5716\u793A\u4E00\u76F4\u5F85\u5728\u767D\u689D\u88E1\u9762\uFF01","\u9B5A\u5F85\u5728\u767D\u689D\u88E1\uFF0C\u4E0B\u65B9\u7684\u9032\u5EA6\u689D\u5C31\u6703\u6162\u6162\u586B\u6EFF\uFF1B\u9B5A\u8DD1\u51FA\u53BB\uFF0C\u9032\u5EA6\u5C31\u6703\u4E0B\u964D\uFF0C\u6B78\u96F6\u7684\u8A71\u9B5A\u5C31\u8DD1\u6389\u4E86\u3002","\u5C0F\u77E5\u8B58\uFF1A\u300C\u63A7\u5236\u529B\u300D\u8B93\u767D\u689D\u8B8A\u5BEC\uFF0C\u300C\u5FA9\u539F\u529B\u300D\u8B93\u9B5A\u8DD1\u51FA\u767D\u689D\u6642\u9032\u5EA6\u6389\u5F97\u6BD4\u8F03\u6162\uFF0C\u300C\u904B\u6C23\u300D\u63D0\u9AD8\u7A00\u6709\u9B5A\u6A5F\u7387\uFF0C\u300C\u6700\u5927\u91CD\u91CF\u300D\u662F\u91E3\u7AFF\u80FD\u8F15\u9B06\u62C9\u8D77\u7684\u91CD\u91CF\u3002","\u91E3\u5230\u7684\u9B5A\u6703\u653E\u9032\u80CC\u5305\uFF08\u6309 B \u67E5\u770B\uFF09\u3002\u62FF\u53BB\u78BC\u982D\u5165\u53E3\u65C1\u7684\u9B5A\u5546\u30FB\u8001\u9673\u90A3\u88E1\u5C31\u80FD\u63DB\u6210\u9322\uFF01","\u719F\u7DF4\u4E4B\u5F8C\uFF0C\u53BB\u78BC\u982D\u627E\u8239\u5320\u30FB\u963F\u6728\u53EB\u4E00\u8258\u8239\uFF0C\u5F80\u6771\u5357\u65B9\u958B\u5C31\u80FD\u5230 normal Island\u3002\u90A3\u88E1\u6709\u66F4\u591A\u9B5A\u548C\u59D4\u8A17\u5728\u7B49\u4F60\uFF01"],af={tutor(i,t){let e=i.quests;if(e.turnInReady("tutor"))return Ki(i,t,{thanks:{tutorial:["\u592A\u53B2\u5BB3\u4E86\uFF01\u4F60\u5DF2\u7D93\u5B78\u6703\u91E3\u9B5A\u3001\u9084\u628A\u9B5A\u8CE3\u6389\u4E86\uFF01","\u9019 $100 \u662F\u7D66\u4F60\u7684\u7562\u696D\u79AE\u7269\u3002\u53BB\u627E\u78BC\u982D\u7684\u963F\u6D77\uFF0C\u4ED6\u4E5F\u8A31\u6709\u4E8B\u60C5\u8981\u62DC\u8A17\u4F60\uFF01"]}});if(e.canStart("tutorial")){i.dialogue.run(t,["\u5594\uFF01\u4F60\u5C31\u662F\u65B0\u4F86\u7684\u91E3\u5BA2\u5427\uFF1F\u6B61\u8FCE\u4F86\u5230 noob Island\uFF01","\u6211\u662F\u5C0E\u5E2B\u30FB\u963F\u51F1\uFF0C\u8CA0\u8CAC\u6559\u65B0\u624B\u600E\u9EBC\u91E3\u9B5A\u3001\u600E\u9EBC\u628A\u9B5A\u8CE3\u6389\u63DB\u9322\u3002",{text:"\u8981\u6211\u5F9E\u982D\u6559\u4F60\u55CE\uFF1F",options:[{label:"\u597D\uFF01\u8ACB\u6559\u6211\u91E3\u9B5A",cls:"green",action:()=>i.dialogue.run(t,[...Rh,{text:"\u5C31\u9019\u6A23\uFF01\u5148\u8A66\u8457\u91E3\u4E00\u689D\u9B5A\uFF0C\u518D\u62FF\u53BB\u8CE3\u7D66\u8001\u9673\u5427\u3002\u6211\u5728\u9019\u88E1\u7B49\u4F60\u7684\u597D\u6D88\u606F\uFF01",options:[{label:"\u4EA4\u7D66\u6211\u5427\uFF01",cls:"green",action:()=>{e.start("tutorial"),i.dialogue.close()}}]}])},{label:"\u6211\u5DF2\u7D93\u6703\u4E86",cls:"gray",action:()=>{e.start("tutorial"),i.dialogue.run(t,["\u54C8\u54C8\uFF0C\u771F\u6709\u81EA\u4FE1\uFF01\u90A3\u5C31\u53BB\u91E3\u4E00\u689D\u9B5A\uFF0C\u518D\u8CE3\u7D66\u78BC\u982D\u65C1\u908A\u7684\u9B5A\u5546\u30FB\u8001\u9673\u8B49\u660E\u7D66\u6211\u770B\u5427\uFF01"])}}]}]);return}if(e.isActive("tutorial")){let n=tn.tutorial.stages[Dt.quests.tutorial.stage],s={equip:"\u5148\u6309\u30101\u3011\u628A\u91E3\u7AFF\u62FF\u51FA\u4F86\uFF01",catch:"\u9762\u5411\u5927\u6D77\u6309\u4F4F\u5DE6\u9375\u84C4\u529B\u3001\u653E\u958B\u7529\u7AFF\u3002\u9B5A\u4E0A\u9264\u5C31\u72C2\u9EDE SHAKE\uFF0C\u7136\u5F8C\u7528\u5DE6\u9375\u63A7\u5236\u767D\u689D\u628A\u9B5A\u62C9\u4E0A\u4F86\uFF01",sell:"\u9B5A\u5546\u30FB\u8001\u9673\u5C31\u5728\u78BC\u982D\u5165\u53E3\u90A3\u500B\u7D05\u767D\u689D\u7D0B\u7684\u6524\u4F4D\uFF0C\u8DDF\u4ED6\u8AAA\u8A71\u5C31\u80FD\u8CE3\u9B5A\u3002"}[n.type]||"\u52A0\u6CB9\uFF01";i.dialogue.run(t,[{text:s,options:[{label:"\u518D\u6559\u6211\u4E00\u6B21",action:()=>i.dialogue.run(t,Rh)},{label:"\u77E5\u9053\u4E86\uFF01",cls:"gray",action:hi(i)}]}]);return}i.dialogue.run(t,[{text:["\u4ECA\u5929\u7684\u6D77\u98A8\u771F\u8212\u670D\uFF0C\u5F88\u9069\u5408\u91E3\u9B5A\uFF01","\u807D\u8AAA\u665A\u4E0A\u6703\u51FA\u73FE\u767D\u5929\u770B\u4E0D\u5230\u7684\u9B5A\u5594\u3002","\u904B\u6C23\u8D8A\u9AD8\uFF0C\u8D8A\u5BB9\u6613\u91E3\u5230\u7A00\u6709\u7684\u9B5A\u3002"][Math.floor(Math.random()*3)],options:[{label:"\u518D\u6559\u6211\u4E00\u6B21\u91E3\u9B5A",action:()=>i.dialogue.run(t,Rh)},{label:"\u518D\u898B",cls:"gray",action:hi(i)}]}])},merchant(i,t){Ch(i,t)},rodshop(i,t){let e=Ji.starter;i.dialogue.run(t,[{text:"\u6B61\u8FCE\u5149\u81E8\u91E3\u5177\u5E97\uFF01\u76EE\u524D\u5E97\u88E1\u53EA\u6709\u300C\u65B0\u624B\u91E3\u7AFF\u300D\uFF0C\u66F4\u53B2\u5BB3\u7684\u91E3\u7AFF\u9084\u5728\u5F9E\u5927\u9678\u904B\u904E\u4F86\u7684\u8DEF\u4E0A\u2026\u2026",options:[{label:"\u770B\u770B\u65B0\u624B\u91E3\u7AFF",action:()=>i.dialogue.run(t,[`\u3010${e.name}\u3011${e.desc}`,`\u4E0A\u9264\u901F\u5EA6 ${e.lure}%\u30FB\u904B\u6C23 ${e.luck}%\u30FB\u63A7\u5236\u529B ${e.control}\u30FB\u5FA9\u539F\u529B ${e.resilience}%\u30FB\u6700\u5927\u91CD\u91CF ${e.maxWeight.toLocaleString()} kg`,"\u4F60\u5DF2\u7D93\u6709\u4E00\u628A\u4E86\uFF0C\u597D\u597D\u611B\u60DC\u5B83\u5427\uFF01"])},{label:"\u518D\u898B",cls:"gray",action:hi(i)}]}])},shipwright(i,t){if(i.quests.turnInReady(t.id))return Ki(i,t,{thanks:{voyage:["\u5594\uFF1F\u5F9E noob Island \u4E00\u8DEF\u958B\u904E\u4F86\u7684\u55CE\uFF1F\u4E86\u4E0D\u8D77\uFF01","\u6B61\u8FCE\u4F86\u5230 normal Island\uFF01\u9019\u88E1\u7684\u9B5A\u5546\u3001\u4E3B\u5EDA\u3001\u7814\u7A76\u54E1\u90FD\u5728\u627E\u80FD\u5E79\u7684\u91E3\u5BA2\u3002\u9019\u662F\u963F\u6D77\u8A17\u6211\u8F49\u4EA4\u7684\u734E\u52F5\uFF01"]}});i.dialogue.run(t,[{text:"\u8981\u51FA\u6D77\u55CE\uFF1F\u6211\u53EF\u4EE5\u5E6B\u4F60\u6E96\u5099\u4E00\u8258\u5C0F\u6C7D\u8247\uFF0C\u514D\u8CBB\u7684\uFF01",options:[{label:"\u53EB\u4E00\u8258\u8239",cls:"green",action:()=>{i.spawnBoatAt(t.def.boatSpawn),i.dialogue.run(t,["\u597D\u4E86\uFF01\u8239\u5C31\u505C\u5728\u78BC\u982D\u65C1\u908A\uFF0C\u9760\u8FD1\u6309\u3010E\u3011\u5C31\u80FD\u4E0A\u8239\u3002\u958B\u8239\u7528 W/S \u52A0\u901F\u5012\u9000\u3001A/D \u8F49\u5411\uFF0C\u6309\u4F4F Shift \u53EF\u4EE5\u5168\u901F\u524D\u9032\uFF01"])}},{label:"\u600E\u9EBC\u958B\u8239\uFF1F",action:()=>i.dialogue.run(t,["\u9760\u8FD1\u8239\u6309\u3010E\u3011\u4E0A\u8239\uFF0CW \u524D\u9032\u3001S \u5012\u9000\u3001A/D \u8F49\u5411\uFF0C\u6309\u4F4F Shift \u5168\u901F\u524D\u9032\u3002","\u5728\u8239\u4E0A\u6309\u30101\u3011\u62FF\u51FA\u91E3\u7AFF\u5C31\u80FD\u76F4\u63A5\u5728\u6D77\u4E0A\u91E3\u9B5A\uFF08\u8A18\u5F97\u5148\u505C\u8239\uFF09\u3002\u5916\u6D77\u6709\u5F88\u591A\u5927\u578B\u9B5A\uFF01","\u5F9E noob Island \u5F80\u6771\u5357\u65B9\u958B\u5C31\u662F normal Island\u3002\u8981\u4E0B\u8239\u6642\u9760\u8FD1\u9678\u5730\u6216\u78BC\u982D\u518D\u6309\u3010E\u3011\u3002"])},{label:"\u4E0D\u7528\u4E86",cls:"gray",action:hi(i)}]}])},hai(i,t){Ki(i,t,{quests:["dock5","voyage"],offers:{dock5:["\u563F\uFF0C\u65B0\u624B\uFF01\u6211\u662F\u963F\u6D77\uFF0C\u5F9E\u5C0F\u5C31\u5728\u9019\u500B\u78BC\u982D\u91E3\u9B5A\u3002","\u78BC\u982D\u76E1\u982D\u6C34\u6BD4\u8F03\u6DF1\uFF0C\u5E38\u5E38\u6709\u597D\u9B5A\u3002\u60F3\u8B49\u660E\u81EA\u5DF1\u7684\u8A71\uFF0C\u5C31\u5728 noob Island \u91E3 5 \u689D\u9B5A\u7D66\u6211\u770B\u770B\u5427\uFF01"],voyage:["\u4F60\u7684\u6280\u8853\u9032\u6B65\u5F88\u591A\u4E86\u561B\uFF01","noob Island \u7684\u9B5A\u5DF2\u7D93\u96E3\u4E0D\u5012\u4F60\u4E86\u3002\u53BB\u627E\u8239\u5320\u963F\u6728\u53EB\u8258\u8239\uFF0C\u958B\u5230\u6771\u5357\u65B9\u7684 normal Island \u5427\uFF0C\u90A3\u88E1\u7684\u8239\u5320\u5927\u77F3\u662F\u6211\u7684\u8001\u670B\u53CB\u3002"]},hints:{dock5:"\u5728 noob Island \u9644\u8FD1\u7684\u6C34\u57DF\u90FD\u7B97\uFF01\u78BC\u982D\u76E1\u982D\u662F\u6211\u6700\u63A8\u85A6\u7684\u4F4D\u7F6E\u3002",voyage:"\u627E\u8239\u5320\u30FB\u963F\u6728\u53EB\u8239\uFF0C\u7136\u5F8C\u5F80\u6771\u5357\u65B9\u4E00\u76F4\u958B\uFF0C\u770B\u5230\u5927\u5CF6\u548C\u98A8\u8ECA\u5C31\u5C0D\u4E86\uFF01"},thanks:{dock5:["5 \u689D\uFF01\u4E0D\u932F\u4E0D\u932F\uFF0C\u4F60\u6709\u91E3\u9B5A\u7684\u5929\u5206\uFF01","\u9019\u662F\u4F60\u7684\u734E\u52F5\u3002\u4E4B\u5F8C\u518D\u4F86\u627E\u6211\uFF0C\u6211\u9084\u6709\u4E8B\u60F3\u62DC\u8A17\u4F60\u3002"]},idle:["\u5916\u6D77\u6709\u5F88\u5927\u7684\u9B5A\uFF0C\u4F46\u662F\u8981\u5C0F\u5FC3\uFF0C\u592A\u91CD\u7684\u9B5A\u91E3\u7AFF\u53EF\u80FD\u62C9\u4E0D\u592A\u52D5\u3002","\u5929\u9ED1\u4E4B\u5F8C\uFF0C\u78BC\u982D\u7684\u71C8\u7C60\u6703\u4EAE\u8D77\u4F86\uFF0C\u5F88\u6F02\u4EAE\u5594\u3002","\u807D\u8AAA\u5728 noob Island \u7684\u591C\u665A\uFF0C\u6703\u6709\u767C\u51FA\u6708\u5149\u7684\u9B5F\u9B5A\u51FA\u6C92\u2026\u2026"]})},de(i,t){Ki(i,t,{quests:["night3"],offers:{night3:["\u5E74\u8F15\u4EBA\uFF0C\u4F60\u77E5\u9053\u55CE\uFF1F\u6709\u4E9B\u9B5A\u53EA\u5728\u665A\u4E0A\u624D\u6703\u51FA\u73FE\u3002","\u87A2\u5149\u9B77\u9B5A\u3001\u9B9F\u9C47\u9B5A\u2026\u2026\u9084\u6709\u50B3\u8AAA\u4E2D\u7684\u6DF1\u6DF5\u5229\u7DAD\u5766\u3002","\u7B49\u5929\u9ED1\u4E4B\u5F8C\uFF0C\u5E6B\u6211\u91E3 3 \u689D\u9B5A\u56DE\u4F86\u5427\uFF0C\u8B93\u6211\u770B\u770B\u4F60\u591C\u91E3\u7684\u672C\u4E8B\uFF01"]},hints:{night3:"\u665A\u4E0A\u662F\u6307\u592A\u967D\u4E0B\u5C71\u4E4B\u5F8C\uFF08\u5927\u7D04 18:30 ~ 05:30\uFF09\u3002\u53F3\u4E0A\u89D2\u7684\u6642\u9418\u6703\u8B8A\u6210\u6708\u4EAE\u3002"},thanks:{night3:["\u54C8\u54C8\uFF01\u591C\u88E1\u7684\u6D77\u5F88\u7F8E\u5427\uFF1F","\u4F60\u5DF2\u7D93\u662F\u500B\u591C\u91E3\u597D\u624B\u4E86\uFF0C\u6536\u4E0B\u5427\uFF01"]},idle:["\u6211\u5728\u9019\u500B\u78BC\u982D\u91E3\u4E86\u56DB\u5341\u5E74\u7684\u9B5A\u2026\u2026","\u4E00\u5929\u4E00\u591C\u53EA\u6709\u5341\u5206\u9418\uFF0C\u6642\u9593\u904E\u5F97\u771F\u5FEB\u554A\u3002","\u6708\u5149\u7167\u5728\u6D77\u9762\u4E0A\u7684\u6642\u5019\uFF0C\u6700\u5BB9\u6613\u9047\u5230\u7A00\u6709\u7684\u50A2\u4F19\u3002"]})},anna(i,t){Ki(i,t,{quests:["salmon"],offers:{salmon:["\u554A\uFF0C\u4F60\u662F\u91E3\u5BA2\u55CE\uFF1F\u592A\u597D\u4E86\uFF01","\u6211\u662F\u9019\u88E1\u9910\u5EF3\u7684\u4E3B\u5EDA\u5B89\u5A1C\uFF0C\u4ECA\u665A\u7684\u62DB\u724C\u83DC\u9700\u8981\u4E00\u689D\u65B0\u9BAE\u7684\u9BAD\u9B5A\u3002","\u9BAD\u9B5A\u5728 normal Island \u9644\u8FD1\u7684\u6D77\u88E1\u5C31\u91E3\u5F97\u5230\uFF0C\u53EF\u4EE5\u5E6B\u6211\u5E36\u4E00\u689D\u4F86\u55CE\uFF1F"]},hints:{salmon:"\u9BAD\u9B5A\u5728 normal Island \u7684\u6D77\u5CB8\u9644\u8FD1\uFF0C\u5C6C\u65BC\u300C\u7F55\u898B\u300D\u7B49\u7D1A\u3002\u91E3\u5230\u4E4B\u5F8C\u5225\u8CE3\u6389\u5594\uFF0C\u76F4\u63A5\u62FF\u4F86\u7D66\u6211\uFF01"},thanks:{salmon:["\u54C7\uFF01\u9019\u689D\u9BAD\u9B5A\u597D\u65B0\u9BAE\uFF01","\u4ECA\u665A\u7684\u9BAD\u9B5A\u6392\u4E00\u5B9A\u6703\u5927\u53D7\u597D\u8A55\uFF0C\u9019\u662F\u4F60\u7684\u5831\u916C\uFF01"]},idle:["\u4ECA\u5929\u7684\u7279\u9910\u662F\u9999\u714E\u9C48\u9B5A\uFF0C\u8981\u4F86\u4E00\u4EFD\u55CE\uFF1F","\u65B0\u9BAE\u7684\u9B5A\u53EA\u8981\u7C21\u55AE\u8ABF\u5473\u5C31\u5F88\u597D\u5403\u4E86\u3002"]})},lin(i,t){Ki(i,t,{quests:["pond3","rare1"],offers:{pond3:["\u4F60\u597D\uFF0C\u6211\u662F\u6D77\u6D0B\u7814\u7A76\u54E1\u6797\u535A\u58EB\u3002","\u9019\u5EA7\u6C60\u5858\u662F\u6DE1\u6C34\u7684\uFF0C\u548C\u6D77\u88E1\u7684\u9B5A\u5B8C\u5168\u4E0D\u4E00\u6A23\uFF01\u9326\u9BC9\u3001\u8679\u9C52\u2026\u2026\u751A\u81F3\u9084\u6709\u50B3\u8AAA\u4E2D\u7684\u9EC3\u91D1\u9326\u9BC9\u3002","\u53EF\u4EE5\u5E6B\u6211\u5728\u6C60\u5858\u91E3 3 \u689D\u9B5A\uFF0C\u5354\u52A9\u6211\u7684\u7814\u7A76\u55CE\uFF1F"],rare1:["\u6C60\u5858\u7684\u8CC7\u6599\u5F88\u6709\u5E6B\u52A9\uFF01\u63A5\u4E0B\u4F86\u6211\u60F3\u7814\u7A76\u7A00\u6709\u9B5A\u7A2E\u3002",`\u9B5A\u7684\u7A00\u6709\u5EA6\u7531\u4F4E\u5230\u9AD8\u662F\uFF1A${Nr.map(e=>e.name).join(" \u2192 ")}\u3002`,"\u5E6B\u6211\u91E3\u4E00\u689D\u300C\u7A00\u6709\u300D\u7B49\u7D1A\u4EE5\u4E0A\u7684\u9B5A\u5427\uFF01\u904B\u6C23\u8D8A\u9AD8\u8D8A\u5BB9\u6613\u9047\u5230\u3002"]},hints:{pond3:"\u6C60\u5858\u5C31\u5728\u6211\u65C1\u908A\uFF01\u7529\u7AFF\u6642\u8981\u8B93\u6D6E\u6A19\u843D\u5728\u6C60\u5858\u6C34\u9762\u4E0A\u3002",rare1:"\u7A00\u6709\u4EE5\u4E0A\u7684\u9B5A\u5F88\u5C11\u898B\uFF0C\u591A\u91E3\u5E7E\u6B21\u3001\u665A\u4E0A\u4E5F\u8A66\u8A66\u770B\u3002\u4E5F\u53EF\u4EE5\u53BB\u5916\u6D77\u78B0\u78B0\u904B\u6C23\uFF01"},thanks:{pond3:["\u592A\u597D\u4E86\uFF0C\u9019\u4E9B\u6A23\u672C\u5F88\u6709\u50F9\u503C\uFF01"],rare1:["\u9019\u2026\u2026\u9019\u771F\u662F\u592A\u68D2\u4E86\uFF01\u9019\u689D\u9B5A\u7684\u6578\u64DA\u975E\u5E38\u73CD\u8CB4\uFF01","\u9019\u662F\u7814\u7A76\u7D93\u8CBB\u7684\u4E00\u90E8\u5206\uFF0C\u8ACB\u6536\u4E0B\uFF01"]},idle:["\u6BCF\u7A2E\u9B5A\u90FD\u6709\u81EA\u5DF1\u51FA\u6C92\u7684\u5730\u9EDE\u548C\u6642\u9593\uFF0C\u8A18\u5F97\u770B\u770B\u5716\u9451\uFF08\u6309 N\uFF09\u3002","\u300C\u5DE8\u5927\u300D\u3001\u300C\u9583\u4EAE\u300D\u3001\u300C\u767D\u5316\u300D\u90FD\u662F\u7F55\u898B\u7684\u8B8A\u7570\uFF0C\u50F9\u503C\u6703\u66F4\u9AD8\u5594\u3002"]})}}});function Ws(i,t,e){return{x:t*Math.cos(i)+e*Math.sin(i),z:-t*Math.sin(i)+e*Math.cos(i)}}function Mv(i,t=!0){i.traverse(e=>{e.isMesh&&(e.castShadow=t,e.receiveShadow=!0)})}function cf(i){let t={npcs:[],spawn:null,boatSpawns:{}};for(let e of on)i.add(Bd(e));return bv(i,uh("noob"),t),Ev(i,uh("normal"),t),t}function bv(i,t,e){let n=new Ma(i,t,1234),s=t.flats[0];for(let p of t.flats)n.exclude(p.x,p.z,p.r*.8);let r=1.5;n.dock(40,10,32,0,r),e.boatSpawns.noob={...n.w(66,14.6),heading:0},n.house(2,27,{w:7.5,d:6,wall:K.wallCream,roof:K.roofRed,sign:"\u91E3\u5177\u5E97"},s.x,s.z),n.house(-6,6,{w:6.5,d:6,wall:K.wallBlue,roof:K.roofBlue},s.x,s.z),n.house(24,28,{w:6,d:5.5,wall:K.wallYellow,roof:K.roofGreen},s.x,s.z),n.house(0,-10,{w:6,d:5,wall:K.wallPink,roof:K.roofBrown,chimney:!1},s.x,s.z);let o={x:31,z:1},a=mn(o.x,o.z,26,12),l=Eh("\u9BAE\u9B5A\u6536\u8CFC"),c=n.w(o.x,o.z);n.add(l,o.x,o.z,a),kn.push(l);let h=Ws(a,0,.9);$i(c.x+h.x,c.z+h.z,4.4,1.4,n.h(c.x,c.z)+1.3,a),n.exclude(o.x,o.z,5);let u=Ws(a,0,-.3);n.npc("merchant_noob","\u8001\u9673","\u9B5A\u5546",o.x+u.x,o.z+u.z,a,{shirt:3829413,pants:2960685,apron:15921906,hat:"captain",hair:10132122,beard:"#bdbdbd",skin:14724201},{script:"merchant"});let f=wh();n.add(f,6,15),n.exclude(6,15,3);for(let p=0;p<3;p++){let y=p*2.1+.4,_=ma();n.add(_,6+Math.cos(y)*3.4,15+Math.sin(y)*3.4,mn(6+Math.cos(y)*3.4,15+Math.sin(y)*3.4,6,15)+Math.PI)}n.add(ga("noob Island","\u65B0\u624B\u5CF6\u30FB\u6B61\u8FCE\u5149\u81E8"),9,2,mn(9,2,14,10)),n.exclude(9,2,1.5);let d=bh("noob Island");n.add(d,37,10,Math.PI/2),kn.push(d);for(let p of[-2.6,2.6]){let y=n.w(37,10+p);ze(y.x,y.z,.3,10)}n.add(ga("\u78BC\u982D \u2192","\u53EB\u8239\u30FB\u6D77\u91E3"),33,15.5,-Math.PI/2+.3);for(let[p,y,_]of[[20,12.8,!0],[28,12.8,!1],[20,7,!1],[12,22,!0],[-2,14,!1]])n.lanternAt(p,y,_);let m=t.flats[1],x=jd();n.add(x,m.x,m.z,.8),kn.push(x);{let p=n.w(m.x,m.z);ze(p.x,p.z,3.4,30)}n.exclude(m.x,m.z,6);for(let[p,y,_]of[[34,4.5,.3],[35,5.6,1],[44,7.6,.2],[27,-3,.5]]){let v=Dr();n.add(v,p,y,_);let R=n.w(p,y);ze(R.x,R.z,.6,n.h(R.x,R.z)+1)}for(let[p,y]of[[45,11],[29,4]]){let _=pa();n.add(_,p,y,0,p>40?r:null);let v=n.w(p,y);ze(v.x,v.z,.5,(p>40?r:n.h(v.x,v.z))+1.1)}n.add(Mh(),22,4,.4);{let p=n.w(22,4);$i(p.x,p.z,3.4,.4,n.h(p.x,p.z)+2.3,.4)}let g=Ur(12597547,16053492);n.add(g,36,36,2.2,n.h(n.w(36,36).x,n.w(36,36).z)+.4),g.rotation.z=.15;{let p=n.w(36,36);ze(p.x,p.z,1.8,10)}n.exclude(36,36,3),n.npc("tutor","\u963F\u51F1","\u65B0\u624B\u5C0E\u5E2B",15,4,mn(15,4,12,10),{shirt:15105570,pants:3426654,hat:"straw",hair:2824976,vest:9329195},{wave:!0}),n.npc("rodshop","\u5C0F\u7F8E","\u91E3\u5177\u5E97",4,22,mn(4,22,s.x,s.z),{shirt:16743080,pants:2899536,hat:"beanie",hatColor:16765503,hair:7027230}),n.npc("shipwright_noob","\u963F\u6728","\u8239\u5320",58,8.9,Math.PI,{shirt:9323693,pants:3881787,hat:"bucket",hatColor:7048739,hair:1118481,beard:"#3a2a1a"},{script:"shipwright",y:r,boatSpawn:"noob"}),n.npc("hai","\u963F\u6D77","\u78BC\u982D\u6F01\u592B",70,11.2,Math.PI/2,{shirt:1482885,pants:2899536,hat:"bucket",hatColor:12597547,hair:2824976},{y:r}),n.scatter(30,(p,y)=>n.add(yh(n.rng),p,y,n.rng()*6),p=>p>.9&&p<3.2,3),n.scatter(22,(p,y,_,v)=>{n.add(vh(n.rng),p,y,n.rng()*6),ze(v.x,v.z,.45,_+6),n.exclude(p,y,2.5)},p=>p>3.5,3),n.scatter(40,(p,y)=>n.add(_h(n.rng),p,y,0),p=>p>2,1),n.scatter(18,(p,y,_,v)=>{let R=.5+n.rng()*1.6;n.add(fa(n.rng,R),p,y,0,_-.2),R>1&&ze(v.x,v.z,R*.8,_+R)},p=>p>-2.5&&p<1.2,2),n.groundCover(520),e.spawn={...n.w(13,9),yaw:mn(13,9,15,4)},e.npcs.push(...n.npcs)}function Ev(i,t,e){let n=new Ma(i,t,98765),s=t.flats[0];for(let m of t.flats)n.exclude(m.x,m.z,m.r*.8);let r=t.pond;n.exclude(r.x,r.z,r.r+4);let o=1.5;n.dock(-72,8,36,Math.PI,o),e.boatSpawns.normal={...n.w(-100,12.6),heading:Math.PI},n.dock(-70,-14,16,Math.PI*.92,o),n.house(-52,-10,{w:7,d:6,wall:K.wallWhite,roof:K.roofBlue,sign:"\u6F01\u6703"},s.x,s.z),n.house(-30,-12,{w:8,d:6.5,wall:K.wallCream,roof:K.roofRed,sign:"\u6D77\u98A8\u9910\u5EF3"},s.x,s.z),n.house(-54,26,{w:6.5,d:6,wall:K.wallYellow,roof:K.roofGreen},s.x,s.z),n.house(-30,28,{w:7,d:6,wall:K.wallPink,roof:K.roofBrown,sign:"\u65C5\u9928"},s.x,s.z),n.house(-18,10,{w:6,d:5.5,wall:K.wallBlue,roof:K.roofRed},s.x,s.z);let a={x:-60,z:10},l=mn(a.x,a.z,s.x,s.z),c=Eh("\u6F01\u7372\u6536\u8CFC"),h=n.w(a.x,a.z);n.add(c,a.x,a.z,l),kn.push(c);let u=Ws(l,0,.9);$i(h.x+u.x,h.z+u.z,4.4,1.4,n.h(h.x,h.z)+1.3,l),n.exclude(a.x,a.z,5);let f=Ws(l,0,-.3);n.npc("merchant_normal","\u8001\u738B","\u9B5A\u5546",a.x+f.x,a.z+f.z,l,{shirt:12597547,pants:2960685,apron:15921906,hat:"bucket",hatColor:3113197,hair:2236962,skin:14066283},{script:"merchant"}),n.add(wh(),s.x,s.z);for(let m=0;m<4;m++){let x=m*Math.PI/2+.3,g=s.x+Math.cos(x)*3.6,p=s.z+Math.sin(x)*3.6;n.add(ma(),g,p,mn(g,p,s.x,s.z)+Math.PI)}kn.push(n.add(bh("normal Island"),-68,8,-Math.PI/2));for(let m of[-2.6,2.6]){let x=n.w(-68,8+m);ze(x.x,x.z,.3,10)}for(let[m,x,g]of[[-62,3.5,!0],[-48,3,!1],[-48,14,!0],[-34,2,!1],[-34,16,!1],[-24,4,!0],[-10,24,!1],[12,9,!0]])n.lanternAt(m,x,g);n.add(ga("\u2192 \u6C60\u5858","\u6797\u535A\u58EB\u7684\u7814\u7A76\u7AD9"),-14,2,mn(-14,2,0,-4));let d=t.flats[1];kn.push(n.add(tf(),d.x,d.z,mn(d.x,d.z,s.x,s.z)));{let m=n.w(d.x,d.z);ze(m.x,m.z,2.6,40)}for(let[m,x,g]of[[-64,4,.2],[-65,5.2,.9],[-63,15,.4],[-44,-2,.1]]){let p=Dr();n.add(p,m,x,g);let y=n.w(m,x);ze(y.x,y.z,.6,n.h(y.x,y.z)+1)}for(let[m,x]of[[-57,4],[-42,20]]){n.add(pa(),m,x);let g=n.w(m,x);ze(g.x,g.z,.5,n.h(g.x,g.z)+1.1)}n.add(Mh(),-46,-2,.1);{let m=n.w(-46,-2);$i(m.x,m.z,3.4,.4,n.h(m.x,m.z)+2.3,.1)}for(let[m,x,g]of[[-92,3.3,Math.PI],[-99,3.3,Math.PI+.1]]){let p=Ur([3066993,15844367][Math.round(m)%2===0?0:1],3426654);n.add(p,m,x,g,.05);let y=n.w(m,x);ze(y.x,y.z,2.2,2)}n.npc("shipwright_normal","\u5927\u77F3","\u8239\u5320",-80,6.9,Math.PI*.5,{shirt:8359053,pants:2899536,hat:"captain",hair:1118481,beard:"#222222",skin:13010498},{script:"shipwright",y:o,boatSpawn:"normal"}),n.npc("de","\u5FB7\u53D4","\u8001\u6F01\u592B",-105,6.6,-Math.PI/2,{shirt:3426654,pants:2042422,hat:"bucket",hatColor:8359053,hair:14540253,beard:"#eeeeee",skin:14196848},{y:o}),n.npc("anna","\u5B89\u5A1C","\u4E3B\u5EDA",-30,-6.5,mn(-30,-6.5,s.x,s.z),{shirt:16777215,pants:2899536,apron:15158332,hat:"chef",hair:12597547}),n.npc("lin","\u6797\u535A\u58EB","\u6D77\u6D0B\u7814\u7A76\u54E1",20,-1,mn(20,-1,r.x,r.z),{shirt:15528177,pants:3426654,hat:null,hair:2829099,glasses:!0,vest:15528177}),n.add(Dr(.8),22,-4,.3),n.add(ma(),4,12,Math.PI),n.scatter(70,(m,x,g,p)=>{n.add(Zd(n.rng,.9+n.rng()*.6),m,x,0),ze(p.x,p.z,.45,g+8)},m=>m>6,2.8),n.scatter(24,(m,x,g,p)=>{n.add(vh(n.rng),m,x,n.rng()*6),ze(p.x,p.z,.45,g+6)},m=>m>2.5&&m<7,3),n.scatter(30,(m,x)=>n.add(yh(n.rng),m,x,0),m=>m>.9&&m<2.8,3),n.scatter(50,(m,x)=>n.add(_h(n.rng),m,x,0),m=>m>2,1),n.scatter(30,(m,x,g,p)=>{let y=.8+n.rng()*2.6;n.add(fa(n.rng,y,n.rng()>.5?K.rock:K.rockDark),m,x,0,g-.3),y>1&&ze(p.x,p.z,y*.8,g+y)},(m,x,g)=>m>-2.5&&m<1.4||m>10&&g<-20,2),n.groundCover(800),e.npcs.push(...n.npcs)}var mn,Ma,hf=ye(()=>{He();Hn();Zi();Vs();Mn();lf();mn=(i,t,e,n)=>Math.atan2(e-i,n-t);Ma=class{constructor(t,e,n){this.scene=t,this.isl=e,this.rng=Fd(n),this.excl=[],this.npcs=[]}w(t,e){return{x:this.isl.cx+t,z:this.isl.cz+e}}h(t,e){return Ve(t,e)}add(t,e,n,s=0,r=null,o=!0){let a=this.w(e,n);return t.position.set(a.x,r??this.h(a.x,a.z),a.z),t.rotation.y=s,Mv(t,o),this.scene.add(t),t}exclude(t,e,n){let s=this.w(t,e);this.excl.push({x:s.x,z:s.z,r:n})}free(t,e,n=0){return!this.excl.some(s=>(t-s.x)**2+(e-s.z)**2<(s.r+n)**2)}house(t,e,n,s,r){let o=mn(t,e,s,r),a=this.w(t,e),l=this.h(a.x,a.z),c=Kd(n);this.add(c,t,e,o,l-.05),kn.push(c);let h=n.w||7,u=n.d||6;return $i(a.x,a.z,h+.5,u+.5,l+(n.h||3.6)+4,o),this.exclude(t,e,Math.max(h,u)*.75+1),{rot:o,p:a,y:l}}dock(t,e,n,s,r=1.5){let o=Qd(n,3.2,r);this.add(o,t,e,s,0);let a=Ws(s,n/2,0),l=this.w(t+a.x,e+a.z);$i(l.x,l.z,n,3.2,r,s,{walkable:!0});for(let c=0;c<=n;c+=4){let h=Ws(s,c,0);this.exclude(t+h.x,e+h.z,4)}return o}npc(t,e,n,s,r,o,a,l={}){let c=this.w(s,r),h=l.y??this.h(c.x,c.z);this.npcs.push({id:t,name:e,title:n,x:c.x,y:h,z:c.z,yaw:o,look:a,talk:af[l.script||t],...l}),this.exclude(s,r,2)}lanternAt(t,e,n=!1){let s=this.w(t,e),r=Pr(n);this.add(r,t,e,this.rng()*6),ze(s.x,s.z,.2,this.h(s.x,s.z)+3)}scatter(t,e,n,s=1.5){let r=0,o=0,a=this.isl.radius;for(;r<t&&o<t*30;){o++;let l=this.rng()*Math.PI*2,c=Math.sqrt(this.rng())*a*1.05,h=Math.cos(l)*c,u=Math.sin(l)*c,f=this.w(h,u),d=this.h(f.x,f.z);n(d,h,u,f)&&this.free(f.x,f.z,s)&&(e(h,u,d,f),r++)}}groundCover(t,e=1.9){let n=[],s=0;for(;n.length<t&&s<t*20;){s++;let r=this.rng()*Math.PI*2,o=Math.sqrt(this.rng())*this.isl.radius,a=this.w(Math.cos(r)*o,Math.sin(r)*o),l=this.h(a.x,a.z);if(l<e||!this.free(a.x,a.z,-1))continue;let c=this.h(a.x+1,a.z),h=this.h(a.x,a.z+1);Math.abs(c-l)>.7||Math.abs(h-l)>.7||n.push(new S(a.x,l-.05,a.z))}this.scene.add(Jd(n))}}});var ba,uf=ye(()=>{He();Hn();Hs();Mn();ba=class{constructor(t){this.g=t;let e=t.scene;this.clouds=new Pt;let n=new Lt({color:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.95,fog:!1,emissive:16777215,emissiveIntensity:.15});this.cloudMat=n;let s=new Rn(1,1);for(let f=0;f<26;f++){let d=new Pt,m=4+Math.floor(Math.random()*5);for(let x=0;x<m;x++){let g=new et(s,n);g.position.set(jt(-14,14),jt(-2,3),jt(-7,7)),g.scale.set(jt(7,13),jt(4,7),jt(6,10)),d.add(g)}d.position.set(jt(-700,900),jt(140,220),jt(-900,600)),d.userData.speed=jt(1.5,4),this.clouds.add(d)}e.add(this.clouds),this.gulls=[];let r=new me;r.setAttribute("position",new Kt([0,0,.2,0,0,-.2,-1.1,.1,0],3)),r.computeVertexNormals();let o=new Lt({color:16053492,side:Ie,roughness:.8}),a=new Lt({color:3355443,side:Ie});for(let f=0;f<9;f++){let d=new Pt,m=new et(new $o(.12,.5,3,6),o);m.rotation.x=Math.PI/2;let x=new et(new ve(.11,6,5),o);x.position.z=.42;let g=new et(new Re(.04,.15,4),new Lt({color:15844367}));g.rotation.x=Math.PI/2,g.position.z=.55;let p=new et(r,o),y=new et(r,o);y.scale.x=-1;let _=new et(new Re(.06,.3,3),a);_.rotation.z=Math.PI/2,_.position.x=-1,p.add(_),d.add(m,x,g,p,y),d.scale.setScalar(1.3);let v=on[f%on.length];d.userData={wl:p,wr:y,cx:v.cx+jt(-30,30),cz:v.cz+jt(-30,30),r:jt(25,60),h:jt(18,34),a:jt(0,6),sp:jt(.15,.3)*(Math.random()<.5?-1:1),flap:jt(0,6)},d.traverse(R=>{R.isMesh&&(R.castShadow=!0)}),e.add(d),this.gulls.push(d)}let l=260,c=new Float32Array(l*3);this.ffBase=[];for(let f=0;f<l;f++){let d=on[f%on.length],m=Math.random()*Math.PI*2,x=Math.sqrt(Math.random())*d.radius*.85,g=d.cx+Math.cos(m)*x,p=d.cz+Math.sin(m)*x;this.ffBase.push({x:g,z:p,y:0,ph:Math.random()*10})}let h=new me;h.setAttribute("position",new le(c,3)),this.ffMat=new _r({color:14221162,size:.35,transparent:!0,opacity:0,blending:Bn,depthWrite:!1}),this.fireflies=new Ls(h,this.ffMat),this.fireflies.frustumCulled=!1,e.add(this.fireflies),this.ffInit=!1,this.jumpers=[];let u=new Lt({color:12110036,metalness:.5,roughness:.3});for(let f=0;f<3;f++){let d=new Pt,m=new et(new ve(.2,8,6),u);m.scale.set(2.2,.8,.6);let x=new et(new Re(.16,.3,3),u);x.rotation.z=-Math.PI/2,x.position.x=-.55,d.add(m,x),d.visible=!1,e.add(d),this.jumpers.push({mesh:d,t:0,active:!1})}this.jumpTimer=3}update(t,e,n,s){let r=this.g;for(let o of this.clouds.children)o.position.x+=o.userData.speed*t,o.position.x>1e3&&(o.position.x=-800);this.cloudMat.color.setRGB(1,1,1).lerp(r.sky.horizon,.25).multiplyScalar(.35+.65*r.sky.dayLight),this.cloudMat.emissive.copy(r.sky.horizon).multiplyScalar(.4);for(let o of this.gulls){let a=o.userData;a.a+=a.sp*t;let l=a.cx+Math.cos(a.a)*a.r,c=a.cz+Math.sin(a.a)*a.r,h=a.h+Math.sin(a.a*3)*2;o.position.set(l,h,c);let u=-Math.sin(a.a)*Math.sign(a.sp),f=Math.cos(a.a)*Math.sign(a.sp);o.rotation.set(0,Math.atan2(u,f),-Math.sign(a.sp)*.25),a.flap+=t*(Math.sin(e*.5+a.a)>.3?9:2);let d=Math.sin(a.flap)*.5;a.wl.rotation.z=d,a.wr.rotation.z=-d,o.visible=s<.7}if(!this.ffInit){for(let o of this.ffBase)o.y=Math.max(.5,r.terrainH(o.x,o.z));this.ffInit=!0}if(this.ffMat.opacity=s*.9,this.fireflies.visible=s>.05,this.fireflies.visible){let o=this.fireflies.geometry.attributes.position.array;this.ffBase.forEach((a,l)=>{o[l*3]=a.x+Math.sin(e*.6+a.ph)*1.5,o[l*3+1]=a.y+1+Math.sin(e*1.3+a.ph*2)*.6+(Math.sin(e*3+a.ph*5)>.6?0:-50),o[l*3+2]=a.z+Math.cos(e*.5+a.ph)*1.5}),this.fireflies.geometry.attributes.position.needsUpdate=!0}if(this.jumpTimer-=t,this.jumpTimer<=0){this.jumpTimer=jt(2.5,7);let o=this.jumpers.find(a=>!a.active);if(o){let a=Math.random()*Math.PI*2,l=jt(14,45),c=n.x+Math.cos(a)*l,h=n.z+Math.sin(a)*l,u=li(c,h);u&&u.depth>2&&(o.active=!0,o.t=0,o.x=c,o.z=h,o.level=u.level,o.dir=Math.random()*6,o.h=jt(1,2.2),o.dur=jt(.8,1.2),o.mesh.visible=!0,r.fx.splash(new S(c,u.level,h),.35,u.level),r.water.addRipple(c,h,.7))}}for(let o of this.jumpers){if(!o.active)continue;o.t+=t;let a=o.t/o.dur,l=Math.cos(o.dir),c=Math.sin(o.dir),h=o.x+l*a*2.5,u=o.z+c*a*2.5;o.mesh.position.set(h,o.level+o.h*4*a*(1-a)-.2,u),o.mesh.rotation.set(0,-o.dir,(.5-a)*2.2),a>=1&&(o.active=!1,o.mesh.visible=!1,r.fx.splash(new S(h,o.level,u),.3,o.level),r.water.addRipple(h,u,.6))}}}});var Ea,df=ye(()=>{He();Vs();Hn();Hs();Zi();Mn();Ea=class{constructor(t){this.g=t,this.model=Ur(16184298,2060213),this.model.rotation.order="YXZ",this.model.visible=!1,t.scene.add(this.model),this.pos=new S,this.heading=0,this.speed=0,this.spawned=!1,this.wakeTimer=0,this.pitch=0,this.roll=0,this.prevY=0}forward(){return new S(Math.cos(this.heading),0,-Math.sin(this.heading))}spawn(t,e,n){this.pos.set(t,0,e),this.heading=n,this.speed=0,this.spawned=!0,this.model.visible=!0,this.g.fx.splash(new S(t,0,e),1.4,0),this.g.sound.splash(1.2)}seatWorld(t){let e=t==="drive"?new S(-1.55,-.12,0):new S(-.2,-.12,0);return this.model.updateMatrixWorld(),e.applyMatrix4(this.model.matrixWorld)}blockedAt(t,e){return Ve(t,e)>-.55}update(t,e,n,s){if(!this.spawned)return;let r=s&&!this.g.fishing.equipped,o=r?(n.f?1:0)-(n.b?1:0):0,a=r?(n.l?1:0)-(n.r?1:0):0,l=n.shift?30:22;o>0?this.speed+=12*t:o<0?this.speed-=10*t:this.speed=ue(this.speed,0,.9,t),this.speed=ke(this.speed,-7,l),this.speed>l&&(this.speed=ue(this.speed,l,2,t)),this.heading+=a*1.35*t*ke(this.speed/8,-1,1);let c=this.forward(),h=this.pos.clone().addScaledVector(c,this.speed*t),u=h.clone().addScaledVector(c,Math.sign(this.speed||1)*2.8);if(this.blockedAt(u.x,u.z)||this.blockedAt(h.x,h.z))Math.abs(this.speed)>6&&(this.g.cam.shake(.3),this.g.sound.plop(.6)),this.speed=-this.speed*.25;else{let E=h.clone();ha(h,1.6,.3,2,!0),E.distanceToSquared(h)>1e-4&&(this.speed*=.9),this.pos.copy(h)}let f=an(this.pos.x,this.pos.z),d=this.pos.clone().addScaledVector(c,2.2),m=this.pos.clone().addScaledVector(c,-2.2),x=new S(c.z,0,-c.x),g=this.pos.clone().addScaledVector(x,1),p=this.pos.clone().addScaledVector(x,-1),y=an(d.x,d.z),_=an(m.x,m.z),v=an(g.x,g.z),R=an(p.x,p.z),T=ke(this.speed/22,0,1);this.pitch=ue(this.pitch,Math.atan2(y-_,4.4)+T*.09+o*.03,5,t),this.roll=ue(this.roll,Math.atan2(v-R,2)-a*T*.12,5,t),this.pos.y=ue(this.pos.y,f+.05+T*.15,8,t),this.model.position.copy(this.pos),this.model.rotation.set(this.roll,this.heading,this.pitch);let I=this.model.userData.prop;I&&(I.rotation.x+=t*(r?10+Math.abs(this.speed)*3:0)),this.model.userData.motor&&(this.model.userData.motor.rotation.y=-a*.4);let P=Math.abs(this.speed);if(this.wakeTimer-=t,P>2&&this.wakeTimer<=0){this.wakeTimer=.07;let E=this.pos.clone().addScaledVector(c,-2.8);this.g.fx.ring(E.x,f+.04,E.z,.4,1.5+P*.12,1.6,.45),this.g.water.addRipple(E.x,E.z,.5);for(let M=0;M<3;M++)this.g.fx.drop(E.clone().setY(f+.1),new S((Math.random()-.5)*2-c.x*2,1+Math.random()*2,(Math.random()-.5)*2-c.z*2),.8,.8,f-.2);if(P>10){let M=this.pos.clone().addScaledVector(c,2.4);for(let L of[-1,1]){let O=x.clone().multiplyScalar(L*(2+Math.random()*2)).add(new S(0,2+Math.random()*2,0));this.g.fx.drop(M.clone().addScaledVector(x,L*.9).setY(f+.1),O,1,.9,f-.2)}}}this.g.sound.setEngine(r,ke(P/26,0,1))}}});var wa,ff=ye(()=>{He();wa=class{constructor(t){this.scene=t,this.maxDrops=600;let e=new Rn(.07,0);this.dropMat=new Lt({color:15136511,roughness:.1,metalness:0,transparent:!0,opacity:.9,emissive:2771546,emissiveIntensity:.4}),this.drops=new Vi(e,this.dropMat,this.maxDrops),this.drops.instanceMatrix.setUsage(qi),this.drops.frustumCulled=!1,this.dropData=[];for(let r=0;r<this.maxDrops;r++)this.dropData.push({life:0,p:new S,v:new S,s:1,floor:0});this.dropIdx=0,t.add(this.drops),this.maxSpark=500;let n=new me;this.sparkPos=new Float32Array(this.maxSpark*3),this.sparkCol=new Float32Array(this.maxSpark*3),this.sparkSize=new Float32Array(this.maxSpark),n.setAttribute("position",new le(this.sparkPos,3).setUsage(qi)),n.setAttribute("color",new le(this.sparkCol,3).setUsage(qi)),n.setAttribute("size",new le(this.sparkSize,1).setUsage(qi)),this.sparkMat=new Ze({uniforms:{uScale:{value:300}},vertexShader:`attribute float size; attribute vec3 color; varying vec3 vC; varying float vS;
        uniform float uScale;
        void main(){ vC = color; vS = size; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec3 vC; varying float vS;
        void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (vS <= 0.0) discard;
          float a = smoothstep(0.5, 0.0, r); float star = max(0.0, 1.0 - abs(d.x*d.y)*60.0) * smoothstep(0.5,0.1,r);
          gl_FragColor = vec4(vC * (a + star*0.6), a); }`,transparent:!0,depthWrite:!1,blending:Bn}),this.sparks=new Ls(n,this.sparkMat),this.sparks.frustumCulled=!1,this.sparkData=[];for(let r=0;r<this.maxSpark;r++)this.sparkData.push({life:0,max:1,p:new S,v:new S,c:new dt,s:1,g:0});this.sparkIdx=0,t.add(this.sparks),this.rings=[];let s=new Jo(.85,1,40);s.rotateX(-Math.PI/2);for(let r=0;r<24;r++){let o=new et(s,new sn({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));o.visible=!1,o.renderOrder=3,t.add(o),this.rings.push({mesh:o,life:0,max:1,r0:.2,r1:2,a:.6,getY:null})}this.ringIdx=0,this._m=new ne,this._q=new pn,this._s=new S}drop(t,e,n=1,s=1.2,r=-1e9){let o=this.dropData[this.dropIdx];this.dropIdx=(this.dropIdx+1)%this.maxDrops,o.p.copy(t),o.v.copy(e),o.s=n,o.life=s,o.floor=r}splash(t,e=1,n=t.y){let s=Math.floor(14+e*26);for(let r=0;r<s;r++){let o=Math.random()*Math.PI*2,a=(.8+Math.random()*2.2)*e,l=(2.5+Math.random()*4.5)*Math.sqrt(e);this.drop(new S(t.x+Math.cos(o)*.15,n+.05,t.z+Math.sin(o)*.15),new S(Math.cos(o)*a,l,Math.sin(o)*a),.6+Math.random()*1.2*Math.min(1.6,e),1.5,n-.1)}for(let r=0;r<6*e;r++)this.drop(new S(t.x,n,t.z),new S((Math.random()-.5)*.6,5+Math.random()*3*e,(Math.random()-.5)*.6),1.3,1.5,n-.1);this.ring(t.x,n+.03,t.z,.2,2.2*e+1.2,1.2,.7),this.ring(t.x,n+.03,t.z,.1,1.2*e+.8,.9,.5)}ring(t,e,n,s,r,o=1,a=.6,l=null){let c=this.rings[this.ringIdx];this.ringIdx=(this.ringIdx+1)%this.rings.length,c.mesh.position.set(t,e,n),c.life=o,c.max=o,c.r0=s,c.r1=r,c.a=a,c.getY=l,c.mesh.visible=!0}spark(t,e,n,s=.4,r=1,o=0){let a=this.sparkData[this.sparkIdx];this.sparkIdx=(this.sparkIdx+1)%this.maxSpark,a.p.copy(t),a.v.copy(e),a.c.set(n),a.s=s,a.life=r,a.max=r,a.g=o}burst(t,e,n=30,s=4,r=.5,o=1.2){for(let a=0;a<n;a++){let l=new S(Math.random()-.5,Math.random()*.8+.2,Math.random()-.5).normalize().multiplyScalar(s*(.4+Math.random()*.6));this.spark(t,l,e,r*(.6+Math.random()*.8),o*(.6+Math.random()*.6),-3)}}update(t){let e=this._m,n=this._q,s=this._s;for(let o=0;o<this.maxDrops;o++){let a=this.dropData[o];if(a.life>0){a.life-=t,a.v.y-=14*t,a.v.multiplyScalar(1-t*.6),a.p.addScaledVector(a.v,t),a.p.y<a.floor&&(a.life=0);let l=Math.max(0,Math.min(1,a.life*2))*a.s;n.setFromUnitVectors(new S(0,1,0),a.v.lengthSq()>.01?a.v.clone().normalize():new S(0,1,0)),s.set(l,l*(1+Math.min(2.5,a.v.length()*.25)),l),e.compose(a.p,n,s)}else e.makeScale(0,0,0);this.drops.setMatrixAt(o,e)}this.drops.instanceMatrix.needsUpdate=!0;for(let o=0;o<this.maxSpark;o++){let a=this.sparkData[o];if(a.life>0){a.life-=t,a.v.y+=a.g*t,a.v.multiplyScalar(1-t*1.2),a.p.addScaledVector(a.v,t);let l=Math.max(0,a.life/a.max);this.sparkPos[o*3]=a.p.x,this.sparkPos[o*3+1]=a.p.y,this.sparkPos[o*3+2]=a.p.z,this.sparkCol[o*3]=a.c.r*l,this.sparkCol[o*3+1]=a.c.g*l,this.sparkCol[o*3+2]=a.c.b*l,this.sparkSize[o]=a.s*(.4+.6*l)}else this.sparkSize[o]=0}let r=this.sparks.geometry;r.attributes.position.needsUpdate=!0,r.attributes.color.needsUpdate=!0,r.attributes.size.needsUpdate=!0;for(let o of this.rings){if(o.life<=0){o.mesh.visible=!1;continue}o.life-=t;let a=1-o.life/o.max,l=1-Math.pow(1-a,2.2),c=o.r0+(o.r1-o.r0)*l;o.mesh.scale.set(c,1,c),o.mesh.material.opacity=o.a*(1-a),o.getY&&(o.mesh.position.y=o.getY(o.mesh.position.x,o.mesh.position.z)+.03)}}}});function wv(i={}){let{skin:t="#f1c27d",beard:e=!1,eye:n="#1d1d1d",blush:s=!0,smile:r=!0,glasses:o=!1}=i,a=document.createElement("canvas");a.width=128,a.height=128;let l=a.getContext("2d");l.fillStyle=t,l.fillRect(0,0,128,128),l.fillStyle=n,l.beginPath(),l.ellipse(42,58,7,10,0,0,Math.PI*2),l.fill(),l.beginPath(),l.ellipse(86,58,7,10,0,0,Math.PI*2),l.fill(),l.fillStyle="#fff",l.beginPath(),l.arc(44,54,3,0,Math.PI*2),l.fill(),l.beginPath(),l.arc(88,54,3,0,Math.PI*2),l.fill(),s&&(l.fillStyle="rgba(255,120,120,0.35)",l.beginPath(),l.ellipse(30,78,9,5,0,0,Math.PI*2),l.fill(),l.beginPath(),l.ellipse(98,78,9,5,0,0,Math.PI*2),l.fill()),l.strokeStyle="#3a2216",l.lineWidth=5,l.lineCap="round",l.beginPath(),r?l.arc(64,76,16,.15*Math.PI,.85*Math.PI):(l.moveTo(52,88),l.lineTo(76,88)),l.stroke(),e&&(l.fillStyle=typeof e=="string"?e:"#e8e2d6",l.beginPath(),l.moveTo(14,70),l.quadraticCurveTo(64,150,114,70),l.lineTo(114,128),l.lineTo(14,128),l.fill(),l.fillStyle=t,l.beginPath(),l.ellipse(64,86,14,7,0,0,Math.PI*2),l.fill(),l.strokeStyle="#3a2216",l.beginPath(),l.arc(64,82,10,.2*Math.PI,.8*Math.PI),l.stroke()),o&&(l.strokeStyle="#222",l.lineWidth=4,l.strokeRect(28,46,28,22),l.strokeRect(72,46,28,22),l.beginPath(),l.moveTo(56,56),l.lineTo(72,56),l.stroke());let c=new ri(a);return c.colorSpace=De,c}function be(i,t){let e=new et(i,t);return e.castShadow=!0,e.receiveShadow=!0,e}function Sa(i={}){let{skin:t=15843965,shirt:e=3113197,pants:n=3817290,shoes:s=2829099,hat:r="bucket",hatColor:o=15052874,hair:a=4861723,beard:l=!1,apron:c=null,vest:h=null,glasses:u=!1,scale:f=1}=i,d=new Pt,m=new Pt;d.add(m);let x=Le(t),g=Le(e),p=Le(n),y=Le(s),_=F=>{let Z=new Pt;Z.position.set(F,1,0);let lt=be(new Tt(.42,.85,.44),p);lt.position.y=-.42;let mt=be(new Tt(.44,.18,.56),y);return mt.position.set(0,-.9,.05),Z.add(lt,mt),m.add(Z),Z},v=_(.23),R=_(-.23),T=new Pt;T.position.y=1,m.add(T);let I=be(new Tt(.95,.95,.5),g);if(I.position.y=.48,T.add(I),h){let F=be(new Tt(.98,.75,.53),Le(h));F.position.y=.55,T.add(F);let Z=be(new Tt(.25,.2,.05),Le(new dt(h).multiplyScalar(.7)));Z.position.set(.22,.5,.28),T.add(Z)}if(c){let F=be(new Tt(.8,1.05,.04),Le(c));F.position.set(0,.25,.27),T.add(F)}let P=be(new Tt(.97,.1,.52),Le(3877402));P.position.y=.05,T.add(P);let E=new Pt;E.position.y=.95,T.add(E);let M=wv({skin:"#"+new dt(t).getHexString(),beard:l,glasses:u}),L=[x,x,x,x,new Lt({map:M,roughness:.8}),x],O=be(new Tt(.62,.62,.62),L);if(O.position.y=.34,E.add(O),a!==null){let F=be(new Tt(.66,.2,.66),Le(a));F.position.set(0,.62,-.02),E.add(F);let Z=be(new Tt(.66,.45,.12),Le(a));Z.position.set(0,.45,-.28),E.add(Z)}let z=Le(o);if(r==="bucket"){let F=be(new Ft(.34,.38,.34,12),z);F.position.y=.76;let Z=be(new Ft(.58,.6,.06,16),z);Z.position.y=.62,E.add(F,Z)}else if(r==="captain"){let F=be(new Ft(.4,.36,.26,12),Le(16119285));F.position.y=.78;let Z=be(new Ft(.37,.37,.08,12),Le(1780298));Z.position.y=.68;let lt=be(new Tt(.5,.04,.25),Le(1118481));lt.position.set(0,.66,.35),E.add(F,Z,lt)}else if(r==="chef"){let F=be(new Ft(.34,.32,.4,12),Le(16777215));F.position.y=.82;let Z=be(new ve(.42,12,8),Le(16777215));Z.position.y=1.1,Z.scale.y=.7,E.add(F,Z)}else if(r==="straw"){let F=be(new Ft(.3,.36,.3,12),Le(15257466));F.position.y=.76;let Z=be(new Ft(.75,.78,.05,18),Le(15257466));Z.position.y=.63;let lt=be(new Ft(.315,.335,.08,12),Le(12597547));lt.position.y=.68,E.add(F,Z,lt)}else if(r==="beanie"){let F=be(new ve(.38,12,8,0,Math.PI*2,0,Math.PI/2),z);F.position.y=.62,F.scale.y=.9;let Z=be(new ve(.1,8,6),Le(16777215));Z.position.y=.98,E.add(F,Z)}else if(r==="hood"){let F=be(new Tt(.74,.74,.74),z);F.position.set(0,.4,-.06),E.add(F),O.position.z=.06}let k=F=>{let Z=new Pt;Z.position.set(F,.85,0);let lt=be(new Tt(.3,.42,.34),g);lt.position.y=-.18;let mt=be(new Tt(.26,.5,.3),x);mt.position.y=-.58;let Bt=new Pt;return Bt.position.y=-.85,Z.add(lt,mt,Bt),T.add(Z),{sh:Z,hand:Bt}},$=k(.62),G=k(-.62);d.scale.setScalar(f);let Q={root:d,body:m,torso:T,neck:E,head:O,legL:v,legR:R,armL:$.sh,armR:G.sh,handL:$.hand,handR:G.hand,walkPhase:0,blend:0};return Q.animate=(F,Z,lt,mt="ground")=>{let Bt=Math.min(1,lt/6);Q.blend+=(Bt-Q.blend)*Math.min(1,F*10),Q.walkPhase+=F*(4+lt*1.25);let te=Math.sin(Q.walkPhase),X=Q.blend;if(m.rotation.x=0,m.position.y=0,T.rotation.set(0,0,0),E.rotation.set(0,0,0),mt==="swim"){let bt=Z*3.5;T.rotation.x=0,m.rotation.x=.9*Math.max(.2,X),m.position.y=-.2,E.rotation.x=-.8*Math.max(.2,X),Q.armL.rotation.set(-Math.PI*.9+Math.sin(bt)*1.4,0,.2),Q.armR.rotation.set(-Math.PI*.9-Math.sin(bt)*1.4,0,-.2),v.rotation.x=Math.sin(bt*2)*.4,R.rotation.x=-Math.sin(bt*2)*.4;return}if(mt==="sit"){v.rotation.x=-1.4,R.rotation.x=-1.4,m.position.y=-.55,Q.armL.rotation.set(-.5,0,.1),Q.armR.rotation.set(-.5,0,-.1);return}if(mt==="air"){v.rotation.x=-.5,R.rotation.x=.3,Q.armL.rotation.set(-.3,0,.5),Q.armR.rotation.set(-.3,0,-.5);return}let st=Math.sin(Z*2)*.03;v.rotation.x=te*.8*X,R.rotation.x=-te*.8*X,Q.armL.rotation.set(-te*.7*X+st,0,.06+st*.5),Q.armR.rotation.set(te*.7*X-st,0,-.06-st*.5),m.position.y=Math.abs(Math.cos(Q.walkPhase))*.08*X+st*.3,T.rotation.y=te*.08*X,T.rotation.x=.06*X},Q}var Le,Ih=ye(()=>{He();Le=(i,t={})=>new Lt({color:i,roughness:.8,...t})});function Ta(i,t){return new Lt({color:i,roughness:.45,metalness:.1,side:Ie,transparent:!0,opacity:.92,emissive:t?new dt(t):0,emissiveIntensity:t?.6:0})}function pf(i,t,e,n,s){let r=new ve(1,28,18),o=r.attributes.position,a=new Float32Array(o.count*3),l=Qi(n.colors[0]),c=Qi(n.colors[1]),h=new dt;for(let u=0;u<o.count;u++){let f=o.getX(u),d=o.getY(u),m=o.getZ(u),x=(f+1)/2,g=Math.pow(Math.sin(Math.PI*Math.min(1,.12+x*.95)),.75)*(x<.15?.6+x*2.6:1),p=d*t*g,y=m*e*g,_=f*i/2;o.setXYZ(u,_,p+(s.hump?Math.max(0,d)*.15*Math.sin(x*Math.PI):0),y);let v=eh.smoothstep(d,-.45,.35);if(h.copy(c).lerp(l,v),s.stripes&&d>-.1&&Math.sin(_*9+Math.sin(d*6)*2)>.6&&h.multiplyScalar(.55),s.bands){let R=Math.abs(Math.sin((x-.08)*Math.PI*3));R<.22&&x>.15?h.set(16777215):R<.3&&x>.15&&h.set(1118481)}if(s.spots&&ai(Math.floor(_*14),Math.floor((d+m)*9))>.86&&d>-.2&&h.multiplyScalar(s.lightSpots?1.6:.5),s.koi){let R=Math.sin(_*5.3+1.2)*Math.sin(m*4.1+d*3.3+.7)+Math.sin(_*2.1+d*2);h.set(R>.25&&d>-.3?16734762:R<-.9&&d>0?1710618:16447472)}a[u*3]=h.r,a[u*3+1]=h.g,a[u*3+2]=h.b}return r.setAttribute("color",new le(a,3)),r.computeVertexNormals(),r}function gn(i){let t=new oi;t.moveTo(i[0][0],i[0][1]);for(let e=1;e<i.length;e++)t.lineTo(i[e][0],i[e][1]);return t.closePath(),new Ko(t)}function Xs(i,t,e,n,s=.09,r){let o=new Lt({color:16777215,roughness:.2}),a=new Lt({color:328965,roughness:.1,emissive:r||0,emissiveIntensity:r?.5:0});for(let l of[-1,1]){let c=new et(new ve(s,10,8),o);c.position.set(t,e,n*l);let h=new et(new ve(s*.6,8,6),a);h.position.set(t+s*.15,e,(n+s*.55)*l),i.add(c,h)}}function Aa(i){let t=new Pt,e=new Pt;t.add(e);let n=i.glow,s=new Lt({vertexColors:!0,roughness:.32,metalness:.22,emissive:n?new dt(n):0,emissiveIntensity:n?.35:0}),r=i.fin??new dt(i.colors[0]).lerp(new dt(i.colors[1]),.35).getHex(),o=Ta(r,n),a=null,l=i.shape,c={stripes:i.stripes,bands:i.bands,spots:i.spots,koi:i.koi,lightSpots:l==="whale"};if(l==="standard"||l==="tall"||l==="long"){let d=(l==="tall"?.62:l==="long"?1/(i.len||6)*1.4:1/(i.len||3.2)*1.15)*.95,m=d*(l==="tall"?.42:.55),x=new et(pf(1,d*.5*2/2,m*.5,i,c),s);e.add(x),a=new Pt,a.position.x=-.47;let g=Math.max(.2,d*1.1),p=new et(gn([[0,0],[-g*.55,g*.55],[-g*.35,0],[-g*.55,-g*.55]]),o);if(a.add(p),e.add(a),l==="long"){let y=new et(gn([[-.45,0],[-.4,d*.45],[.38,d*.55],[.42,0]]),Ta(i.colors[1]===16727887?16727887:r,n));if(y.position.y=d*.35,e.add(y),i.id==="oarfish"){let _=new et(gn([[.3,0],[.35,d*1.6],[.42,d*.3]]),Ta(16727887));_.position.y=d*.4,e.add(_)}}else{let y=new et(gn([[-.18,0],[.02,d*.55],[.16,0]]),o);y.position.set(0,d*.4,0),e.add(y);let _=new et(gn([[-.25,0],[-.15,-d*.3],[-.05,0]]),o);_.position.set(0,-d*.38,0),e.add(_)}for(let y of[-1,1]){let _=new et(gn([[0,0],[-.12,d*.18],[-.14,-d*.05]]),o);_.position.set(.18,-d*.12,m*.45*y),_.rotation.y=y*.5,e.add(_)}if(i.wings)for(let y of[-1,1]){let _=new et(gn([[.15,0],[-.25,.45],[-.3,.05]]),Ta(12572927));_.rotation.x=y*Math.PI/2-y*.3,_.position.set(.05,d*.05,m*.3*y),e.add(_)}if(i.sword){let y=new et(new Re(.025,.45,6),new Lt({color:2831168,roughness:.4}));y.rotation.z=-Math.PI/2,y.position.set(.7,d*.05,0),e.add(y),e.scale.set(.8,1,1)}if(i.whiskers){let y=new Lt({color:2829094});for(let _ of[-1,1]){let v=new et(new Ft(.006,.004,.3,4),y);v.rotation.z=Math.PI/2+.4,v.rotation.y=_*.6,v.position.set(.55,-d*.1,_*.08),e.add(v)}}Xs(e,.36,d*.12,m*.32,Math.max(.025,d*.09),n)}else if(l==="shark"||l==="whale"){let u=l==="whale"?.16:.12,f=l==="whale"?.15:.1,d=new et(pf(1,u,f,i,c),s);e.add(d);let m=new et(gn([[-.12,0],[-.05,.28],[.12,0]]),o);m.position.y=u*.8,e.add(m),a=new Pt,a.position.x=-.46,a.add(new et(gn([[0,0],[-.2,.32],[-.1,0],[-.14,-.16]]),o)),e.add(a);for(let x of[-1,1]){let g=new et(gn([[0,0],[-.22,-.02],[-.1,.04]]),o);g.rotation.x=x*1.2,g.position.set(.12,-u*.4,f*.5*x),e.add(g)}if(i.hammer){let x=new et(new Tt(.1,.05,.42),new Lt({color:i.colors[0],roughness:.4}));x.position.set(.47,.01,0),e.add(x),Xs(e,.47,.02,.2,.03,n)}else Xs(e,.33,u*.25,f*.45,.025,n)}else if(l==="flat"){let u=i.id==="moonray",f=new ve(.5,24,12),d=f.attributes.position,m=new Float32Array(d.count*3),x=Qi(i.colors[0]),g=Qi(i.colors[1]),p=new dt;for(let y=0;y<d.count;y++){let _=d.getX(y),v=d.getY(y),R=d.getZ(y);if(u){let T=Math.abs(R)*2;_*=1-T*.35,R*=2,v*=.12}else R*=1.15,v*=.16,_*=1;d.setXYZ(y,_,v,R),p.copy(g).lerp(x,v>0?1:0),!u&&v>0&&ai(Math.floor(_*20),Math.floor(R*20))>.85&&p.multiplyScalar(.6),u&&v>0&&ai(Math.floor(_*12),Math.floor(R*12))>.9&&p.set(14674687),m[y*3]=p.r,m[y*3+1]=p.g,m[y*3+2]=p.b}if(f.setAttribute("color",new le(m,3)),f.computeVertexNormals(),e.add(new et(f,s)),a=new Pt,a.position.x=-.45,u){let y=new et(new Ft(.004,.02,.8,5),o);y.rotation.z=Math.PI/2,y.position.x=-.4,a.add(y)}else a.add(new et(gn([[0,0],[-.18,.12],[-.18,-.12]]),o)),a.rotation.x=Math.PI/2;e.add(a),Xs(e,.2,.08,.07,.03,n)}else if(l==="round"){let u=new ve(.33,20,14),f=u.attributes.position,d=new Float32Array(f.count*3),m=Qi(i.colors[0]),x=Qi(i.colors[1]),g=new dt;for(let p=0;p<f.count;p++){let y=f.getY(p);g.copy(x).lerp(m,eh.smoothstep(y,-.15,.15)),i.id==="pufferfish"&&y>0&&ai(Math.floor(f.getX(p)*30),Math.floor(f.getZ(p)*30))>.8&&g.multiplyScalar(.55),d[p*3]=g.r,d[p*3+1]=g.g,d[p*3+2]=g.b}if(u.setAttribute("color",new le(d,3)),e.add(new et(u,s)),i.id==="pufferfish"){let p=new Lt({color:15984312,roughness:.5});for(let y=0;y<40;y++){let _=new S(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),v=new et(new Re(.02,.09,4),p);v.position.copy(_.clone().multiplyScalar(.34)),v.quaternion.setFromUnitVectors(new S(0,1,0),_),e.add(v)}}if(i.lure){let p=new et(new Ft(.01,.01,.35,4),new Lt({color:3813178}));p.position.set(.18,.42,0),p.rotation.z=-.6,e.add(p);let y=new et(new ve(.05,8,6),new sn({color:12124088}));y.position.set(.32,.56,0),e.add(y);let _=new Lt({color:16777215});for(let v=0;v<6;v++){let R=new et(new Re(.015,.06,3),_);R.position.set(.31,-.03,-.12+v*.05),R.rotation.z=Math.PI,e.add(R)}}a=new Pt,a.position.x=-.32,a.add(new et(gn([[0,0],[-.16,.13],[-.16,-.13]]),o)),e.add(a),Xs(e,.24,.1,.17,.055,n)}else if(l==="squid"){let u=new et(new Re(.13,.55,12),s);u.rotation.z=Math.PI/2,u.position.x=-.1;let f=u.geometry,d=f.attributes.position,m=new Float32Array(d.count*3),x=Qi(i.colors[0]);for(let y=0;y<d.count;y++)m[y*3]=x.r,m[y*3+1]=x.g,m[y*3+2]=x.b;f.setAttribute("color",new le(m,3)),e.add(u);let g=new et(gn([[0,.2],[.12,0],[0,-.2]]),o);g.rotation.x=Math.PI/2,g.position.x=-.38,e.add(g),a=new Pt,a.position.x=.2;let p=new Lt({color:i.colors[1],emissive:n||0,emissiveIntensity:.5,roughness:.4});for(let y=0;y<8;y++){let _=new et(new Ft(.012,.025,.35,5),p),v=y/8*Math.PI*2;_.rotation.z=-Math.PI/2,_.position.set(.17,Math.cos(v)*.05,Math.sin(v)*.05),a.add(_)}e.add(a),Xs(e,.17,0,.1,.035,n)}else if(l==="boot"){let u=new Lt({color:i.colors[0],roughness:.9}),f=new et(new Tt(.28,.5,.28),u);f.position.set(-.12,.12,0);let d=new et(new Tt(.55,.2,.3),u);d.position.set(.02,-.15,0);let m=new et(new Tt(.57,.05,.32),new Lt({color:i.colors[1]}));m.position.set(.02,-.27,0),e.add(f,d,m)}else if(l==="can"){let u=new Lt({color:i.colors[0],roughness:.5,metalness:.7}),f=new et(new Ft(.14,.14,.38,14),u),d=new et(new Ft(.143,.143,.2,14,1,!0),new Lt({color:i.colors[1],roughness:.8}));f.rotation.z=.5,d.rotation.z=.5,e.add(f,d)}else if(l==="wood"){let u=new Lt({color:i.colors[0],roughness:.95,flatShading:!0}),f=new et(new Ft(.07,.09,1,7),u);f.rotation.z=Math.PI/2;let d=new et(new Ft(.03,.04,.35,5),u);d.position.set(.15,.12,0),d.rotation.z=-.6,e.add(f,d)}else if(l==="weed"){let u=new Lt({color:i.colors[0],roughness:.6,side:Ie});for(let f=0;f<5;f++){let d=new Ue(.12,.8,1,6),m=d.attributes.position;for(let g=0;g<m.count;g++)m.setX(g,m.getX(g)+Math.sin(m.getY(g)*8+f)*.05);let x=new et(d,u);x.rotation.y=f*.6,x.rotation.z=(f-2)*.2,e.add(x)}a=e}t.traverse(u=>{u.isMesh&&(u.castShadow=!0)});let h=a?a.rotation.y:0;return t.userData.update=(u,f=1)=>{a&&a!==e&&(a.rotation.y=h+Math.sin(u*14)*.6*f),e.rotation.y=Math.sin(u*14+1.2)*.12*f,a===e&&(e.rotation.z=Math.sin(u*5)*.2)},t}function zr(i,t){if(["boot","can","weed","wood"].includes(i.shape))return i.shape==="wood"?1:.6;let e=.44*Math.cbrt(t);return i.shape==="long"&&(e*=1.6),(i.shape==="shark"||i.shape==="whale")&&(e*=1.15),i.shape==="round"&&(e*=.8),Math.max(.22,Math.min(5.5,e))}var Qi,Ph=ye(()=>{He();Mn();Qi=i=>new dt(i)});var Ra,mf=ye(()=>{He();Ih();Zi();Hn();Hs();Mn();Ph();Gs();Ra=class{constructor(t){this.g=t,this.rig=Sa({shirt:3113197,pants:3426654,hat:"bucket",hatColor:15317321,hair:3875860,vest:6130234}),t.scene.add(this.rig.root),this.pos=new S,this.vel=new S,this.yaw=0,this.onGround=!1,this.swimming=!1,this.boat=null,this.heldFish=null,this.heldModel=null,this.splashTimer=0,this.stepTimer=0}forward(){return new S(Math.sin(this.yaw),0,Math.cos(this.yaw))}faceCamera(){this.yaw=this.g.cam.yaw}teleport(t,e,n=this.yaw){this.pos.set(t,Math.max(Ve(t,e),Vd(t,e,999))+.05,e),this.vel.set(0,0,0),this.yaw=n}holdFish(t){if(this.heldModel&&(this.heldModel.parent.remove(this.heldModel),this.heldModel=null),this.heldFish=t,!t)return;let e=Ci[t.id],n=Aa(e),s=Math.min(2.2,zr(e,t.weight));n.scale.setScalar(s),n.rotation.set(1.1,0,0),n.position.set(0,-.12,.05),this.rig.handR.add(n),this.heldModel=n}update(t,e,n,s){let r=this.g;if(this.boat){this.updateInBoat(t,e);return}let o=0,a=0;s||(n.f&&(a+=1),n.b&&(a-=1),n.l&&(o-=1),n.r&&(o+=1));let l=r.cam.yaw,c=new S(Math.sin(l),0,Math.cos(l)),h=new S(-Math.cos(l),0,Math.sin(l)),u=c.multiplyScalar(a).add(h.multiplyScalar(o)),f=u.lengthSq()>.01;f&&(u.normalize(),(r.fishing.state==="waiting"||r.fishing.state==="landed")&&r.fishing.interruptByMove());let d=r.fishing.locksMovement,m=this.swimming?5.5:n.shift?15:9,x=d?new S:u.clone().multiplyScalar(m),g=this.onGround||this.swimming?14:3;this.vel.x=ue(this.vel.x,x.x,g,t),this.vel.z=ue(this.vel.z,x.z,g,t),f&&!d&&(this.yaw=Rr(this.yaw,Math.atan2(u.x,u.z),12,t));let p=li(this.pos.x,this.pos.z),y=Ri(this.pos.x,this.pos.z,this.pos.y),_=p?an(this.pos.x,this.pos.z,p.level,p.pond)-1.35:-1/0,v=this.swimming;this.swimming=!!p&&y<_-.05&&this.pos.y<=_+.1,this.swimming?(v||(r.fx.splash(new S(this.pos.x,_+1.35,this.pos.z),.9,_+1.35),r.sound.splash(.8),r.water.addRipple(this.pos.x,this.pos.z,1.2),r.fishing.equipped&&r.selectSlot(0)),this.vel.y=0,this.pos.y=ue(this.pos.y,_,8,t),this.onGround=!1,this.splashTimer-=t,this.splashTimer<=0&&f&&(this.splashTimer=.45,r.water.addRipple(this.pos.x,this.pos.z,.6),r.fx.ring(this.pos.x,_+1.38,this.pos.z,.5,2.2,1.2,.35))):(this.vel.y-=32*t,n.jump&&this.onGround&&!s&&!d&&(this.vel.y=11.5,this.onGround=!1));let R=this.pos.clone().addScaledVector(this.vel,t);if(this.swimming){for(let P of Yi)if(P.walkable&&P.top>R.y+.6&&P.top<_+3.6&&ca(P,R.x,R.z,.35)){R.y=P.top+.05,this.swimming=!1,this.vel.y=4;break}}ha(R,.45,R.y,R.y+2.4);let T=Ri(R.x,R.z,Math.max(R.y,this.pos.y));R.y<=T&&!this.swimming?(T-R.y>.05&&this.onGround?R.y=ue(R.y,T,25,t):R.y=T,R.y<T-.3&&(R.y=T),this.vel.y<0&&(this.vel.y=0),this.onGround=!0):this.swimming||(this.onGround=R.y-T<.08),this.pos.copy(R);let I=Math.hypot(this.vel.x,this.vel.z);this.onGround&&I>3&&(this.stepTimer-=t*I,this.stepTimer<=0&&(this.stepTimer=3.2,p&&p.level>this.pos.y-.05&&(r.fx.splash(new S(this.pos.x,p.level,this.pos.z),.15,p.level),r.water.addRipple(this.pos.x,this.pos.z,.5)))),this.applyVisual(t,e,I,this.swimming?"swim":this.onGround?"ground":"air")}updateInBoat(t,e){let n=this.boat,s=!this.g.fishing.equipped||this.g.fishing.state==="idle",r=n.seatWorld(s&&!this.g.fishing.equipped?"drive":"stand");this.pos.copy(r),this.vel.set(0,0,0),this.onGround=!0,this.swimming=!1,this.g.fishing.equipped?!this.g.fishing.locksMovement&&this.g.fishing.state==="idle"&&(this.yaw=Rr(this.yaw,this.g.cam.yaw,6,t)):this.yaw=n.heading+Math.PI/2,this.applyVisual(t,e,0,this.g.fishing.equipped?"ground":"sit"),this.rig.root.rotation.z=n.model.rotation.x*.6}applyVisual(t,e,n,s){let r=this.rig;r.root.position.copy(this.pos),r.root.rotation.set(0,this.yaw,0),r.animate(t,e,n,s),this.heldFish&&s!=="swim"&&(r.armR.rotation.x=-1.1,r.armR.rotation.z=-.1,this.heldModel&&this.heldModel.userData.update(e,.25)),this.g.fishing.applyPose(r,t,e)}}});var Ca,gf=ye(()=>{He();Mn();Hn();Ca=class{constructor(t,e){this.camera=t,this.yaw=Math.PI/2,this.pitch=.32,this.dist=13,this.distTarget=13,this.target=new S,this.override=null,this.shakeAmt=0,this.dragging=!1,this.occluders=null,this.ray=new sa,e.addEventListener("mousedown",n=>{n.button===2&&(this.dragging=!0,this.lx=n.clientX,this.ly=n.clientY)}),window.addEventListener("mouseup",n=>{n.button===2&&(this.dragging=!1)}),window.addEventListener("mousemove",n=>{if(!this.dragging)return;let s=n.clientX-this.lx,r=n.clientY-this.ly;this.lx=n.clientX,this.ly=n.clientY,this.yaw-=s*.0055,this.pitch=ke(this.pitch+r*.004,-.1,1.35)}),e.addEventListener("wheel",n=>{this.distTarget=ke(this.distTarget*(n.deltaY>0?1.12:.89),4,45)},{passive:!0}),e.addEventListener("contextmenu",n=>n.preventDefault())}forward(){return new S(Math.sin(this.yaw),0,Math.cos(this.yaw))}shake(t){this.shakeAmt=Math.min(.6,this.shakeAmt+t)}update(t,e,n=!1){let s=this.override?this.override.pos:e,r=this.override?this.override.dist:this.distTarget;n?this.target.copy(s):(this.target.x=ue(this.target.x,s.x,12,t),this.target.y=ue(this.target.y,s.y,8,t),this.target.z=ue(this.target.z,s.z,12,t)),this.dist=ue(this.dist,r,6,t);let o=Math.cos(this.pitch),a=Math.sin(this.pitch),l=new S(-Math.sin(this.yaw)*o,a,-Math.cos(this.yaw)*o).multiplyScalar(this.dist);if(this.occluders&&this.occluders.length){let u=l.clone().normalize();this.ray.set(this.target,u),this.ray.far=this.dist;let f=this.ray.intersectObjects(this.occluders,!0)[0];f&&l.multiplyScalar(Math.max(1.5,f.distance-.4)/this.dist)}let c=this.target.clone().add(l),h=Math.max(Ve(c.x,c.z),.2)+.7;c.y<h&&(c.y=h),this.shakeAmt>0&&(c.x+=(Math.random()-.5)*this.shakeAmt,c.y+=(Math.random()-.5)*this.shakeAmt,c.z+=(Math.random()-.5)*this.shakeAmt,this.shakeAmt=Math.max(0,this.shakeAmt-t*1.6)),this.camera.position.copy(c),this.camera.lookAt(this.target)}}});function Sv(){let i=ci([{text:"!",font:'bold 120px "Arial Black", sans-serif',color:"#ffe14a",strokeW:14}],{w:128,h:128,stroke:"#c0261a"}),t=new Ti(new si({map:i,transparent:!0,depthTest:!1,fog:!1}));return t.renderOrder=20,t.visible=!1,t}function Tv(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,32);return e.addColorStop(0,"rgba(0,10,20,0.75)"),e.addColorStop(1,"rgba(0,10,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ri(i)}var Ge,Ia,xf=ye(()=>{He();_a();Gs();Ph();Hn();Zi();Hs();Mn();zs();Vs();Ge={idle:{rX:-.75,rZ:-.12,lX:null,lZ:null,torso:0},charge:{rX:-2.7,rZ:-.25,lX:-.6,lZ:.3,torso:.15},release:{rX:-.35,rZ:-.05,lX:-.5,lZ:.25,torso:-.05},wait:{rX:-.9,rZ:-.1,lX:-.75,lZ:.4,torso:0},reel:{rX:-1.05,rZ:-.1,lX:-.95,lZ:.5,torso:-.14},hold:{rX:-2.95,rZ:-.35,lX:-2.95,lZ:.35,torso:-.05}},Ia=class{constructor(t){this.g=t,this.rod=new va(t.scene),t.player.rig.handR.add(this.rod.group),this.rod.group.position.set(0,-.05,.05),this.rod.group.rotation.x=.29,this.state="none",this.t=0,this.power=0,this.powerDir=1,this.holding=!1,this.pose={rX:0,rZ:0,lX:0,lZ:0,torso:0},this.poseTarget=Ge.idle,this.excl=Sv(),t.scene.add(this.excl),this.shadow=new et(new Ue(1,1),new sn({map:Tv(),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,t.scene.add(this.shadow),this.castFrom=new S,this.castTo=new S,this.water=null,this.catch=null,this.mg=null,this.fishModel=null,this.bobPrev=new S,this.lateral=0,this.splashTimer=0,this.tickTimer=0,this.nibbleTimer=0,this.nibble=0}get stats(){return Ji[Dt.rod]}get active(){return this.state!=="none"&&this.state!=="idle"}get equipped(){return this.state!=="none"}get locksMovement(){return["charging","casting","bite","shake","reeling","caught"].includes(this.state)}equip(t){t&&this.state==="none"?(this.state="idle",this.rod.setVisible(!0),this.resetBobberToTip(),this.g.ui.showRodStats(!0)):!t&&this.state!=="none"&&(this.cancelAll(),this.state="none",this.rod.setVisible(!1),this.g.ui.showRodStats(!1))}cancelAll(){this.g.ui.power(!1),this.g.ui.clearShake(),this.g.ui.reel(!1),this.g.sound.strain(0),this.excl.visible=!1,this.shadow.visible=!1,this.rod.spin=0,this.rod.targetBend=0,this.rod.targetSide=0,this.fishModel&&(this.g.scene.remove(this.fishModel),this.fishModel=null),this.state!=="none"&&this.rod.setVisible(!0),this.state=this.state==="none"?"none":"idle",this.resetBobberToTip()}resetBobberToTip(){let t=this.rod.tipWorld();this.rod.bobber.position.copy(t).add(new S(0,-.7,0)),this.bobPrev.copy(this.rod.bobber.position)}canCast(){let t=this.g.player;return t.swimming?(this.g.ui.toast("\u6E38\u6CF3\u6642\u4E0D\u80FD\u91E3\u9B5A\uFF01","#ffb3b3"),!1):t.boat&&Math.abs(t.boat.speed)>1.5?(this.g.ui.toast("\u5148\u628A\u8239\u505C\u4E0B\u4F86\u518D\u91E3\u9B5A\uFF01","#ffb3b3"),!1):!0}mouseDown(){if(this.state==="idle"){if(!this.canCast())return;this.state="charging",this.power=0,this.powerDir=1,this.g.player.faceCamera()}else this.state==="waiting"?this.retrieve():this.state==="reeling"&&(this.holding=!0)}mouseUp(){this.state==="charging"&&this.cast(),this.holding=!1}interruptByMove(){(this.state==="waiting"||this.state==="landed")&&this.retrieve()}cast(){this.state="casting",this.t=0,this.released=!1,this.g.ui.power(!1),this.rod.impulse(-6)}releaseBobber(){this.released=!0;let t=this.g.player,e=t.forward(),n=4+this.power*24;this.castFrom.copy(this.rod.tipWorld());let s=t.pos.x+e.x*n,r=t.pos.z+e.z*n;this.water=li(s,r);let o;this.water?o=an(s,r,this.water.level,this.water.pond):o=Ri(s,r,999)+.12,this.castTo.set(s,o,r),this.flightT=0,this.flightDur=.55+this.power*.55,this.arc=2+this.power*5.5,this.g.sound.whoosh()}land(){let t=this.rod.bobber.position;if(!this.water){this.state="landed",this.t=0,this.g.ui.toast("\u8981\u628A\u6D6E\u6A19\u7529\u9032\u6C34\u88E1\u624D\u80FD\u91E3\u9B5A\u5594\uFF01","#ffd2a8"),this.g.fx.burst(t.clone(),13153162,10,2,.25,.6);return}let e=.45+this.power*.5;this.g.fx.splash(t.clone(),e,t.y),this.g.water.addRipple(t.x,t.z,1),this.g.sound.splash(e),this.state="waiting",this.t=0;let n=this.stats.lure;this.waitTime=n>=100?.2:jt(5,14)*(1-n/100)+.4,this.nibbleTimer=jt(1.2,2.5),this.pool=this.water.pond?"pond":this.water.island?this.water.island.id:"ocean",this.rod.impulse(3)}retrieve(){if(this.state==="waiting"){let t=this.rod.bobber.position;this.g.fx.splash(t.clone(),.25,t.y),this.g.sound.plop(.4)}this.state="retrieve",this.t=0,this.retrieveFrom=this.rod.bobber.position.clone(),this.excl.visible=!1,this.shadow.visible=!1}bite(){this.state="bite",this.t=0,this.catch=nf(this.pool,this.stats.luck,this.g.sky.isNight());let t=this.rod.bobber.position;this.g.fx.splash(t.clone(),.8,t.y),this.g.water.addRipple(t.x,t.z,1.4),this.g.sound.bite(),this.g.cam.shake(.25),this.excl.visible=!0,this.rod.impulse(10)}startShake(){this.state="shake",this.t=0;let t=Ke[this.catch.fish.rarity].index;this.shakesLeft=ke(3+Math.floor(t*.8),3,9),this.g.ui.spawnShake(()=>this.onShake(),this.shakesLeft)}onShake(){this.shakesLeft--,this.g.sound.shake();let t=this.rod.bobber.position;this.g.fx.splash(t.clone(),.35,t.y),this.g.water.addRipple(t.x,t.z,.7),this.rod.impulse(8),this.g.cam.shake(.08),this.shakesLeft<=0?(this.g.ui.clearShake(),this.startReel()):setTimeout(()=>{this.state==="shake"&&this.g.ui.spawnShake(()=>this.onShake(),this.shakesLeft)},90)}startReel(){this.state="reeling",this.t=0,this.excl.visible=!1;let t=this.stats,{fish:e,weight:n}=this.catch,s=rf(e,n)*(1-t.resilience/100*.35),r=ke(.26+t.control,.1,.95);this.mg={barW:r,barPos:.5-r/2,barVel:0,fishPos:.5,fishVel:0,fishTarget:.5,timer:.5,progress:.3,diff:s,overweight:n>t.maxWeight,inBar:!0,perfect:!0},this.g.ui.reel(!0),this.reelStart=this.rod.bobber.position.clone(),this.lateral=0;let o=zr(e,n);this.shadow.scale.set(Math.max(.6,o*1.2),Math.max(.35,o*.5),1),this.shadow.visible=!["boot","can","weed","wood"].includes(e.shape)}updateMinigame(t,e){let n=this.mg,s=this.stats,r=this.holding||this.g.input.space;n.barVel+=(r?1:-1)*3.3*t,n.barVel=ke(n.barVel,-1.35,1.35),n.barPos+=n.barVel*t,n.barPos<0&&(n.barPos=0,n.barVel=Math.abs(n.barVel)*.25),n.barPos>1-n.barW&&(n.barPos=1-n.barW,n.barVel=-Math.abs(n.barVel)*.25);let o=n.diff;n.timer-=t,n.timer<=0&&(Math.random()<.12+o*.3?n.fishTarget=Math.random()<.5?jt(.02,.15):jt(.85,.98):n.fishTarget=ke(n.fishPos+jt(-.45,.45)*(.5+o),.03,.97),n.timer=jt(.4,1.5)*(1.25-o*.75));let a=1.3+o*4.2;n.fishVel=ue(n.fishVel,(n.fishTarget-n.fishPos)*a,5,t),n.fishPos=ke(n.fishPos+(n.fishVel+Math.sin(e*11)*.06*o)*t,.02,.98),n.inBar=n.fishPos>=n.barPos&&n.fishPos<=n.barPos+n.barW;let l=.16*(n.overweight?.2:1)*(1-o*.3),c=.15*(1+o*.6)*(1-s.resilience/100);n.inBar?n.progress+=l*t:(n.progress-=c*t,n.perfect=!1),this.g.ui.updateReel(n),this.rod.spin=r?-22:-4,this.tickTimer-=t,this.tickTimer<=0&&(this.g.sound.tick(),this.tickTimer=r?.06:.16),this.g.sound.strain(n.inBar?.15:.7),n.inBar||this.g.cam.shake(.03),n.progress>=1?this.landFish():n.progress<=0&&this.lose("\u9B5A\u6399\u812B\u8DD1\u6389\u4E86\u2026")}landFish(){this.g.ui.reel(!1),this.g.sound.strain(0),this.rod.spin=0,this.shadow.visible=!1;let{fish:t,weight:e,mutation:n}=this.catch,s=sf(t,e,n);this.mg.perfect&&(s=Math.round(s*1.1));let{isNew:r}=Nd(t.id,e,n,s);In();let o=this.rod.bobber.position.clone(),a=zr(t,e);this.g.fx.splash(o,Math.min(2.2,.8+a*.5),o.y),this.g.water.addRipple(o.x,o.z,2),this.g.sound.splash(1.2),this.fishModel=Aa(t),this.fishModel.scale.setScalar(Math.min(5,Math.max(.9,.6+a*.9))),this.fishModel.position.copy(o),n&&n.id==="albino"&&this.fishModel.traverse(l=>{l.isMesh&&l.material.color&&(l.material=l.material.clone(),l.material.color.set(16777215),l.material.vertexColors=!1)}),n&&n.id==="shiny"&&this.fishModel.traverse(l=>{l.isMesh&&l.material.emissive&&(l.material=l.material.clone(),l.material.emissive.set(16773792),l.material.emissiveIntensity=.35)}),this.g.scene.add(this.fishModel),this.flyFrom=o,this.fishSize=Math.min(5,Math.max(.9,.6+a*.9)),this.state="caught",this.t=0,this.caughtInfo={fish:t,weight:e,mutation:n,value:s,isNew:r},this.rod.setVisible(!1),this.g.quests.onEvent("catch",{fish:t,weight:e,pool:this.pool,night:this.g.sky.isNight()}),this.g.onInventoryChanged()}lose(t){this.g.ui.reel(!1),this.g.ui.clearShake(),this.g.sound.strain(0),this.g.sound.snap(),this.g.ui.toast(t,"#ff9b9b"),this.rod.impulse(-12),this.rod.spin=0,this.excl.visible=!1,this.shadow.visible=!1,this.state="lost",this.t=0,this.retrieveFrom=this.rod.bobber.position.clone()}update(t,e){if(this.state==="none")return;let n=this.rod,s=n.bobber.position,r=this.g.ui;this.t+=t;let o=.6,a=0,l=Ge.idle;switch(n.targetSide=0,this.state){case"idle":n.targetBend=.05,this.dangle(t);break;case"charging":{this.power+=this.powerDir*t*1.05,this.power>=1&&(this.power=1,this.powerDir=-1),this.power<=0&&(this.power=0,this.powerDir=1),l={rX:Pn(Ge.idle.rX,Ge.charge.rX,Math.min(1,this.t*4)),rZ:Ge.charge.rZ,lX:Ge.charge.lX,lZ:Ge.charge.lZ,torso:Ge.charge.torso},n.targetBend=-.15,this.dangle(t);let c=this.g.worldToScreen(this.g.player.pos.clone().add(new S(0,2.2,0)));r.power(!0,this.power,c.x+70,c.y);break}case"casting":{if(l=Ge.release,!this.released&&this.t>.12&&this.releaseBobber(),this.released){this.flightT+=t;let c=Math.min(1,this.flightT/this.flightDur),h=n.tipWorld(),u=this.flightT<.05?h:this.castFrom;s.lerpVectors(u,this.castTo,c),s.y+=this.arc*4*c*(1-c),o=.08,c>=1&&this.land()}else this.dangle(t);n.targetBend=.2;break}case"landed":l=Ge.wait,o=.5,this.t>.7&&this.retrieve();break;case"waiting":{l=Ge.wait;let c=this.water,h=an(s.x,s.z,c.level,c.pond);this.nibbleTimer-=t,this.nibbleTimer<=0&&(this.nibble=1,this.nibbleTimer=jt(1.2,3.2),this.g.water.addRipple(s.x,s.z,.4),this.g.fx.ring(s.x,h+.02,s.z,.1,.9,.8,.35),Math.random()<.5&&this.g.sound.plop(.15)),this.nibble=Math.max(0,this.nibble-t*4),s.y=ue(s.y,h-.02-this.nibble*.12+Math.sin(e*2.2)*.02,12,t),s.x+=Math.sin(e*.6)*.002,n.bobber.rotation.z=Math.sin(e*1.7)*.1,n.bobber.rotation.x=Math.cos(e*1.3)*.08,n.targetBend=.12+this.nibble*.2,o=.45,this.t>=this.waitTime&&this.bite();break}case"bite":{l=Ge.wait;let c=an(s.x,s.z,this.water.level,this.water.pond);s.y=ue(s.y,c-.35,18,t),s.x+=Math.sin(e*30)*.01,n.targetBend=.7,o=0,this.excl.position.set(s.x,c+1.6+Math.sin(this.t*12)*.1,s.z);let h=Math.min(1,this.t*6)*(1+Math.sin(this.t*10)*.08);this.excl.scale.set(2.2*h,2.2*h,1),this.t>.45&&this.startShake();break}case"shake":{l=Ge.wait;let c=an(s.x,s.z,this.water.level,this.water.pond);s.y=ue(s.y,c-.25+Math.sin(e*20)*.06,14,t),s.x+=Math.sin(e*9)*.015,s.z+=Math.cos(e*7)*.015,n.targetBend=.55+Math.sin(e*18)*.1,o=0,a=.5,this.excl.visible=!0,this.excl.position.set(s.x,c+1.6+Math.sin(this.t*12)*.1,s.z),this.splashTimer-=t,this.splashTimer<=0&&(this.splashTimer=.35,this.g.fx.splash(s.clone(),.2,c),this.g.water.addRipple(s.x,s.z,.5)),this.t>20&&this.lose("\u592A\u6162\u4E86\uFF0C\u9B5A\u8DD1\u6389\u4E86\u2026");break}case"reeling":{if(l=Ge.reel,this.updateMinigame(t,e),this.state!=="reeling")break;let c=this.mg,h=this.g.player.pos,u=new S(h.x-this.reelStart.x,0,h.z-this.reelStart.z),f=u.length();u.normalize();let d=new S(-u.z,0,u.x);this.lateral=ue(this.lateral,(c.fishPos-.5)*6,3,t);let m=Math.min(c.progress*.75,Math.max(0,(f-3)/f)),x=this.reelStart.x+u.x*f*m+d.x*this.lateral,g=this.reelStart.z+u.z*f*m+d.z*this.lateral;li(x,g)&&(s.x=ue(s.x,x,4,t),s.z=ue(s.z,g,4,t));let y=an(s.x,s.z,this.water.level,this.water.pond);s.y=ue(s.y,y-.18+Math.sin(e*25)*(c.inBar?.02:.07),15,t),n.bobber.rotation.z=Math.sin(e*15)*.4,n.targetBend=(c.inBar?.6:.95)+Math.sin(e*23)*.06,n.targetSide=ke(-this.lateral*.08,-.4,.4),o=0,a=c.inBar?.2:1,this.splashTimer-=t,this.splashTimer<=0&&(this.splashTimer=c.inBar?.4:.14,this.g.fx.splash(s.clone(),c.inBar?.2:.45,y),this.g.water.addRipple(s.x,s.z,c.inBar?.4:.9)),this.shadow.position.set(s.x-u.x*.4,y-.25,s.z-u.z*.4),this.shadow.rotation.z=Math.atan2(u.x,u.z)+Math.PI/2+Math.sin(e*6)*.3;break}case"caught":{let c=this.g.player.pos,h=new S(c.x,c.y+3.35+Math.min(1.2,this.fishSize*.12),c.z),u=this.g.player.forward();h.addScaledVector(u,.25);let f=this.fishModel,d=.75;if(this.t<d){l=Ge.reel;let m=this.t/d,x=1-Math.pow(1-m,2);f.position.lerpVectors(this.flyFrom,h,x),f.position.y+=3.5*4*m*(1-m),f.rotation.set(0,0,m*Math.PI*4),f.userData.update(e,1.5),Math.random()<.5&&this.g.fx.drop(f.position.clone(),new S(jt(-1,1),jt(-1,1),jt(-1,1)),.9,1,-50)}else{if(l=Ge.hold,!this.shownPopup){this.shownPopup=!0;let g=this.caughtInfo;r.catchPopup(g.fish,g.weight,g.mutation,g.isNew,g.value);let p=Ke[g.fish.rarity];this.g.sound.jingle(p.index),this.mg.perfect&&r.toast("\u2728 \u5B8C\u7F8E\u6536\u7DDA\uFF01\u50F9\u503C +10%","#fff59d");let y=p.color==="rainbow"?16747248:new dt(p.color).getHex();p.index>=3&&this.g.fx.burst(h.clone(),y,20+p.index*12,4+p.index,.5,1.5),p.index>=5&&(this.g.fx.burst(h.clone(),16777215,40,7,.6,2),this.g.cam.shake(.2))}f.position.copy(h);let m=this.g.player.yaw;f.rotation.set(0,m+Math.PI,0),f.rotateZ(Math.sin(e*9)*.08),f.userData.update(e,.8);let x=Ke[this.caughtInfo.fish.rarity];if(x.index>=4&&Math.random()<.3){let g=x.color==="rainbow"?new dt().setHSL(e*.5%1,1,.6):new dt(x.color);this.g.fx.spark(h.clone().add(new S(jt(-1,1)*this.fishSize*.6,jt(-.4,.6),jt(-.5,.5))),new S(0,.8,0),g,.35,1.2,0)}Math.random()<.15&&this.g.fx.drop(f.position.clone().add(new S(jt(-.3,.3)*this.fishSize,-.1,0)),new S(0,-1,0),.7,1.2,-50),this.t>d+2.4&&(this.g.scene.remove(f),this.fishModel=null,this.shownPopup=!1,this.state="idle",n.setVisible(!0),this.resetBobberToTip())}n.bobber.position.copy(n.tipWorld());break}case"retrieve":case"lost":{l=Ge.wait;let c=this.state==="lost"?.35:.45,h=Math.min(1,this.t/c),u=n.tipWorld().clone().add(new S(0,-.7,0));s.lerpVectors(this.retrieveFrom,u,h*h),s.y+=Math.sin(h*Math.PI)*1.2,o=this.state==="lost"?1.4:.15,a=this.state==="lost"?2:0,n.targetBend=.05,h>=1&&(this.state="idle",this.bobPrev.copy(s));break}}this.poseTarget=l,this.state!=="bite"&&this.state!=="shake"&&(this.excl.visible=!1),n.update(t),n.visible&&n.updateLine(o,a,e)}dangle(t){let e=this.rod.bobber.position,n=this.rod.tipWorld(),s=e.clone().sub(this.bobPrev).multiplyScalar(.96);this.bobPrev.copy(e),e.add(s),e.y-=9.8*t*t;let r=e.clone().sub(n),o=r.length(),a=.7;o>a&&e.copy(n).addScaledVector(r.normalize(),a),this.rod.bobber.rotation.set(0,0,0)}applyPose(t,e,n){if(this.state==="none")return;let s=this.poseTarget,r=this.pose,o=this.state==="casting"?30:12;if(r.rX=ue(r.rX,s.rX,o,e),r.rZ=ue(r.rZ,s.rZ,o,e),r.torso=ue(r.torso,s.torso,8,e),t.armR.rotation.x=r.rX,t.armR.rotation.z=r.rZ,s.lX!==null){r.lX=ue(r.lX,s.lX,o,e),r.lZ=ue(r.lZ,s.lZ,o,e);let a=0;this.state==="reeling"&&(this.holding||this.g.input.space)&&(a=Math.sin(n*22)*.18),t.armL.rotation.x=r.lX+a,t.armL.rotation.z=r.lZ}else r.lX=t.armL.rotation.x,r.lZ=t.armL.rotation.z;t.torso.rotation.x+=r.torso}}});function yf(i){return Lh[i]||(Lh[i]=ci([{text:i,font:'bold 110px "Arial Black", sans-serif',color:i==="!"?"#ffd23f":"#7dff8a",strokeW:14}],{w:128,h:128,stroke:"#2a1a00"})),Lh[i]}var Lh,Pa,vf=ye(()=>{He();Ih();Vs();Mn();Zi();Lh={};Pa=class{constructor(t,e){this.g=t,this.def=e,this.id=e.id,this.name=e.name,this.title=e.title,this.talk=e.talk,this.rig=Sa(e.look||{}),this.pos=new S(e.x,e.y,e.z),this.baseYaw=e.yaw||0,this.yaw=this.baseYaw,this.rig.root.position.copy(this.pos),t.scene.add(this.rig.root),this.label=$d(e.name,e.title),this.label.position.set(0,3.55,0),this.rig.root.add(this.label),this.marker=new Ti(new si({map:yf("!"),transparent:!0,depthWrite:!1,fog:!1})),this.marker.scale.set(1.1,1.1,1),this.marker.position.set(0,4.5,0),this.marker.visible=!1,this.marker.renderOrder=11,this.rig.root.add(this.marker),this.markerCh=null,this.talking=!1,this.phase=Math.random()*10,ze(e.x,e.z,.55,e.y+3,{boatBlock:!1}),e.prop&&e.prop(this)}update(t,e,n){let s=this.pos.distanceTo(n),r=this.baseYaw;(s<9||this.talking)&&(r=Math.atan2(n.x-this.pos.x,n.z-this.pos.z)),this.yaw=Rr(this.yaw,r,5,t),this.rig.root.rotation.y=this.yaw,this.rig.animate(t,e+this.phase,0,this.def.sit?"sit":"ground"),this.talking?(this.rig.armR.rotation.x=-.6+Math.sin(e*5)*.25,this.rig.armR.rotation.z=-.3,this.rig.neck.rotation.x=Math.sin(e*6)*.05):this.def.wave&&s<14&&(this.rig.armR.rotation.x=-2.6,this.rig.armR.rotation.z=-.3+Math.sin(e*8)*.35);let o=this.g.quests.markerFor(this.id);if(o!==this.markerCh&&(this.markerCh=o,this.marker.visible=!!o,o&&(this.marker.material.map=yf(o)),this.marker.material.needsUpdate=!0),o){this.marker.position.y=4.5+Math.sin(e*3)*.15;let a=1.1+Math.sin(e*6)*.05;this.marker.scale.set(a,a,1)}this.label.visible=s<45}}});var La,_f=ye(()=>{La=class{constructor(t){this.g=t,this.el=document.querySelector("#dialogue"),this.nameEl=this.el.querySelector(".dlg-name"),this.textEl=this.el.querySelector(".dlg-text"),this.nextEl=this.el.querySelector(".dlg-next"),this.optEl=this.el.querySelector(".dlg-options"),this.box=this.el.querySelector(".dlg-box"),this.open=!1,this.steps=[],this.idx=0,this.typing=!1,this.full="",this.shown=0,this.box.addEventListener("mousedown",e=>{e.stopPropagation(),this.advance()})}run(t,e){this.npc=t,this.steps=e,this.idx=0,this.open=!0,this.el.classList.remove("hidden"),this.nameEl.textContent=t?t.title?`${t.title}\u30FB${t.name}`:t.name:"",this.g.onDialogue(!0,t),this.showStep()}showStep(){let t=this.steps[this.idx];if(t===void 0){this.close();return}let e=typeof t=="string"?{text:t}:t;this.node=e,this.full=e.text,this.shown=0,this.typing=!0,this.textEl.textContent="",this.optEl.innerHTML="",this.nextEl.style.visibility="hidden",this.box.style.animation="none",this.box.offsetWidth,this.box.style.animation=""}finishTyping(){this.typing=!1,this.shown=this.full.length,this.textEl.textContent=this.full;let t=this.node;t.options?(this.nextEl.style.visibility="hidden",this.optEl.innerHTML="",t.options.forEach((e,n)=>{let s=document.createElement("button");s.textContent=e.label,e.cls&&(s.className=e.cls),s.style.animationDelay=`${n*.05}s`,s.onmousedown=r=>{r.stopPropagation(),this.g.sound.click(),e.action?e.action():this.close()},this.optEl.appendChild(s)})):this.nextEl.style.visibility="visible"}advance(){if(this.open){if(this.typing){this.finishTyping();return}this.node.options||(this.g.sound.click(),this.idx++,this.showStep())}}close(){this.open&&(this.open=!1,this.el.classList.add("hidden"),this.optEl.innerHTML="",this.g.onDialogue(!1,this.npc))}update(t){if(!this.open||!this.typing)return;let e=Math.floor(this.shown);this.shown+=t*38;let n=Math.floor(this.shown);n!==e&&(this.textEl.textContent=this.full.slice(0,n),n%2===0&&this.full[n-1]&&this.full[n-1]!==" "&&this.g.sound.talk()),this.shown>=this.full.length&&this.finishTyping()}}});function Dh(i){return i.shape==="boot"?"\u{1F97E}":i.shape==="can"?"\u{1F96B}":i.shape==="weed"?"\u{1F33F}":i.shape==="wood"?"\u{1FAB5}":i.shape==="squid"?"\u{1F991}":i.shape==="round"?"\u{1F421}":i.shape==="shark"||i.shape==="whale"?"\u{1F988}":i.shape==="flat"?"\u{1F41F}":Av[i.rarity]||"\u{1F41F}"}function Uh(i){return i.color==="rainbow"?{cls:"rainbow",color:"#fff"}:{cls:"",color:i.color}}var Te,Av,Rv,Da,Mf=ye(()=>{zs();Gs();_a();Te=i=>document.querySelector(i),Av={trash:"\u{1F5D1}\uFE0F",common:"\u{1F41F}",uncommon:"\u{1F41F}",unusual:"\u{1F420}",rare:"\u{1F420}",legendary:"\u{1F988}",mythical:"\u{1F409}",exotic:"\u2728"};Rv=Object.fromEntries(Sh.map(i=>[i.id,i])),Da=class{constructor(){this.zone=Te("#zoneBanner"),this.moneyEl=Te("#moneyText"),this.powerEl=Te("#powerBar"),this.shakeLayer=Te("#shakeLayer"),this.reelEl=Te("#reel"),this.reelBar=Te(".reel-bar"),this.reelFish=Te(".reel-fish"),this.reelFill=Te(".reel-progress .fill"),this.reelPct=Te(".reel-pct"),this.reelWarn=Te(".reel-warn"),this.catchEl=Te("#catchPopup"),this.hotbarEl=Te("#hotbar"),this.toastsEl=Te("#toasts"),this.interactEl=Te("#interact"),this.questsEl=Te("#quests"),this.rodStatsEl=Te("#rodStats"),this.wp=Te("#waypoint"),this.panels={backpack:Te("#backpack"),help:Te("#help"),dex:Te("#dex")};for(let[t,e]of Object.entries(this.panels))e.querySelector(".close").onclick=()=>this.togglePanel(t,!1);this.onSelectSlot=null,this._zoneTimer=null,this.selected=0}anyPanelOpen(){return Object.values(this.panels).some(t=>!t.classList.contains("hidden"))}togglePanel(t,e){let n=this.panels[t],s=e??n.classList.contains("hidden");for(let[r,o]of Object.entries(this.panels))r!==t&&o.classList.add("hidden");n.classList.toggle("hidden",!s),s&&t==="backpack"&&this.renderBackpack(),s&&t==="dex"&&this.renderDex()}setMoney(t,e=!1){if(this.moneyEl.textContent=Math.floor(t).toLocaleString(),e){let n=Te("#money");n.classList.add("bump"),setTimeout(()=>n.classList.remove("bump"),160)}}setClock(t,e){Te("#clockText").textContent=t,Te("#clockIcon").textContent=e?"\u{1F319}":"\u2600\uFE0F"}showZone(t,e){this.zone.querySelector(".zb-name").textContent=t,this.zone.querySelector(".zb-sub").textContent=e||"",this.zone.classList.remove("show"),this.zone.offsetWidth,this.zone.classList.add("show"),clearTimeout(this._zoneTimer),this._zoneTimer=setTimeout(()=>this.zone.classList.remove("show"),4200)}toast(t,e="#fff"){let n=document.createElement("div");n.className="toast",n.style.color=e,n.textContent=t,this.toastsEl.appendChild(n),setTimeout(()=>n.remove(),3200)}setInteract(t){if(!t){this.interactEl.classList.add("hidden");return}this.interactEl.classList.remove("hidden"),this.interactEl.querySelector(".txt").textContent=t}power(t,e=0,n=0,s=0){this.powerEl.classList.toggle("hidden",!t),t&&(this.powerEl.style.left=`${n}px`,this.powerEl.style.top=`${s}px`,this.powerEl.querySelector(".fill").style.height=`${Math.round(e*100)}%`,this.powerEl.querySelector(".pb-label").textContent=e>.92?"\u5B8C\u7F8E\uFF01":"\u529B\u9053")}spawnShake(t,e){this.clearShake();let n=document.createElement("button");n.className="shake",n.textContent="SHAKE";let s=25+Math.random()*50,r=28+Math.random()*42;n.style.left=`${s}%`,n.style.top=`${r}%`,n.onmousedown=a=>{a.stopPropagation(),n.classList.add("pop"),t()},this.shakeLayer.appendChild(n);let o=document.createElement("div");o.className="shake-count",o.textContent=`\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u64CA SHAKE\uFF08\u5269 ${e} \u4E0B\uFF09`,this.shakeLayer.appendChild(o)}clearShake(){for(let t of[...this.shakeLayer.children])t.classList.contains("pop")?setTimeout(()=>t.remove(),200):t.remove()}reel(t){this.reelEl.classList.toggle("hidden",!t)}updateReel(t){this.reelBar.style.left=`${t.barPos*100}%`,this.reelBar.style.width=`${t.barW*100}%`,this.reelBar.classList.toggle("out",!t.inBar),this.reelFish.style.left=`${t.fishPos*100}%`,this.reelFill.style.width=`${Math.max(0,Math.min(1,t.progress))*100}%`,this.reelPct.textContent=`${Math.floor(Math.max(0,t.progress)*100)}%`,this.reelEl.classList.toggle("shaking",!t.inBar),this.reelWarn.textContent=t.overweight?"\u26A0 \u8D85\u904E\u91E3\u7AFF\u6700\u5927\u91CD\u91CF\uFF01\u6536\u7DDA\u975E\u5E38\u5403\u529B":t.inBar?"":"\u9B5A\u5728\u6399\u624E\uFF01"}catchPopup(t,e,n,s,r){let o=Ke[t.rarity],a=Uh(o),l=document.createElement("div");l.className="catch";let c=n?`<span style="color:${n.color}">${n.name} </span>`:"";l.innerHTML=`${s?'<div class="c-new">NEW! \u9996\u6B21\u6355\u7372</div>':""}
      <div><span class="c-name ${a.cls}" style="color:${a.color}">${c}${t.name}</span><span class="c-weight stroke">(${Fr(e)})</span></div>
      <div class="c-meta"><span class="${a.cls}" style="color:${a.color}">${o.name}</span>\u3000<span style="color:#7dff8a">\u50F9\u503C $${r}</span></div>`,this.catchEl.innerHTML="",this.catchEl.appendChild(l),setTimeout(()=>l.remove(),4400)}renderHotbar(){let t=Ji[Dt.rod],e=[];e.push(`<div class="slot ${this.selected===1?"sel":""}" data-slot="1"><span class="num">1</span><span class="ico">\u{1F3A3}</span><span class="nm">${t.name}</span></div>`);for(let n=0;n<8;n++){let s=Dt.inventory[n];if(!s){e.push(`<div class="slot" data-slot="${n+2}" style="opacity:.45"><span class="num">${n+2}</span></div>`);continue}let r=Ci[s.id],o=Ke[r.rarity],a=o.color==="rainbow"?"#ff8af0":o.color;e.push(`<div class="slot ${this.selected===n+2?"sel":""}" data-slot="${n+2}" style="border-bottom-color:${a}"><span class="num">${n+2}</span><span class="ico">${Dh(r)}</span><span class="nm" style="color:${a}">${r.name}</span><span class="wt">${Fr(s.weight)}</span></div>`)}this.hotbarEl.innerHTML=e.join(""),this.hotbarEl.querySelectorAll(".slot").forEach(n=>{n.onmousedown=s=>{s.stopPropagation(),this.onSelectSlot&&this.onSelectSlot(parseInt(n.dataset.slot,10))}})}showRodStats(t){if(this.rodStatsEl.classList.toggle("hidden",!t),!t)return;let e=Ji[Dt.rod];this.rodStatsEl.innerHTML=`<div class="rs-name">\u{1F3A3} ${e.name}</div>
      <div class="rs-row"><span>\u4E0A\u9264\u901F\u5EA6</span><b>${e.lure}%</b></div>
      <div class="rs-row"><span>\u904B\u6C23</span><b>${e.luck}%</b></div>
      <div class="rs-row"><span>\u63A7\u5236\u529B</span><b>${e.control}</b></div>
      <div class="rs-row"><span>\u5FA9\u539F\u529B</span><b>${e.resilience}%</b></div>
      <div class="rs-row"><span>\u6700\u5927\u91CD\u91CF</span><b>${e.maxWeight.toLocaleString()} kg</b></div>`}renderBackpack(){let t=Dt.inventory,e=t.reduce((s,r)=>s+r.value,0);this.panels.backpack.querySelector(".bp-summary").innerHTML=`\u5171 <b>${t.length}</b> \u689D\u3000\u7E3D\u50F9\u503C <b style="color:#7dff8a">$${e.toLocaleString()}</b>\u3000\uFF08\u9EDE\u64CA\u9B5A\u53EF\u4EE5\u62FF\u5728\u624B\u4E0A\uFF0C\u5230\u9B5A\u5546\u90A3\u88E1\u8CE3\u6389\uFF09`;let n=this.panels.backpack.querySelector(".bp-grid");if(!t.length){n.innerHTML='<div style="opacity:.7">\u80CC\u5305\u662F\u7A7A\u7684\uFF0C\u5FEB\u53BB\u91E3\u9B5A\u5427\uFF01</div>';return}n.innerHTML=t.map((s,r)=>{let o=Ci[s.id],a=Ke[o.rarity],l=Uh(a),c=s.mutation?Rv[s.mutation]:null;return`<div class="bp-item ${this.selected===r+2?"sel":""}" data-idx="${r}">
        <div class="n ${l.cls}" style="color:${l.color}">${Dh(o)} ${c?c.name+" ":""}${o.name}</div>
        <div class="w">${a.name}\u30FB${Fr(s.weight)}</div><div class="v">$${s.value}</div></div>`}).join(""),n.querySelectorAll(".bp-item").forEach(s=>{s.onclick=()=>{let r=parseInt(s.dataset.idx,10),[o]=Dt.inventory.splice(r,1);Dt.inventory.unshift(o),this.onSelectSlot&&this.onSelectSlot(2),this.renderBackpack()}})}renderDex(){let t=this.panels.dex.querySelector(".dex-grid"),e=[...xa].sort((s,r)=>Ke[s.rarity].index-Ke[r.rarity].index),n=e.filter(s=>Dt.dex[s.id]).length;t.innerHTML=`<div style="grid-column:1/-1;opacity:.85">\u5DF2\u767C\u73FE ${n} / ${e.length} \u7A2E</div>`+e.map(s=>{let r=Dt.dex[s.id],o=Ke[s.rarity],a=Uh(o),l=s.pools.map(h=>ef[h]).join("\u3001"),c=s.time==="night"?"\u{1F319} \u591C\u665A":s.time==="day"?"\u2600\uFE0F \u767D\u5929":"\u5168\u5929";return r?`<div class="dex-item"><div class="n ${a.cls}" style="color:${a.color}">${Dh(s)} ${s.name}</div><div class="w">${o.name}\u30FB${c}</div><div class="w">${l}</div><div class="w">\u6355\u7372 ${r.count} \u6B21\u30FB\u6700\u91CD ${Fr(r.best)}</div></div>`:`<div class="dex-item locked"><div class="n">\u2753 ???</div><div class="w" style="color:${o.color==="rainbow"?"#ff8af0":o.color}">${o.name}</div><div class="w">${l}</div></div>`}).join("")}renderQuests(t){this.questsEl.innerHTML=t.map(e=>`<div class="quest"><div class="q-title">\u{1F4DC} ${e.title}</div>
      ${e.steps.map(n=>`<div class="q-step ${n.done?"done":""}">\u2022 ${n.text}</div>`).join("")}
      ${e.reward?`<div class="q-reward">\u734E\u52F5\uFF1A${e.reward}</div>`:""}</div>`).join("")}waypoint(t,e,n,s,r=null){this.wp.classList.toggle("hidden",!t),t&&(this.wp.style.left=`${e}px`,this.wp.style.top=`${n}px`,this.wp.querySelector(".wp-label").textContent=s,this.wp.querySelector(".wp-arrow").style.transform=r===null?"rotate(180deg)":`rotate(${r}rad)`)}fade(t){document.querySelector("#fade").style.opacity=t?1:0}}});var Ua,bf=ye(()=>{Ua=class{constructor(){this.ctx=null,this.enabled=!0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.6,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate*2;this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let n=this.noise.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1;this.startAmbience(),this.startEngine()}get t(){return this.ctx.currentTime}noiseSrc(){let t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t.playbackRate.value=.8+Math.random()*.4,t}env(t,e,n,s){let r=t.gain,o=this.t;r.cancelScheduledValues(o),r.setValueAtTime(1e-4,o),r.linearRampToValueAtTime(n,o+e),r.exponentialRampToValueAtTime(1e-4,o+e+s)}startAmbience(){let t=this.ctx,e=this.noiseSrc(),n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=520;let s=t.createGain();s.gain.value=.05;let r=t.createOscillator();r.frequency.value=.11;let o=t.createGain();o.gain.value=.035,r.connect(o),o.connect(s.gain),e.connect(n),n.connect(s),s.connect(this.master),e.start(),r.start(),this.oceanGain=s;let a=this.noiseSrc(),l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=900,l.Q.value=.6;let c=t.createGain();c.gain.value=.012,a.connect(l),l.connect(c),c.connect(this.master),a.start(),this.windGain=c,this.nextCritter=0}startEngine(){let t=this.ctx,e=t.createOscillator();e.type="sawtooth",e.frequency.value=40;let n=t.createOscillator();n.type="square",n.frequency.value=20;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=300;let r=t.createGain();r.gain.value=0,e.connect(s),n.connect(s),s.connect(r),r.connect(this.master),e.start(),n.start(),this.engine={o:e,o2:n,g:r,lp:s}}setEngine(t,e){if(!this.ctx)return;let n=this.engine,s=this.t;n.g.gain.setTargetAtTime(t?.05+e*.06:0,s,.15),n.o.frequency.setTargetAtTime(38+e*60,s,.2),n.o2.frequency.setTargetAtTime(19+e*30,s,.2),n.lp.frequency.setTargetAtTime(220+e*600,s,.2)}update(t,e,n){this.ctx&&(this.oceanGain.gain.setTargetAtTime(n?.06:.04,this.t,1),this.nextCritter-=t,this.nextCritter<=0&&(this.nextCritter=1.5+Math.random()*5,e>.6?this.cricket():Math.random()<.6&&this.gull()))}cricket(){let t=this.ctx;for(let e=0;e<3;e++){let n=t.createOscillator();n.type="sine",n.frequency.value=4200+Math.random()*300;let s=t.createGain();s.gain.value=0,n.connect(s),s.connect(this.master);let r=this.t+e*.12;for(let o=0;o<4;o++)s.gain.setValueAtTime(1e-4,r+o*.025),s.gain.linearRampToValueAtTime(.012,r+o*.025+.005),s.gain.linearRampToValueAtTime(1e-4,r+o*.025+.02);n.start(r),n.stop(r+.15)}}gull(){let t=this.ctx,e=t.createOscillator();e.type="triangle";let n=t.createGain();n.gain.value=0,e.connect(n),n.connect(this.master);let s=this.t,r=1100+Math.random()*400;for(let o=0;o<2+Math.floor(Math.random()*3);o++){let a=s+o*.22;e.frequency.setValueAtTime(r,a),e.frequency.exponentialRampToValueAtTime(r*1.45,a+.06),e.frequency.exponentialRampToValueAtTime(r*.8,a+.18),n.gain.setValueAtTime(1e-4,a),n.gain.linearRampToValueAtTime(.018,a+.03),n.gain.exponentialRampToValueAtTime(1e-4,a+.19)}e.start(s),e.stop(s+1.2)}splash(t=1){if(!this.ctx)return;let e=this.ctx,n=this.noiseSrc(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(3e3,this.t),s.frequency.exponentialRampToValueAtTime(400,this.t+.4+t*.2);let r=e.createGain();n.connect(s),s.connect(r),r.connect(this.master),this.env(r,.01,.25*Math.min(1.5,t),.35+t*.25),n.start(),n.stop(this.t+1.2),this.plop(.6*t)}plop(t=.5){if(!this.ctx)return;let e=this.ctx,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(700,this.t),n.frequency.exponentialRampToValueAtTime(140,this.t+.12);let s=e.createGain();n.connect(s),s.connect(this.master),this.env(s,.005,.2*t,.15),n.start(),n.stop(this.t+.3)}whoosh(){if(!this.ctx)return;let t=this.ctx,e=this.noiseSrc(),n=t.createBiquadFilter();n.type="bandpass",n.Q.value=1.5,n.frequency.setValueAtTime(600,this.t),n.frequency.exponentialRampToValueAtTime(2600,this.t+.25);let s=t.createGain();e.connect(n),n.connect(s),s.connect(this.master),this.env(s,.08,.15,.25),e.start(),e.stop(this.t+.5);let r=t.createOscillator();r.type="square",r.frequency.value=55;let o=t.createGain(),a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=1500,r.connect(a),a.connect(o),o.connect(this.master),this.env(o,.02,.03,.7),r.frequency.exponentialRampToValueAtTime(25,this.t+.8),r.start(),r.stop(this.t+.9)}bite(){if(!this.ctx)return;this.splash(.7);let t=this.ctx;[880,1175].forEach((e,n)=>{let s=t.createOscillator();s.type="square",s.frequency.value=e;let r=t.createGain();s.connect(r),r.connect(this.master);let o=this.t+n*.08;r.gain.setValueAtTime(1e-4,o),r.gain.linearRampToValueAtTime(.06,o+.01),r.gain.exponentialRampToValueAtTime(1e-4,o+.12),s.start(o),s.stop(o+.15)})}shake(){if(!this.ctx)return;let t=this.ctx,e=t.createOscillator();e.type="triangle",e.frequency.setValueAtTime(500+Math.random()*200,this.t),e.frequency.exponentialRampToValueAtTime(1200,this.t+.06);let n=t.createGain();e.connect(n),n.connect(this.master),this.env(n,.005,.12,.1),e.start(),e.stop(this.t+.15),this.plop(.4)}tick(){if(!this.ctx)return;let t=this.ctx,e=this.noiseSrc(),n=t.createBiquadFilter();n.type="highpass",n.frequency.value=3e3;let s=t.createGain();e.connect(n),n.connect(s),s.connect(this.master),this.env(s,.001,.08,.025),e.start(),e.stop(this.t+.05)}strain(t){if(this.ctx){if(!this.strainNode){let e=this.ctx,n=e.createOscillator();n.type="sawtooth",n.frequency.value=180;let s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=900,s.Q.value=4;let r=e.createGain();r.gain.value=0,n.connect(s),s.connect(r),r.connect(this.master),n.start(),this.strainNode={o:n,g:r}}this.strainNode.g.gain.setTargetAtTime(t*.03,this.t,.05),this.strainNode.o.frequency.setTargetAtTime(160+t*120+Math.random()*20,this.t,.05)}}snap(){if(!this.ctx)return;let t=this.ctx,e=this.noiseSrc(),n=t.createBiquadFilter();n.type="highpass",n.frequency.value=1500;let s=t.createGain();e.connect(n),n.connect(s),s.connect(this.master),this.env(s,.001,.3,.12),e.start(),e.stop(this.t+.2);let r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(400,this.t),r.frequency.exponentialRampToValueAtTime(90,this.t+.4);let o=t.createGain();r.connect(o),o.connect(this.master),this.env(o,.005,.15,.4),r.start(),r.stop(this.t+.5)}jingle(t=1){if(!this.ctx)return;let e=this.ctx,n=[523.25,659.25,783.99,1046.5,1318.5,1568,2093],s=Math.min(n.length,3+t);for(let r=0;r<s;r++){let o=e.createOscillator();o.type=t>=4?"triangle":"sine",o.frequency.value=n[r];let a=e.createGain();o.connect(a),a.connect(this.master);let l=this.t+r*.085;a.gain.setValueAtTime(1e-4,l),a.gain.linearRampToValueAtTime(.11,l+.01),a.gain.exponentialRampToValueAtTime(1e-4,l+.5),o.start(l),o.stop(l+.55)}t>=5&&[1046.5,1318.5,1568].forEach(r=>{let o=e.createOscillator();o.type="sine",o.frequency.value=r;let a=e.createGain();o.connect(a),a.connect(this.master);let l=this.t+s*.085;a.gain.setValueAtTime(1e-4,l),a.gain.linearRampToValueAtTime(.06,l+.05),a.gain.exponentialRampToValueAtTime(1e-4,l+1.6),o.start(l),o.stop(l+1.7)})}coin(){if(!this.ctx)return;let t=this.ctx;[1318.5,1975.5].forEach((e,n)=>{let s=t.createOscillator();s.type="square",s.frequency.value=e;let r=t.createGain();s.connect(r),r.connect(this.master);let o=this.t+n*.07;r.gain.setValueAtTime(1e-4,o),r.gain.linearRampToValueAtTime(.05,o+.005),r.gain.exponentialRampToValueAtTime(1e-4,o+.25),s.start(o),s.stop(o+.3)})}click(){if(!this.ctx)return;let t=this.ctx,e=t.createOscillator();e.type="sine",e.frequency.value=900;let n=t.createGain();e.connect(n),n.connect(this.master),this.env(n,.002,.06,.05),e.start(),e.stop(this.t+.08)}talk(){if(!this.ctx)return;let t=this.ctx,e=t.createOscillator();e.type="square",e.frequency.value=300+Math.random()*160;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=1200;let s=t.createGain();e.connect(n),n.connect(s),s.connect(this.master),this.env(s,.002,.025,.04),e.start(),e.stop(this.t+.06)}chime(){if(!this.ctx)return;let t=this.ctx;[659.25,987.77,1318.5].forEach((e,n)=>{let s=t.createOscillator();s.type="sine",s.frequency.value=e;let r=t.createGain();s.connect(r),r.connect(this.master);let o=this.t+n*.12;r.gain.setValueAtTime(1e-4,o),r.gain.linearRampToValueAtTime(.07,o+.02),r.gain.exponentialRampToValueAtTime(1e-4,o+1.2),s.start(o),s.stop(o+1.3)})}}});var Iv=Tf(()=>{He();zs();Hn();Zi();Hs();Xd();hf();Vs();uf();df();ff();mf();gf();xf();vf();_f();Th();Mf();bf();var Cv={id:"ocean",name:"Open Sea",subtitle:"\u4E00\u671B\u7121\u969B\u7684\u5916\u6D77"},Nh=class{constructor(){Dd();let t=new zo({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Xc,t.toneMapping=qc,t.toneMappingExposure=1,t.outputColorSpace=De,document.body.prepend(t.domElement),this.renderer=t,this.scene=new Oo,this.camera=new Ye(60,window.innerWidth/window.innerHeight,.1,4e3),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}),this.terrainH=Ve,this.input={f:!1,b:!1,l:!1,r:!1,shift:!1,jump:!1,space:!1},this.ui=new Da,this.sound=new Ua,this.fx=new wa(this.scene),this.sky=new da(this.scene,Dt.time??.3),this.water=new ua(this.scene,Hd(512)),this.scene.add(Od()),this.world=cf(this.scene),this.ambient=new ba(this),this.cam=new Ca(this.camera,t.domElement),this.cam.occluders=kn,this.player=new Ra(this),this.fishing=new Ia(this),this.boat=new Ea(this),this.quests=new ya(this),this.dialogue=new La(this),this.npcs=this.world.npcs.map(n=>new Pa(this,n));let e=Dt.pos||this.world.spawn;if(this.player.teleport(e.x,e.z,e.yaw??this.world.spawn.yaw),Dt.pos&&li(e.x,e.z)&&Ri(e.x,e.z,99)<-1){let n=this.world.spawn;this.player.teleport(n.x,n.z,n.yaw)}this.cam.yaw=this.player.yaw,this.cam.update(0,this.player.pos.clone().add(new S(0,2.2,0)),!0),this.ui.setMoney(Dt.money),this.ui.onSelectSlot=n=>this.selectSlot(n),this.ui.renderHotbar(),this.quests.render(),this.started=!1,this.time=0,this.zoneKey=null,this.zoneTimer=0,this.saveTimer=0,this.interactTarget=null,this.clock=new ia,this.bindInput(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}bindInput(){let t={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};window.addEventListener("keydown",e=>{if(!this.started)return;if(t[e.code]&&(this.input[t[e.code]]=!0),(e.code==="ShiftLeft"||e.code==="ShiftRight")&&(this.input.shift=!0),e.code==="Space"){if(e.preventDefault(),this.dialogue.open){this.dialogue.advance();return}this.fishing.state==="reeling"?this.input.space=!0:e.repeat||(this.input.jump=!0)}if(e.repeat)return;if(e.code==="KeyE"&&this.interact(),e.code==="Escape"){this.dialogue.open&&this.dialogue.close();for(let s of Object.keys(this.ui.panels))this.ui.togglePanel(s,!1)}e.code==="KeyB"&&this.ui.togglePanel("backpack"),e.code==="KeyN"&&this.ui.togglePanel("dex"),e.code==="KeyH"&&this.ui.togglePanel("help"),e.code==="Enter"&&this.dialogue.open&&this.dialogue.advance();let n=e.code.match(/^Digit([1-9])$/);n&&!this.dialogue.open&&this.selectSlot(parseInt(n[1],10))}),window.addEventListener("keyup",e=>{t[e.code]&&(this.input[t[e.code]]=!1),(e.code==="ShiftLeft"||e.code==="ShiftRight")&&(this.input.shift=!1),e.code==="Space"&&(this.input.space=!1)}),window.addEventListener("blur",()=>{for(let e of Object.keys(this.input))this.input[e]=!1;this.fishing.holding=!1}),this.renderer.domElement.addEventListener("mousedown",e=>{!this.started||e.button!==0||(this.sound.init(),!(this.dialogue.open||this.ui.anyPanelOpen())&&this.fishing.equipped&&this.fishing.mouseDown())}),window.addEventListener("mouseup",e=>{e.button===0&&this.fishing.mouseUp()}),document.querySelector("#btnBag").onclick=()=>this.ui.togglePanel("backpack"),document.querySelector("#btnDex").onclick=()=>this.ui.togglePanel("dex"),document.querySelector("#btnHelp").onclick=()=>this.ui.togglePanel("help"),document.querySelector("#btnStart").onclick=()=>this.start(),document.querySelector("#btnReset").onclick=()=>{confirm("\u78BA\u5B9A\u8981\u6E05\u9664\u5B58\u6A94\u3001\u5F9E\u982D\u958B\u59CB\u55CE\uFF1F")&&(Ud(),this.noSave=!0,location.reload())},window.addEventListener("beforeunload",()=>{this.noSave||this.save()})}start(){this.started=!0,this.sound.init(),document.querySelector("#start").classList.add("hidden"),this.zoneKey=null,Dt.quests.tutorial||setTimeout(()=>this.ui.toast("\u{1F449} \u53BB\u627E\u982D\u4E0A\u6709\u300C!\u300D\u7684\u5C0E\u5E2B\u30FB\u963F\u51F1 \u8AAA\u8A71\u5427\uFF01","#ffd75e"),1500)}save(){Dt.pos=this.player.boat?null:{x:this.player.pos.x,z:this.player.pos.z,yaw:this.player.yaw},Dt.time=this.sky.t,In()}selectSlot(t){let e=this.ui;if(t===0||t===e.selected&&t!==0){this.fishing.equip(!1),this.player.holdFish(null),e.selected=0,e.renderHotbar();return}if(t===1){if(this.player.swimming){e.toast("\u6E38\u6CF3\u6642\u4E0D\u80FD\u62FF\u91E3\u7AFF\uFF01","#ffb3b3");return}this.player.holdFish(null),this.fishing.equip(!0),e.selected=1,this.quests.onEvent("equip")}else{let n=Dt.inventory[t-2];if(!n)return;this.fishing.equip(!1),this.player.holdFish(n),e.selected=t}e.renderHotbar()}onInventoryChanged(){let t=this.player.heldFish;if(t){let e=Dt.inventory.indexOf(t);e<0?(this.player.holdFish(null),this.ui.selected=this.fishing.equipped?1:0):e>=8?(Dt.inventory.splice(e,1),Dt.inventory.unshift(t),this.ui.selected=2):this.ui.selected=e+2}this.ui.renderHotbar(),this.ui.panels.backpack.classList.contains("hidden")||this.ui.renderBackpack(),this.quests.render()}findInteract(){if(this.fishing.active)return null;let t=this.player.pos;if(this.player.boat)return{type:"exitBoat",label:"\u4E0B\u8239"};let e=null,n=4.2;for(let s of this.npcs){let r=Math.hypot(s.pos.x-t.x,s.pos.z-t.z);r<n&&Math.abs(s.pos.y-t.y)<3&&(n=r,e=s)}return e?{type:"npc",npc:e,label:`\u4EA4\u8AC7\u30FB${e.name}`}:this.boat.spawned&&this.boat.pos.distanceTo(t)<4.8?{type:"enterBoat",label:"\u4E0A\u8239"}:null}interact(){if(this.dialogue.open){this.dialogue.advance();return}let t=this.interactTarget;t&&(this.sound.click(),t.type==="npc"?t.npc.talk(this,t.npc):t.type==="enterBoat"?this.enterBoat():t.type==="exitBoat"&&this.exitBoat())}enterBoat(){this.fishing.equipped&&this.selectSlot(0),this.player.boat=this.boat,this.player.swimming=!1,this.ui.toast("W/S \u524D\u9032\u5F8C\u9000\u30FBA/D \u8F49\u5411\u30FBShift \u5168\u901F\u30FBE \u4E0B\u8239","#bfe9ff")}exitBoat(){let t=this.boat,e=null,n=1/0;for(let s=2.5;s<=7;s+=1.5){for(let r=0;r<16;r++){let o=r/16*Math.PI*2,a=t.pos.x+Math.cos(o)*s,l=t.pos.z+Math.sin(o)*s;if(Ri(a,l,3)>.2){let h=s;h<n&&(n=h,e={x:a,z:l})}}if(e)break}if(this.player.boat=null,this.sound.setEngine(!1,0),e)this.player.teleport(e.x,e.z,this.player.yaw);else{let s=new S(t.forward().z,0,-t.forward().x).multiplyScalar(2.2);this.player.pos.set(t.pos.x+s.x,-1.3,t.pos.z+s.z),this.player.vel.set(0,0,0)}}spawnBoatAt(t){let e=this.world.boatSpawns[t];this.player.boat&&this.exitBoat(),this.boat.spawn(e.x,e.z,e.heading)}onDialogue(t,e){if(e&&(e.talking=t),document.body.classList.toggle("in-dialogue",t),t&&e){let n=this.player.pos.clone().lerp(e.pos,.5).add(new S(0,2.3,0));this.cam.override={pos:n,dist:9},this.player.yaw=Math.atan2(e.pos.x-this.player.pos.x,e.pos.z-this.player.pos.z)}else this.cam.override=null}worldToScreen(t){let e=t.clone().project(this.camera);return{x:(e.x*.5+.5)*window.innerWidth,y:(-e.y*.5+.5)*window.innerHeight,behind:e.z>1}}updateZone(t){if(this.zoneTimer-=t,this.zoneTimer>0)return;this.zoneTimer=.4;let e=dh(this.player.pos.x,this.player.pos.z)||Cv;if(e.id!==this.zoneKey){let n=this.zoneKey===null;this.zoneKey=e.id,this.started&&(this.ui.showZone(e.name,e.subtitle),this.sound.chime(),(!n||e.id!=="ocean")&&this.quests.onEvent("arrive",{island:e.id}))}}updateWaypoint(){let t=this.quests.currentTarget();!t&&this.quests.canStart("tutorial")&&(t="tutor");let e=t&&this.npcs.find(g=>g.id===t);if(!e||this.dialogue.open){this.ui.waypoint(!1);return}let n=e.pos.distanceTo(this.player.pos);if(n<8){this.ui.waypoint(!1);return}let s=this.worldToScreen(e.pos.clone().add(new S(0,5.6,0))),r=window.innerWidth,o=window.innerHeight,a=110,l=120,c=160,h=(l+(o-c))/2,u=(o-c-l)/2,f=r/2-a,{x:d,y:m}=s,x=null;if(s.behind||d<a||d>r-a||m<l||m>o-c){let g=d-r/2,p=m-h;s.behind&&(g=-g,p=-p);let y=Math.min(f/Math.abs(g||.001),u/Math.abs(p||.001));d=r/2+g*y,m=h+p*y,x=Math.atan2(p,g)+Math.PI/2}this.ui.waypoint(!0,d,m,`${e.name}\u30FB${Math.round(n)}m`,x)}loop(){requestAnimationFrame(this.loop);let t=Math.min(.05,this.clock.getDelta());this.time+=t;let e=this.time,n=!this.started||this.dialogue.open||this.ui.anyPanelOpen();this.sky.update(t,this.player.pos,e);let s=this.sky.night;this.boat.update(t,e,n?{}:this.input,this.player.boat===this.boat),this.player.update(t,e,this.input,n),this.input.jump=!1,this.fishing.update(t,e);for(let o of this.npcs)o.update(t,e,this.player.pos);this.dialogue.update(t),this.started||(this.cam.yaw+=t*.05),this.cam.update(t,this.player.pos.clone().add(new S(0,2.2,0))),this.water.update(e,this.camera,this.sky),this.fx.update(t),this.ambient.update(t,e,this.player.pos,s);for(let o of ks)o(t,e,s);for(let o of Lr)o.light.intensity=o.base*s*(o.flicker?.75+.25*Math.sin(e*13)*Math.sin(e*7.3):1)+(o.flicker?o.base*.25:0);K.window.emissiveIntensity=s*1.6,K.lampGlass.emissiveIntensity=.2+s*3,this.updateZone(t),this.ui.setClock(this.sky.clockString(),this.sky.isNight()),this.interactTarget=this.started&&!this.dialogue.open?this.findInteract():null,this.ui.setInteract(this.interactTarget?this.interactTarget.label:null),this.updateWaypoint();let r=Ve(this.player.pos.x,this.player.pos.z)>-6;this.sound.update(t,s,r),this.saveTimer+=t,this.saveTimer>10&&this.started&&(this.saveTimer=0,this.save()),this.renderer.render(this.scene,this.camera)}};window.addEventListener("DOMContentLoaded",()=>{try{window.game=new Nh}catch(i){console.error(i),document.body.insertAdjacentHTML("beforeend",`<div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#111;color:#fff;font-size:18px;z-index:99;padding:40px;text-align:center">\u904A\u6232\u8F09\u5165\u5931\u6557\uFF1A${i.message}<br>\u8ACB\u4F7F\u7528\u652F\u63F4 WebGL \u7684\u700F\u89BD\u5668\uFF08Chrome / Edge / Firefox\uFF09\u3002</div>`)}})});Iv();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
