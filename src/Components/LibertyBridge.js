import React from "react";

const Home = () => {
  (function() {
    if (document.location.href.endsWith('/')) {
      window.location = document.location.href.slice(0, document.location.href.length - 1)
    }
  }())
  return (
    <div className="container">
      <h1 className="center">Liberty Bridge Analysis</h1>
      <div id="text">
        <p>
          This bridge is an example of a relatively new structure type: the ring
          cable bridge, invented by Jörg Schlaich, the former head of Schlaich
          Bergermann und Partner of Stuttgart, Germany.
        </p>
        <p>
          Put simply, the bridge is a highly curved suspension bridge with the
          cables attached to only one side of deck.
        </p>
        <p>
          The steel suspension cable is hung from the tops of two steel towers
          (each 100ft tall) and anchored in the ground at the ends of the
          bridge.
        </p>
        <p>
          The 12ft wide concrete deck is 450ft long from end to end (measured
          along the curve) and is suspended 30ft in the air. As we will soon
          see, it is important to note that the deck is also anchored to the
          ground at the ends.
        </p>
        <p>
          Below the deck, one sees a 4ft deep steel truss. The bottom chord of
          the truss is another cable, called the ring cable. The ring cable is
          also anchored to the ground at the ends.
        </p>
        <img
          src="https://ik.imagekit.io/p05uzwuasop/4076014_orig_3rc0B8bty.jpg?updatedAt=1637160523400"
          alt="bridge with labels"
        />
        <h2>Structural Behavior</h2>
        <p>
          A good way to understand the structure is to first consider a typical
          cross section, then zoom out to consider the global behavior.
        </p>
        <h3>Forces in the Cross Section</h3>
        <p>
          Note that this is a section through the curved structure. As a result,
          I'll refer to forces acting vertically (up and down) and radially
          (left and right in our section).
        </p>
        <p>
          First of all, we can see that the weight (W) is balanced by a vertical
          force in the hanger cable (P.hc.vert). Because the hanger cable is
          inclined, the vertical force in the hanger cable creates a radial
          force as well (P.hc.rad).
        </p>
        <p>
          Since W and P.hc.vert are separated, W would tend to rotate the deck
          about the base of the hanger cable. This tendency is counterbalanced
          by a radial force in the ring cable (P.rc.rad).
        </p>
        <p>
          As a function of the geometry of the cross section, P.rc.rad is larger
          than P.hc.rad. This would tend to translate the deck radially inward.
          This tendency is countered by a radial force in the deck (P.deck.rad).
        </p>
        <img
          src="https://ik.imagekit.io/p05uzwuasop/4893535_orig_7nNEvUrPx.jpg?updatedAt=1637160532268"
          alt="cross section schematic with labels"
        />
        <p>W = weight</p>
        <p>P.hc = force in hanger cable</p>
        <p>P.hc.vert = vertical component of P.hc</p>
        <p>P.hc.rad = radial component of P.hc</p>
        <p>P.rc = force in ring cable</p>
        <p>P.rc.rad = radial component of P.rc</p>
        <p>P.deck = axial force in deck</p>
        <p>P.deck.rad = radial component of P.deck</p>
        <h2>Global Behavior</h2>
        <p>
          Picture a very large bird sitting on a wire. The wire makes a "V" with
          the bird in the middle. The wire is in tension and the deviation (the
          bottom of the V) creates an upward force equal to the weight of the
          bird.
        </p>
        <p>
          This is exactly what happens at the top of the hanger cable, where it
          meets the main suspension cable. Each hanger force (P.hc) plays the
          role of the bird and creates a slight deviation in the suspension
          cable. It is the sum of all these little deviations that gives us the
          familiar suspension cable shape.
        </p>
        <p>
          We see the same effect in the ring cable. At each truss panel, the
          rotation of the deck is arrested by a horizontal force (P.rc.rad).
          This force is the result of deviating the ring cable into a suspension
          shape -- but this time in the horizontal plane.
        </p>
        <p>
          If we push our imagination a bit further, we can see that the also
          familiar arch shape is the suspension shape turned upside down. But
          this time instead of deviating tension, we are deviating compression.
          Recall that the tendency of the deck to translate radially was
          prevented by a radial force in the deck (P.deck.rad). This force is
          the result of deviating the deck into an arch shape -- an arch in the
          horizontal plane.
        </p>
        <p>
          Now we can see that the system doesn't simply support a curved
          walkway. The curved walkway is an integral part of the system.
        </p>
        <h3>Suspension Cable Geometry</h3>
        <p>
          A normal suspension bridge features a straight deck and two suspension
          cables. Each cable is above an edge of the deck and exists solely in
          the vertical plane. The proper geometry is exceedingly simple to
          calculate, with the lesson taking up only a page or two in a standard
          textbook.
        </p>
        <p>
          The three dimensional geometry of the suspension cable for the Liberty
          Bridge is completely different and is best found through
          experimentation. In the old days, the geometry of a complex tensile
          structure was found using various physical techniques. The
          practitioners were brilliant. See the works of Gaudi in the late
          1800's and Frei Otto in the 1960's.
        </p>
        <p>
          These days, as with so many other things, form finding is done with
          the help of a computer. Given the right software and a properly
          trained engineer, amazing things are possible at a fraction of the
          cost and much higher accuracies.
        </p>
      </div>
    </div>
  );
};

export default Home;
